const mongoose=require("mongoose")
const ReviewSchema = new mongoose.Schema({

   businessId:{
      type:String,
      required:true
   },

   userName:{
      type:String,
      required:true
   },

   rating:{
      type:Number,
      required:true
   },

   originalReview:{
      type:String,
      required:true
   },

   optimizedReview:{
      type:String
   },
   sentiments:{
    type:String,
    enum: ["positive", "negative", "mixed"],
    required:true
   },
   location:{
    type:String
   }

},{
   timestamps:true
})

module.exports=mongoose.model("Review",ReviewSchema)