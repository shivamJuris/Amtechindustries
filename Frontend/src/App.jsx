import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import PlaceOrder from "./pages/PlaceOrder"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/placeOrdre" element={<PlaceOrder />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App
