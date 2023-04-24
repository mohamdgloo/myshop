import express from 'express'
import asyncHandler from 'express-async-handler'
import Practical from '../models/PracticalModel.js'

const router = express.Router()
router.post(
  '/createpractical',
  asyncHandler(async (req, res) => { 

        const prac = new Practical({
            practical:req.body.practical
        })
        prac.save().then(val=>{
          res.json({msg:"add practical",val})
        })
      })
     
      )
      router.get(
        '/practical',
        asyncHandler(async (req, res) => {
          const pracs = await Practical.find({})
          console.log(pracs);
          res.json(pracs)
        })
      )
    // get one pracyical
    router.get(
      '/:id',
      asyncHandler(async(req,res)=>{
        const getprac=await Practical.findById(req.params.id)
        res.json(getprac)
        console.log(getprac);
      })
    )

export default router

