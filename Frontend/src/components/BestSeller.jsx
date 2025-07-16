import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductsItem from './ProductsItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext); // ✅ correct use
  const [bestSeller, setBestseller] = useState([]);

 useEffect(() => {
  console.log("ALL PRODUCTS from context:", products);

  if (Array.isArray(products)) {
    products.forEach((item, i) => {
      console.log(`Product ${i + 1}:`, item);
      console.log("item.bestSeller:", item.bestSeller);
      console.log("item.bestseller:", item.bestseller);
    });

    // ✅ Yeh line yahin likhni hai
    const bestProduct = products.filter(item =>
      item.bestSeller === "true" || item.bestseller === "true" 
    );

    console.log("Filtered best sellers:", bestProduct);
    setBestseller(bestProduct.slice(0, 5));
  }
}, [products]);





  return (
    <div className='my-10'>
      <div className="text-center text-3xl py-8">
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Our most selling brands are here top picked up trendy clothes 
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
