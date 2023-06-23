import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='border border-blue-300 w-4/6 mt-5 m-auto rounded'>
      <div className='flex flex-col justify-center  '>
         <p className=' text-center mt-3 text-4xl'>signin</p>
         <form className='mt-5 m-auto w-4/6'>
          <div className='py-2 mt-2 flex flex-col '>
            <label>email</label>
            <input type='email' placeholder='your email ...'
            className=' p-2 mt-2 border border-blue-300 rounded'/>
          </div>
          <div className='py-2 mt-2 flex flex-col '>
            <label>password</label>
            <input type='password' placeholder='your password ...'
            className=' p-2 mt-2 border border-blue-300 rounded'/>
          </div>
          <div className="mt-6 mb-6">
                <button 
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600  ">
                      ورود
                </button>
          </div>
         </form>

      </div>
      <div className='flex flex-col items-center justify-center '>
        <p>اگه حساب کاربری نداری ثبت نام کن </p>
            <div className="mt-6 mb-6">
          <Link to='/registration'>
                  <button 
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600  ">
                        ثبت نام
                  </button>
         </Link>
            </div>
      </div>
    </div>
  )
}

export default Login