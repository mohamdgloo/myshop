import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDeatail = () => {
    const {id}=useParams();
    const[productId,setProductId]=useState({})
    const[practical,setPractical]=useState([])
    useEffect(()=>{
        const fetchProductiD=async()=>{
          const resProId=await axios.get(`/api/products/${id}`)
          setProductId(resProId.data)
          
        }
        fetchProductiD()
      },[])
    

 
    useEffect(()=>{
        const fetchProPra=async()=>{
          const resProPra=await axios.get('/api/productpractical/productpractical')
          setPractical(resProPra.data)
          console.log(resProPra);
        }
        fetchProPra()
      },[])
    
  return (
    <div className='m-auto mt-2 mb-2 h-auto md:w-5/6 bg-gray-50'>
        <div>
        <div className='flex flex-row '>
            <div className='w-1/3 h-1/3'>
                <img src='' alt='s' />
              
            </div>
            <div className='flex flex-col m-4 p-4'>
                <h1 className='font-bold '>
                    {productId.textile}
                </h1>
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
                <tr>
                   <th>مشخصات</th>
                </tr>
            </thead>
            <tbody className='font-bold'>
                <tr>
                    <td> جنس: </td>
                    <td>{productId.gender}</td>    
                </tr>
                <tr>
                    <td>کاربرد:</td> 
                   <td>
                        {practical.map((pra,index)=>{
                            if(pra.product_id.textile===productId.textile){
                            return(
                            <div key={index}>
                                {pra.practical_id.practical}
                                </div>
                            )
                        }else{return(null)}
                        })}
                   </td>
                    
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
      <div className='text-center border border-blue-300 mt-2 p-2 w-1/3 m-auto'>
        <form> 
            <div className=' flex flex-col '>
                <label>متر</label>
                <input className='rtl border' type='number' placeholder='انتخاب متراژ...'/>
            </div>
        </form>
      </div>
      <div className='flex justify-center'>
           <button 
           className='mt-2 p-2 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 rounded'>
            اضافه به سبد خرید
            </button>
      </div>
    </div>
  )
}

export default ProductDeatail