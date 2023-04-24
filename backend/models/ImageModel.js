import mongoose from "mongoose";

const imageSchema=mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        //required:true,
        ref:'Product'
        },
     image:{
       // type:String,
       // required: true, 
       data:Buffer,
       contentType:String
    },
},{
   timestamps:true 
})
const Image=mongoose.model('Image',imageSchema)

export default Image