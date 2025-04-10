import React from 'react'
import MainHeader from './MainHeader'

const Header = () => {
  return (
    <>
    <header style={{borderRadius:"10px",marginTop:"-10px"}} class=" bg-white  tracking-wide sticky top-0 z-50 shadow-[rgba(0,0,0,0.1)_-4px_9px_25px_-6px] font-[sans-serif]">
      <div class=" rounded-xl py-3 px-2 relative w-full">
       <MainHeader/>
      </div>
    </header>
    </>
  )
}

export default Header