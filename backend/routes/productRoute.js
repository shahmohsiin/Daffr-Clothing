import express from "express";
import { ListProduct,AddProduct,RemoveProduct,SingleProduct } from "../controllers/productController.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter= express.Router();

productRouter.post('/add',AddProduct);
productRouter.post('/remove',RemoveProduct);
productRouter.post('/single',SingleProduct);
productRouter.get('/list',ListProduct);

export default productRouter