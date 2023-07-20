import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required: true,   
    },
    lastName:{
        type:String,
        required: true,   
    },
    email:{
        type:String,
        required: true,
        unique:true   
    },
    password:{
        type:String,
        required: true, 
    },
    phone:{
        type:String,
        required: true, 
    },
    isAdmin:{
        type:Boolean,
        required: true, 
        default:false
    },
},{
   timestamps:true 
})

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
      return next();
    }
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);
      user.password = hashedPassword;
      next();
    } catch (error) {
      return next(error);
    }
  });
const User=mongoose.model('User',userSchema)

export default User
 