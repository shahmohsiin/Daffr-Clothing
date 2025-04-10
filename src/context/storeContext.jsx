import React, { createContext, useEffect, useState, useCallback, useMemo } from "react";

export const ShopContext = createContext(null);

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getDefaultCart = () => {
  const cart = {};
  for (let index = 0; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};




const ShopContextProvider = ({ children }) => {
  const [clothes, setClothes] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart);
  const [search, setSearch] = useState('');
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [userDetails, setUserDetails] = useState({});
  
  getDefaultCart()

  const fetchWithAuth = useCallback(async (endpoint, method = "GET", body = null) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method,
        headers: {
          Accept: "application/form-data",
          'Content-Type': 'application/json',
          ...(token && { token })
        },
        ...(body && { body: JSON.stringify(body) })
      });
      
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error in ${endpoint}:`, error);
      return null;
    }
  }, [token]);
  
  // Fetch products only once when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchWithAuth("/product/list");
      if (data) setClothes(data);
   

    };
    
    fetchProducts();
  }, [fetchWithAuth]);
  
  // Fetch cart and user details when token changes
  useEffect(() => {
    if (!token) return;
    
    const fetchUserData = async () => {
      // Fetch cart data
      const cartData = await fetchWithAuth("/cart/getcart", "POST");
      if (cartData) setCartItems(cartData);
      
      // Fetch user details
      const userData = await fetchWithAuth("/user/getuser", "POST");
      if (userData) setUserDetails(userData);
    };
    
    fetchUserData();
  }, [token, fetchWithAuth]);
  
  // Update token in state when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };
    
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  
  const addToCart = useCallback(async (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    
    if (token) {
      await fetchWithAuth("/cart/addcart", "POST", { itemId });
    }

   
  }, [token,fetchWithAuth]);
  
  const removeFromCart = useCallback(async (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    
    if (token) {
      await fetchWithAuth("/cart/removecart", "POST", { itemId });


      useEffect(()=>{
        if (cartItems===undefined) {
          getDefaultCart();
        }
        
      },[])
      
      
    }
  }, [token, fetchWithAuth]);
  
  const getTotalCartAmount = useCallback(() => {
    return Object.entries(cartItems).reduce((total, [item, quantity]) => {
      if (quantity > 0) {
        const itemInfo = clothes.find(product => product.id === Number(item));
        return itemInfo ? total + (itemInfo.new_price * quantity) : total;
      }
      return total;
    }, 0);
  }, [cartItems, clothes]);
  
  const getTotalCartItems = useCallback(() => {
    return Object.values(cartItems).reduce((total, quantity) => {
      return quantity > 0 ? total + quantity : total;
    }, 0);
  }, [cartItems]);


  

  const contextValue = useMemo(() => ({
    clothes,
    cartItems,
    setCartItems,
    userDetails,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    search,
    setSearch,
    token,
    getDefaultCart,
    API_BASE_URL
 
  }), [
    clothes, 
    cartItems, 
    userDetails, 
    addToCart, 
    removeFromCart, 
    getTotalCartAmount, 
    getTotalCartItems,
    search,
    getDefaultCart,
    token,
    API_BASE_URL
  ]);
  
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
