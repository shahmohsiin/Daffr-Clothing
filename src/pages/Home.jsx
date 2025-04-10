import React from 'react'
import MenuAccount from '../components/MenuAccount'
import MainHeader from '../components/MainHeader'
import MainSlider from '../components/MainSlider'
import MainStrip from '../components/MainStrip'
import MainTypeSelector from '../components/MainTypeSelector'
import ProductList from '../components/ProductList'
import MainOffers from '../components/MainOffers'
import MainFooter from '../components/MainFooter'
import MainFeatures from '../components/MainFeatures'
import SiteRating from '../components/SiteRating'
import MainCollectionsBanner from '../components/MainCollectionsBanner'
import MainBrands from '../components/MainBrands'
import MainInstagram from '../components/MainInstagram'


import SliderImg from '../assets/images/hero-phone.webp'
import SliderLgImg from '../assets/images/hero-lg.jfif'
import img from '../assets/images/img.jpg' 
import HeaderWithBanner from '../components/HeaderWithBanner';
import './home.css'
import Hero from '../components/Hero'
import ProductRoute from '../components/ProductRoute'

const Home = () => {


  return (
    <>
    {/* <MenuAccount/> */}
    {/* <MainHeader border={true}/> */}



<HeaderWithBanner border={true}/>
    
    {/* <MainSlider/> */}


  <div className="top-slider-item mb-16">
    <div className="top-slider-img w-full md:h-[1000px]">
      {/* <img id="small"   className="w-full h-full bg-cover rounded-br-2xl rounded-bl-2xl md:rounded-bl-3xl border-b border-dashed border-b-[#111111]" src={SliderImg} alt />
      <img id="big"  className="w-full h-full bg-cover rounded-br-2xl rounded-bl-2xl md:rounded-bl-3xl border-b border-dashed border-b-[#111111]" src={SliderLgImg} alt /> */}
      <Hero/>
    </div>
  </div>



    <MainStrip/>
    <MainTypeSelector/>
    <ProductList/>
    <ProductRoute/>
    <MainOffers/>
    <MainFeatures/>
    <SiteRating/>
  <MainCollectionsBanner/>
  <MainBrands/>
  <MainInstagram/>
  <MainFooter/>
   
    </>
  )
}

export default Home
