const express = require("express");
const User = require("../model/user.js");
const { json } = require("body-parser");
const route = express.Router();

route.post("/user", async (req, res) => {
  try {
    const UserData = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    if(!UserData){
        return res.status(404).json("Already Exits in DB!")
    }

    const DataSave = await UserData.save();

    res.status(200).json({ message: "User is created!", data: DataSave });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});


// get Mtehods

route.get('/user', async(req, res)=>{
    try{
        const UserData=await User.find({});
        res.status(200).json(UserData);
    }
    catch(err){
        res.status(500).json({message:err});
    }
})


route.get("/user/:id", async(req, res) => {
    const id =req.params.id;

    try{
        const UserData= await User.findById(id);
        res.status(200).json(UserData);
    }
    catch(err){
        res.status(500).json({message:err});
    }
})


route.delete("/user/:id", async(req, res) =>{
    const id= req.params.id;
    
   try{
    const dataDeleted=await User.findByIdAndDelete(id);
    if(!dataDeleted){
        res.status(404).json("Data already deleted!")
    }
    res.status(200).json("User Data Deleted!");
   }
   catch(err){
    res.status(500).json({message:err});
   }
});



route.put("/user/:id", async(req, res) => {
    const id=req.params.id;

    const updateDate=await User.findByIdAndUpdate(id, req.body, {new:true});

    res.status(200).json({message:"User data Updated!", data:updateDate});
})

module.exports = route;
