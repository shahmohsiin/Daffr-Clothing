import React,{useState} from 'react'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ProductImg from '../assets/images/product.webp';
import CloseIcon from '@mui/icons-material/Close';

const WishListProductItem = () => {


  return (
    <div className='relative flex flex-col justify-center items-center border-b py-8'>

    <div className='w-[200px] mb-5 h-[160ppx]'>
       <img className='w-full h-full rounded-2xl' src={ProductImg} alt="" />
       </div>
   
    
       <h2 className="text-lg  font-subHeading mb-2 uppercase">Medium duffle bag with Web</h2>
       <p className="text-[#777777] text-sm font-subHeading">Style# 758664 FACK7 9768</p>
       <p className="text-[#777777] text-sm font-subHeading">Variation: beige and ebony Soft GG Supreme</p>
       <p className="text-base font-subHeading mt-4 mb-10">₹1,980</p>
 
     
 
 
 
       {/* <div className="flex items-center justify-between text-[#111111] text-sm " >
        
         <button className="underline font-semibold font-subHeading border-r px-5">
         <DeleteOutlineIcon fontSize='small' className='mr-2'/>  
         <span>REMOVE</span>
         </button>
         <button className="underline font-semibold font-subHeading pl-5 flex items-center justify-center">
           <FavoriteBorderIcon fontSize='small' className='mr-2'/>  
            <span>SAVED ITEMS</span></button>
       </div> */}
  
   
       <div className='flex justify-center items-center px-5  w-full '>


<button className='w-full  bg-[#111111] text-sm rounded- text-white py-3 font-subHeading uppercase'>
Add To Bag
</button>



</div>


<div className='absolute top-8 right-5 opacity-100 hover:opacity-30'>

<CloseIcon style={{fontSize:'20px'}} className='text-[#111111]'/>

</div>
     
 
 </div>
 
  )
}

export default WishListProductItem
