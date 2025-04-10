import ProductData from '../models/productSchema.js';
import Users from '../models/userSchema.js';


//function for add to cart
const addtocart = async (req, res) => {
    try {
        let userData = await Users.findOne({ _id: req.user.id });

        if (!userData) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        // Ensure cartData is initialized
        if (!userData.cartData) {
            userData.cartData = {};
        }

        // Ensure itemId exists in request and is a valid number
        const itemId = req.body.itemId;
        if (!itemId) {
            return res.status(400).send({ success: false, message: "Invalid item ID" });
        }

        // Parse item count properly
        let currentCount = Number(userData.cartData[itemId]) || 0;
        userData.cartData[itemId] = currentCount + 1;

        // Update in database
        await Users.updateOne({ _id: req.user.id }, { $set: { cartData: userData.cartData } });

        console.log(userData.cartData);
        res.send({ success: true, message: "Added To Cart" });
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};


//function to remove from cart


const removeFromCart = async (req, res) => {
    console.log("Removing item:", req.body.itemId);

    let userData = await Users.findOne({ _id: req.user.id });

    // Ensure cartData exists
    if (!userData.cartData) {
        userData.cartData = {};  // ✅ Prevent undefined cartData
    }

    if (userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] -= 1;
    }

    await Users.findOneAndUpdate(
        { _id: req.user.id }, 
        { cartData: userData.cartData }
    );

    res.send({ success: true, message: "Removed From Cart" });
};

// function to get cart details

const getCartDetails=async(req,res)=>{
   
    console.log("GetCart")
    let userData = await Users.findOne({ _id: req.user.id })
    res.json(userData.cartData);
}







export {addtocart,removeFromCart,getCartDetails}