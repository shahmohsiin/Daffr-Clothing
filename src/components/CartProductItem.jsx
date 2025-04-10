import React,{useState} from 'react'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ProductImg from '../assets/images/product.webp';

const CartProductItem = () => {

      const [quantity, setQuantity] = useState(1);
        const [size, setSize] = useState('');

  return (
    <div className='flex flex-col justify-center items-center border-b py-8'>

    <div className='w-[200px] mb-5 h-[160ppx]'>
       <img className='w-full h-full rounded-2xl' src={ProductImg} alt="" />
       </div>
   
    
       <h2 className="text-lg  font-subHeading mb-2 uppercase">Medium duffle bag with Web</h2>
       <p className="text-[#777777] text-sm font-subHeading">Style# 758664 FACK7 9768</p>
       <p className="text-[#777777] text-sm font-subHeading">Variation: beige and ebony Soft GG Supreme</p>
       <p className="text-base font-subHeading mt-4 mb-10">₹1,980</p>
 
       <div className="flex  items-center mb-6  gap-5">
         
         <div className='border py-1 px-2'>
         <label htmlFor="quantity" className="mr-3 text-sm font-subHeading">
           QTY:
         </label>
         <select
           id="quantity"
           value={quantity}
           onChange={(e) => setQuantity(e.target.value)}
           className="focus:outline-none font-subHeading text-sm border-none bg-transparent"
         >
           {[1, 2, 3, 4, 5].map((num) => (
             <option key={num} value={num}>
               {num}
             </option>
           ))}
         </select>
         </div>
 
         <div className='border py-1 px-2'>
         <label htmlFor="quantity" className="uppercase mr-3 text-sm font-subHeading">
           Size:
         </label>
         <select
           id="size"
           value={size}
           onChange={(e) => setSize(e.target.value)}
           className="focus:outline-none font-subHeading text-sm border-none bg-transparent"
         >
           {['S', 'M', 'L', 'XL', 'XXL'].map((num) => (
             <option key={num} value={num}>
               {num}
             </option>
           ))}
         </select>
         </div>
         
       </div>
 
 <div className='px-10'>
 
       <p className="text-sm text-[#111111] font-subHeading font-medium mb-2 text-center">AVAILABLE</p>
       <p className="text-sm text-[#777777] font-subHeading mb-6 text-center">
         Enjoy complimentary delivery or Collect In Store. Estimated delivery
         within 2 - 3 business days. Delivery between 9 am - 8 pm, Monday to
         Friday. A signature will be required upon delivery.
       </p>
 
       </div>
 
       <div className="flex items-center justify-between text-[#111111] text-sm " >
         {/* <button className="underline font-semibold font-subHeading border-r pr-5">EDIT</button> */}
         <button className="underline font-semibold font-subHeading border-r px-5">
         <DeleteOutlineIcon fontSize='small' className='mr-2'/>  
         <span>REMOVE</span>
         </button>
         <button className="underline font-semibold font-subHeading pl-5 flex items-center justify-center">
           <FavoriteBorderIcon fontSize='small' className='mr-2'/>  
            <span>SAVED ITEMS</span></button>
       </div>
  
   
     
 
 </div>
 
  )
}

export default CartProductItem
