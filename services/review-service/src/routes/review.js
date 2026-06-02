const express=require('express')
const{ReviewStore,GetReviewbyId,GetAnalytics,GetLocationWiseLeaderboard}=require("../controllers/review")

const router=express.Router()

router.post("/storereview",ReviewStore)
router.get("/getreview/:id",GetReviewbyId)
router.get("/analytics/:id",GetAnalytics)
router.get("/locationwise/:location",GetLocationWiseLeaderboard)
module.exports=router
