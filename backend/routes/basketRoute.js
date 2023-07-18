import express from 'express'
import asyncHandler from 'express-async-handler'
import Basket from '../models/BasketModel.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()
// router.post(
//   '/createbasket',
//   protect,
//   asyncHandler(async (req, res) => { 
//     const {  product_id } = req.body;
//     const user_id = req.user.id;

//     const existingBasket = await Basket.findOne({ product_id, user_id });
//     if (existingBasket) {
//       return res.json({ error: 'Basket already exists' });
//     }

//     const basket = new Basket({
//       product_id,
//       user_id,
//       qty
//     });

//     const savedBasket = await basket.save();
//     res.json({ msg: 'Basket added', basket: savedBasket });
//   })
// );



//*******************************************8 */
router.post(
  '/createbasket',
  protect,
  asyncHandler(async (req, res) => {
    const { product_id ,qty} = req.body;
    const user_id = req.user.id;

    const existingBasket = await Basket.findOne({ product_id, user_id });
    if (existingBasket) {
        existingBasket.qty = qty;
      const updatedBasket = await existingBasket.save();
      return res.json({ msg: "Basket updated", basket: updatedBasket });
     }

    const basket = new Basket({
      product_id,
      user_id,
      qty
    });

    const savedBasket = await basket.save();
    res.json({ msg: 'Basket added', basket: savedBasket });
  })
);

 
      router.get(
        '/basket',
        protect,
        asyncHandler(async (req, res) => {
          const user_id = req.user.id;
          const basketItems = await Basket.find({ user_id }).populate('product_id');
          if (basketItems) {
            res.json(basketItems);
          } else {
            res.status(404).json({ error: 'Basket item not found' });
          }
        })
      );
      

      //get by id
      router.get(
        '/basket/:id',
        protect,
        asyncHandler(async (req, res) => {
          const basketItem = await Basket.findById(req.params.id).populate('product_id');
      
          if (basketItem) {
            res.json(basketItem);
          } else {
            res.status(404).json({ error: 'Basket item not found' });
          }
        })
      );
      
    
//       //update basket
// router.put(
//   '/:id',
//   asyncHandler(async(req,res)=>{
//     const updateBasket=await Basket.findByIdAndUpdate(req.params.id,req.body)
//     res.json(updateBasket)
//     console.log(updateBasket);
//   })
// )
// //delete basket
// router.delete(
//   "/:id",
//   asyncHandler(async(req,res)=>{
//     const deleteBasket=await Basket.findByIdAndDelete(req.params.id)
//     res.json(deleteBasket)
//     console.log(deleteBasket);
//   })
// )
    
export default router

