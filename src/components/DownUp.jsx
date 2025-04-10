import React, { useState} from 'react'


import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';

const DownUp = (props) => {

    const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='mt-3'>

      <div className={`flex ${props.className}  justify-between items-center gap-2 px-5 py-2`}>   
      <span>{props.heading}</span>

      <button onClick={() => setIsOpen(!isOpen)}>
     {isOpen ? <HorizontalRuleOutlinedIcon fontSize='small' /> : <AddOutlinedIcon  fontSize='small' />} 
  
      </button>
 
      </div> 
      
      <div
  className={`transition-[max-height, padding] duration-[500ms] ease-in-out ${
    isOpen ? 'max-h-[100rem] py-5' : 'max-h-0 py-0'
  } overflow-hidden px-5 font-subHeading text-[#777777]`}
>


{props.children}


</div>

    </div>
  )
}

export default DownUp
