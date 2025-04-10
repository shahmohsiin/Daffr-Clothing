import React from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const customTheme = (outerTheme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode,
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              '--TextField-brandBorderColor': '#777777',
              '--TextField-brandBorderHoverColor': '#111111',
              '--TextField-brandBorderFocusedColor': '#111111',
              '& label.Mui-focused': {
                color: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: 'var(--TextField-brandBorderColor)',
            },
            root: {
              [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderHoverColor)',
              },
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              '&::before, &::after': {
                borderBottom: '1px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom: '1px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom: '1px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              '&::before': {
                borderBottom: '1px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom: '1px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom: '1px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
      },
    });

const SearchMenu = ({isOpen, setIsOpen}) => {
    
    const outerTheme = useTheme();

  return (
    <div className={`bg-white ${isOpen ? '-translate-y-0' : ' -translate-y-full'} transition duration-500 ease-in-out fixed w-full z-20 h-screen flex flex-col items-start px-5 pt-4 pb-16`}>
    
      <button onClick={() => setIsOpen(false)} className="self-end mb-6 rounded-full text-white w-[45px] h-[45px] text-2xl font-subHeading bg-[#111111]">
        ×
      </button>


   
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField InputProps={{
        classes: {
          input: 'text-[#111111] font-subHeading', 
        },
      }}
      InputLabelProps={{
        className: 'text-[#111111] font-subHeading', 
      }} fullWidth  label="What are you looking for?" variant="standard" />
      </ThemeProvider>
   
     
  
      <div className="w-full flex-1 mt-10 overflow-y-scroll scrollbar-none">
        <ul className="w-full">
        <div className='text-[#111111] font-heading uppercase font-semibold mb-4 text-sm'>Trending Searches</div>
          {[
            'Handbags',
            'Shoes',
            'Belts',
            'Bags',
    
          ].map((item, index) => (
            <li key={index} className="mb-4">
              <button className="text-left w-full text-base text-black font-subHeading flex justify-start items-center">
               <SearchIcon style={{fontSize:'15px'}}  className='mr-1' />
                <span className="underline hover:font-semibold hover:no-underline">{item}</span>
               
              </button>
            </li>
          ))}
        </ul>

        <div className="w-full mt-8">
          <ul>
          <div className='text-[#111111] font-heading uppercase font-semibold mb-4 text-sm'>New In</div>
        
            {['Man', 'Woman'].map((item, index) => (
              <li key={index} className="mb-4">
                <button className="text-left w-full text-base text-black font-subHeading underline hover:font-semibold hover:no-underline">
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

export default SearchMenu;
