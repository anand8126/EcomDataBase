const mongoose=require('mongoose');

const productSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true,
        },
        description:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        }
    },
    {timestamps:true},
);


const products=mongoose.model("products", productSchema);
module.exports=products;