import React from 'react'
import { Link } from "react-router-dom";

const BigPathNavigation = ({heading}) => {
  return (
    <div className='bg-[#F6F6F6] flex flex-col justify-items-center items-center py-20 uppercase px-5 text-xs  font-subHeading text-[#111111] '>

<div>
   <Link to="/"> <span className='font-semibold'>Home</span> </Link>
    <span className='mx-3  text-[#777777]'>
      |
    </span>
    <span className='text-[#777777] font-semibold'>{heading}</span>
</div>

    <span className='text-[#111111] font-heading text-4xl mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>{heading}</span>
      

    </div>
  )
}

export default BigPathNavigation
