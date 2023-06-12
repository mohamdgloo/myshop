import axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_IMAGE_DETAIL_FAIL, PRODUCT_IMAGE_DETAIL_REQUEST, PRODUCT_IMAGE_DETAIL_SUCCESS, PRODUCT_IMAGE_FAIL, PRODUCT_IMAGE_REQUEST, PRODUCT_IMAGE_SUCCESS, PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS, PRODUCT_STOCK_FAIL, PRODUCT_STOCK_REQUEST, PRODUCT_STOCK_SUCCESS } from "../constants/ProductsConstants";

export const listProducts=()=> async(dispatch)=>{
    try {
        dispatch({type:PRODUCT_LIST_REQUEST})
        
        const {data}=await axios.get('/api/products/products')
        
        

        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:
            error.response&&error.response.ata.message
             ?error.response.data.message
             : error.message
        })
    }

}

export const listProductDetails=(id)=> async(dispatch)=>{
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST})
        
        const {data}=await axios.get(`/api/products/${id}`)
        
        

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:
            error.response&&error.response.ata.message
             ?error.response.data.message
             : error.message
        })
    }

}


export const listProductImage=()=> async(dispatch)=>{
    try {
        dispatch({type:PRODUCT_IMAGE_REQUEST})
        
        const {data}=await axios.get('/api/image/image')
        
        

        dispatch({
            type:PRODUCT_IMAGE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_IMAGE_FAIL,
            payload:
            error.response&&error.response.ata.message
             ?error.response.data.message
             : error.message
        })
    }

}


export const listProductStock=()=> async(dispatch)=>{
    try {
        dispatch({type:PRODUCT_STOCK_REQUEST})
        
        const {data}=await axios.get('/api/stock/stock')
        
        

        dispatch({
            type:PRODUCT_STOCK_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_STOCK_FAIL,
            payload:
            error.response&&error.response.ata.message
             ?error.response.data.message
             : error.message
        })
    }

}