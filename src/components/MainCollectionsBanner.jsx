import React from 'react'
import BannerImg from '../assets/images/m1_banner.jpg'
import CollectionButton from '../assets/images/collection-button.svg'

const MainCollectionsBanner = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-between items-center '>

<img src={BannerImg} className='w-full md:w-[65%]' alt="" />
      

<div className='relative  w-full h-[200px] sm:h-[250px] md-[250px] lg:h-[300px] my-10 mx-5 '>

<div className=' z-[1]  absolute left-0 top-0 bottom-0'>
<div className='text-[#111111] text-4xl sm:text-4xl lg:text-6xl md:text-4xl text-nowrap font-heading uppercase rotate-90 ' >
Man
</div>

</div>

<div className=' z-[1] absolute lg:-left-11 md:-left-7 sm:-left-7 -left-7  bottom-0'>
<div className='text-[#111111] text-4xl sm:text-4xl lg:text-6xl md:text-4xl text-nowrap font-heading uppercase rotate-90 ' >
Women
</div>

</div>


<div className='absolute flex justify-center items-center right-0 top-0 bottom-0'>
<img src={CollectionButton} className='w-44 sm:w-44 lg:w-72  md:w-44 mr-10 lg:mr-16 sm:mr-10 md:mr-10' alt="" />
</div>


</div>


    </div>
   
</>
    
  )
}

export default MainCollectionsBanner
