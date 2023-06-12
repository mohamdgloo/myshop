import mongoose from "mongoose";

const stockSchema=mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        //required:true,
        ref:'Product'
        },
     quantity:{
        type:Number,
        required: true, 
    },
},{
   timestamps:true 
})
const Stock=mongoose.model('Stock',stockSchema)

export default Stock