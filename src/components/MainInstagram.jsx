import React from 'react'
import Iimg1 from '../assets/images/instagram/1.jpg'
import Iimg2 from '../assets/images/instagram/2.jpg'
import Iimg3 from '../assets/images/instagram/3.jpg'
import Iimg4 from '../assets/images/instagram/4.jpg'
import Iimg5 from '../assets/images/instagram/5.jpg'
import InstagramItem from './InstagramItem'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';


const MainInstagram = () => {
  return (
    <div className='my-10 md:my-10 lg:my-16'>
    <Swiper
      spaceBetween={0}
      slidesPerView={2}
      autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
        640: { 
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: { 
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: { 
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1280: { 
          slidesPerView: 5,
          spaceBetween: 0,
        },
      }}
        modules={[Autoplay]}
       
    >
      <SwiperSlide className=''><InstagramItem img={Iimg1}/></SwiperSlide>
      <SwiperSlide className=''><InstagramItem img={Iimg2}/></SwiperSlide>
      <SwiperSlide className=''><InstagramItem img={Iimg3}/></SwiperSlide>
      <SwiperSlide className=''><InstagramItem img={Iimg4}/></SwiperSlide>
      <SwiperSlide className=''><InstagramItem img={Iimg5}/></SwiperSlide>
    </Swiper>

</div>
  )
}

export default MainInstagram
