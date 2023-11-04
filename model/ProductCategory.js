const mongoose=require('mongoose');

const productCategorySchema=mongoose.Schema({
    
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },

    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
        
    }

},{timestamps:true});


const prdouctCategory=mongoose.model('prdouctCategory', productCategorySchema);

module.exports=prdouctCategory;