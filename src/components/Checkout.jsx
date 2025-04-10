import React, { useContext, useState } from 'react';
import "./place.css"
import MainHeader from './MainHeader';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/storeContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Checkout = () => {
 const token = localStorage.getItem("token")
  const [selectedPayment, setSelectedPayment] = useState('razorpay');
  const { cartItems, getTotalCartAmount, clothes,API_BASE_URL} = useContext(ShopContext);
  const navigate = useNavigate()

  const [formData,SetFormData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    phone:"",
  })
     
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    SetFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  

  const initPay = (order)=>{
    const options ={
    key:import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency:"INR",
    description: 'Order Payment',
    order_id:order.id,
    receipt:order.receipt,
    handler: async(response)=> {
        console.log(response)
        try {
          const {data} = await axios.post(`${API_BASE_URL}/order/verifyRazorpay`,response,{headers:{token}})
          if(data.success){
            toast.success('Payment Success')

            window.location.replace('/orders');
          }
        } catch (error) {
          console.log(error)
          toast.error('Payment Failed')
          
        }
    }

    }
    const razor = new window.Razorpay(options)
    razor.open()
  }


  const onSubmitHandler = async (event) => {
  event.preventDefault();

    try {
      let orderItems = [];
  
      // Extract valid items from cart
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          const itemInfo = clothes.find((product) => product.id === Number(itemId));
          
          if (itemInfo) {
            const itemCopy = { ...itemInfo, quantity: cartItems[itemId] };
            orderItems.push(itemCopy);
          }
        }
      }
  
      console.log("Form Data:", formData);
      console.log("Order Items:", orderItems);
     
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getTotalCartAmount(),

        
      };
  
      switch (selectedPayment) {
        case "cash":
          const response = await fetch(`${API_BASE_URL}/order/place`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem("token"),
            },
            body: JSON.stringify(orderData),
          });
  
          const data = await response.json();
          console.log("Order Response:", data);
  
          if (data.success) {
           // Navigate to orders page
            window.location.replace('/orders');
          } else {
            toast.error(data.message);
          }
          break;


        case 'razorpay':
          console.log("Razorpay Payment");
        const responseRazorpay = await axios.post(`${API_BASE_URL}/order/razorpay`,orderData,{headers:{token}})
        if (responseRazorpay.data.success) {
         initPay(responseRazorpay.data.order)
        }
        break;

        default:
          toast.warn("Payment method not implemented");
          break;


      }
    } catch (error) {
      console.error("Order Placement Error:", error);
      toast.error("Something went wrong! Please try again.");
    }
  };


  return (
  
    <form onSubmit={onSubmitHandler} className=" checkout container mx-auto p-1 max-w-6xl rounded-xl shadow-lg w-[100%] ">
      <div className="  flex flex-col md:flex-row lg:flex-row gap-2 p-0">
        {/* Left Column - Delivery Information */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm " >
          <h2 className="text-xl text-gray-700 font-semibold mb-8 flex items-center">
            <span className="bg-blue-500 w-1 h-6 rounded-full mr-3"></span>
            DELIVERY INFORMATION
          </h2>
          
          {/* Hierarchical grid layout for delivery form fields */}
          <div className="space-y-6">
            {/* Personal Information Group */}
            <div>
              <h3 className="text-sm uppercase text-gray-500 mb-3 font-medium">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input onChange={onChangeHandler} name='firstName' value={formData.firstName}
                    type="text" 
                    placeholder="First name" 
                    className="w-full p-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="relative">
                  <input onChange={onChangeHandler} name='lastName' value={formData.lastName}
                    type="text" 
                    placeholder="Last name" 
                    className="w-full p-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Information Group */}
            <div>
              <h3 className="text-sm uppercase text-gray-500 mb-3 font-medium">Contact Information</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative">
                  <input onChange={onChangeHandler} name="email" value={formData.email}
                    type="email" 
                    placeholder="Email address" 
                    className="w-full p-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
                
                <div className="relative">
                  <input onChange={onChangeHandler} name='phone' value={formData.phone}
                    type="tel" 
                    placeholder="Phone" 
                    className="w-full p-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Address Information Group */}
            <div>
              <h3 className="text-sm uppercase text-gray-500 mb-3 font-medium">Shipping Address</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative">
                  <input onChange={onChangeHandler} name='street' value={formData.street}
                    type="text" 
                    placeholder="Street" 
                    className="w-full p-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input onChange={onChangeHandler} name='city' value={formData.city}
                      type="text" 
                      placeholder="City" 
                      className="w-full p-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <div className="absolute right-3 top-3 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input onChange={onChangeHandler} name='state' value={formData.state}
                      type="text" 
                      placeholder="State" 
                      className="w-full p-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <div className="absolute right-3 top-3 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input onChange={onChangeHandler} name='zipcode' value={formData.zipcode}
                      type="text" 
                      placeholder="Zipcode" 
                      className="w-full p-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <div className="absolute right-3 top-3 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Cart Totals & Payment Method */}
        <div className="flex-1 flex flex-col">
          <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
            <h2 className="text-xl text-gray-700 font-semibold mb-6 flex items-center">
              <span className="bg-green-500 w-1 h-6 rounded-full mr-3"></span>
              CART TOTALS
            </h2>
            
            <div className="divide-y divide-gray-100">
              <div className="flex justify-between py-3">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹ {getTotalCartAmount()}</span>
              </div>
              
              <div className="flex justify-between py-3">
                <span className="text-gray-600">Shipping Fee</span>
                <span className="font-medium">₹ 0</span>
              </div>
              
              <div className="flex justify-between py-3">
                <span className="text-gray-800 font-medium">Total</span>
                <span className="font-semibold text-blue-600">₹ {getTotalCartAmount()}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm flex-grow">
            <h2 className="text-xl text-gray-700 font-semibold mb-6 flex items-center">
              <span className="bg-purple-500 w-1 h-6 rounded-full mr-3"></span>
              PAYMENT METHOD
            </h2>
            
            {/* Grid layout for payment options (without Stripe) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div 
                className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedPayment === 'razorpay' 
                    ? 'border-blue-500 bg-blue-50 shadow-sm' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedPayment('razorpay')}
              >
                <div className="font-semibold text-blue-900">RAZORPAY</div>
                {selectedPayment === 'razorpay' && (
                  <div className="h-4 w-4 rounded-full bg-green-500 ml-2 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                )}
              </div>
              
              <div 
                className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedPayment === 'cash' 
                    ? 'border-blue-500 bg-blue-50 shadow-sm' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedPayment('cash')}
              >
                <div className="text-center font-medium">CASH ON DELIVERY</div>
                {selectedPayment === 'cash' && (
                  <div className="h-4 w-4 rounded-full bg-green-500 ml-2 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                )}
              </div>
            </div>
            
            <button name='submit' type='submit' className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium">
              
              PLACE ORDER
            
            </button>
          </div>
        </div>
      </div>
    </form>

  );
};

export default Checkout;