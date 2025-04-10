import React, { useState } from 'react';
import { BACKEND } from '../App';

const AddProductPage = ({setDisplay}) => {
  const [image,setImage]=useState(false);
  const [productDetails, SetProductDetails] = useState({
    image:"",
    name:"",
    new_price:"",
    old_price:"",
    description:""
  });

  const [dragging, setDragging] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetProductDetails({
      ...productDetails,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      SetProductDetails({
        ...productDetails,
        image: e.target.files[0]
      });

      setImage(e.target.files[0]);
    }
  };



const add_product=async()=>{
  console.log(productDetails)
  let responseData;
  let product = productDetails;
  let formData= new FormData();
  formData.append('product',image);

  await fetch(`${BACKEND}/upload`,{
    method:'POST',
    headers:{
      Accept:'application/json',
      token:localStorage.getItem('token')
    },
    body:formData,
  

  }).then((resp)=>resp.json()).then((data)=>{responseData=data});

  if(responseData.success){
    product.image= responseData.image_url;
    console.log(product);
    await fetch(`${BACKEND}/api/product/add`,{
      method:'POST',
      headers:{
        Accept:"application/json",
        'Content-Type':'application/json',
      },
      body:JSON.stringify(product ),  
    }).then((resp)=>resp.json()).then((data)=>{
      data.success?alert("Product Added"):alert("Failed")
    })
  }
window.location.reload()
}





  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setProduct({
        ...product,
        image: e.dataTransfer.files[0]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product data submitted:', productDetails);
    // Here you would typically send the data to your API
  };

  return (
    <div className="h-full">
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 py-6 px-6 sm:px-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Add New Product</h1>
            <p className="text-indigo-100 mt-2">Fill in the information below to add a new product to your inventory</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Image Upload */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Image
                    </label>
                    <div 
                      className={`mt-1 flex justify-center rounded-lg border-2 border-dashed ${dragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} px-6 py-10 h-80`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      {productDetails.image ? (
                        <div className="relative h-full w-full flex items-center justify-center">
                          <img
                            src={URL.createObjectURL(productDetails.image)}
                            alt="Product preview"
                            className="max-h-full max-w-full object-contain rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => SetProductDetails({ ...productDetails, image: null })}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 shadow-lg hover:bg-red-600 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-2 text-center flex flex-col items-center justify-center">
                          <svg
                            className="mx-auto h-16 w-16 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="image-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                            >
                              <span>Upload a file</span>
                              <input id="image-upload" name="image-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Product Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Product Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={productDetails.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter product name"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3 transition-colors"
                  />
                </div>
                
                {/* Prices - Two Columns Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Current Price */}
                  <div>
                    <label htmlFor="currentPrice" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Price
                    </label>
                    <div className="mt-1 relative rounded-lg shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">₹</span>
                      </div>
                      <input
                        type="number"
                        id="currentPrice"
                        name="new_price"
                        min="0"
                        step="0.01"
                        value={productDetails.new_price}
                        onChange={handleChange}
                        required
                        placeholder="0.00"
                        className="pl-7 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3 transition-colors"
                      />
                    </div>
                  </div>
                  
                  {/* Old Price */}
                  <div>
                    <label htmlFor="oldPrice" className="block text-sm font-medium text-gray-700 mb-1">
                      Old Price <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <div className="mt-1 relative rounded-lg shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">₹</span>
                      </div>
                      <input
                        type="number"
                        id="oldPrice"
                        name="old_price"
                        min="0"
                        step="0.01"
                        value={productDetails.old_price}
                        onChange={handleChange}
                        placeholder="0.00"
                        className="pl-7 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3 transition-colors"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="6"
                    value={productDetails.description}
                    onChange={handleChange}
                    required
                    placeholder="Enter detailed product description..."
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3 transition-colors"
                  />
                </div>
                
                {/* Additional Fields (Optional) */}
                
              </div>
            </div>
            
            {/* Submit Buttons */}
            <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
              <button onClick={()=>setDisplay("none")}
                type="button"
                className=" cursor-pointer inline-flex justify-center py-3 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Cancel
              </button>
             
              <button
                type="submit" onClick={()=>add_product()}
                className="cursor-pointer inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
