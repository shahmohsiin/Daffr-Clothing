import React from 'react'


import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import PayIcons from '../assets/images/pay-icons.png'
import ProductInstagrm from './ProductInstagrm';

const ProductFooter = () => {
  return (

    <>


   <footer className='px-5 py-10 bg-[#111111]'>
  
  <div className='flex flex-col justify-center items-center'>
    <span className='text-5xl text-[#ffffff] uppercase  font-heading text-center'>Daffr</span>
   

   
   

<span className='text-sm mt-4 text-center text-[#ffffff] font-subHeading'>Receive offers, product alerts, styling inspiration and more. By signing up, you agree to our Privacy Policy.</span>
  

<ul className='flex justify-center items-center gap-5 mt-5 border-b  border-t py-5'>
    <li className='flex justify-center items-center gap-2 border-r pr-5'>
    <LocalPhoneIcon  style={{fontSize:'20px',color:'#ffffff'}}/>
    <span className='text-[#ffffff] font-subHeading'>+919026741652</span>
    </li>

    <li className='flex justify-center items-center gap-2'>
    <EmailIcon  style={{fontSize:'20px',color:'#ffffff'}}/>
    <span className='text-[#ffffff] font-subHeading'>support@daffr.com</span>
    </li>
</ul>



  </div>



  <div className='mt-10'>

  <span className='text-xl font-heading text-[#ffffff]  uppercase'>
  Other Pages
  </span>

  <ul className='grid grid-cols-2 gap-x-5 gap-y-2 mt-5 font-subHeading text-[#ffffff]'>
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

<span className='text-xl font-heading text-[#ffffff]  uppercase'>
Support
</span>

<ul className='grid grid-cols-2 gap-x-5 gap-y-2 mt-5 font-subHeading text-[#ffffff]'>
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

<div className='flex bg-[#111111] flex-col justify-center items-center border-t border-b py-5 border-[#ffffff] pt-10'>

{/* <div className='flex justify-center items-center gap-5'>
<YouTubeIcon  style={{fontSize:'22px',color:'#ffffff'}}/>
<InstagramIcon  style={{fontSize:'18px',color:'#ffffff'}}/>
<XIcon  style={{fontSize:'18px',color:'#ffffff'}}/>
<FacebookIcon  style={{fontSize:'18px',color:'#ffffff'}}/>

</div> */}

<ProductInstagrm/>

<img className='pt-5 w-56' src={PayIcons} alt="" />

</div>

<div className='flex bg-[#111111] justify-center items-center py-5 text-sm '>
  <span className='text-[#777777] font-subHeading'>
  © 2025 <span className='text-[#ffffff] font-heading'>DAFFR</span> All rights reserved. Designed by <span className='text-[#ffffff] font-heading'>Mohd Ali</span> 
  </span>
</div>

</>

  )
}

export default ProductFooter
