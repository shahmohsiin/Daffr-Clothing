import express from 'express'
import {placeOrder,placeOrderRazorpay,allOrders,userOrders,updateStatus, verifyRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import fetchUser from '../middleware/fetchUser.js'

const orderRouter= express.Router()

// Admin Features

orderRouter.post('/orderlist',allOrders)
orderRouter.post('/status',updateStatus)


// payment features


orderRouter.post('/place',fetchUser,placeOrder)
orderRouter.post('/razorpay',fetchUser,placeOrderRazorpay) 

// verify payments
orderRouter.post('/verifyrazorpay',fetchUser,verifyRazorpay)


// User Features

orderRouter.get('/userorders',fetchUser,userOrders);

export default orderRouter;
