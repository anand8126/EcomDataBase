const express=require('express');
const {Order, orderItem} = require('../model/order.js');
const { find } = require('../model/user.js');
const route=express.Router();


// All order Routes

route.post("/order", async(req, res) => {
    
    const orderData=new Order({
        orderDate: req.body.orderDate,
        totalPrice: req.body.totalPrice,
        userId: req.body.userId,
    });

    const saveData=await orderData.save();
    res.status(200).json({mesaage:"order item is created!"})
});


route.get('/order', async(req, res) => {
    const orderData=await Order.find().populate('userId');
    res.status(200).json(orderData);
});


route.delete('/order/:id', async(req, res) => {

    const id=req.params.id;

    try{
        const DeleteData=await Order.findByIdAndDelete(id);
        res.status(200).json({message:"Order data in Deleted!"})
    }
    catch(err){
        res.status(500).json({message:err})
    }

});


route.put("/order/:id", async(req, res) => {
    try{
        const id=req.params.id;
        const UpdatedData=await Order.findByIdAndUpdate(id, req.body);

        res.status(200).json({message:"Order item updated!"})
    }
    catch(err){
        res.status(500).json({message:err});
    }
})


// all route of OrderItem

route.post('/order/orderitem/', async(req, res) => {
    try{

        const orderitemData= new orderItem({    
            quantity:req.body.quantity,
            price:req.body.price,
            subtotal:req.body.subtotal,
            orderId:req.body.orderId,
            productId:req.body.productId
        });

        const orderItemSave=await orderitemData.save();

        res.status(200).json({message:"OrderItem is created!"});

    }catch(err){
        res.status(500).json({message:err});
    }
});


route.get('/order/orderitem/', async(req, res) =>{
    const findData=await orderItem.find().populate('orderId').populate('productId');
    res.status(200).json(findData);
})

module.exports=route;