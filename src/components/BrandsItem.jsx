import React from 'react'


const BrandsItem = ({img}) => {
  return (
    <div className=' min-h-[50px] min-w-[40px] md:h-[50px] md:w-[160px]'>
 <img src={img} className='w-full h-full ' alt="" />
    </div>
  )
}

export default BrandsItem
