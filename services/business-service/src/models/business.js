const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true,
        unique: true
    },

    location: {
        type: String,
        required: true
    },

    googleLink: {
        type: String,
        required: true
    },

    email: {
        type: String
    },
    password:{
   type:String,
   required:true,
   }

}, {
    timestamps: true
});

module.exports = mongoose.model("Business", BusinessSchema);