const express=require('express');
const prdouctCategory = require('../model/ProductCategory.js');



const route=express.Router();


route.post('/productCategory', async(req, res) => {
    try{

        const categoryData= new prdouctCategory({    
            categoryId:req.body.categoryId,
            productId:req.body.productId
        });

        const productSave=await categoryData.save();

        res.status(200).json({message:"OrderItem is created!"});

    }catch(err){
        res.status(500).json({message:err});
    }
});


route.get('/productCategory', async(req, res) =>{
    const findData=await prdouctCategory.find().populate('categoryId').populate('productId');
    res.status(200).json(findData);
})

module.exports=route;