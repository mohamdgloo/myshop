import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDeatail = () => {
    const {id}=useParams();
    const[productId,setProductId]=useState({})
    useEffect(()=>{
        const fetchProductiD=async()=>{
          const resProId=await axios.get(`/api/products/${id}`)
          setProductId(resProId.data)
          
        }
        fetchProductiD()
      })
    
  return (
    <div className='m-auto mt-2 mb-2 h-auto md:w-5/6 bg-gray-50'>
        <div>
        <div className='flex flex-row '>
            <div className='w-1/3 h-1/3'>
                {productId.image}
            </div>
            <div className='flex flex-col m-4 p-4'>
                <h1 className='font-bold '>
                    {productId.textile}
                </h1>
                <p>
                    {productId.description}
                </p>
                <p>
                    {productId.price}
                </p>
                <p>
                    {productId.description}
                </p>
            </div>
        </div>
      </div>
      <div>
        <table className=' rtl border border-blue-500 w-2/3 mx-auto text-center'>
            <thead className='border border-blue-700 text-center'>
              <th>مشخصات</th>
            </thead>
            <tbody className='font-bold'>
                <tr>
                    <td> جنس: </td>
                    <td>{productId.gender}</td>    
                </tr>
                <tr>
                    <td>کاربرد:</td> 
                    <td>  {productId.practical}</td>
                </tr>
                <tr> 
                    <td> ایستایی:</td>
                    <td> {productId.stationary}</td>
                </tr>
                <tr>
                    <td>  ضخامنت:</td>
                    <td>  {productId.thickness}</td>
                </tr>
                <tr>
                    <td> عرض:</td>
                    <td> {productId.width}</td>
                </tr>
            </tbody>
            
        </table>
      </div>
      <div className='flex justify-center'>
           <button className='mt-2 p-2 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 rounded'>اضافه به سبد خرید</button>
      </div>
    </div>
  )
}

export default ProductDeatail