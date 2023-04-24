import express from 'express'
import asyncHandler from 'express-async-handler'
import Image from '../models/ImageModel.js'
import multer from 'multer'
const router = express.Router()

//storage
const Storage=multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cd)=>{
    cd(null,file.originalname);
  }
})
const upload=multer({
  storage:Storage
}).array('testImage')


router.post(
  '/createimage',
  asyncHandler(async (req, res) => { 
    
    upload(req,res,(err)=>{
      if(err){
        console.log(err);
      }else{
        const imgroute = new Image({
          product_id:req.body.product_id,
          image:{
            data:req.file.filename,
            contentType:'image/jpg'
          }
        })
        imgroute.save().then(val=>{
          res.json({msg:"add image",val:val})
        })

      }
    })
  })
      )
      router.get(
        '/image',
        asyncHandler(async (req, res) => {
          const imgfind = await Image.find({})
          console.log(imgfind);
          res.json(imgfind)
        })
      )

export default router

