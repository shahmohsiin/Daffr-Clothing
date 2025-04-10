import React from 'react'
import StarStrip from '../assets/images/star-strip.svg'

const MainStrip = () => {

  const repeatCount = 10; 
  const elements = [];

  for (let i = 0; i < repeatCount; i++) {
    elements.push(
      <div key={i} className="flex items-center ">
        <img className="w-4" src={StarStrip} alt="" />
        <h1 className="text-md font-heading uppercase overflow-hidden whitespace-nowrap px-5">
          Spring Is Coming
        </h1>
      </div>
    );
  }

  return (

    <div className='overflow-hidden  h-[150px] max-w-full'>
    <div className='relative mt-10 '>


        <div className='absolute text-white z-[1] left-0 right-0 bg-[#111111] px-5 py-4 rotate-[4deg] -mr-10 -ml-10   '>
        <div className='flex justify-center items-center gap-2 animate-marquee'>
          
      
    {elements}
  
</div>
        </div>

        <div className='absolute text-[#111111] left-0 right-0 border-b border-b-[#111111] border-t -mr-10 -ml-10 border-t-[#111111] border-dashed px-5 py-4 -rotate-[10deg]'>
        <div className='flex justify-center items-center gap-2 '>
        {elements}
        </div>
        </div>
      
    </div>
    </div>
  )
}

export default MainStrip
