import mongoose from "mongoose";

const basketSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        //required:true,
        ref:'User'
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        //required:true,
        ref:'Product'
        },
     qty:{
        type:Number,
        required: true, 
    },
},{
   timestamps:true 
})
const Basket=mongoose.model('Basket',basketSchema)

export default Basket