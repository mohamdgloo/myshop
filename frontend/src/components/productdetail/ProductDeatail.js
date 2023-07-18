import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { ImageContext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails, listProductImage, listProductStock } from '../../ACTION/ProductAction';
import { addToCart } from '../../ACTION/CartAction';



const ProductDeatail = () => {
    const {id}=useParams();
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const productDetails=useSelector(state=>state.productDetails)
    const {loading,error,productId}=productDetails

     const productStock=useSelector(state=>state.productStock)
     const {stock}=productStock
    // const value = React.useContext(ImageContext); 

    const productImage=useSelector(state=>state.productImage)
    const{shot}=productImage
//********************************************************* */
// const [searchParams,setSearchParams]=useSearchParams("");
// const quantity=Number(searchParams.toString().split("=")[1]);
// console.log(quantity);
// const cart = useSelector((state) => state.cart)
// const { cartItems } = cart
// console.log(cartItems);
// useEffect(()=>{
//   if(productId){
//     dispatch(addToCart(productId,quantity))
//   }
// },[dispatch,productId,quantity])
//********************************************************* */
useEffect(()=>{
    dispatch(listProductDetails(id))
},[dispatch])

useEffect(()=>{
  dispatch(listProductImage())
 },[dispatch])
 

 useEffect(()=>{
     dispatch(listProductStock(id))
 },[dispatch])

 useEffect(()=>{
     const fetchProPra=async()=>{
       const resProPra=await axios.get('/api/productpractical/productpractical')
       setPractical(resProPra.data)
     }
     fetchProPra()
   },[])
//********************************************************* */
    const[result,setResult]=useState(0)
    const[inputMeter, setInputMeter] = useState();
    const[practical,setPractical]=useState([])
    const[qty,setQty]=useState(1)
   


      const handleInput=(e)=>{
        //   setInputMeter(e.target.value);
        //   const rese=(e.target.value*productId.price);
        //   setResult(rese)
        //   setQty(e.target.value)
        const selectedQty = parseInt(e.target.value);
        setInputMeter(selectedQty);
        const rese = selectedQty * productId.price;
        setResult(rese);
        setQty(selectedQty);
      }

    //   const [cart,setCart]=useState([])
    //   console.log(cart);
    const addToCartHandler=()=>{     
        // navigate(`/cart/${id}?qty=${qty}`);
        //   console.log(productId);
        //   setCart([...cart,productId])
        //dispatch(addToCart(productId,qty))
        dispatch(addToCart(productDetails.productId, qty, id)); 
       // navigate('/cart')
      }
    
  return (
    <>
    {loading ? <h2>درحال بارگیری...</h2> : error ?<h3>{error}</h3>:
    <div className='m-auto mt-2 mb-2 h-auto md:w-5/6 bg-gray-50'>
        <div>
        <div className='flex flex-row-reverse justify-around border border-blue-300 w-2/3 m-auto mb-5'>
            <div className='w-1/3 h-1/3'>
            {shot.map((shot,index)=>{
                    if(shot.product_id.textile===productId.textile){
                      return(
                             <div  key={index}><img src={shot.path} alt='...'/></div>
                            )
                      }else{return(null)}
                    })} 
                    
            </div>
            <div className='rtl flex flex-col justify-around m-4 p-4'>
                <h1 className='font-bold '>
                    {productId.textile}
                </h1>
                <p>
                    {productId.price}
                </p>
                <p>
                    {productId.description}
                </p>               
                      {stock.map((stock,index)=>{
                         if(stock.product_id.textile===productId.textile){
                             return(
                                <div>
                                    <p key={index}>{stock.quantity}متر</p>
                                </div>
                             )
                         }else{return(null)}
                    })}                  
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
      {stock.map((stock,index)=>{
                         if(stock.product_id.textile===productId.textile){
                             return(
                                <form  className='text-center border border-blue-300 mt-2 p-2 w-1/3 m-auto'>
                                    <label>موجودی</label>
                                    <select value={qty} onChange={handleInput}>
                                        {[...Array(stock.quantity).keys()].map((x)=>(
                                            <option key={x+1} value={x+1}>{x +1}</option>  
                                        ))}
                                    </select>
                                    <span className='rtl flex flex-rows-reverse'>
                                        {inputMeter} متر * متری {productId.price} تومان= {result} تومان 
                                    </span>
                                </form>
                             )
                         }else{return(null)}
                    })}  
      <div className='flex justify-center'>
           <button onClick={()=>addToCartHandler()}
           className='mt-2 p-2 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 rounded'>
            اضافه به سبد خرید
            </button>
      </div>
    </div>
 }
 </>
  )
}

export default ProductDeatail
