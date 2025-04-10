import React from 'react'

const FeaturesItem = ({ heading, subHeading , img}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 px-5'>


 <span className='text-xl  font-heading text-[#111111] uppercase'>{heading}</span>
 <span className='text-sm text-[#777777] font-subHeading text-center'>{subHeading}</span> 

    </div>
  )
}

export default FeaturesItem
