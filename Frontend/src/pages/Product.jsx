import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [productData, setProductData] = useState(false);

  const fetchProductsData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
    window.scrollTo(0, 0);
  }, [products, productId]);

  const handleAddToCart = () => {
    if (!size) {
      toast.warn("🧢 Please select a size before adding to cart!");
      return;
    }
    addToCart(productData._id, size);
    toast.success("🛍️ Product added to cart!");
  };

  return productData ? (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100"
    >
      {/* Product Section */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex-1 flex flex-col-reverse gap-3 sm:flex-row"
        >
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18%] w-full">
            {productData.image.map((item, index) => (
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={item}
                key={index}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-md border ${
                  image === item ? "border-orange-400" : "border-gray-200"
                }`}
                alt=""
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <motion.div
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full sm:w-[80%] rounded-xl overflow-hidden shadow-md"
          >
            <img src={image} className="w-full h-auto" alt="" />
          </motion.div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="font-semibold text-3xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className="w-4" />
            ))}
            <img src={assets.star_dull_icon} alt="star" className="w-4" />
            <p className="pl-2 text-sm text-gray-600">(122 reviews)</p>
          </div>

          <p className="mt-5 text-3xl font-semibold text-gray-800">
            {currency}
            {productData.price}
          </p>

          <p className="mt-4 text-gray-500 leading-relaxed md:w-4/5">
            {productData.description ||
              "Experience premium comfort and unmatched quality with our latest fashion collection. Designed for all-day wear with breathable materials and stylish designs."}
          </p>

          {/* Size Selector */}
          <div className="flex flex-col gap-3 my-8">
            <p className="font-medium">Select Size:</p>
            <div className="flex flex-wrap gap-2">
              {productData.size?.map((item, index) => (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 rounded-md ${
                    item === size
                      ? "border-orange-500 bg-orange-100"
                      : "border-gray-300 bg-gray-50"
                  }`}
                  key={index}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-3 text-sm rounded-lg shadow-md hover:shadow-lg transition"
          >
            Add to Cart
          </motion.button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>✅ 100% original products</p>
            <p>💵 Cash on delivery available</p>
            <p>🔄 Easy 7-day return & exchange policy</p>
          </div>
        </motion.div>
      </div>

      {/* Description & Reviews */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-20"
      >
        <div className="flex border-b">
          <b className="border px-5 py-3 text-sm bg-gray-100">Description</b>
          <p className="border px-5 py-3 text-sm cursor-pointer hover:bg-gray-100 transition">
            Reviews (122)
          </p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600 leading-relaxed">
          <p>
            Discover unmatched style and comfort with this modern design.
            Crafted with high-quality materials that are gentle on your skin and
            perfect for all occasions.
          </p>
          <p>
            Join thousands of happy customers who love our craftsmanship and
            reliability. Fashion that fits your lifestyle — built to last.
          </p>
        </div>

        {/* Customer Reviews */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
          <div className="space-y-4">
            {[
              {
                name: "Aarav Sharma",
                image:
                  "https://randomuser.me/api/portraits/men/32.jpg",
                review:
                  "Absolutely love this! The material is super soft and the fit is perfect. Definitely worth the price!",
              },
              {
                name: "Priya Mehta",
                image:
                  "https://randomuser.me/api/portraits/women/45.jpg",
                review:
                  "Looks even better in person! The delivery was quick and packaging was neat.",
              },
              {
                name: "Rohan Patel",
                image:
                  "https://randomuser.me/api/portraits/men/76.jpg",
                review:
                  "Great quality product. Been using it for a week now and I’m very happy with it.",
              },
            ].map((r, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-4 border rounded-lg shadow-sm bg-white"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <p className="font-medium">{r.name}</p>
                </div>
                <p className="text-gray-600 text-sm">{r.review}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </motion.div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
