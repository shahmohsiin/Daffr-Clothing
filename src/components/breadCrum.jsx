import React from 'react'
import { Link } from 'react-router-dom';
import InventoryIcon from '@mui/icons-material/Inventory';


const BreadCrum = () => {
  return (
    <ul class=" bread flex items-center justify-center space-x-5 font-[sans-serif] mt-4">
      <li class="text-gray-500 text-base cursor-pointer flex items-center">
      <img class="w-4 fill-current mr-3"  src="https://img.icons8.com/material-outlined/24/home--v2.png" alt=">"/>
        Home
      </li>
      <li class="text-gray-500 text-lg">/</li>
      <li class="text-gray-500 text-base cursor-pointer flex items-center">
      <img class="w-4 fill-current mr-3"  src="https://img.icons8.com/material-outlined/24/product.png" alt=">"/>
       <Link to="/allproducts">Products</Link>
      </li>
      
      
    </ul>
  )
}

export default BreadCrum;