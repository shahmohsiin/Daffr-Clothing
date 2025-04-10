import React, { useContext, } from 'react'
import { ShopContext } from '../context/storeContext'
import { useParams } from 'react-router-dom'
import DisplayProduct from './DisplayProduct'
import MainHeader from './MainHeader'
import ProductFooter from './ProductFooter'
import ScrollToTop from './Scroll'
import RelatedProduct from './RelatedProduct'
import BreadCrum from './breadCrum'
import HeaderWithBanner from './HeaderWithBanner'
import Header from './Header'


const Product = () => {
    const {clothes} = useContext(ShopContext)
    const {productId} = useParams();
    const product = clothes.find((e)=>e.id===Number(productId));

  
  return (
  <>
<ScrollToTop/>
<Header/>
<BreadCrum/>
<DisplayProduct product = {product} />
<RelatedProduct product = {clothes} />

  <ProductFooter/>
   </>
  )
}

export default Product;