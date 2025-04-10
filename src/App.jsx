import React from 'react'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import LogIn from './components/LogIn'
import { configDotenv } from 'dotenv'

import { StyledEngineProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './components/Product'
import AllProducts from './components/AllProducts'
import Checkout from './components/Checkout'
import OrderPage from './components/Orders'





const App = () => {
     return (

    <Router>
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/allproducts' element={<AllProducts/>}/>
         <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        
        </Route>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path='/orders' element={<OrderPage/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  </Router>
 

  )
}

export default App
