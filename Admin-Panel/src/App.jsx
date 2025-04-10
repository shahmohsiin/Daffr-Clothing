import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/AddProduct';
import LogIn from './components/LogIn';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Orders from './pages/Orders';


export const BACKEND = import.meta.env.VITE_BACKEND_URL

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):"")


  useEffect(()=>{

    localStorage.setItem('token',token)

  },[token])

  return (

    <div>
      <ToastContainer/>

      {token === "" ? <LogIn setToken={setToken} /> :
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/AllProducts" element={<AllProducts token={token} />} />
              <Route path='/Addproducts' element={< AddProduct token={token} />} />
              <Route path='/orders' element={<Orders token={token}/>} />
             
                 
            </Routes>
          </BrowserRouter>
        </>
      }
    </div>


  )
}

export default App