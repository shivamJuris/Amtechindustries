import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductsItem from "../components/ProductsItem";

const Collection = () => {
  const { products ,search, showSearch} = useContext(ShopContext);
  const [shopFilter, setShopFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType]= useState('relevent')

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  const ApplyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item =>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(
        (item) => subCategory.includes(item.subCategory) // ✅ Capital C
      );
    }

    setFilterProducts(productsCopy);
  };

const sortProducts = () => {
  let fpCopy = [...filterProducts]; // clone array

  switch (sortType) {
    case "low-high":
      fpCopy.sort((a, b) => a.price - b.price);
      break;

    case "high-low":
      fpCopy.sort((a, b) => b.price - a.price);
      break;

    default:
      ApplyFilter(); // reapply filter for "relevant"
      return;
  }

  // set sorted copy to trigger re-render
  setFilterProducts([...fpCopy]); // ✅ spread again to create new reference
};


  useEffect(() => {
    ApplyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    console.log("Sample product:", products[0]);
  }, [products]);

  useEffect(()=>{
    sortProducts();
  },[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Left filter section */}
      <div className="min-w-60">
        <p
          onClick={() => setShopFilter(!shopFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTER's{" "}
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${shopFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            shopFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Men"
                onChange={toggleCategory}
              />
              MEN
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Women"
                onChange={toggleCategory}
              />
              WOMEN
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Kids"
                onChange={toggleCategory}
              />
              KIDS
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-6 ${
            shopFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE'S</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Topwear"
                onChange={toggleSubCategory}
              />
              Topwear
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />
              Bottomwear
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Winterwear"
                onChange={toggleSubCategory}
              />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Right products section */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductsItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
