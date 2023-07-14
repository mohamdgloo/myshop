import express from 'express'
import asyncHandler from 'express-async-handler'
import SubCategory from '../models/SubCategoryModel.js'
import Category from '../models/CategoryModel.js'
const router = express.Router()

router.post(
  '/createsubcategory',
  asyncHandler(async (req, res) => { 
    
    const subCat = new SubCategory({
      category_id:req.body.category_id,
      subcategory:req.body.subcategory,
    })
    subCat.save().then(val=>{
      res.json({msg:"add subcategory",val:val})
    })
  })
      )
      router.get(
        '/subcategory',
        asyncHandler(async (req, res) => {
          const subcats = await SubCategory.find({})
          .populate({path:'category_id' , select:('category -_id')})
          // Category.find().then((cat)=>{
          //   console.log(cat);
          //  // res.json(cat)
          //  console.log(subcats);
            res.json(subcats)
          // })
        })
        )

      //get one subCategory
      router.get(
        '/:id',
        asyncHandler(async(req,res)=>{
          const getSub=await SubCategory.findById(req.params.id)
          .populate({path:'category_id' , select:('category -_id')})
        //  const categ=await Category.findById(
        //   getSub.category_id
        //  )
        //  const merg={...getSub,categ}
        //  res.json(merg)
          res.json(getSub)
          console.log(getSub);
        })
      )
      
      //get subcategory by category_id
      router.get(
        '/subcatbycategory/:id',
        asyncHandler(async(req,res)=>{
          const getSubByCat=await SubCategory.find({}).where('category_id').equals(req.params.id)
          .populate({path:'category_id' , select:('category -_id')})
          res.json(getSubByCat)
         // console.log(getSubByCat);
        })
      )
export default router

