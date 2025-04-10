import React from 'react'
import BrandsItem from './BrandsItem'
import BrandsImg1 from '../assets/images/brands/1.png'
import BrandsImg2 from '../assets/images/brands/2.png'
import BrandsImg3 from '../assets/images/brands/3.png'
import BrandsImg4 from '../assets/images/brands/4.png'
import BrandsImg5 from '../assets/images/brands/5.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';


const MainBrands = () => {
  return (
<div className='my-10 md:my-10 lg:my-16'>
    <Swiper
      spaceBetween={0}
      slidesPerView={2}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
        640: { 
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: { 
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: { 
          slidesPerView: 5,
          spaceBetween: 25,
        },
      }}
        modules={[Autoplay]}
       
    >
      <SwiperSlide className='px-5'><BrandsItem img={BrandsImg1}/></SwiperSlide>
      <SwiperSlide className='px-5'><BrandsItem img={BrandsImg2}/></SwiperSlide>
      <SwiperSlide className='px-5'><BrandsItem img={BrandsImg3}/></SwiperSlide>
      <SwiperSlide className='px-5'><BrandsItem img={BrandsImg4}/></SwiperSlide>
      <SwiperSlide className='px-5'><BrandsItem img={BrandsImg5}/></SwiperSlide>
    </Swiper>

</div>


  )
}

export default MainBrands
