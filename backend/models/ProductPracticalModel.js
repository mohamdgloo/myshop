import mongoose from "mongoose";

const productpracticalSchema=mongoose.Schema({
    practical_id:{
        type:mongoose.Schema.Types.ObjectId,
       // required:true,
        ref:'Practical'
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
       // required:true,
        ref:'Product'
        },
},{
   timestamps:true 
})
const ProductPractical=mongoose.model('ProductPractical',productpracticalSchema)

export default ProductPractical