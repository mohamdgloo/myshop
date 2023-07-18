import {createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducer, productImageReducer,productStockReducer, productReducer } from '../reducers/ProductReducer'
import { cartReducer } from '../reducers/CartReducer'
import {userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer} from '../reducers/UserReducers'
import { basketReducer } from '../reducers/basketReducer'
const reducer=combineReducers({
    productList:productReducer,
    productDetails:productDetailsReducer,
    productImage:productImageReducer,
    productStock:productStockReducer,
    cart:cartReducer ,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    basket:basketReducer
  })


   const cartItemsFromStorage=localStorage.getItem('cartItems') 
   ? JSON.parse(localStorage.getItem('cartItems'))
   :[]

 
   const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const initialStore={
       cart:{cartItems:cartItemsFromStorage},
       userLogin:{userInfo:userInfoFromStorage },
       
       // cart:{ cartItems:[]}
}
const middleware=[thunk]
const store=createStore(reducer,initialStore,composeWithDevTools(applyMiddleware(...middleware)))
store.subscribe(() => {
  const { cart } = store.getState();
  localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
});
export default store  
