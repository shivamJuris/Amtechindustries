import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please Select Product Size");
      return;
    }

    let CartData = structuredClone(cartItems);

    if (CartData[itemId]) {
      if (CartData[itemId][size]) {
        CartData[itemId][size] += 1;
      } else {
        CartData[itemId][size] = 1;
      }
    } else {
      CartData[itemId] = {}; // ✅ create object for sizes
      CartData[itemId][size] = 1; // ✅ add the first size count
    }

    setCartItems(CartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        try {
          if (cartItems[itemId][size] > 0) {
            totalCount += cartItems[itemId][size];
          }
        } catch (error) {
          // .error(error);
          toast.error(error);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
  let totalAmount = 0;

  for (const itemId in cartItems) {
    const itemInfo = products.find((product) => product._id === itemId);

    if (!itemInfo) continue; // Agar product milta hi nahi toh skip

    for (const size in cartItems[itemId]) {
      const quantity = cartItems[itemId][size];
      if (quantity > 0) {
        totalAmount += itemInfo.price * quantity;
      }
    }
  }

  return totalAmount;
};


  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
