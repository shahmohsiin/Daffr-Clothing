import React from 'react'
import { InsertChartOutlined } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram';

const InstagramItem = ({img}) => {
  return (

    <div className='relative insta-i'>


    <div className=' overflow-hidden min-h-[50px] min-w-[40px] '>
    <img src={img} className='w-full h-full insta-img  duration-[3000ms] ease-in-out ' alt="" />
       </div>


       <div className='insta-icon  opacity-0  duration-1000 ease-in-out w-full h-full absolute top-0 flex justify-center items-center left-0 right-0 bottom-0 '>
       <InstagramIcon  style={{fontSize:'28px',color:'white'}}/>
       </div>

       </div>
  )
}

export default InstagramItem
