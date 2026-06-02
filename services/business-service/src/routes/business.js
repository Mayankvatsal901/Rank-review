const express=require("express")
const router=express.Router();
const{RegisterBusiness,UpdateBusiness,loginBusiness,getfeature,CheckBusinessAuthorize,GetBusinessesByLocation,GoogleCallback}=require('../controllers/businesscontroller')
const authBusiness=require('../config/authbusiness')
const passport =require("passport");


router.post("/register",RegisterBusiness);
router.put("/update",authBusiness,UpdateBusiness)
router.post("/login",loginBusiness)
router.get("/getfeature/:slug",getfeature)
router.get("/me",authBusiness,CheckBusinessAuthorize)
router.get(
    "/location/:location",
    GetBusinessesByLocation
);
router.get(

"/google",

passport.authenticate(

"google",

{
scope:["profile","email"]
}

)

);

router.get(

"/google/callback",

passport.authenticate(

"google",

{
session:false
}

),

GoogleCallback

);

module.exports=router