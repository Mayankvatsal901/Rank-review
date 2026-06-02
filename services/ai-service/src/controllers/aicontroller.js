const {generateReview} = require("../service/huggingface");

const GenerateReview = async (req, res) => {
       console.log("GENERATE HIT");

    try {

        const {
            review,
            location,
            sentiment
        } = req.body;

        if (!review || !location || !sentiment) {

            return res.status(400).json({
                success: false,
                message: "Give complete information"
            });
        }

        const optimizedReview =
            await generateReview(
                review,
                location,
                sentiment
            );
            console.log(optimizedReview)

        return res.status(200).json({
            success: true,
            optimizedReview
        });
        

    } catch (error) {

    console.log(error.response?.data || error.message);

   res.status(500).json({
      success:false,
      message:error.message
   })
    }
};

module.exports = {
    GenerateReview
};