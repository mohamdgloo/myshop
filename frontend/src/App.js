import React from 'react'
import Header from './components/header/Header'
import Home from './components/main/Home'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import Cart from './components/cart/Cart'
import ProductDeatail from './components/productdetail/ProductDeatail'

const App = () => {
  return (
    <>
     <Header/>
     <main>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={ <Cart/>}/>
      <Route path='/product/:id' element={<ProductDeatail/>}/>
     </Routes>
     </main>
     <Footer/>
     </>
  )
}

export default App