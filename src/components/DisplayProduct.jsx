import React, { useContext,useState } from 'react';
import { ShopContext } from '../context/storeContext';

const Displayproduct = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [maxLines, setMaxLines] = useState("line-clamp-4");

  return (
    <div style={{ margin: '20px', position: 'static' }}>
      <div className="font-sans">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="  overflow-hidden">
            <img style={{borderRadius:"20px"}}
              src={product?.image}
              alt="product"
              className=" lg:h-[70vh] w-full md:mb-30  lg:ml-2 object-contain object-top shadow-md "
            />
          </div>    

          <div className="py-2 px-8 max-lg:max-w-8xl">
            <div>
              <h2 className="uppercase text-xl font-bold text-gray-800">{product?.name}</h2>
              <p className="text-sm text-gray-500 mt-2">Popular in India Now</p>
            </div>

            <div className="flex items-center space-x-1 mt-4">
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 fill-gray-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-6">
              <div className="flex items-center flex-wrap gap-4">
                <p className="text-gray-800 text-4xl font-bold">₹{product?.new_price}</p>
                <p className="text-gray-400 text-sm mt-2">
                  <strike>₹{product?.old_price}</strike> <span className="ml-1">Tax included</span>
                </p>
              </div>
            </div>

            

            <div className="mt-6 space-y-4">
             
              <button  onClick={() => {
                  addToCart(product?.id);
                }}
                type="button"
                className="w-full px-4 py-2.5 border border-gray-800 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-md"
              >
                Add to cart
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800">Product Description</h3>
              <p  className={` text-sm text-gray-500 mt-4 ${maxLines}`}>{product?.description}</p>
            {maxLines === "line-clamp-4" ? <a className='text-blue-500' onClick={()=>setMaxLines()} >Read More</a>:<a className='text-blue-500' onClick={()=>setMaxLines("line-clamp-4")}>Read Less</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Displayproduct;
