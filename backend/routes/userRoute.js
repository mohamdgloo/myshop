import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/UserModel.js'
import bcrypt from 'bcryptjs'
import pkg from 'jsonwebtoken';
import {secretKey}  from './config.js';
import { protect } from '../middleware/authMiddleware.js';
 const {sign}=pkg
//create users
const router = express.Router()
router.post(
  '/createusers',
  asyncHandler(async (req, res) => { 
    const {password}=req.body;
     // Check if the user with the same email already exists
     const existingUser = await User.findOne({ email });
     if (existingUser) {
       return res.json({ error: 'User already exists' });
     }
      bcrypt.hash(password,10).then((hash)=>{

        const users = new User({
          firstName:req.body.firstName,
          lastName:req.body.lastName,
          email:req.body.email,
          password:hash,
          phone:req.body.phone,
          isAdmin:req.body.isAdmin, 
        })
       // save users in database
       // users.save().then(val=>{
        //  res.json({msg:"add user",val})
      //  })
      users.save().then((val) => {
        // Generate token for the new user
        const accessToken = sign({ email: val.email, id: val._id }, "importantsecret");
        res.json({ msg: "add user", val, accessToken });
      });
      })
      })
     
      )

      //login

      router.post('/login', async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
      
        if (!user) {
          return res.json({ error: "User doesn't exist" });
        }
      
        bcrypt.compare(password, user.password).then((match) => {
          if (!match) {
            return res.json({ error: "Wrong email or password" });
          }
          //generate token
          const accessToken=sign({email:user.email,id:user._id},secretKey);

          res.json({accessToken ,msg:"you logged in"} );
          
        });
      });

      //get users
      router.get(
        '/users',
        asyncHandler(async (req, res) => {
          const use = await User.find({})
          console.log(use);
          res.json(use)
        })
      )
    
      
      //get user
      router.get(
        '/:id',protect
       , asyncHandler(async (req, res) => {
          const userid = await User.findById(req.params.id)
          console.log(userid);
          res.json(userid)
        })
      )
      //update user
      router.put(
        '/:id',
        asyncHandler(async(req,res)=>{
        const id=req.params.id
        const updateUser=await User.findByIdAndUpdate(id,req.body)
        console.log(req.params.id);
        console.log(req.body);
        res.json(updateUser)
        console.log(updateUser);
        })
       
    )

    //delete user
    router.delete(
      '/:id',
      asyncHandler(async(req,res)=>{
        const id=req.params.id
        const deleteUser=await User.findByIdAndDelete(id)
        res.json(deleteUser)
      })
    )

export default router

