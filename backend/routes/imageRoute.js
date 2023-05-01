import express from 'express'
import asyncHandler from 'express-async-handler'
import Image from '../models/ImageModel.js'
import multer from 'multer'
import Product from '../models/ProductModel.js'
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
            data:req.files[0].filename,
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
          const imgfind = await Image.find({}).populate({path:'product_id' , select:('textile -_id')})
          console.log(imgfind);
          res.json(imgfind)
        })
      )

      router.get(
        '/:id',
        asyncHandler(async(req,res)=>{
          const imgFinById=await Image.findById(req.params.id).populate({path:'product_id',select:('textile-_id')})
          res.json(imgFinById)
          // const pro=await Product.findById(
          //   imgFinById.product_id
          // )
          // const merg={...imgFinById,pro}
          // res.json(merg)

        })
      )
export default router

