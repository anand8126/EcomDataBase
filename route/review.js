const express=require('express');

const Review = require('../model/review.js');
const route=express.Router();


route.post('/review', async(req, res) => {
    try{

        const reviewData= new Review({    
            rating:req.body.rating,
            comment:req.body.comment,
            createdAt:req.body.createdAt,
            userId:req.body.userId,
            productId:req.body.productId
        });

        const orderItemSave=await reviewData.save();

        res.status(200).json({message:"OrderItem is created!"});

    }catch(err){
        res.status(500).json({message:err});
    }
});


route.get('/review', async(req, res) =>{
    const findData=await Review.find().populate('userId').populate('productId');
    res.status(200).json(findData);
})

module.exports=route;