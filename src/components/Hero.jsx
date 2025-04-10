import React from "react";
import SliderImg from '../assets/images/hero-phone.webp'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Hero = () => {
  return (
 
    <div className=" relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Hierarchical Grid */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0 ">
        {[
          "src/assets/images/hero-phone.webp",
          "src/assets/images/hero-phone.webp",
          "src/assets/images/hero-phone.webp",
          "src/assets/images/hero-phone.webp",
          "src/assets/images/hero-phone.webp",
          "src/assets/images/hero-phone.webp",
          "src/assets/images/hero-phone.webp",
          
        ].map((src, index) => (
          <div 
            key={index} 
            className={`relative w-full h-full ${index === 0 ? 'col-span-1 row-span-5' : 'col-span-1 row-span-1'}`}>
            <img src={src} alt={`Men Fashion ${index}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500" />
          </div>
        ))}
      </div>
       
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-white text-center px-4">
   
   
      <ExpandMoreIcon style={{marginTop:"500px",backgroundColor:"white",color:"black",borderRadius:"50px"}} fontSize="large" className="animate-pulse"  / >
    
      </div>

      </div>
    
  );
};

export default Hero;
