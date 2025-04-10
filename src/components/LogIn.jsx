import { Password } from '@mui/icons-material';
import React, { useContext, useState } from 'react'
import { NavLink } from "react-router";
import { ShopContext } from '../context/storeContext';
import axios from 'axios';

const LogIn = () => {

  const {API_BASE_URL} = useContext(ShopContext)
  const [state,setState] = useState('Login')
  const [formData,SetFormData] = useState({
    username:"",
    password:"",
    email:"",
  })

  const DataHandler=(e)=>{
    SetFormData({...formData,[e.target.name]:e.target.value})
   
  }

  const login = async () => {
    console.log("Login", formData);
    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      const responseData = response.data;
  
      if (responseData.success) {
        localStorage.setItem('token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.errors || "Something went wrong. Please try again.");
    }
  };
  
  const Signup = async () => {
    console.log("Signup", formData);
    try {
      const response = await axios.post(`${API_BASE_URL}/user/register`, formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      const responseData = response.data;
  
      if (responseData.success) {
        localStorage.setItem('token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.response?.data?.errors || "Something went wrong. Please try again.");
    }
  };

  return (
    <div>

<div  className="font-[sans-serif] bg-opacity-60	bg-white max-w-4xl flex items-center mx-auto mt-10 p-4">
     

        <form className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto">
          <div className="mb-6">
            <h3 className=" text-gray-800 text-4xl font-bold uppercase ">Continue with your Existing Account.</h3>
          </div>

          <div  className="space-y-6">
            


           {state==="SignUp"? <div >
              <label className="text-gray-800 ml-2 text-sm mb-2 block"> Name:</label>
              <div className="relative flex justify-center items-center">
                <input name="username"  onChange={DataHandler}  value={formData.username} type='name' required className="text-gray-800 bg-white border border-gray-300 w-full text-md pl-5 pr-8 py-3.5 rounded-md outline-blue-500" placeholder="Enter email" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                  </g>
                </svg>
              </div>
            </div>:<></>}
            <div >
              <label className="text-gray-800 ml-2 text-sm mb-2 block"> Email:</label>
              <div className="relative flex justify-center items-center">
                <input  name="email" value={formData.email} onChange={DataHandler}  type="email" required className="text-gray-800 bg-white border border-gray-300 w-full text-md pl-5 pr-8 py-3.5 rounded-md outline-blue-500" placeholder="Enter email" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                  </g>
                </svg>
              </div>
            </div>

            <div>
              <label className="text-gray-800 ml-2 text-sm mb-2 block">Password:</label>
              <div className="relative flex items-center">
                <input name="password" value={formData.password} onChange={DataHandler}  type="password" required className="text-gray-800 bg-white border border-gray-300 w-full text-md pl-5 pr-8 py-3.5 rounded-md outline-blue-500" placeholder="Enter password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>

            <div  className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" required />
              <label for="remember-me" className="ml-3 block text-sm text-gray-600">
                I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div  className="mt-8">
            <button onClick={()=>state==="Login"?login():Signup()} type="button" className="w-full py-3.5 px-4 tracking-wider text-sm rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none">
           {state}
            </button>
          </div>
          {state==="Login"?<p className="text-gray-600 text-sm mt-6 text-center">Don't Have an Account? <a onClick={()=>{setState("SignUp")}} className=" cursor-pointer text-blue-600 font-semibold hover:underline ml-1"> Register</a></p>:<></>}
          {state==="SignUp"?<p className="text-gray-600 text-sm mt-6 text-center">Don't Have an Account? <a onClick={()=>{setState("Login")}} className=" cursor-pointer text-blue-600 font-semibold hover:underline ml-1"> Login</a></p>:<></>}
        </form>
      
    </div>

    </div>
  )
}

export default LogIn
