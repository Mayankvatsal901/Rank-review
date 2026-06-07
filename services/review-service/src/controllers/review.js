const Review = require("../modles/review");
const axios = require("axios");

const ReviewStore = async (req, res) => {

    try {

        const {
            businessId,
            userName,
            rating,
            originalReview,
            optimizedReview,
            sentiments,
            location
        } = req.body;

        if (
            !businessId ||
            !userName ||
            !rating ||
            !originalReview||
            !sentiments||
            !location
        ) {

            return res.status(400).json({
                success: false,
                message: "Give full detail"
            });
        }

        const Reviewinformation = await Review.create({

            businessId,
            userName,
            rating,
            originalReview,
            optimizedReview,
            sentiments,
            location,

        });

        return res.status(200).json({

            success: true,
            message: "Review stored successfully",
            Reviewinformation

        });

    } catch (error) {
        console.log(error.message)

        return res.status(500).json({

            success: false,
            message: error.message

        });
    }
};

const GetReviewbyId = async (req, res) => {

    try {

        const { id } = req.params;

        const Information = await Review.find({

            businessId: id

        });

        if (!Information || Information.length === 0) {

            return res.status(404).json({

                success: false,
                message: "No reviews for this organization"

            });
        }

        return res.status(200).json({

            success: true,
            Information

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });
    }
};
const GetAnalytics = async (req, res) => {

    try {

        const { id } = req.params;

        const reviews = await Review.find({
            businessId: id
        });

        if (!reviews || reviews.length === 0) {

            return res.status(404).json({

                success: false,
                message: "No reviews for this business"

            });

        }

        // TOTAL REVIEWS

        const totalReviews = reviews.length;

        // AVERAGE RATING

        let totalRating = 0;

        reviews.forEach((item) => {

            totalRating += item.rating;

        });

        const averageRating =
            (totalRating / totalReviews).toFixed(1);

        // RATING DISTRIBUTION

        const ratingDistribution = {

            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0

        };

        reviews.forEach((item) => {

            ratingDistribution[item.rating]++;

        });

        // MONTHLY REVIEWS
        
         const sentiments = {
         positive:0,
         neutral:0,
         negative:0
}
         reviews.forEach((item)=>{

   sentiments[item.sentiments]++;

})
        const monthlyReviews = {};

        reviews.forEach((item) => {

            const month = new Date(item.createdAt)
                .toLocaleString("default", {
                    month: "short"
                });

            if (monthlyReviews[month]) {

                monthlyReviews[month]++;

            } else {

                monthlyReviews[month] = 1;

            }

        });

        return res.status(200).json({

            success: true,

            analytics: {

                totalReviews,

                averageRating,

                ratingDistribution,

                monthlyReviews,
                sentiments,

            }

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};





const GetLocationWiseLeaderboard = async (req, res) => {

    console.log("LOCATION LEADERBOARD HIT");

    try {

        const { location } = req.params;

        const response = await axios.get(
            `http://localhost:5000/api/business/location/${location}`
        );

        const businesses =
            response.data.businesses;

        if (!businesses || businesses.length === 0) {

            return res.status(404).json({

                success: false,

                message: "No businesses found"

            });

        }

        const businessMap = {};

        businesses.forEach((business) => {

            businessMap[
                business._id.toString()
            ] = business;

        });

        const businessIds = businesses.map(
            business => business._id.toString()
        );

        console.log("BUSINESS IDS:", businessIds);

        const leaderboard = await Review.aggregate([

            {
                $match: {
                    businessId: {
                        $in: businessIds
                    }
                }
            },

            {
                $group: {

                    _id: "$businessId",

                    averageRating: {
                        $avg: "$rating"
                    },

                    totalReviews: {
                        $sum: 1
                    }

                }
            },

            {
                $sort: {
                    averageRating: -1
                }
            }

        ]);

        console.log("LEADERBOARD:", leaderboard);

        const result = leaderboard.map((item) => {

            const business =
                businessMap[
                    item._id.toString()
                ];

            return {

                businessId:
                    business?._id,

                businessName:
                    business?.name,

                location:
                    business?.location,

                averageRating:
                    Number(
                        item.averageRating.toFixed(1)
                    ),

                totalReviews:
                    item.totalReviews

            };

        });

        res.status(200).json({

            success: true,

            leaderboard: result

        });

    }
    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};






module.exports = {

    ReviewStore,
    GetReviewbyId,
    GetAnalytics,
    GetLocationWiseLeaderboard

};