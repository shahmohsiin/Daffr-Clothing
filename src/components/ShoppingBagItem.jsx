import React, { useContext } from 'react'
import ProductImg from '../assets/images/product.webp';
import { ShopContext } from '../context/storeContext';

const ShoppingBagItem = () => {
  const {clothes,cartItems,removeFromCart,addToCart} = useContext(ShopContext)
  return (
<>
{clothes.map((e)=>{
if(cartItems[e.id]>0){
  return     <div className='flex justify-start items-start mb-5'>

  <div className='w-[120px] h-[160ppx]'>
  <img className='w-full h-full rounded-2xl' src={e.image} alt="" />
  </div>

  <div className='pl-5 flex flex-col justify-center items-start '>
 
<span className='text-[#111111] mb-1 font-subHeading font-semibold uppercase text-sm'>
{e.name}
</span>

<span className='text-[#111111] mb-2 font-subHeading'>
₹{e.new_price*cartItems[e.id]}
</span>


<div style={{display:"flex", flexDirection:"row"}}>

<button onClick={()=>{removeFromCart(e.id)}} style={{ backgroundColor:"black", borderRadius:"20px", color:"white", width:"40px", height:"30px", fontWeight:"900", marginTop:"10px", marginRight:"10px"
}} >-</button>

<button onClick={()=>{removeFromCart(e.id)}} style={{ backgroundColor:"black", borderRadius:"20px", color:"white", width:"40px", height:"30px", fontWeight:"400", marginTop:"10px", marginRight:"10px"
}} >{cartItems[e.id]}</button>
<button  onClick={()=>{addToCart(e.id)}} style={{ backgroundColor:"black", borderRadius:"20px", color:"white", width:"40px", height:"30px", fontWeight:"900", marginTop:"10px"
}} >+</button>

</div>


  </div>

  </div>
}
})}
</>
  )
}

export default ShoppingBagItem
