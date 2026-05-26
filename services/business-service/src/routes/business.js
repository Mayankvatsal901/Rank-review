const express=require("express")
const router=express.Router();
const{RegisterBusiness,UpdateBusiness,loginBusiness,getfeature}=require('../controllers/businesscontroller')
const authBusiness=require('../config/authbusiness')


router.post("/register",RegisterBusiness);
router.post("/update",authBusiness,UpdateBusiness)
router.post("/login",loginBusiness)
router.get("/getfeature/:slug",getfeature)

module.exports=router