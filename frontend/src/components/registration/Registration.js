import React from 'react'
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className='border border-blue-300 w-4/6 mt-5 m-auto rounded'>
    <div className='flex flex-col justify-center  '>
       <p className=' text-center mt-1 text-4xl'>ثبت نام</p>
       <form className='mt-1 m-auto w-4/6'>
       <div className='py-2 mt-1 flex flex-col '>
          <label>firstName</label>
          <input type='text' placeholder='your firstName ...'
          className=' p-1 mt-1 border border-blue-300 rounded'/>
        </div>
        <div className='py-2 mt-1 flex flex-col '>
          <label>lastName</label>
          <input type='text' placeholder='your lastName ...'
          className=' p-1 mt-1 border border-blue-300 rounded'/>
        </div>
        <div className='py-2 mt-1 flex flex-col '>
          <label>phone</label>
          <input type='text' placeholder='your phone ...'
          className=' p-1 mt-1 border border-blue-300 rounded'/>
        </div>
        <div className='py-2 mt-1 flex flex-col '>
          <label>email</label>
          <input type='email' placeholder='your email ...'
          className=' p-1 mt-1 border border-blue-300 rounded'/>
        </div>
        <div className='py-2 mt-1 flex flex-col '>
          <label>password</label>
          <input type='password' placeholder='your password ...'
          className=' p-1 mt-1 border border-blue-300 rounded'/>
        </div>
       </form>

    </div>
    <div className='flex flex-col items-center justify-center '>
          <div className="mt-2 mb-2">
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

export default Registration