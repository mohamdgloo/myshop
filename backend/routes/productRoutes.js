import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/ProductModel.js'
import SubCategory from '../models/SubCategoryModel.js'
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
      const prodsTosend=[];
      const productfind = await Product.find({})//.populate({path:'subcategory_id' , select:('subcategory -_id')})
 productfind.forEach(async prod=>{
  const subCat = await SubCategory.findById(
    prod.subcategory_id
  )
  prodsTosend.push({
    ...prod,
    subCat
  })

})
      console.log(prodsTosend);
       res.json(prodsTosend)
    })
  )

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    .populate({path:'subcategory_id',select:'subcategory-_id'})
    res.json(product)
    console.log(product);
  //   const subCat = await SubCategory.findById(
  //     product.subcategory_id
  //   )
  //  const resToSend={
  //   ...product,
  //   subCat
  //  };
  //  console.log(product, "prod");
  //  console.log(resToSend,"resToSend");
  //   res.json(resToSend)
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

