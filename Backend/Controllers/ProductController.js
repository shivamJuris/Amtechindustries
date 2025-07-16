import { v2 as cloudinary } from "cloudinary";
import productModel from "../Models/productModel.js";



const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller
    } = req.body;

    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    // Handle image files
    const images = ['image1', 'image2', 'image3', 'image4']
      .map((key) => req.files?.[key]?.[0])
      .filter(Boolean);

    // Upload images to Cloudinary
    let imagesUrl = [];
    try {
      imagesUrl = await Promise.all(
        images.map(async (file) => {
          const result = await cloudinary.uploader.upload(file.path, {
            resource_type: "image",
          });
          return result.secure_url;
        })
      );
    } catch (uploadErr) {
      console.error("Cloudinary Upload Error:", uploadErr);
      return res.status(500).json({ success: false, msg: "Image upload failed" });
    }

    // Parse sizes safely
    let parsedSizes;
    try {
      parsedSizes = JSON.parse(sizes);
    } catch (e) {
      return res.status(400).json({ success: false, msg: "Invalid sizes format" });
    }

    // Validate price
    if (!price || isNaN(Number(price))) {
      return res.status(400).json({ success: false, msg: "Invalid price" });
    }

    const productData = {
      name,
      description,
      price: parseFloat(price),
      category: Array.isArray(category) ? category[0] : category,  // handle category as array or string
      subCategory,
      size: parsedSizes,
      bestSeller: bestSeller === "true" || bestSeller === true,
      image: imagesUrl,
      date: Date.now(),
    };

    const newProduct = new productModel(productData);
    await newProduct.save();

    res.json({ success: true, message: "Product uploaded successfully", product: newProduct });
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
