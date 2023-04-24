import mongoose from "mongoose";

const practicalSchema=mongoose.Schema({
     practical:{
        type:String,
        required: true, 
    },
},{
   timestamps:true 
})
const Practical=mongoose.model('Practical',practicalSchema)

export default Practical