import { v2 as cloudinary } from "cloudinary";
import productModel from "../Models/productModel.js";

// ===========================
// Add Product
// ===========================
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      size,
      bestseller,
      category,
      subcategory,
      price
    } = req.body;

    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    // Handle images
    const image1 = req.files?.image1?.[0] || null;
    const image2 = req.files?.image2?.[0] || null;
    const image3 = req.files?.image3?.[0] || null;
    const image4 = req.files?.image4?.[0] || null;

    const images = [image1, image2, image3, image4].filter(item => item !== null);

    // Upload images to Cloudinary
    let imagesUrl = [];

    try {
      imagesUrl = await Promise.all(
        images.map(async (item) => {
          const result = await cloudinary.uploader.upload(item.path, {
            resource_type: "image",
          });
          return result.secure_url;
        })
      );
    } catch (uploadErr) {
      console.error("Cloudinary Upload Error:", uploadErr.message);
      return res.status(500).json({ success: false, msg: "Image upload failed" });
    }

    // Parse sizes safely
    let parsedSizes;
    try {
      parsedSizes = JSON.parse(size.replace(/'/g, '"'));
    } catch (e) {
      return res.status(400).json({ success: false, msg: "Invalid sizes format" });
    }

    // Prepare product data
   if (!price || isNaN(Number(price))) {
  return res.status(400).json({ success: false, msg: "Price must be a valid number" });
}

const productData = {
  name,
  description,
  category,
  price: parseFloat(price),
  subCategory: subcategory, // 👈 matches schema
  bestseller: bestseller === "true",
  size: parsedSizes,
  image: imagesUrl,
  date: Date.now()
};


    // Save to DB
    const Product = new productModel(productData);
    await Product.save();

    res.json({ success: true, message: "Uploaded successfully", product: Product });

  } catch (error) {
    console.error("Upload Error:", error.message);
    res.status(500).json({ success: false, msg: error.message });
  }
};

// ===========================
// List All Products
// ===========================
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

// ===========================
// Remove Product by ID
// ===========================
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id)
    res.json({ success: true, msg: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

// ===========================
// Get Single Product by ID
// ===========================
const singleProduct = async (req, res) => {
  try {
    const {productId} = req.body
    const product = await productModel.findById(productId)
    res.json({success: true, product})
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};



export { listProduct, addProduct, removeProduct, singleProduct };
