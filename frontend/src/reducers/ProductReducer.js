import { 
    PRODUCT_LIST_REQUEST ,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_IMAGE_REQUEST,
    PRODUCT_IMAGE_SUCCESS,
    PRODUCT_IMAGE_FAIL,
    PRODUCT_STOCK_REQUEST,
    PRODUCT_STOCK_SUCCESS,
    PRODUCT_STOCK_FAIL,
    PRODUCT_IMAGE_DETAIL_REQUEST,
    PRODUCT_IMAGE_DETAIL_SUCCESS,
    PRODUCT_IMAGE_DETAIL_FAIL
} from "../constants/ProductsConstants"


export const productReducer=(state={products:[]},action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true,products:[]}
        case PRODUCT_LIST_SUCCESS:
            return{loading:false,products:action.payload}
        case PRODUCT_LIST_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state
    }
}


export const productDetailsReducer=(state={productId:{}},action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true,...state}
        case PRODUCT_DETAILS_SUCCESS:
            return{loading:false,productId:action.payload}
        case PRODUCT_DETAILS_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state
    }
}


export const productImageReducer=(state={shot:[]},action)=>{
    switch(action.type){
        case PRODUCT_IMAGE_REQUEST:
            return {loading:true,shot:[]}
        case PRODUCT_IMAGE_SUCCESS:
            return{loading:false,shot:action.payload}
        case PRODUCT_IMAGE_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state
    }
}


export const productStockReducer=(state={stock:[]},action)=>{
    switch(action.type){
        case PRODUCT_STOCK_REQUEST:
            return {loading:true,...state}
        case PRODUCT_STOCK_SUCCESS:
            return{loading:false,stock:action.payload}
        case PRODUCT_STOCK_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state
    }
}