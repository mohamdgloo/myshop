import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    subcategory_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'SubCategory'
        },
    textile:{
        type:String,
        required: true,   
    },
    description:{
        type:String,
        required: true, 
    },
    gender:{
        type:String,
        required: true, 
    },
    stationary:{
        type:String,
        required: true, 
    },
    thickness:{
        type:String,
        required: true, 
    },
     price:{
        type:String,
        required: true,
        default:0 
    },
    width:{
        type:Number,
        required: true, 
    },
    
},{
   timestamps:true 
})
const Product=mongoose.model('Product',productSchema)

export default Product