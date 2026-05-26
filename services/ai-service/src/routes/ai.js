const express = require("express");

const router = express.Router();

const {GenerateReview} = require("../controllers/aicontroller");

router.post("/generate", GenerateReview);

module.exports = router;