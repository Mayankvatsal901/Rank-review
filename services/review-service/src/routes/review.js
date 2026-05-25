const express=require('express')
const{ReviewStore,GetReviewbyId}=require("../controllers/review")

const router=express.Router()

router.post("/storereview",ReviewStore)
router.get("/getreview/:id",GetReviewbyId)

module.exports=router
