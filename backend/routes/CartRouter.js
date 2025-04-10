import express from "express";
import { getCartDetails,addtocart,removeFromCart} from "../controllers/cartController.js";
import fetchUser from "../middleware/fetchUser.js";

const cartRouter = express.Router();

cartRouter.post('/getcart',fetchUser,getCartDetails);
cartRouter.post('/addcart',fetchUser,addtocart)
cartRouter.post('/removecart',fetchUser,removeFromCart)

export default cartRouter;