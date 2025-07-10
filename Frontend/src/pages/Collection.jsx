import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductsItem from '../components/ProductsItem';

const Collection = () => {
  const {products} = useContext(ShopContext);
  const [shopFilter, setShopFilter] = useState(false)
  const [filterProducts, setFilterProducts]=useState([])
  const [category, setcategory]=useState([])
  const [subCategory, setSubCategory]=useState([]);

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
        setcategory(prev=> prev.filter(item=> item !== e.target.value))
    }
    else{
      setcategory(prev => [...prev, e.target.value]);
    }
  }

  const togglesubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item=> item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }


  useEffect(() => {
    setFilterProducts(products);
  }, [])

  useEffect(()=>{
    console.log(subCategory)
  },[subCategory])
  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Comment text filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShopFilter(!shopFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTER's <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${shopFilter ? 'rotate-90' : ''}`} alt="" />
        </p>
        {/* category filter */}
        <div className={`border border-gary-300 pl-5 py-3 mt-6 ${shopFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Men'} onChange={toggleCategory}/>MEN
            </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Women'} onChange={toggleCategory}/>WOMEN
            </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Kids'} onChange={toggleCategory}/>KIDS
            </p>
          </div>
        </div>
        {/* Subcategory filter */}
        <div className={`border border-gary-300 pl-5 py-3 my-6 ${shopFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>TYPE'S</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Topwear'} onChange={togglesubCategory}/>Topwear
            </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Bottomwear'} onChange={togglesubCategory}/>Bottomwear
            </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Winterwear'} onChange={togglesubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='flex-1'>
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTION'}/>
          {/* Product sort */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevent">Sort by: Relavent</option>
            <option value="low-high">Sort by: low-high</option>
            <option value="hight-low">Sort by: hight-low</option>
          </select>
        </div>
        {/* map products */}
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
  {
    filterProducts.map((items, index) => (
      <ProductsItem
        key={index}
        name={items.name}
        id={items._id}
        price={items.price}
        image={items.image}
      />
    ))
  }
</div>

      </div>
    </div>
  );
}

export default Collection;
