import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-small">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            praesentium consequuntur impedit similique placeat error veniam
            assumenda accusamus! Vitae delectus quibusdam quisquam maxime qui
            dolores facilis repellendus quos, perferendis porro?
          </p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>ABOUT</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div>   
            <p className="text-xl font-medium mb-5">Get in Touch</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91 7973164296</li>
                <li>shivamkumar10813@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
            Copyrights @2025 Forever.com All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
