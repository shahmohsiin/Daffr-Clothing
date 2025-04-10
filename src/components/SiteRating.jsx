 import React from 'react'
 import SiteRatingItem from './SiteRatingItem'

 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Autoplay } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/autoplay';

 const SiteRating = () => {
   return (
     <div className='mt-10 border-t border-t-[#111111] border-b border-b-[#111111]   py-16'>

<Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
       
    >
      <SwiperSlide className='px-5'>  <SiteRatingItem/></SwiperSlide>
      <SwiperSlide className='px-5'>  <SiteRatingItem/></SwiperSlide>
      <SwiperSlide className='px-5'>  <SiteRatingItem/></SwiperSlide>
      <SwiperSlide className='px-5'>  <SiteRatingItem/></SwiperSlide>
      
    </Swiper>
       
     </div>
   )
 }
 
 export default SiteRating
 