import React from 'react'
import './input.css'

const App = () => {
  return (
    <div className=' bg-blue-500'>
      <h1 className="text-3xl font-bold underline bg-blue-500">
         Hello world!
      </h1>
      <div className='con mx-auto px-1'>

      <button className='bg-red-700 text-white font-bold py-2 my-2 rounded hover:bg-red-600 '>fuck u</button>
      </div>
      <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5' role='alert'>
        <strong className='font-bold'>alert!</strong>
        <span className='block sm:inline'>مسندیرمندسمدرسم</span>
      </div>
      <div className='max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl'>
         <div className='flex-shrink-0'>
          <img src='images/photo-output-9.jpg' alt='e' className='h-12 w-12'/>
         </div>
         <div className='ml-6 pt-1'>
          <h4 className='text-xl text-gray-900'>mamad</h4>
          <p className='text-base text-gray-600'>u have message</p>
         </div>
      </div>
    </div>
  )
}

export default App