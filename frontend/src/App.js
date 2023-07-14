import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Home from './components/main/Home'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import Cart from './components/cart/Cart'
import ProductDeatail from './components/productdetail/ProductDeatail'
import axios from 'axios'
import Registration from './components/registration/Registration'
import Profile from './components/profile/Profile'
export const ImageContext = React.createContext();
const App = () => {

  const[shot,setShot]=useState([])

  useEffect(()=>{
    const fetchImage=async()=>{
      const resImg=await axios.get('/api/image/image')
      setShot(resImg.data)
    }
    fetchImage() 
  },[])

  return (
    <>
     <Header />
     <main>
     <ImageContext.Provider value={shot} >
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart/:id?' element={ <Cart/>}/>
      <Route path='/profile' element={ <Profile/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/product/:id' element={<ProductDeatail/>}/>
     </Routes>
     </ImageContext.Provider>
     </main>
     <Footer/>
     </>
  )
}

export default App