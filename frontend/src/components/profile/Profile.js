import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserDetails, updateUserProfile } from '../../ACTION/UserAction.js';
import { fetchBasket } from '../../ACTION/basketActions.js';

const Profile = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [message, setMessage] = useState(null);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, userprofile} =userDetails ;

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const basket=useSelector((state)=>state.basket)
  const {basketItems}=basket
  
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchBasket(userInfo._id));
    }
  }, [dispatch, userInfo,cartItems]);

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }else{
        if (!userprofile.email) {
            dispatch(getUserDetails('profile'))
          } else {
            setFirstName(userprofile.firstName)
            setLastName(userprofile.lastName)
            setPhone(userprofile.phone)
            setEmail(userprofile.email)
          }
    }
  }, [dispatch, userInfo, userprofile, navigate]);

    console.log("userprofile:",userprofile);
    console.log("userInfo:",userInfo);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      setMessage('password do not match')
    }else{
     dispatch(updateUserProfile({_id:updateUserProfile._id,firstName,lastName,phone,email,password}))
    }
    
  };

  return (
    <>
    <div className='flex flex-col text-center items-center justify-between border border-blue-300 m-auto mt-1 rounded'>
    {basketItems.map((item) => (
          <div key={item._id}>
            <p>{item.product_id.textile}</p>
            <p>{item.qty}</p>
          </div>
        ))}
    </div>
    <div className='border border-blue-300 w-4/6 mt-5 m-auto rounded'>
    <div className='flex flex-col justify-center  '>
       <p className=' text-center mt-1 text-4xl'>پروفایل</p>
       <form className='mt-1 m-auto w-4/6' onSubmit={handleSubmit}>
       {message && <p>{message}</p>}
       {success && <p>پروفایل ویرایش شد</p>}
       {error && <p>{error}</p>}
       {loading && <p>درحال بارگیری</p>}
       <div className='py-2 mt-1 flex flex-col '>
          <label>firstName</label>
          <input
           type='text' 
           placeholder='your firstName ...'
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)}
          className=' p-1 mt-1 border border-blue-300 rounded'/>
        </div>
        <div className='py-2 mt-1 flex flex-col '>
          <label>lastName</label>
          <input
           type='text'
           placeholder='your lastName ...'
           value={lastName}
           onChange={(e)=>setLastName(e.target.value)}
          className=' p-1 mt-1 border border-blue-300 rounded'/>
        </div>
        <div className='py-2 mt-1 flex flex-col '>
          <label>phone</label>
          <input
           type='text'
           placeholder='your phone ...'
           value={phone}
           onChange={(e) => setPhone(e.target.value)}
          className=' p-1 mt-1 border border-blue-300 rounded'/>
        </div>
        <div className='py-2 mt-1 flex flex-col '>
          <label>email</label>
          <input
           type='email' 
           placeholder='your email ...'
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          className=' p-1 mt-1 border border-blue-300 rounded'/>
        </div>
        <div className='py-2 mt-1 flex flex-col '>
          <label>password</label>
          <input 
          type='password' 
          placeholder='your password ...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=' p-1 mt-1 border border-blue-300 rounded'/>
        </div>
        <div className='py-2 mt-1 flex flex-col '>
          <label>confirm password</label>
          <input 
          type='password' 
          placeholder='your password ...'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className=' p-1 mt-1 border border-blue-300 rounded'/>
        </div>
           <div className='flex flex-col items-center justify-center '>
              <div className="mt-2 mb-2">       
                <button type='submit' 
                   className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600  ">
                     ویرایش
                </button>  
              </div>
            </div>
          </form>   
        </div>
  </div>
  </>
  )
}

export default Profile
