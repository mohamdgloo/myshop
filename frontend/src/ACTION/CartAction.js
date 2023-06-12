
import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/CartConstant'


export const addToCart=(id,quantity,productId)=>async(dispatch,getState)=>{
   // const {data}=await axios.get(`/api/products/${_id}`)
   
    dispatch({
        type:CART_ADD_ITEM,
        payload:id
    //     {
            
    //         product:data._id,
    //         textile:data.textile,
    //        // image:data.image,
    //         price:data.price,
    //         quantity
    //    }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}


