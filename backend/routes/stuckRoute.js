import express from 'express'
import asyncHandler from 'express-async-handler'
import Stock from '../models/StockModel.js'
import Product from '../models/ProductModel.js'

const router = express.Router()

router.post(
  '/createstock',
  asyncHandler(async (req, res) => { 
    
    const stockroute = new Stock({
      product_id:req.body.product_id,
      stock:req.body.stock,
      quantity:req.body.quantity,
    })
    stockroute.save().then(val=>{
      res.json({msg:"add stock",val:val})
    })
  })
      )
      router.get(
        '/stock',
        asyncHandler(async (req, res) => {
          const stockfind = await Stock.find({}).populate({path:'product_id' , select:('textile -_id')})
       //   console.log(stockfind);
          res.json(stockfind)
        })
      )

      router.get(
        '/:id',
        asyncHandler(async (req,res)=>{
          const stockById=await Stock.findById(req.params.id)
          .populate({path:'product_id' , select:('textile -_id')})
          res.json(stockById)
          // const st=await Product.findById(
          //   stockById.product_id
          // )
          // const sto={...stockById,st}
          // res.json(sto)
        })
      )

      router.put(
        '/:id',
        asyncHandler(async(req,res)=>{
          const updateStock=await Stock.findByIdAndUpdate(req.params.id,req.body)
          res.json(updateStock)
        //  console.log(updateStock);
        })
      )
      
export default router

