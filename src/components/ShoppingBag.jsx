import React, { useContext } from 'react';
import ShoppingBagItem from './ShoppingBagItem';
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from '../context/storeContext';


const ShoppingBag = ({isOpen, setIsOpen}) => {
    
  const {getTotalCartAmount} = useContext(ShopContext)

  return (
    <div className={`bg-white ${isOpen ? '-translate-x-0' : ' translate-x-full'} transition-transform duration-500 ease-in-out fixed w-full z-20 h-screen flex flex-col items-start px-5 pt-4 pb-16`}>
    
      
      <div className='w-full font-subHeading flex justify-between items-center border-b '>

<span className='text-[#111111] font-heading text-xl uppercase'>Added To Shopping Bag</span>

      <button onClick={() => setIsOpen(false)} className="self-end mb-6 rounded-full text-white w-[45px] h-[45px] text-2xl font-subHeading bg-[#111111]">
        ×
      </button>
      </div>
  
      <div className="w-full flex-1 mt-10 overflow-y-scroll  scrollbar-none">

     <ShoppingBagItem />
    
   
    </div>


    <div className='w-full flex justify-between items-center gap-2 border-t pt-5 '>
      
      <span >Subtotal</span>
      <span>₹{getTotalCartAmount()}</span>
      
    </div>
    <div className='w-full flex justify-between items-center gap-2  pt-5'>
      <span >Shipping</span>
      <span >Free</span>
      
    </div>
  
    <div className='w-full flex justify-between items-center gap-2  pt-5'>
      <span style={{fontWeight:"900"}}>Total</span>
      <span style={{fontWeight:"900"}}>₹{Number(getTotalCartAmount())}</span>
      
    </div>
<div className='w-full flex justify-between items-center gap-2  pt-5'>

<Link className='w-full' to="/cart">
<button className='w-full bg-white border border-[#111111] text-sm text-[#111111] py-3 font-subHeading uppercase'>
View Shopping Bag
    </button>
    </Link>

<Link className='w-full' to='/checkout'>
    <button className='w-full bg-[#111111] text-sm text-white py-3 font-subHeading uppercase'>
Checkout
    </button>
</Link>
   
</div>

    </div>
  );
};

export default ShoppingBag;
