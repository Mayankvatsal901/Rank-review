const Review = require("../modles/review");

const ReviewStore = async (req, res) => {

    try {

        const {
            businessId,
            userName,
            rating,
            originalReview,
            optimizedReview
        } = req.body;

        if (
            !businessId ||
            !userName ||
            !rating ||
            !originalReview
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
            optimizedReview

        });

        return res.status(200).json({

            success: true,
            message: "Review stored successfully",
            Reviewinformation

        });

    } catch (error) {

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

module.exports = {

    ReviewStore,
    GetReviewbyId

};