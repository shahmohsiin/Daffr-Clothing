import React, { useContext, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/images/logo.svg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuAccount from '../components/MenuAccount'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';

import MainMenu from './MainMenu';
import SearchMenu from './SearchMenu';
import ShoppingBag from './ShoppingBag';
import LogInMenu from './LogInMenu';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { ShopContext } from '../context/storeContext';

const MainHeader = ({border}) => {

  const {getTotalCartItems,userDetails} = useContext(ShopContext)

 const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
    const [IsAccountOpen,setIsAccountOpen]=useState(false)

  return (

    <>

<SearchMenu isOpen={isSearchMenuOpen} setIsOpen={setIsSearchMenuOpen}/>
<MainMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
<ShoppingBag isOpen={isBagOpen} setIsOpen={setIsBagOpen}/>
<LogInMenu isOpen={IsAccountOpen} setIsOpen={setIsAccountOpen}/>

<div style={{height:"60px"}} className="flex justify-between items-center px-5 py-2 mb-0">

    <div className='flex justify-start items-center'>
      <MenuIcon onClick={() => setIsMenuOpen(true)} fontSize='small' className='mr-1 opacity-100 hover:opacity-30'/>
      <Link to="/">
      <h1 className='text-3xl ml-5 font-heading uppercase'>Daffr</h1>
      </Link>
    </div>

    <div className='flex justify-start items-center'>
    <SearchIcon onClick={() => setIsSearchMenuOpen(true)} fontSize='medium' className='mr-5 opacity-100 hover:opacity-30'/>
   
    <Link className='opacity-100 hover:opacity-30' to="/wishlist">
    <FavoriteBorderIcon fontSize='medium' className='mr-5 '/>
    </Link>
    <div >
    <span style={{position:"absolute", display:"inline-block", backgroundColor:"black",color:"white", width:"17px",height:"18px", borderRadius:"80%", textAlign:"center", fontSize:"12px", marginTop:"-10px", marginLeft:"10px" }}>{getTotalCartItems()}</span>
      
         <ShoppingCartOutlinedIcon onClick={() => setIsBagOpen(true)} fontSize='medium' className=' mr-5 opacity-100 hover:opacity-30'/>
    </div>

    {localStorage.getItem('token')? <div className=" py-6 flex flex-col justify-center sm:py-12">
<div className="flex items-center justify-center ">
  <div className=" relative inline-block text-left dropdown">
    <span className="rounded-md shadow-sm"
      ><button 
       type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
        <PersonOutlineIcon fontSize='medium' className='mr-5 opacity-100 text-2xl sm:text-2xl md:text-2xl lg:text-3xl hover:opacity-30'  />
        </button
    ></span>
    <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
      <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
        <div className="px-4 py-3">         
          <p style={{color:"black"}} className="text-sm leading-5">Signed in as</p>
          <p className=" uppercase text-sm font-medium leading-5 text-gray-900 truncate">{userDetails.name}</p>
        </div>
        <div className="py-1">
          <a href="javascript:void(0)" tabindex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Account settings</a>
          <Link to="/orders" tabindex="1" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" > Orders </Link>
          </div>
        <div className="py-1">
          <a onClick={()=>{localStorage.removeItem("token");alert("You're Signed Out");window.location.reload('/')}}  tabindex="3" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Sign out</a></div>
      </div>
    </div>
  </div>
</div>              
</div>
      :<LoginIcon onClick={() => setIsAccountOpen(true)} fontSize='medium' className=' mr-5 opacity-100 text-2xl sm:text-2xl md:text-2xl lg:text-3xl hover:opacity-30' />}
    </div>

    </div>

    </>
  )
}

export default MainHeader
