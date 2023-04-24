import express from 'express'
import asyncHandler from 'express-async-handler'
import Category from '../models/CategoryModel.js'

const router = express.Router()
router.post(
  '/createcategory',
  asyncHandler(async (req, res) => { 
        const cat = new Category({
          category:req.body.category
        })
        cat.save().then(val=>{
          res.json({msg:"add category",val:val})
        })
      })
     
      )
      router.get(
        '/category',
        asyncHandler(async (req, res) => {
          const cats = await Category.find({})
          console.log(cats);
          res.json(cats)
        })
      )
        
      //get one category
      router.get(
        '/:id',
        asyncHandler(async(req,res)=>{
          const getcat=await Category.findById(req.params.id)
          res.json(getcat)
          console.log(getcat);
        })
      )




    // console.log(req);
    // const categoryName = req.category;
    // const CATEGORY = new Category({
    //     category:categoryName
    // })
    // CATEGORY.save(function (err) {
    //     if (err) console.log(err);
    //     // saved!
    //     res.send(true);
    // })



export default router

