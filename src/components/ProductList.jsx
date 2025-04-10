import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { ShopContext } from '../context/storeContext';

const ProductList = () => {
  const { clothes } = useContext(ShopContext)
  
  return (
    <div className="font-[sans-serif] m-10 p-5 mx-auto lg:max-w-10xl max-w-8xl">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {clothes.map((item, i) => (
          <ProductItem 
            key={item.id}
            id={item.id} 
            Image={item.image} 
            name={item.name} 
            Price={item.new_price} 
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList