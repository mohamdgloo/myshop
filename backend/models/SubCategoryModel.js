import mongoose from "mongoose";

const subcategorySchema=mongoose.Schema({
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
       //no need to required
        ref:'Category',
        },
     subcategory:{
        type:String,
        required: true, 
    },
},{
   timestamps:true 
})
const SubCategory=mongoose.model('SubCategory',subcategorySchema)

export default SubCategory