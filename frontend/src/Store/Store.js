import {createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducer, productImageReducer,productStockReducer, productReducer } from '../reducers/ProductReducer'
import { cartReducer } from '../reducers/CartReducer'

const reducer=combineReducers({
    productList:productReducer,
    productDetails:productDetailsReducer,
    productImage:productImageReducer,
    productStock:productStockReducer,
    cart:cartReducer ,
})


   const cartItemsFromStorage=localStorage.getItem('cartItems') 
   ? JSON.parse(localStorage.getItem('cartItems'))
   :[]

const initialStore={
       cart:{cartItems:cartItemsFromStorage},
       // cart:{ cartItems:[]}
}
const middleware=[thunk]
const store=createStore(reducer,initialStore,composeWithDevTools(applyMiddleware(...middleware)))

export default store