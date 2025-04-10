import React from 'react'
import HeadingBg from '../assets/images/bg.jpg'
import Hero from './Hero'

const HeadingWithBg = ({heading}) => {
  return (
    <div className='relative'>
  <Hero/>
<div 
 className={`flex justify-center items-center bg-fixed  w-auto h-[300px] bg-no-repeat bg-center bg-cover `}>

<h2 className='text-2xl text-white font-subHeading uppercase text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' >{heading}</h2>
</div>

    <div>

    </div>
  
    </div>
  )
}

export default HeadingWithBg
