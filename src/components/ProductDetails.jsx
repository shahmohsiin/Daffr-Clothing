import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ProductDetails = (props) => {

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '##D5AA01',
        },
        '& .MuiRating-iconHover': {
          color: '#111111',
        },
      });

  return (
    <>
    <div className='mt-10 px-5  '>
      <h1 className='text-2xl font-heading uppercase'>{props?.name}</h1>
    
    <div className='flex justify-start items-center mt-3'>
      <StyledRating
        name="customized-color"
       
        defaultValue={4.5}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<StarIcon fontSize="small" />}
        readOnly 
        emptyIcon={<StarBorderIcon fontSize="small" />}
      />

      <span className='text-sm text-[#777777] font-subHeading ml-1'>(4 customer reviews)</span>
</div>

<h2 className='text-3xl text-[#111111] font-heading mt-5'>{props?.price}</h2>

    </div>

<p className='text-sm text-[#777777] border-t font-subHeading mt-10 py-5 mx-5'>Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.</p>

    </>
  )
}

export default ProductDetails
