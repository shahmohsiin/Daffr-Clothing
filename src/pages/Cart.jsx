import React, {useState} from 'react'
import MainHeader from '../components/MainHeader'
import HeadingWithBg from '../components/HeadingWithBg'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import DownUp from '../components/DownUp'
import CartProductItem from '../components/CartProductItem'
import ProductFooter from '../components/ProductFooter'

import BigPathNavigation from '../components/BigPathNavigation'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Cart = () => {

    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('');

  return (
   <>
 <MainHeader/>



 <div className='flex flex-col justify-items-center items-center   px-5 font-subHeading'>
    <span className='uppercase mb-5 text-center border-b  w-full pb-3 py-8 font-subHeading text-[#111111] text-2xl mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
    Your selections (5)
    </span>   




 </div>



<div className='pb-10'>

<div className='flex flex-col justify-center items-start pt-10 pb-5  px-5'>
<span className='uppercase font-semibold text-center font-subHeading text-[#111111] text-sm mb-2 whitespace-nowrap overflow-hidden text-ellipsis'>
    Order Summary
</span>

<span className='font-subHeading text-[#111111] text-sm  whitespace-nowrap overflow-hidden text-ellipsis'>
    DAFFR012345689
</span>


</div>


<ul className='border-t pt-5'>
    <li className='flex  justify-between  items-center mb-3  px-5'>
        <span className='font-subHeading uppercase text-[#111111] font-semibold text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            Subtotal
        </span>
        <span className='font-subHeading text-[#111111] text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            ₹ 1,000
        </span>
    </li>

    <li className='flex  justify-between  items-center  mb-3 px-5'>
        <span className='font-subHeading uppercase text-[#111111] font-semibold text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            Shipping
        </span>
        <span className='font-subHeading text-[#111111] text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            ₹ 48
        </span>
    </li>

    <li className='flex  justify-between  items-center  mb-3 px-5'>
        <span className='font-subHeading uppercase text-[#111111] font-semibold text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            Estimated Tax
        </span>
        <span className='font-subHeading text-[#111111] text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            ₹ 150
        </span>
    </li>
</ul>

<DownUp className="font-subHeading font-semibold text-sm text-[#111111] uppercase pt-8  " heading={'VIEW DETAILS'}>
<ul className=''>
    <li className='flex  justify-between  items-center mb-3  '>
        <span className='font-subHeading uppercase text-[#111111] font-semibold text-sm  whitespace-nowrap overflow-hidden text-ellipsis'>
            Subtotal
        </span>
        <span className='font-subHeading text-[#111111] text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            ₹ 1,000
        </span>
    </li>

    <li className='flex  justify-between  items-center  mb-3 '>
        <span className='font-subHeading uppercase text-[#111111] font-semibold text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            Shipping
        </span>
        <span className='font-subHeading text-[#111111] text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            ₹ 48
        </span>
    </li>

    <li className='flex  justify-between  items-center  mb-3 '>
        <span className='font-subHeading uppercase text-[#111111] font-semibold text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            Estimated Tax
        </span>
        <span className='font-subHeading text-[#111111] text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            ₹ 150
        </span>
    </li>
</ul>
    </DownUp>


<div className='font-subHeading text-[#111111] text-sm mt-2 px-5  '> 
You will be charged at the time of shipment. If this is a personalized or made-to-order purchase, you will be charged at the time of purchase.
</div>


 <div className='flex justify-center items-center px-5  w-full py-10'>


    <button className='w-full  bg-[#111111] text-sm rounded- text-white py-3 font-subHeading uppercase'>
Checkout
    </button>



</div> 



<div className='flex justify-center items-center px-5  w-full py-10 border-t'>
    <LocalShippingIcon className='text-[#111111] text-2xl'/>
    <span className='font-subHeading uppercase text-[#111111] text-sm ml-2 whitespace-nowrap overflow-hidden text-ellipsis'>
    Complimentary Express Shipping
    </span>
</div>

<div className='border-t border-b mb-10'>

<DownUp className="font-subHeading font-semibold text-sm text-[#111111] uppercase   " heading={'May We Help'}>
<ul className='flex flex-col justify-center items-start gap-5  '>
    <li className='flex justify-center items-center gap-2 pr-5'>
    <LocalPhoneIcon  style={{fontSize:'20px',color:'#111111'}}/>
    <span className='text-[#111111] font-subHeading underline'>+919026741652</span>
    </li>

    <li className='flex justify-center items-center gap-2'>
    <EmailIcon  style={{fontSize:'20px',color:'#111111'}}/>
    <span className='text-[#111111] font-subHeading underline'>support@daffr.com</span>
    </li>
</ul>

  
    </DownUp>


    <DownUp className="font-subHeading font-semibold text-sm text-[#111111] uppercase pt-2  " heading={'Payment Options'}>

    </DownUp>


    <DownUp className="font-subHeading font-semibold text-sm text-[#111111] uppercase pt-2 " heading={'Shipping Options'}>

    </DownUp>

</div>

<RelatedProducts heading={'You may also like'}/>  


</div>

<ProductFooter/>

   </>
  )
}

export default Cart
