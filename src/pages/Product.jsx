import React from 'react'

import MainHeader from '../components/MainHeader'
import PathNavigation from '../components/PathNavigation'
import ProductImgSlider from '../components/ProductImgSlider'
import ProductDetails from '../components/ProductDetails'
import SizeAndColorSelector from '../components/SizeAndColorSelector'
import ProductQuantityCart from '../components/ProductQuantityCart'
import DownUp from '../components/DownUp'
import ProductReviews from '../components/ProductReviews'

import RelatedProducts from '../components/RelatedProducts'
import ProductFooter from '../components/ProductFooter'

import XIcon from '@mui/icons-material/X';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Product = () => {

  

  return (
    <>
   
    <MainHeader />
    <PathNavigation/>
    <ProductImgSlider/>
    <ProductDetails/>
    <SizeAndColorSelector/>
    <ProductQuantityCart/>

{/* Wishlist */}

    <div className='flex justify-start px-5 mb-16 font-semibold text-sm items-center font-subHeading mt-10'>
<FavoriteBorderOutlinedIcon style={{fontSize:'17px'}}  className='mr-1' />
<span>Add To Wishlist</span>
    </div>

    <DownUp className="font-heading text-md text-[#111111] uppercase border-b " heading={'Description'}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </DownUp>

    <DownUp className="font-heading text-md text-[#111111] uppercase border-b " heading={'Additional information'}>
<ul className='flex flex-col gap-5'>
  <li className='flex justify-between items-center'>
  <span className='text-[#111111] font-semibold font-subHeading text-sm' >Color:</span>
  <span className='text-[#777777] font-subHeading text-sm'>Blue, Black, Green, Red Yellow</span>
  </li>
 
  <li className='flex justify-between items-center'>
  <span className='text-[#111111] font-semibold font-subHeading text-sm' >Size:</span>
  <span className='text-[#777777] font-subHeading text-sm'>L, M, XL, S, XS</span>
  </li>

</ul>
    </DownUp>

    <DownUp className="font-heading text-md text-[#111111] uppercase border-b " heading={'Reviews'}>
<ProductReviews/>
    </DownUp>


<ul className='flex flex-col gap-5 mt-10 px-5'>
  <li className='flex justify-start gap-x-5'>
  <span className='text-[#111111] font-semibold font-subHeading text-sm' >SKU:</span>
  <span className='text-[#777777] font-subHeading text-sm'>N/A</span>
  </li>
 
  <li className='flex justify-start gap-x-5 '>
  <span className='text-[#111111] font-semibold font-subHeading text-sm' >Categories:</span>
  <span className='text-[#777777] font-subHeading text-sm'>Bags, Bodycon Dress, Little Black Dress, Maxi Dress, Men, Olver collection, Sheath Dress, Shoes, Women</span>
  </li>

  <li className='flex justify-start gap-x-5'>
  <span className='text-[#111111] font-semibold font-subHeading text-sm' >Tags:</span>
  <span className='text-[#777777] font-subHeading text-sm'>ecommerce, fashion, men, women</span>
  </li>

</ul>



<ul className='flex justify-center items-center gap-3 px-5 my-10 border-t py-5 border-b'>

<li className='flex items-center gap-1 text-[#111111] font-subHeading text-sm'>
  <TwitterIcon  style={{fontSize:'18px',color:'#111111'}}/>
  <span>Twitter</span>
  </li>

  <li className='flex items-center gap-1 text-[#111111] font-subHeading text-sm'>
  <YouTubeIcon  style={{fontSize:'22px',color:'#111111'}}/>
  <span>Youtube</span>
  </li>

  <li className='flex items-center gap-1 text-[#111111] font-subHeading text-sm'>
  <InstagramIcon  style={{fontSize:'18px',color:'#111111'}}/>
  <span>Instagram</span>
  </li>



  <li className='flex items-center gap-1 text-[#111111] font-subHeading text-sm'>
  <FacebookIcon  style={{fontSize:'18px',color:'#111111'}}/>
  <span>Facebook</span>
  </li>
</ul>



<RelatedProducts heading={'Related Products'}/>

<ProductFooter/>
    
   
    </>
  )
}

export default Product
