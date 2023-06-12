import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CatAndSub = () => {
    const[category,setCategory]=useState([])
    const[showSub,setShowSub]=useState(false)
    const[subCategory,setSubCategory]=useState([])
   
const handleClickForSub=(e)=>{
       // setShowSub(!showSub)
        //console.log(subCategory);
        console.log(e._id);
}
    useEffect(()=>{
        const fetchCategory=async()=>{
          const rescat=await axios.get('/api/category/category')
          setCategory(rescat.data)
        }
        fetchCategory()
      },[])
      

      useEffect(()=>{
        const fetchSubCatWithCat=async()=>{
          const resSubCatWithCat=await axios.get('api/subcategory/subcatbycategory:id')
          setSubCategory(resSubCatWithCat.data)
        }
        fetchSubCatWithCat()
      },[])


  return (
    <div>
         <div className='rtl grid grid-cols-6 gap-2 my-5'>
        {category.map((category,index)=>{
          return(
            <div key={index}  
            className='border border-blue-300 rounded text-center text-blue-900 cursor-pointer' 
            
            >          
               
                 <button onClick={()=>{console.log(category._id);setShowSub(!showSub)}} >{category.category}</button>  
                 
                {/* {showSub&&<div className='border border-blue-300 rounded w-3/3 h-auto'>
                  {subCategory.map((subc,index)=>{
                    if(subc.category_id===category.category){
                      return(
                        <p key={index}>{subc.subcategory}</p>
                      )
                    }else{return(null)}
                  })}
                </div>}         */}
            </div>
          )
        })}
      </div>
   
      <div className='rtl '>
        {showSub&&
                <div className='border border-blue-300 rounded w-3/3 h-auto'>
                  {subCategory.map((subc,index)=>{
                    if(subc.category_id===category._id){
                      return(
                        <p key={index}>{subc.subcategory}</p>
                      )
                    }else{return(null)}
                  })}
                </div>
         } 
        </div>
    </div>
  )
}

export default CatAndSub