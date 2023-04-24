import express from 'express'
import asyncHandler from 'express-async-handler'
import ProductPractical from '../models/ProductPracticalModel.js'

const router=express.Router()

router.post(
    '/createproductpractical',
    asyncHandler(async (req, res) => { 
      
      const proprac = new ProductPractical({
          practical_id:req.body.practical_id,
          product_id:req.body.product_id,
      })
      proprac.save().then(val=>{
        res.json({msg:"add pro-prac",val:val})
      })
    })
     )

     router.get(
        '/productpractical',
        asyncHandler(async (req, res) => {
          const propracfind = await ProductPractical.find({})
          console.log(propracfind);
          res.json(propracfind)
        })
      )

export default router