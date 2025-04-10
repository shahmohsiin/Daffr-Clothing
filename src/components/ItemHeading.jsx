import React from 'react'
import HStarIcon from '../assets/images/h-star.svg';
const ItemHeading = ({heading, subHeading, noSpace = false}) => {
  return (
    <div className={`flex flex-col justify-center items-center px-5 ${noSpace ? '' : 'py-4'} `}>

        <div className={`flex justify-center items-center gap-3 uppercase ${noSpace ? '' : 'mb-5'} `}>
        <img className='w-4' src={HStarIcon} alt="" />
          <h2 className='text-2xl font-heading'>{heading}</h2>
            <img className='w-4' src={HStarIcon} alt="" />
        </div>

{subHeading && <p className='text-sm text-center font-subHeading text-[#777777]'>{subHeading}</p>}
        
      
    </div>
  )
}

export default ItemHeading
