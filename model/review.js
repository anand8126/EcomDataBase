const mongoose=require('mongoose');

const reviewSchema=mongoose.Schema({
    rating:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }




},{timestamps:true});


const Review=mongoose.model('Review', reviewSchema);

module.exports=Review;