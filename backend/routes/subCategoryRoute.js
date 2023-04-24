import express from 'express'
import asyncHandler from 'express-async-handler'
import SubCategory from '../models/SubCategoryModel.js'

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
          console.log(subcats);
          res.json(subcats)
        })
      )

      //get one subCategory
      router.get(
        '/:id',
        asyncHandler(async(req,res)=>{
          const getSub=await SubCategory.findById(req.params.id)
          res.json(getSub)
          console.log(getSub);
        })
      )
export default router

