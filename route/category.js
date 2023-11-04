const express=require('express');
const Category = require('../model/category.js');
const route=express.Router();


route.post('/category', async(req, res) => {
    try{

        const categoryData= new Category({    
            name:req.body.name,
            
        });

        const saveData=await categoryData.save();

        res.status(200).json({message:"Category is created!"});

    }catch(err){
        res.status(500).json({message:err});
    }
});


route.get('/category', async(req, res) =>{
    const findData=await Category.find()
    res.status(200).json(findData);
})

module.exports=route;