import Razorpay from "razorpay";
import orderModel from "../models/OrderSchema.js"
import Users from "../models/userSchema.js"

const deliveryCharge = 0; // Delivery charge for orders

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  }); // Create a new instance of Razorpay

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= 300; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  



// Placing Orders using COD Method

const placeOrder = async (req, res) => {
    try {
        // Extract user ID from authenticated request
        const userId = req.user?.id || req.body.userId; 
        const { items, amount, address } = req.body;

        if (!userId || !items || !amount || !address) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // Create order object
        const orderData = {
            userId,
            items,
            amount,
            address, // Store address
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
        };

        // Save order to DB
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Clear user cart after order placement
        await Users.findByIdAndUpdate(userId, { cartData: getDefaultCart() });

        res.json({ success: true, message: "Order Placed Successfully" });

    } catch (error) {
        console.error("Order Placement Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


// Placing orders using Razorpay Method
const placeOrderRazorpay = async (req, res) => {
  try {
    const userId = req.user?.id || req.body.userId; 
    const { items, amount, address,} = req.body;

    const orderDataRazorPay = {
      userId,
      items,
      amount,
      address,
      PaymentMethod: "Razorpay",
      Payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderDataRazorPay);
    await newOrder.save();

    const options = {
      amount: amount * 100, // amount in smallest currency unit (paise)
      currency: "INR",
      receipt: newOrder._id.toString(),
    };

    // Correct way to handle Razorpay order creation using async/await
    const order = await new Promise((resolve, reject) => {
      razorpayInstance.orders.create(options, (err, order) => {
        if (err) {
          reject(err);
        } else {
          resolve(order);
        }
      });
    });

    res.status(200).json({ 
      success: true, 
      order, 
      message: "Order successfully created with Razorpay." 
    });

  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to place order. Please try again later." 
    });
  }
};

const verifyRazorpay = async (req,res) =>{
  try {
    const userId = req.user?.id || req.body.userId; 
    const {razorpay_order_id,} = req.body
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
   if (orderInfo.status === "paid") {
    const updatedOrder = await orderModel.findByIdAndUpdate(
      orderInfo.receipt,
      { Payment: true },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    res.json({ success: true, message: "Payment successful", order: updatedOrder.items });
   }
    else{
      res.json({ success: false, message: "Payment failed" });
    }

    await Users.findByIdAndUpdate(userId, { cartData: getDefaultCart() });
   
  
  } catch (error) {
    
  }
}

// All Orders data from Admin Panel

const allOrders= async(req,res)=>{


  try {
    const orders = await orderModel.find({}).sort({ createdAt: -1 }); // Fetch all orders
    res.json({ success: true, orders });  // Send orders data to client side      

  } catch (error) {
   console.log("Error fetching orders:", error);
   res.status(500).json({ success: false, message: "Server error" }); // Send error message to client side  
  }


}



// User Order Data for frontend
const userOrders = async (req,res)=>{

    try {
        const userId = req.user.id;
    
        // Find all orders for the user
        const orders = await orderModel.find({ userId }).sort({ createdAt: -1 });
    
        res.json({ success: true, orders });
      } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ success: false, message: "Server error" });
      }

}

// update order status

const updateStatus = async(req,res)=>{
  try {
    const { orderId, newStatus } = req.body;

    if (!orderId || !newStatus) {
      return res.status(400).json({ success: false, message: "Missing orderId or newStatus" });
    }

    const updatedOrder = await orderModel.findByIdAndUpdate(
      orderId,
      { status: newStatus },
      { new: true } // This returns the updated document
    );

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, message: "Order status updated successfully", order: updatedOrder });

  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }

}


export {placeOrder,placeOrderRazorpay,allOrders,userOrders,updateStatus,verifyRazorpay}