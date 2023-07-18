import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CLEAR_CART } from '../constants/CartConstant'
import { fetchBasket } from './basketActions'


export const addToCart=(id,quantity,productId)=>async(dispatch,getState)=>{
   // const {data}=await axios.get(`/api/products/${_id}`)
   
    dispatch({
        type:CART_ADD_ITEM,
        payload: { id, quantity } // Include the quantity in the payload
    })
    
    const { userInfo } = getState().userLogin;
     
    if (userInfo) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };
    
    await axios.post(
      "/api/basket/createbasket",
      { product_id: productId, user_id: userInfo._id, qty: quantity },
      config
    );
    
    dispatch(fetchBasket(userInfo._id));
    }
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:id
    })
    const { userInfo } = getState().userLogin;

    if (userInfo) {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.accessToken}`,
        },
      };
  
      await axios.delete(`/api/basket/${id}`, config);
  
      dispatch(fetchBasket(userInfo._id));
    }
  
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const clearCart = () => async (dispatch) => {
    dispatch({ type: CLEAR_CART });
    localStorage.removeItem('cartItems');
  };
  