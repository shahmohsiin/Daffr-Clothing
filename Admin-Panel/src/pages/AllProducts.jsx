import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import AddProduct from './AddProduct';
import { BACKEND } from '../App';




const AllProducts = () => {

  const [AllProducts, setAllProducts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const[display,setDisplay]=useState('none');
  
  // Handle remove button click 
  const handleRemoveClick = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };


  const confirmDelete = () => {
    if (productToDelete) {
      setAllProducts(AllProducts.filter(product => product.id !== productToDelete.id));
      removeProduct(productToDelete.id);
    }
    setShowDeleteModal(false);
    setProductToDelete(null);
  };

  // Cancel product deletion
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setProductToDelete(null);
  };



  const fetchData = async () => {
    await fetch(`${BACKEND}/api/product/list`).then((res) => res.json()).then((data) => { setAllProducts(data) });
  }

  useEffect(()=>{
    fetchData();
  },[])

  const removeProduct= async(id)=>{
    await fetch(`${BACKEND}/api/product/remove`,{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-Type':"application/json",
      },
      body:JSON.stringify({id:id})
    })
await fetchData();
  }
  return (
<>
<div className='mt-10 ml-15 mr-15'>
    <Navigation/> 
    </div>
    <hr className='w-full'/>
    <div className="bg-gray-50 p-4 rounded-lg">
    {/* Page Header */}
  
    
    {/* Quick Navigation */}
 
  
    <div className="flex justify-between items-center m-5">
      <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
     
      
     <button onClick={()=>setDisplay("block")} className=" cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors duration-200">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        Add New Product
      </button>
    
    </div>

    
    {/* Products Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 m-5 ">
      {AllProducts.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md group">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-[100%] h-[50%] object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full ${
              product.status === 'Active' ? 'bg-green-100 text-green-800' : 
              product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' : 
              'bg-red-100 text-red-800'
            }`}>
              {product.status}
            </span>
          </div>
          
         
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{product.name}</h3>
            
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-lg font-bold text-indigo-600">₹{product.new_price}</span>
              </div>
              <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
                <span className="text-sm font-medium text-gray-700">{product.stock} in stock</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                Edit
              </button>
              <button 
                className="flex-1 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                onClick={() => handleRemoveClick(product)}
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>


    {/* Pagination */}
    <div className="mt-50 flex justify-between items-center bg-white rounded-xl shadow-sm p-3">
      <div className="text-sm text-gray-700">
        Showing <span className="font-medium">1</span> to <span className="font-medium"></span> of <span className="font-medium"></span> products
      </div>
      <div className="flex space-x-2">
        <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50" disabled>
          Previous
        </button>
        <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors duration-200">
          Next
        </button>
      </div>
    </div>
    
    {/* Delete Confirmation Modal */}
    {showDeleteModal && (
      <div style={{backgroundColor:'rgba(0, 0, 0, 0.3)'}} className="fixed inset-0  flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Confirm Deletion</h3>
          <p className="text-gray-600 mb-6">
            Are you sure you want to remove "{productToDelete?.name}"? This action cannot be undone.
          </p>
          <div className="flex justify-end space-x-4">
            <button 
              className=" cursor-pointer px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              onClick={cancelDelete}
            >
              Cancel
            </button>
            <button 
              className=" cursor-pointer px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-200"
              onClick={confirmDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )}

<div className='h-full' style={{display:`${display}`,justifyContent:'center',alignItems:'center',position:'absolute',top:'0',right:'0',width:'100%',height:'100%',backgroundColor:'rgba(0, 0, 0, 0.3)'}}> 

<AddProduct setDisplay={setDisplay}/>
</div>
    
  </div>
  </>
  )

}

export default AllProducts
