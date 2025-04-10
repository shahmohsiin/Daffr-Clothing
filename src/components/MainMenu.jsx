import React from 'react';

const MainMenu = ({isOpen, setIsOpen}) => {
  return (
    <div className={`bg-white ${isOpen ? 'translate-y-0' : ' translate-y-full'} transition duration-500 ease-in-out fixed w-full z-20 h-screen flex flex-col items-start px-5 pt-4 pb-16`}>
    
      <button onClick={() => setIsOpen(false)} className="self-end mb-6 rounded-full text-white w-[45px] h-[45px] text-2xl font-subHeading bg-[#111111]">
        ×
      </button>

  
      <div className="w-full flex-1 overflow-y-scroll scrollbar-none">
        <ul className="w-full">
          {[
            'Gifts',
            'New In',
            'Handbags',
            'Travel',
            'Women',
            'Men',
            'Children',
            'Jewelry & Watches',
            'Décor & Lifestyle',
            'Fragrances & Make-Up',
          ].map((item, index) => (
            <li key={index} className="mb-4">
              <button className="text-left w-full text-xl text-black font-subHeading flex justify-between items-center">
                <span className="hover:underline hover:font-semibold">{item}</span>
                <span>›</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="w-full mt-8">
          <ul>
            {['Gucci Services', 'World of Gucci', 'Store Locator'].map((item, index) => (
              <li key={index} className="mb-4">
                <button className="text-left w-full text-lg text-black font-subHeading hover:underline">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      

      <div className="w-full mt-16">
        <ul>
          {['Sign In', 'My Orders', 'Contact Us', '+919026741652'].map((item, index) => (
            <li key={index} className="mb-7">
              <button className="text-left w-full text-lg underline hover:no-underline text-black font-subHeading hover:underline">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default MainMenu;
