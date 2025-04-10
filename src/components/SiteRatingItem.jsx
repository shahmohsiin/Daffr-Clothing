import React from 'react'
import QuoteImg from '../assets/images/quote.png'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const SiteRatingItem = () => {

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#111111',
        },
        '& .MuiRating-iconHover': {
          color: '#111111',
        },
      });

  return (
    <div className='flex flex-col justify-center items-center'>
      <img className='w-14 mb-8' src={QuoteImg} alt="" />

      <StyledRating
        name="customized-color"
        defaultValue={5}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<StarIcon fontSize="small" />}
        readOnly 
        emptyIcon={<StarBorderIcon fontSize="small" />}
      />

    <span className='text-md text-[#111111] font-heading mt-5 text-center uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non quis distinctio corrupti optio autem quos recusandae, consequuntur facilis inventore!</span>
<span className='text-md text-[#111111] font-heading mt-5 text-center uppercase'>Mohd Ali</span>
<span className='text-sm text-[#777777] font-subHeading text-center'>Founder & SEO</span>
    </div>
  )
}

export default SiteRatingItem
