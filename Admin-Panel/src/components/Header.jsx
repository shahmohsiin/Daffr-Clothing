import React from 'react'
import logo from '../assets/logo.png'
import "./main.css"
import { toast } from 'react-toastify'



const Header = () => {


   
  return (
    <header class=' fixed top-0 ml-20 flex shadow-md py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
    <div class=' sticky top-0 bg-white flex flex-wrap items-center justify-between lg:gap-y-4 gap-y-6 gap-x-4 w-full'>
     <h1 id='logo-head' className='text-3xl'><p className='text-sm text-amber-800'>ADMIN</p>DAFFR </h1>
  
  
      <div  class='flex items-center max-sm:ml-auto space-x-6'>
        <div  style={{ display:"flex", alignContent:"center", justifyContent:"center", width:"90px",color:"white",textAlign:"center",borderRadius:"10px",height:"30px", }} className='bg-blue-500 hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700' ><button onClick={()=>{localStorage.removeItem("token");window.location.reload('/'); toast.success("Account Logged out")}} style={{cursor:"pointer"}}>Log Out</button></div>
  
      
      </div>
    </div>
  </header>
  )
}

export default Header