const express=require("express")
const router=express.Router();
const{RegisterBusiness,UpdateBusiness,loginBusiness}=require('../controllers/businesscontroller')
const authBusiness=require('../config/authbusiness')


router.post("/register",RegisterBusiness);
router.post("/update",authBusiness,UpdateBusiness)
router.post("/login",loginBusiness)

module.exports=router