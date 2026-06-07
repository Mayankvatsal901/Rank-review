const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    slug:{
        type:String,
        
        
    },

    location:{
        type:String,
        
    },

    googleLink:{
        type:String,
        
    },

    email:{
        type:String
    },

    password:{
        type:String,
        
    },

    plan:{
        type:String,
        enum:["free","starter","pro"],
        default:"free"
    },

    subscriptionStatus:{
        type:String,
        enum:["active","inactive"],
        default:"inactive"
    },
    googleId:{
    type:String
    },

    profilePic:{
    type:String
     },

    authProvider:{
    type:String,
    enum:["local","google"],
    default:"local"
     },

    planStartedAt:Date,

    planExpiresAt:Date,

    razorpayCustomerId:String,

    lastPaymentId:String

},{
    timestamps:true
});

module.exports = mongoose.model("Business", BusinessSchema);