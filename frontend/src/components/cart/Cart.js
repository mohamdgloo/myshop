import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { addToCart } from '../../ACTION/CartAction';
import { listProductImage } from '../../ACTION/ProductAction';

const Cart = () => {
   const productId=useParams()
  // console.log(productId);
  // const [searchParams,setSearchParams]=useSearchParams("");
  // const quantity=Number(searchParams.toString().split("=")[1]);
  // console.log(quantity);
  // const navigate=useNavigate()
   const dispatch=useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cartItems);
  // useEffect(()=>{
  //   if(productId){
  //     dispatch(addToCart(productId))
  //   }
  // },[dispatch,productId])

  const productImage=useSelector(state=>state.productImage)
    const{shot}=productImage
    useEffect(()=>{
      dispatch(listProductImage())
     },[dispatch])
     
  return ( 
    <div className='rtl border border-blue-300 w=[100%] mt-5 m-auto rounded'>
       {cartItems.length===0?<p> محصولی نی منش</p>:( 
       <div className='flex flex-col justify-between '>
        {cartItems.map(item=>(
          <>
          <div className='border border-blue-300 rounded flex flex-row-reverse items-center justify-around p-2 m-2 w-[50%] '>
           <div className='flex flex-col m-3'>
            <div className=''>
              
            {shot.map((shot,index)=>{
                    if(shot.product_id.textile===item.textile){
                      return(
                             <div  key={index}><img className='w-[100%] h-[100px]' src={shot.path} alt='...'/></div>
                            )
                      }else{return(null)}
              })} 
            
            </div>
            <div>
              {/* <button className='border bg-blue-700 text-white p-2 m-2'>تغییر مقدار
              </button> */}
            </div>
           </div>
            <div className='flex flex-col justify-between'>
              <div>{item.textile}</div>
              <div>{item.qty}متر</div>
              <div>{item.price}</div>
            </div>
          </div>
          </>
            ))}
          <div className='flex flex-col'>
              <div className='border border-blue-300 flex flex-row-reverse justify-between m-2 p-2'>
                {/* <p>تعداد ({cartItems.reduce((acc,item)=>acc + item.qty, 0)})متر محصول داریم </p> */}
                {cartItems.reduce((acc,item)=>acc+item.qty * item.price, 0)} تومان
                <p className='rtl'>
                  مبلغ قابل پرداخت
                  </p>
              </div>
              <div  className='border bg-blue-700 text-white p-2 m-2 text-center'>
                <button>تکمیل سفارش</button>
              </div>
          </div>
      </div>
          )}
    </div>
  )
}

export default Cart