import React, {useState} from 'react'
import MainHeader from '../components/MainHeader'
import HeadingWithBg from '../components/HeadingWithBg'
import BigPathNavigation from '../components/BigPathNavigation'
import ProductFooter from '../components/ProductFooter'
import WishListProductItem from '../components/WishListProductItem' 
import ScrollToTop from '../components/Scroll'


const WishList = () => {


  return (
   <>
   <ScrollToTop/>
 <MainHeader/>
 <BigPathNavigation heading={'Wishlist'}/>
<div>

</div>

<ProductFooter/>

   </>
  )
}

export default WishList
