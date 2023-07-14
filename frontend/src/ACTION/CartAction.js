import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/CartConstant'


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

export const removeFromCart=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:id
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
