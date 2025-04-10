import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './place.css'
import MainHeader from './MainHeader';
import { toast } from 'react-toastify';
import Header from './Header';
import { ShopContext } from '../context/storeContext';

const OrderPage = () => {

 const  token = localStorage.getItem("token")
 const {API_BASE_URL} = useContext(ShopContext)

const [orderData,setorderData]=useState([])


const fetchOrderData = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null; // Exit if no token is found

    const { data } = await axios.get(`${API_BASE_URL}/order/userorders`, {
      headers: {
        "Content-Type": "application/json",
        token,
      },
    });

    if (!data.success) {
      toast.error(data.message);
      return null;
    }

    // Transform orders into a flat list of items with additional properties
    const allOrdersItem = data.orders.flatMap(order =>
      order.items.map(item => ({
        ...item,
        status: order.status,
        Payment: order.Payment,
        paymentMethod: order.PaymentMethod,
        date: order.date,
      }))
    );

    setorderData(allOrdersItem.reverse()); // Update state with reversed order list
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    toast.error(error.response?.data?.message || "Something went wrong while fetching orders.");
    return null;
  }
};


useEffect(()=>{
  fetchOrderData();
},[token])


console.log(orderData)


  return (

    <>
  <Header/>
    <div style={{height:'100vh'}} className="overflow-y-auto">
    <div className="w-full h-full mx-auto px-4 sm:px-6 py-8 sm:py-16 bg-gradient-to-br from-black-50 to-blue-50">
      <div className="flex items-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">MY ORDERS</h1>
        <div className="ml-6 flex-grow border-b-2 border-gray-200"></div>
      </div>
      <div className="space-y-6">
        {orderData.map((order) => (
          <div 
            key={order.id} 
            className="bg-white rounded-xl shadow-md p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Product Image */}
              <div className="w-full sm:w-32 h-48 sm:h-36 overflow-hidden rounded-lg mx-auto sm:mx-0 shadow-sm" style={{ maxWidth: '200px' }}>
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Product Details */}
              <div className="flex-grow">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">{order.name}</h2>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-medium text-indigo-700">₹ {order.new_price}</p>
                  <div className="flex gap-6 text-gray-600 text-sm">
                    <p className="flex items-center">
                      <span className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                      </span>
                      Quantity: {order.quantity}
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5 5 0 0 0 7.5 0l3-9M3 6h18l-3 9a5 5 0 0 1-7.5 0L3 6z" />
                        </svg>
                      </span>
                      Size: free
                      
                    </p>
                  </div>
                  <div className=" w-40 rounded-md text-gray-500 text-sm mt-1 flex items-center">
    <span className="mr-2 text-gray-500 text-sm mt-1 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a4 4 0 00-8 0v2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2h-4zM9 7a2 2 0 014 0v2H9V7z" />
      </svg>
    </span>
<span>    Payment: {order.paymentMethod}</span>
  </div>
                  <p className="text-gray-500 text-sm mt-1 flex items-center">
                    <span className="mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    {order?.date
      ? new Date(order.date).toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      : "N/A"}
                  </p>
                </div>
              </div>
              {/* Status and Track Button */}
              <div className="flex flex-row sm:flex-col justify-between sm:items-end items-center gap-4 sm:gap-8 mt-5 sm:mt-0">
                <div className="flex items-center bg-green-100 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-700 text-sm font-medium">{order.status}</span>
                </div>
                <button className="px-5 py-2.5 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default OrderPage;