import React from 'react';
import LogIn from './LogIn';
import { Link } from "react-router-dom";
import { Login } from '@mui/icons-material';

const LogInMenu = ({isOpen, setIsOpen}) => {
    

  return (
    <div className={`bg-white ${isOpen ? '-translate-x-0' : ' translate-x-full'} transition-transform duration-500 ease-in-out fixed w-full z-20 h-screen flex flex-col items-start px-5 pt-4 pb-16`}>
    
      
      <div className='w-full font-subHeading flex justify-between items-center border-b '>

<span className='text-[#111111] font-heading text-xl uppercase'>My Daffr Account</span>

      <button onClick={() => setIsOpen(false)} className="self-end mb-6 rounded-full text-white w-[45px] h-[45px] text-2xl font-subHeading bg-[#111111]">
        ×
      </button>
      </div>
  
      <div className="w-full flex-1 mt-10 overflow-y-scroll  scrollbar-none">

    <LogIn/>
   
    </div>



    </div>
  );
};

export default LogInMenu;
