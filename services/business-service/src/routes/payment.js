const express = require("express");

const router = express.Router();

const authBusiness=require('../config/authbusiness');

const {

    createOrder,

    verifyPayment,

    getCurrentPlan,
    changePlan

}
=
require("../controllers/paymentController");

router.post(
    "/create-order",
    authBusiness,
    createOrder
);

router.post(
    "/verify",
    authBusiness,
    verifyPayment
);

router.get(
    "/current-plan",
    authBusiness,
    getCurrentPlan
);
router.post(
    "/change-plan",
    authBusiness,
    changePlan
);

module.exports = router;