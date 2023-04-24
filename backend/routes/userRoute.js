import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/UserModel.js'

//create users
const router = express.Router()
router.post(
  '/createusers',
  asyncHandler(async (req, res) => { 

        const users = new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone,
            isAdmin:req.body.isAdmin,
        })
        //save users in database
        users.save().then(val=>{
          res.json({msg:"add user",val})
        })
      })
     
      )

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
        '/:id',
        asyncHandler(async (req, res) => {
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

