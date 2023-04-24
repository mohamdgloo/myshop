import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/ProductModel.js'

const router = express.Router()

router.post(
  '/createproduct',
  asyncHandler(async (req, res) => {
    const productroute = new Product({
      subcategory_id:req.body.subcategory_id,
      textile:req.body.textile ,
      description:req.body.description ,
      gender:req.body.gender ,
      stationary:req.body.stationary ,
      thickness:req.body.thickness ,
      price:req.body.price ,
      width:req.body.width,
    })
    productroute.save().then(val=>{
      res.json({msg:"add product",val:val})
    })
  })
  )
   
  router.get(
    '/products',
    asyncHandler(async (req, res) => {
      const productfind = await Product.find({})
      console.log(productfind);
      res.json(productfind)
    })
  )

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

//update product
router.put(
  '/:id',
  asyncHandler(async(req,res)=>{
    const updateProduct=await Product.findByIdAndUpdate(req.params.id,req.body)
    res.json(updateProduct)
    console.log(updateProduct);
  })
)
//delete product
router.delete(
  "/:id",
  asyncHandler(async(req,res)=>{
    const deleteProduct=await Product.findByIdAndDelete(req.params.id)
    res.json(deleteProduct)
    console.log(deleteProduct);
  })
)
export default router

