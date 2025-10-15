import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  // 🌙 Global Theme Toggle
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    // Apply theme to the <html> element so the entire site updates
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center justify-between p-5 font-medium bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Logo */}
      <Link to="/">
        <img className="w-32" src={assets.logo} alt="logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-sm">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
        </NavLink>
      </ul>

      {/* Right-side Icons */}
      <div>
        <div className="flex items-center gap-6">
          {/* 🔍 Search */}
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="search"
          />

          {/* 👤 Profile */}
          <div className="group relative">
            <Link to={"/login"}>
              <img
                src={assets.profile_icon}
                className="w-5 cursor-pointer"
                alt="profile"
              />
            </Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 p-4">
              <div className="flex flex-col gap-2 py-3 px-5 w-36 bg-slate-100 dark:bg-gray-800 text-gray-500 dark:text-gray-200 rounded">
                <p className="cursor-pointer hover:text-black dark:hover:text-white">My Profile</p>
                <p className="cursor-pointer hover:text-black dark:hover:text-white">Orders</p>
                <p className="cursor-pointer hover:text-black dark:hover:text-white">Logout</p>
              </div>
            </div>
          </div>

          {/* 🛒 Cart */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
            <p className="absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">
              {getCartCount()}
            </p>
          </Link>

          {/* 🌙 Theme Toggle (Global) */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
            title="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* 📱 Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="menu"
          />
        </div>

        {/* 📋 Sidebar for smaller screens */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white dark:bg-gray-900 transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600 dark:text-gray-200">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                src={assets.dropdown_icon}
                className="h-4 rotate-180"
                alt="back"
              />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
