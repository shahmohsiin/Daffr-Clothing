import React from 'react';
import SliderImg from '../assets/images/slider.jpg';
import SliderArrow from '../assets/images/slider-arrow.svg';
import EastIcon from '@mui/icons-material/East';
import YearImg  from '../assets/images/2023.svg';

const MainSlider = () => {
  return (
    <div className='relative h-[300px]  pt-8'>
      
<div className='absolute pl-5 z-[1] h-[300px]  flex flex-col  justify-center items-start top-0 bottom-0'>

    <h2 className='text-4xl font-heading uppercase'>
The <br/> <span className='font-headingDisplay'>Spring</span><br/> Collection
    </h2>

    <button className='border border-[#111111] text-[#111111] px-2 py-1 mt-5 rounded-full text-xs flex font-subHeading justify-center items-center gap-1'> SHOP NOW <span className='bg-[#111111] px-1 py-1 rounded-full flex justify-center items-center'>  <EastIcon style={{fontSize:'16px'}} className='text-white'/></span> </button>

</div>

<img src={SliderImg} className='w-[210px] rounded-2xl border border-[#111111] absolute top-0 right-0 mt-8'  alt="" />
<img src={YearImg} className='w-[50px]  mt-8'  alt="" />

<div className=' flex justify-center items-end h-full absolute bottom-0 left-0 right-0 '>

<img src={SliderArrow} className='w-[100px]'  alt="" />

</div>

      
    </div>
  )
}

export default MainSlider
