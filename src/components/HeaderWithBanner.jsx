import React, { useState, useEffect, useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MainMenu from './MainMenu';
import SearchMenu from './SearchMenu';
import ShoppingBag from './ShoppingBag';
import LogInMenu from './LogInMenu';
import { Link } from "react-router-dom";
import { ShopContext } from '../context/storeContext';
import LoginIcon from '@mui/icons-material/Login';
import './header.css'


const HeaderWithBanner = ({ border}) => {

  const {userDetails} = useContext(ShopContext);

  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [IsAccountOpen,setIsAccountOpen]=useState(false)
  const {getTotalCartItems } = useContext(ShopContext)



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>
<SearchMenu isOpen={isSearchMenuOpen} setIsOpen={setIsSearchMenuOpen}/>
<MainMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
<ShoppingBag isOpen={isBagOpen} setIsOpen={setIsBagOpen}/>
<LogInMenu isOpen={IsAccountOpen} setIsOpen={setIsAccountOpen}/>

    <div 
     className={`flex justify-between h-16 sm:h-16 md:h-16 lg:h-20 items-center px-5 sm:px-5 md:px-20 py-2  w-full transition-all duration-500 text-[#111111]
     ${ isAtTop ? 'bg-transparent border-none h-16 sm:h-16 md:h-20 lg:h-16 fixed z-[10] text-white' : 'bg-white fixed z-[10] top-0 shadow-lg border-b border-[#111111]' }`}>

    <div style={{cursor:"pointer"}} className='flex justify-start items-center'>
      <MenuIcon onClick={() => setIsMenuOpen(true)}  className='mr-3 text-2xl sm:text-2xl md:text-2xl lg:text-3xl opacity-100 hover:opacity-30'/>
      <Link to="/">

      <div
  className={`text-[#111111] text-center pointer-events-none uppercase transition-all ease-in-out duration-1000 ${
    isAtTop
      ? 'text-[5.5rem] md:text-[10rem]  z-[20] font-headingThin px-5 fixed top-[40%] md:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ffffff]'
      : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-center  px-5 relative top-0 left-0 font-headingThin transform translate-x-0 translate-y-0 text-[#111111]'
  }`}
>
  Daffr

</div>


      {/* <h1 className='text-3xl font-heading uppercase'>Daffr</h1> */}
      </Link>
    </div>
    

    <div style={{cursor:"pointer"}} className='flex justify-start items-center'>
    <SearchIcon onClick={() => setIsSearchMenuOpen(true)} className='mr-5 text-2xl sm:text-2xl md:text-2xl lg:text-3xl opacity-100 hover:opacity-30'/>
    <Link className='opacity-100 hover:opacity-30' to="/wishlist">
    <FavoriteBorderIcon  className='mr-5 text-2xl sm:text-2xl md:text-2xl lg:text-3xl'/>
    </Link>
    <div >
    <span style={{position:"absolute", display:"inline-block", backgroundColor:"black",color:"white", width:"17px",height:"18px", borderRadius:"80%", textAlign:"center", fontSize:"12px", marginTop:"-10px", marginLeft:"10px" }}>{getTotalCartItems()}</span>
      <ShoppingCartOutlinedIcon onClick={() => setIsBagOpen(true)}  className='opacity-100 text-2xl sm:text-2xl md:text-2xl lg:text-3xl hover:opacity-30'/>
     
    </div>
    
    
      {localStorage.getItem('token')? <div class=" py-6 flex flex-col justify-center sm:py-12">
<div class="flex items-center justify-center ">
  <div class=" relative inline-block text-left dropdown">
    <span class="rounded-md shadow-sm"
      ><button 
       type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
        <PersonOutlineIcon fontSize='medium' className=' ml-5 opacity-100 text-2xl sm:text-2xl md:text-2xl lg:text-3xl hover:opacity-30'  />
        </button
    ></span>
    <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
      <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
        <div class="px-4 py-3">         
          <p style={{color:"black"}} class="text-sm leading-5">Signed in as</p>
          <p class=" uppercase text-sm font-medium leading-5 text-gray-900 truncate">{userDetails.name}</p>
        </div>
        <div class="py-1">
          <a href="javascript:void(0)" tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Account settings</a>
          <Link to='/orders'>
          <a href="javascript:void(0)" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" > Orders </a>
          </Link>
         
          </div>
        <div class="py-1">
          <a onClick={()=>{localStorage.removeItem("token");window.location.reload('/');alert("You're Signed Out")}}  tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Sign out</a></div>
      </div>
    </div>
  </div>
</div>              
</div>
      :<LoginIcon onClick={() => setIsAccountOpen(true)} fontSize='medium' className=' ml-5 opacity-100 text-2xl sm:text-2xl md:text-2xl lg:text-3xl hover:opacity-30' />}



     
    </div>
   
   
    </div>
    </>
  );
};

export default HeaderWithBanner;
