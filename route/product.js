const express=require('express');
const products = require('../model/product.js');
const route=express.Router();

route.post("/products", async(req, res) => {
    try{
        const productData=new products({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
        });
    
        const saveData=await productData.save();
    
        res.status(200).json({message:"product Item created!", data:saveData});
    }
    catch(err){
        res.status(500).json({message:err});
    }
})

route.get("/products", async(req, res) => {
    try{
        const productData=await products.find();
        res.status(200).json({productData});
    }
    catch(err){
        res.status(500).json({message:err});
    }
})

route.get("/products/:id", async(req, res) => {
    const id=req.params.id;
    try{
        
        const productData=await products.findById(id);
        res.status(200).json(productData);
    }
    catch(err){
        res.status(500).json(err);
    }
})

route.delete("/products/:id", async(req, res) => {
    const id=req.params.id;
    try{
        
        const deleteData=await products.findByIdAndDelete(id);
        res.status(200).json("data is deleted!")
    }
    catch(err){
        res.status(500).json(err);
    }
})

route.put("/products/:id", async(req, res) => {
    const id=req.params.id;
    try{
        const updateData=await products.findByIdAndUpdate(id, req.body);
        res.status(200).json({message:"product iteam is update", data:updateData});
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports=route;