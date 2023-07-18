import express from 'express'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import pkg from 'jsonwebtoken';
import {secretKey}  from './config.js';
import  protect  from '../middleware/authMiddleware.js';
import User from '../models/UserModel.js';
 const {sign}=pkg
//create users
const router = express.Router()
router.post(
  '/createusers',
  asyncHandler(async (req, res) => { 
    const {firstName,lastName,phone,password , email,isAdmin}=req.body;
     // Check if the user with the same email already exists
     const existingUser = await User.findOne({ email });
     if (existingUser) {
       return res.json({ error: 'User already exists' });
     }
      bcrypt.hash(password,10).then((hash)=>{

        const users = new User({
          firstName:firstName,
          lastName:lastName,
          email:email,
          password:hash,
          phone:phone,
          isAdmin:isAdmin, 
        }) 
       // save users in database
       // users.save().then(val=>{
        //  res.json({msg:"add user",val})
      //  })
      users.save().then((val) => {
        // Generate token for the new user
        const accessToken = sign({ email: val.email, id: val._id }, 
         // "importantsecret"
         secretKey
          );
        res.json({ msg: "add user", val, accessToken });
      });
      })
      })
      )

// router.post('/createusers', async (req, res) => {
//   const { firstName, lastName, phone, email, password } = req.body;

//   try {
//     // Check if the user with the same email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ error: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const user = new User({
//       firstName,
//       lastName,
//       phone,
//       email,
//       password: hashedPassword,
//     });

//     // Save the user in the database
//     await user.save();

//     res.json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


      //login

      router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: "User doesn't exist" });
  }

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      return res.status(401).json({ error: "Wrong email or password" });
    }
    // Generate token
    const accessToken = sign({ email: user.email, id: user._id }, secretKey);
    console.log(accessToken);
    res.json({ accessToken, email, msg: "you logged in" });
  });
});

       // profile:The order of route definitions is important in Express, 
       //and if the /:id route is defined before the /profile route, 
       //it will match the /profile route and cause unexpected behavior.
       router.get(
        '/profile',protect
        , asyncHandler(async (req, res) => { 
          console.log("profile id:",req.user.id);
          const userprofile = await User.findById(req.user.id);
          
        if (userprofile) {
          res.json({
            _id:userprofile._id,
            firstName:userprofile.firstName,
            lastName:userprofile.lastName,
            email:userprofile.email, 
            phone:userprofile.phone,
            isAdmin:userprofile.isAdmin,   
          })
        } else {
          res.status(404)
          throw new Error('User not found')
        }
      }))

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
          console.log("hi:",req.user.id);
          console.log(userid);
          res.json(userid)
        })
      )

    
   

      //update user
      router.put(
        '/profile',protect,
        asyncHandler(async(req,res)=>{
          const userUpdateProfile = await User.findById(req.user.id);
          if (userUpdateProfile) {
            userUpdateProfile.firstName=req.body.firstName || userUpdateProfile.firstName
            userUpdateProfile.lastName=req.body.lastName ||userUpdateProfile.lastName
            userUpdateProfile.email=req.body.email||userUpdateProfile.email
            userUpdateProfile.phone=req.body.phone||userUpdateProfile.phone
            if(req.body.password){
              userUpdateProfile.password=req.body.password
            }
            const updateUser=await userUpdateProfile.save()
            res.json({
              _id:updateUser._id,
              firstName:updateUser.firstName,
              lastName:updateUser.lastName,
              email:updateUser.email, 
              phone:updateUser.phone,
              isAdmin:updateUser.isAdmin, 
            })
          }else{
            res.status(404)
            throw new Error('user not found')
          }
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

