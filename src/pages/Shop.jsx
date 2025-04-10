import React from 'react'

import MainHeader from '../components/MainHeader'
import ProductFooter from '../components/ProductFooter'
import BigPathNavigation from '../components/BigPathNavigation'


import SortIcon from '@mui/icons-material/Sort';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const Shop = () => {

    const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
      ];

  return (
    <div>
   
       <MainHeader />

       <BigPathNavigation heading={'Shop'}/>


       <div className='fixed z-10 top-0 bottom-14 left-0 flex justify-center items-center pointer-events-none '>
       <TuneOutlinedIcon style={{fontSize:'50px', color:'#111111'}} className='mr-1 p-3 border bg-white' />
       </div>

       <div className='px-5 mt-10 flex  justify-between'>

<span className='text-sm mt-4 text-[#777777] font-subHeading mb-5'>Showing 1–12 of 19 results</span>

       
<div className='fixed z-10 top-0 bottom-14 right-0 flex justify-center items-center pointer-events-none '>
<div className='flex  items-center gap-2 '>
  
    <div className='flex justify-start items-center px-5 py-2 border bg-white w-full'>

<SwapVertIcon style={{fontSize:'25px'}} className='' />


<div className='flex flex-col'>
<span className='text-sm font-semibold font-subHeading hidden ml-2'>Sort</span>
<span className='text-xs  font-subHeading text-[#777777] hidden'>Popularity</span>
</div>

</div>
</div>
 </div>
       </div>

<div className='mb-10'>
<ProductList items={items} />
</div>
  

       <ProductFooter/>
      
    </div>
  )
}

export default Shop
