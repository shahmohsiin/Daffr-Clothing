import React from 'react'


import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import PayIcons from '../assets/images/pay-icons.png'

const MainFooter = () => {
  return (

    <>


   <footer className='px-5 my-16'>
  
  <div className='flex flex-col justify-center items-center'>
    <span className='text-3xl text-[#111111] uppercase  font-heading text-center'>20% Discount for new subscriber</span>
   

   
   <div className='border px-5 py-7 mt-5 border-[#111111]  h-12 flex justify-center items-center'>

    <input
        type="text"
        placeholder="Enter your email address..."
        className="focus:outline-none font-subHeading border-none bg-transparent"
      />

      <span className='text-[#111111] font-semibold uppercase ml-5 font-subHeading'>SUBSCRIBE</span>
     

</div>

<span className='text-xs mt-2 text-[#777777] font-subHeading'>*** We not gonna save your data</span>
  
  </div>



  <div className='mt-10'>

  <span className='text-xl font-heading text-[#111111]  uppercase'>
  Other Pages
  </span>

  <ul className='grid grid-cols-2 gap-x-5 gap-y-2 mt-5 font-subHeading'>
    <li>Home</li>
    <li>Category</li>
    <li>Pages</li>
    <li>Contact</li>
    <li>Pricing</li>

    <li>Our Team</li>
    <li>Category</li>
    <li>Refund policy</li>
    <li>Shop</li>
  </ul>

  </div>

  <div className='mt-10'>

<span className='text-xl font-heading text-[#111111]  uppercase'>
Support
</span>

<ul className='grid grid-cols-2 gap-x-5 gap-y-2 mt-5 font-subHeading'>
  <li>Contact Us</li>
  <li>About Us</li>
  <li>Refund Policy</li>
  <li>Terms & Conditions</li>
  <li>Privacy Policy</li>

  <li>Delivery</li>
  <li>Returns Policy</li>
  <li>Custom Bike</li>
 
</ul>

</div>
 
</footer>

<div className='flex flex-col justify-center items-center border-t border-b py-5 border-[#111111] mt-10'>

<div className='flex justify-center items-center gap-5'>
<YouTubeIcon  style={{fontSize:'22px',color:'#111111'}}/>
<InstagramIcon  style={{fontSize:'18px',color:'#111111'}}/>
<XIcon  style={{fontSize:'18px',color:'#111111'}}/>
<FacebookIcon  style={{fontSize:'18px',color:'#111111'}}/>

</div>

</div>

<div className='flex justify-center items-center my-5 text-sm '>
  <span className='text-[#777777] font-subHeading'>
  © 2025 <span className='text-[#111111] font-heading'>DAFFR </span> All Rights Reserved
  </span>
</div>

</>

  )
}

export default MainFooter
