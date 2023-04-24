import express from 'express'
import asyncHandler from 'express-async-handler'
import Stock from '../models/StockModel.js'

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
          const stockfind = await Stock.find({})
          console.log(stockfind);
          res.json(stockfind)
        })
      )

export default router

