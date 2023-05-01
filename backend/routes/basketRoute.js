import express from 'express'
import asyncHandler from 'express-async-handler'
import Basket from '../models/BasketModel.js'

const router = express.Router()
router.post(
  '/createbasket',
  asyncHandler(async (req, res) => { 

        const bask = new Basket({
            product_id:req.body.product_id,
            user_id:req.body.user_id,
            qty:req.body.qty
        })
        bask.save().then(val=>{
          res.json({msg:"add basket",val})
        })
      })
     
      )
      router.get(
        '/basket',
        asyncHandler(async (req, res) => {
          const bas = await Basket.find({})
          .populate({path:'product_id' , select:('textile -_id')})
          .populate({path:'user_id',select:('firstName lastName-_id')})
          console.log(bas);
          res.json(bas)
        })
      )
    
      //get by id
      router.get(
        '/:id',
        asyncHandler(async (req, res) => {
          const getBas = await Basket.findById(req.params.id)
          .populate({path:'product_id' , select:('textile -_id')})
          .populate({path:'user_id',select:('firstName lastName-_id')})
          console.log(getBas);
          res.json(getBas)
        })
      )
    
      //update basket
router.put(
  '/:id',
  asyncHandler(async(req,res)=>{
    const updateBasket=await Basket.findByIdAndUpdate(req.params.id,req.body)
    res.json(updateBasket)
    console.log(updateBasket);
  })
)
//delete basket
router.delete(
  "/:id",
  asyncHandler(async(req,res)=>{
    const deleteBasket=await Basket.findByIdAndDelete(req.params.id)
    res.json(deleteBasket)
    console.log(deleteBasket);
  })
)
    
export default router

