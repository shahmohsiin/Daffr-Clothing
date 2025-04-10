import React from 'react'
import OffersBannerImg from '../assets/images/offers-banner.png'
import OffersPosterImg from '../assets/images/offers-poster.jpg'
import EastIcon from '@mui/icons-material/East';
import { useEffect, useState } from 'react';


const MainOffers = () => {


  const initialTime = 10 * 24 * 60 * 60; // 10 days in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return initialTime; // Restart countdown
        }
        return prevTime - 1;
      });
    }, 1000);



    return () => clearInterval(timer);
  }, []);

  const seconds = timeLeft;

    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;



  return (
    <div className='bg-[#111111] relative my-16'>


<div className='relative flex justify-start items-center w-min  px-5'>

<div className='md:w-[500px] w-[350px]  h-full '>


 <img src={OffersBannerImg} className='w-full   h-full pt-10' alt="" />
 </div>
 
<div className='absolute md:flex md:right-0 z-[1] hidden'>

<div className="img  w-[250px] border border-black ">
              <img className="w-full h-full" src={OffersPosterImg} alt="" />
            </div>
            </div>

            </div>
<div className='md:absolute md:right-0 md:top-0 md:bottom-0 flex flex-col justify-center items-start md:pl-[610px]  px-5 pt-10'>


      <h3 className="text-white text-3xl font-heading uppercase">Upto 60% Offers</h3>
      <p className="font-subHeading text-white text-base my-5" >A fashion store is a retail establishment that specializes in selling clothing and accessories. Fashion stores can range from small boutiques to large department stores and can sell a wide range</p>
      <div className="grid gap-4 md:grid-cols-2 font-subHeading lg:grid-cols-4 sm:grid-cols-2 grid-cols-2">
        <div className="timer-bg w-34 h-34 text-white  flex flex-col justify-center items-center">
          <span className="text-5xl font-heading">{days}</span>
          <span>Days</span>
        </div>
        <div className="timer-bg w-34 h-34 text-white flex flex-col justify-center items-center">
          <span className="text-5xl font-heading">{hours}</span>
          <span>Hours</span>
        </div>
        <div className="timer-bg w-34 h-34 text-white flex flex-col justify-center items-center">
          <span className="text-5xl font-heading">{minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="timer-bg w-34 h-34 text-white flex flex-col justify-center items-center">
          <span className="text-5xl font-heading">{secs}</span>
          <span>Seconds</span>
        </div>
      </div>
      <button className=" flex justify-center items-center gap-2 text-white border border-white py-6 px-10 font-2xl w-max mt-16 mb-10 uppercase font-subHeading"><span>Shop Now</span><div className="w-5 h-5"><EastIcon style={{fontSize:'16px'}} className='text-white'/>
        </div>
      </button></div>



    </div>
  )
}

export default MainOffers
