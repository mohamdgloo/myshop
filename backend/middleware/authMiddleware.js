import asyncHandler from "express-async-handler";
import { secretKey } from "../routes/config.js";
import jwt from 'jsonwebtoken';
import User from "../models/UserModel.js";


const protect=asyncHandler( async(req,res,next)=>{
    let accessToken
    if(req.headers.authorization&& req.headers.authorization.startsWith('Bearer')){
        console.log("Authorization header:", req.headers.authorization);  
       try {
       // want the token
       accessToken =req.headers.authorization.split(' ')[1]
       console.log(req.headers)
       console.log("accessToken:", accessToken);
        const decoded=jwt.verify(accessToken,secretKey);
        console.log("Decoded:", decoded);
        req.user=await User.findById(decoded.id).select('-password');
        console.log("id auth:",req.user.id);
        console.log("user auth:",req.user);
        next() ;
       } catch (error) {  
        console.error(error);
        res.status(401)  
        throw new Error('not autorized ,token failed')
       } 
    }
    if(!accessToken){
        res.status(401)
        throw new Error('not autorizes,no token')
    }  
})
export default protect 
