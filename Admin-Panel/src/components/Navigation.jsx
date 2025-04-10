import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  
    const navItems = [
      {
        name: 'Dashboard',
        path: '/',
        icon: (
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
        )
      },
     
      {
        name: 'Products',
        path: '/allproducts',
        icon: (
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
        )
      },
      {
        name: 'Orders',
        path: '/orders',
        icon: (
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        )
      },
    
    ];
  
    return (
        <>
         <div className="flex justify-between items-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-800">DAFFR ADMIN</h1>
                 
                  <div className="flex space-x-2">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </div>
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                      </svg>
                    </div>
                    <div className="flex items-center  ">
                    <button onClick={()=>{localStorage.removeItem("token");window.location.reload()}} className=' shadow-sm cursor-pointer bg-white hover:bg-indigo-300 text-gray-800 px-4 py-2 rounded-full text-sm font-medium flex items-center transition-colors duration-200'  >Logout</button>
        
                    </div>
                  </div>
                </div>
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                isActive 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } px-6 py-2 rounded-full text-sm font-medium flex items-center shadow-sm transition-colors duration-200`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </div>
      </>
    );
  };

  export default Navigation;