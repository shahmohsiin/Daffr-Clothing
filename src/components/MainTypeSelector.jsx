import React from 'react'
import ItemHeading from './ItemHeading'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const MainTypeSelector = () => {
  return (
    <>
    <ItemHeading heading='Popular Products' subHeading='eCommerce Talks discusses tech, current trends, and insights from around the eCommerce world'/>
      <div className='flex justify-center items-center border-t border-t-[#111111] border-b border-b-[#111111] py-3 mb-30 mx-5 mt-5'>
      <span className='font-heading text-md text-[#111111]'>MAN</span>
      <UnfoldMoreIcon fontSize='small' className='absolute right-5 '/>
      </div>
    </>
  
  )
}

export default MainTypeSelector
