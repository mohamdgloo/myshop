/* eslint-disable array-callback-return */
import axios from 'axios';
import React, { useEffect, useState} from 'react'
import './home.css'
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
  const[products,setProducts]=useState([]);
  const[category,setCategory]=useState([])
  const[subCategory,setSubCategory]=useState([])
  const navigate=useNavigate()
  
  useEffect(()=>{
    const fetchCategory=async()=>{
      const rescat=await axios.get('/api/category/category')
      setCategory(rescat.data)
    }
    fetchCategory()
  },[])
  
  useEffect(()=>{
    const fetchSubCategory=async()=>{
      const ressubcat=await axios.get('/api/subcategory/subcategory')
      setSubCategory(ressubcat.data)
    }
    fetchSubCategory()
  },[])
  
  useEffect(()=>{
    const fetchProducts=async()=>{
      const res=await axios.get('/api/products/products')
      setProducts(res.data)
      console.log(res);
    }
    fetchProducts()
  },[])

  return (
    <div className=' m-auto mt-2 mb-2 h-auto md:w-5/6 bg-gray-50'>
      <div className='rtl grid grid-cols-6 gap-2 my-5'>
        {category.map((category,index)=>{
          return(
            <div key={index} 
            className='border border-blue-300 rounded text-center text-blue-900 cursor-pointer'>
              {category.category}
            </div>
          )
        })}
      </div>
      
      <div className='rtl grid grid-cols-6 gap-2 my-5'>
        {subCategory.map((subcat,index)=>{
          return(
            <div key={index}>{subcat.subcategory}</div>
          )
        })}
      </div>
      
       <div className='rtl grid grid-cols-2 gap-4 ' >
        {products.map((product,index)=>{
          return(
            <div key={index}>
             
              <div
               className=' w-2/3 h-auto p-3 border border-gray-500 shadow-lg rounded'>
                <Link to={`/product/${product._id}`} onClick={()=>{navigate(`/product/${product._id}`)}}>
                <img className='w-full' src={product.img} alt='image'/>
                <div className='font-bold text-xl mb-2'>
                  {product.textile}
                </div>
                </Link>
                <p className=' text-gray-700 mt-2'>
                  {product.description}
                </p>
                <span className='text-blue-700 mt-2'>
                  {product.price}
                </span>
                <div>
                <button 
                className='mt-2 p-2 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 rounded'>
                  اضافه به سبد خرید
                </button>
                </div>
                  
              </div>
            </div>
          )
        })}
       </div>
    </div>
  )
}

export default Home