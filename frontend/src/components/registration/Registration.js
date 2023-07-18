import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation, useNavigate } from 'react-router-dom';
import { register } from '../../ACTION/UserAction';

const Registration = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [message, setMessage] = useState(null);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;


  const redirect = new URLSearchParams(location.search).get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      setMessage('password do not match')
    }else{
      dispatch(register(firstName,lastName,phone,email,password))
    }
    
  };

  return (
    <div className='border border-blue-300 w-4/6 mt-5 m-auto rounded'>
    <div className='flex flex-col justify-center  '>
       <p className=' text-center mt-1 text-4xl'>ثبت نام</p>
       <form className='mt-1 m-auto w-4/6' onSubmit={handleSubmit}>
       {message && <p>{message}</p>}
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
                      ثبت نام
                </button>  
              </div>
            </div>
          </form>   
        </div>
  </div>
  )
}

export default Registration
