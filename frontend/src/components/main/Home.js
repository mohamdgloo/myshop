/* eslint-disable array-callback-return */
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import React, { useEffect, useState} from 'react'
import './home.css'
import { Link } from 'react-router-dom';
//import { ImageContext } from '../../App';
import CatAndSub from '../category/CatAndSub';
import { listProductImage, listProducts } from '../../ACTION/ProductAction';
const Home = () => {
  
  //const[practical,setPractical]=useState([])
  //const value = React.useContext(ImageContext);  

  const dispatch=useDispatch()

  const productList=useSelector(state=>state.productList)
  const{loading,error,products}=productList
  useEffect(()=>{
   dispatch(listProducts())
  },[dispatch])

  const productImage=useSelector(state=>state.productImage)
  const{shot}=productImage
  useEffect(()=>{
    dispatch(listProductImage())
   },[dispatch])
   
  // useEffect(()=>{
  //   const fetchProPra=async()=>{
  //     const resProPra=await axios.get('/api/productpractical/productpractical')
  //     setPractical(resProPra.data)
  //     //console.log(resProPra);
  //   }
  //   fetchProPra()
  // },[])


  return (
    <div className=' m-auto mt-2 mb-2 h-auto md:w-5/6 bg-gray-50'>  
     <CatAndSub/>
      {/* <div className='rtl grid grid-rows-2 gap-6 my-5'>
            {practical.map((pra,index)=>{
                return(
                  <div key={index} >{pra.practical_id.practical}</div>
                )
            })}
       </div> */}
      
{/* <p className='rtl'>image with context</p>
      <div className='rtl grid grid-cols-6 gap-2 my-5'>
        {value.map((shot,index)=>{
          return(
            <div  key={index}><img src={shot.path} alt='...'/></div>
          )
        })}
      </div> */}
      {/* <p className='rtl'>image with redux</p>
      <div className='rtl grid grid-cols-6 gap-2 my-5'>
        {shot.map((shot,index)=>{
          return(
            <div  key={index}><img src={shot.path} alt='...'/></div>
          )
        })}
      </div> */} 
     {loading ? <h2>درحال بارگیری...</h2> : error ?<h3>{error}</h3>:
     
       <div className='rtl grid grid-cols-2 gap-4 ' >
        {products.map((product,index)=>{
          return(
            <div key={index}>
             
              <div
               className=' w-2/3 h-3/3 p-3 border border-gray-500 shadow-lg rounded'>
                <Link to={`/product/${product._id}`} >
               
                <div>
                {shot.map((shot,index)=>{
                    if(shot.product_id.textile===product.textile){
                      return(
                             <div className='border-3 border-blue-800'  key={index}><img src={shot.path} alt='...'/></div>
                            )
                      }
                 })} 
                </div>
              
                <div className='font-bold text-xl mb-2'>
                  {product.textile}
                </div>
                </Link>
                <p className=' text-gray-700 mt-2'>
                  {product.description}
                </p>
               <p className=' text-gray-700 mt-2'>
                
               </p>
                <span className='text-blue-700 mt-2'>
                  {product.price}
                </span>
                <div>
                <Link to={`/product/${product._id}`} >
                <button 
                className='mt-2 p-2 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 rounded'>
                  اضافه به سبد خرید
                </button>
                </Link>
                </div>
                  
              </div>
            </div>
          )
        })}
       </div>
     }
     
    </div>
  )
}

export default Home