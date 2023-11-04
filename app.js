const express=require("express");
const mongoose=require('mongoose');
const userRoute=require('./route/user');
const productRoute=require('./route/product');
const OrderRoute=require('./route/order');
const reviewRoute=require('./route/review');
const categoryRoutr=require('./route/category');
const productCategoryRoute=require("./route/ProductCategory")
const app=express();
app.use(express.json());


// create here All routes 


app.use('/api', userRoute);
app.use('/api', productRoute);
app.use('/api', OrderRoute);
app.use('/api', reviewRoute);
app.use('/api', categoryRoutr);
app.use('/api', productCategoryRoute);



const URL="mongodb://localhost:27017/ApKart"
const DBConnection = async() =>{
    try{
        await mongoose.connect(URL);
        console.log(`Database Connected!`);
    }
    catch(err){
        console.log("DB is not Connected!",err);
    }
}


const PORT=4000;
app.listen(PORT || 3000, () => {
    console.log(`Server is Connected with Port http://localhost:${PORT}`);
    DBConnection();
})

