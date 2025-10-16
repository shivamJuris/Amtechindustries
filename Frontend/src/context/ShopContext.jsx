import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// ✅ Import all your 52 local images
import p1 from "../assets/p_img1.png";
import p2 from "../assets/p_img2.png";
import p3 from "../assets/p_img3.png";
import p4 from "../assets/p_img4.png";
import p5 from "../assets/p_img5.png";
import p6 from "../assets/p_img6.png";
import p7 from "../assets/p_img7.png";
import p8 from "../assets/p_img8.png";
import p9 from "../assets/p_img9.png";
import p10 from "../assets/p_img10.png";
import p11 from "../assets/p_img11.png";
import p12 from "../assets/p_img12.png";
import p13 from "../assets/p_img13.png";
import p14 from "../assets/p_img14.png";
import p15 from "../assets/p_img15.png";
import p16 from "../assets/p_img16.png";
import p17 from "../assets/p_img17.png";
import p18 from "../assets/p_img18.png";
import p19 from "../assets/p_img19.png";
import p20 from "../assets/p_img20.png";
import p21 from "../assets/p_img21.png";
import p22 from "../assets/p_img22.png";
import p23 from "../assets/p_img23.png";
import p24 from "../assets/p_img24.png";
import p25 from "../assets/p_img25.png";
import p26 from "../assets/p_img26.png";
import p27 from "../assets/p_img27.png";
import p28 from "../assets/p_img28.png";
import p29 from "../assets/p_img29.png";
import p30 from "../assets/p_img30.png";
import p31 from "../assets/p_img31.png";
import p32 from "../assets/p_img32.png";
import p33 from "../assets/p_img33.png";
import p34 from "../assets/p_img34.png";
import p35 from "../assets/p_img35.png";
import p36 from "../assets/p_img36.png";
import p37 from "../assets/p_img37.png";
import p38 from "../assets/p_img38.png";
import p39 from "../assets/p_img39.png";
import p40 from "../assets/p_img40.png";
import p41 from "../assets/p_img41.png";
import p42 from "../assets/p_img42.png";
import p43 from "../assets/p_img43.png";
import p44 from "../assets/p_img44.png";
import p45 from "../assets/p_img45.png";
import p46 from "../assets/p_img46.png";
import p47 from "../assets/p_img47.png";
import p48 from "../assets/p_img48.png";
import p49 from "../assets/p_img49.png";
import p50 from "../assets/p_img50.png";
import p51 from "../assets/p_img51.png";
import p52 from "../assets/p_img52.png";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  // ✅ Local products
  useEffect(() => {
    const localProducts = [
      { _id: "1", name: "Product 1", price: 499, category: "Men", image: [p1], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "2", name: "Product 2", price: 509, category: "Women", image: [p2], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "3", name: "Product 3", price: 519, category: "Unisex", image: [p3], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "4", name: "Product 4", price: 529, category: "Men", image: [p4], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "5", name: "Product 5", price: 539, category: "Women", image: [p5], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "6", name: "Product 6", price: 549, category: "Unisex", image: [p6], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "7", name: "Product 7", price: 559, category: "Men", image: [p7], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "8", name: "Product 8", price: 569, category: "Women", image: [p8], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "9", name: "Product 9", price: 579, category: "Unisex", image: [p9], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "10", name: "Product 10", price: 589, category: "Men", image: [p10], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "11", name: "Product 11", price: 599, category: "Women", image: [p11], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "12", name: "Product 12", price: 609, category: "Unisex", image: [p12], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "13", name: "Product 13", price: 619, category: "Men", image: [p13], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "14", name: "Product 14", price: 629, category: "Women", image: [p14], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "15", name: "Product 15", price: 639, category: "Unisex", image: [p15], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "16", name: "Product 16", price: 649, category: "Men", image: [p16], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "17", name: "Product 17", price: 659, category: "Women", image: [p17], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "18", name: "Product 18", price: 669, category: "Unisex", image: [p18], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "19", name: "Product 19", price: 679, category: "Men", image: [p19], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "20", name: "Product 20", price: 689, category: "Women", image: [p20], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "21", name: "Product 21", price: 699, category: "Unisex", image: [p21], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "22", name: "Product 22", price: 709, category: "Men", image: [p22], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "23", name: "Product 23", price: 719, category: "Women", image: [p23], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "24", name: "Product 24", price: 729, category: "Unisex", image: [p24], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "25", name: "Product 25", price: 739, category: "Men", image: [p25], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "26", name: "Product 26", price: 749, category: "Women", image: [p26], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "27", name: "Product 27", price: 759, category: "Unisex", image: [p27], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "28", name: "Product 28", price: 769, category: "Men", image: [p28], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "29", name: "Product 29", price: 779, category: "Women", image: [p29], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "30", name: "Product 30", price: 789, category: "Unisex", image: [p30], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "31", name: "Product 31", price: 799, category: "Men", image: [p31], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "32", name: "Product 32", price: 809, category: "Women", image: [p32], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "33", name: "Product 33", price: 819, category: "Unisex", image: [p33], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "34", name: "Product 34", price: 829, category: "Men", image: [p34], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "35", name: "Product 35", price: 839, category: "Women", image: [p35], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "36", name: "Product 36", price: 849, category: "Unisex", image: [p36], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "37", name: "Product 37", price: 859, category: "Men", image: [p37], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "38", name: "Product 38", price: 869, category: "Women", image: [p38], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "39", name: "Product 39", price: 879, category: "Unisex", image: [p39], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "40", name: "Product 40", price: 889, category: "Men", image: [p40], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "41", name: "Product 41", price: 899, category: "Women", image: [p41], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "42", name: "Product 42", price: 909, category: "Unisex", image: [p42], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "43", name: "Product 43", price: 919, category: "Men", image: [p43], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "44", name: "Product 44", price: 929, category: "Women", image: [p44], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "45", name: "Product 45", price: 939, category: "Unisex", image: [p45], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "46", name: "Product 46", price: 949, category: "Men", image: [p46], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "47", name: "Product 47", price: 959, category: "Women", image: [p47], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "48", name: "Product 48", price: 969, category: "Unisex", image: [p48], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "49", name: "Product 49", price: 979, category: "Men", image: [p49], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "50", name: "Product 50", price: 989, category: "Women", image: [p50], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "51", name: "Product 51", price: 999, category: "Unisex", image: [p51], size: ["S", "M", "L", "XL", "XXL"] },
      { _id: "52", name: "Product 52", price: 1009, category: "Men", image: [p52], size: ["S", "M", "L", "XL", "XXL"] },
    ];

    setProducts(localProducts);
  }, []);

  // 🛒 Add to cart
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Please select product size");
      return;
    }

    const cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let total = 0;
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        total += cartItems[id][size];
      }
    }
    return total;
  };

  const updateQuantity = (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      const product = products.find((p) => p._id === id);
      if (!product) continue;
      for (const size in cartItems[id]) {
        total += product.price * cartItems[id][size];
      }
    }
    return total;
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
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
