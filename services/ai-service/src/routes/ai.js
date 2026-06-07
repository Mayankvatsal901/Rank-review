const express = require("express");

const router = express.Router();

const {GenerateReview} = require("../controllers/aicontroller");
console.log("AI ROUTES LOADED");

router.post("/generate", GenerateReview);

module.exports = router;