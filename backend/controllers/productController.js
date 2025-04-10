import ProductData from "../models/productSchema.js";



// function for add product
const AddProduct = async(req,res)=>{
    let data = req.body
    let products = await ProductData.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id + 1;
        console.log("if body")
    }
    else {
        id = 1;
        console.log("else body")
    }
      


    const product = new ProductData({
        id: id,
        image: data.image,
        name: data.name,
        new_price: data.new_price,
        old_price: data.old_price,
        description: data.description
    });
    console.log(product);
    await product.save();
    console.log("saved")
    res.json({
        success: true,
        name: data.name

    })
}

// function for list product

const ListProduct = async(req,res)=>{
    let products = await ProductData.find({})
    console.log("All Product Fetched")
    res.send(products);
}

// remove product function

const RemoveProduct = async(req,res)=>{

    await ProductData.findOneAndDelete({ id: req.body.id })
    console.log("Removed")
    res.json({
        success: 1,
        name: req.body.name
    })
    
}

// function for single product info
const SingleProduct = async(req,res)=>{
    
}


export {AddProduct, ListProduct, RemoveProduct,SingleProduct}