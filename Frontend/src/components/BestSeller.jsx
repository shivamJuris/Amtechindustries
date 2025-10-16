import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductsItem from './ProductsItem';

// ✅ Import local images directly
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
// ... continue for all 52 images

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestseller] = useState([]);

  useEffect(() => {
    if (Array.isArray(products)) {

      // Map local images to products based on _id (or index)
      const localImages = {
        "1": p1,
        "2": p2,
        "3": p3,
        "4": p4,
        "5": p5,
        "6": p6,
        "7": p7,
        "8": p8,
        "9": p9,
        "10": p10,
        // ... continue for all product ids
      };

      const bestProduct = products
        .filter(item => item.bestSeller === "true" || item.bestseller === "true")
        .map(item => ({
          ...item,
          image: [localImages[item._id]] || item.image // replace image with local
        }));

      setBestseller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <div className='my-10'>
      <div className="text-center text-3xl py-8">
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Our most selling brands are here — top picked trendy clothes 
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4">
        {bestSeller.map((item, index) => (
          <ProductsItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
