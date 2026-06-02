const crypto = require("crypto");

const razorpay =
require("../services/razorpayService");

const Business =
require("../models/business");

const {
    getExpiryDate
} =
require("../services/subscriptionService");



const createOrder = async (req, res) => {

    console.log("KEY ID:", process.env.RAZORPAY_KEY_ID);
console.log("KEY SECRET:", process.env.RAZORPAY_KEY_SECRET);

    try {

        const { plan } = req.body;

        let amount;

        if (plan === "starter") {

            amount = 1199 * 100;

        }
        else if (plan === "pro") {

            amount = 2499 * 100;

        }
        else {

            return res.status(400).json({
                success: false,
                message: "Invalid plan selected"
            });

        }

        const order =
        await razorpay.orders.create({

            amount,

            currency: "INR",

            receipt:
            `receipt_${Date.now()}`

        });

        res.json({

            success: true,

            order

        });

    }
    catch (error) {
        console.log(error)

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const verifyPayment = async (req, res) => {

    try {

        console.log("\n========== VERIFY HIT ==========");

        console.log("BODY:", req.body);

        console.log("BUSINESS:", req.business);

        const {

            razorpay_order_id,

            razorpay_payment_id,

            razorpay_signature,

            plan

        } = req.body;

        console.log("ORDER ID:", razorpay_order_id);

        console.log("PAYMENT ID:", razorpay_payment_id);

        console.log("SIGNATURE:", razorpay_signature);

        console.log("PLAN:", plan);



        const generatedSignature = crypto
            .createHmac(
                "sha256",
                process.env.RAZORPAY_KEY_SECRET
            )
            .update(
                razorpay_order_id +
                "|" +
                razorpay_payment_id
            )
            .digest("hex");



        console.log(
            "GENERATED SIGNATURE:",
            generatedSignature
        );

        console.log(
            "RECEIVED SIGNATURE:",
            razorpay_signature
        );

        console.log(
            "MATCH:",
            generatedSignature === razorpay_signature
        );



        if (
            generatedSignature !==
            razorpay_signature
        ) {

            console.log(
                "❌ SIGNATURE VERIFICATION FAILED"
            );

            return res.status(400).json({

                success: false,

                message:
                "Payment verification failed",

                generatedSignature,

                receivedSignature:
                razorpay_signature

            });

        }

        console.log(
            "✅ SIGNATURE VERIFIED"
        );



        console.log(
            "Finding business with ID:",
            req.business.id
        );

        const business =
        await Business.findById(
            req.business.id
        );

        console.log(
            "BUSINESS FOUND:",
            business
        );



        if (!business) {

            console.log(
                "❌ BUSINESS NOT FOUND"
            );

            return res.status(404).json({

                success: false,

                message:
                "Business not found"

            });

        }



        business.plan = plan;

        business.subscriptionStatus =
        "active";

        business.planStartedAt =
        new Date();

        business.planExpiresAt =
        getExpiryDate();

        business.lastPaymentId =
        razorpay_payment_id;



        console.log(
            "Saving business..."
        );

        await business.save();

        console.log(
            "✅ BUSINESS SAVED"
        );

        console.log(
            "UPDATED PLAN:",
            business.plan
        );



        return res.status(200).json({

            success: true,

            message:
            "Payment verified successfully",

            plan:
            business.plan

        });

    }

    catch (error) {

        console.log(
            "❌ VERIFY ERROR"
        );

        console.error(error);

        return res.status(500).json({

            success: false,

            message:
            error.message

        });

    }

};
const getCurrentPlan = async (req, res) => {

    try {

        const business =
        await Business.findById(
            req.business.id
        );

        if (!business) {

            return res.status(404).json({

                success: false,

                message:
                "Business not found"

            });

        }

        res.json({

            success: true,

            plan:
            business.plan,

            subscriptionStatus:
            business.subscriptionStatus,

            planStartedAt:
            business.planStartedAt,

            planExpiresAt:
            business.planExpiresAt

        });

    }
    catch (error) {

        res.status(500).json({

            success: false,

            message:
            error.message

        });

    }

};

const changePlan = async (req, res) => {

    try {

        const { plan } = req.body;

        if (
            plan !== "free" &&
            plan !== "starter" &&
            plan !== "pro"
        ) {

            return res.status(400).json({

                success: false,
                message: "Invalid Plan"

            });

        }

        const business =
        await Business.findById(
            req.business.id
        );

        if (!business) {

            return res.status(404).json({

                success: false,
                message: "Business Not Found"

            });

        }

        business.plan = plan;

        if (plan === "free") {

            business.subscriptionStatus =
            "inactive";

            business.planStartDate = null;

            business.planExpiryDate = null;

        }

        else {

            business.subscriptionStatus =
            "active";

        }

        await business.save();

        return res.status(200).json({

            success: true,

            message:
            "Plan Updated Successfully",

            plan:
            business.plan

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message:
            error.message

        });

    }

};


module.exports={
    createOrder,

    verifyPayment,

    getCurrentPlan,
    changePlan,
}