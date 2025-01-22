/*import Product from "../models/productModel.js";
import Detail from "../models/productDetail.js";

export const addProductDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      res.json({ success: false, message: "product not found" });
    }
    const detail = await Detail.findById({ productId: id });
    if (!detail) {
      res.json({ success: false, message: "productdetail not found" });
    }
    res.status(200).json({
      success: true,
      product: {
        name: product.name,
        author: product.author,
        description: product.description,
        mainImage: product.mainImage,
        additionalImages: product.additionalImages,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};*/

/*import ProductDetail from "../models/productDetail.js";
// Controller to add product details with image upload
export const addProductDetail = async (req, res) => {
  try {
    const { productId, name, author, description } = req.body;

    // Validate required fields
    if (!productId || !name || !author || !description) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    // Handle image uploads
    const mainImage = req.files["mainImage"]
      ? `/uploads/images/${req.files["mainImage"][0].filename}`
      : null; // Set to null if not provided

    const additionalImages = req.files["additionalImages"]
      ? req.files["additionalImages"].map(
          (file) => `/uploads/images/${file.filename}`
        )
      : [];

    // Create a new ProductDetail document
    const productDetail = new ProductDetail({
      productId,
      name,
      mainImage, // Main image is optional
      additionalImages,
      author,
      description,
    });

    // Save the product detail to the database
    await productDetail.save();

    res.status(201).json({
      message: "Product detail added successfully!",
      productDetail,
    });
  } catch (error) {
    console.error("Error adding product detail:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};*/

import ProductDetail from "../models/productDetail.js";

// Controller to add product details with image uploads
/*export const addProductDetail = async (req, res) => {
  try {
    const { productId, name, author, description } = req.body;

    // Validate required fields
    if (!productId || !name || !author || !description) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    // Handle main image upload (optional)
    const mainImage = req.files["mainImage"]?.[0]
      ? `/uploads/images/${req.files["mainImage"][0].filename}`
      : null;

    // Handle additional images upload (optional)
    const additionalImages = req.files["additionalImages"]
      ? req.files["additionalImages"].map(
          (file) => `/uploads/images/${file.filename}`
        )
      : [];

    // Log uploaded images for debugging
    console.log("Uploaded Main Image:", mainImage);
    console.log("Uploaded Additional Images:", additionalImages);

    // Create a new ProductDetail document
    const productDetail = new ProductDetail({
      productId,
      name,
      mainImage, // Optional main image
      additionalImages, // Optional additional images
      author,
      description,
    });

    // Save the product detail to the database
    await productDetail.save();

    res.status(201).json({
      message: "Product detail added successfully!",
      productDetail,
    });
  } catch (error) {
    console.error("Error adding product detail:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
*/

/*export const addProductDetail = async (req, res) => {
  try {
    // Log files to check what is coming in the request
    console.log("Files received:", req.files);

    const { productId, name, author, description } = req.body;

    // Validate required fields
    if (!productId || !name || !author || !description) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    // Handle main image upload (optional)
    const mainImage = req.files["mainImage"]?.[0]
      ? `/uploads/images/${req.files["mainImage"][0].filename}`
      : null;

    // Handle additional images upload (optional)
    const additionalImages = req.files["additionalImages"]
      ? req.files["additionalImages"].map(
          (file) => `/uploads/images/${file.filename}`
        )
      : [];

    // Log uploaded images for debugging
    console.log("Uploaded Main Image:", mainImage);
    console.log("Uploaded Additional Images:", additionalImages);

    // Create a new ProductDetail document
    const productDetail = new ProductDetail({
      productId,
      name,
      mainImage, // Optional main image
      additionalImages, // Optional additional images
      author,
      description,
    });

    // Save the product detail to the database
    await productDetail.save();

    res.status(201).json({
      message: "Product detail added successfully!",
      productDetail,
    });
  } catch (error) {
    console.error("Error adding product detail:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
*/

// Ensure you have the correct path to your ProductDetail model

// Ensure you have the correct path to your ProductDetail model

// Ensure you have the correct path to your ProductDetail model
// Ensure you have the correct path to your ProductDetail model

/*export const addProductDetail = async (req, res) => {
  try {
    // Log received data for debugging
    console.log("Received Data:", req.body);
    console.log("Received File:", req.file);

    // Extract form data from the request body
    const { productId, name, author, description } = req.body;

    // Validate required fields
    if (!productId || !name || !author || !description || !req.file) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Handle main image upload
    const mainImage = `/uploads/images/${req.file.filename}`;

    // Log uploaded image for debugging
    console.log("Uploaded Main Image:", mainImage);

    // Create a new ProductDetail document
    const productDetail = new ProductDetail({
      productId,
      name,
      mainImage, // Main image
      author,
      description,
    });

    // Save the product detail to the database
    await productDetail.save();

    res.status(201).json({
      success: true,
      message: "Product detail added successfully!",
      productDetail,
    });
  } catch (error) {
    console.error("Error adding product detail:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error: " + error.message });
  }
};*/
import mongoose from "mongoose";
export const addProductDetail = async (req, res) => {
  try {
    // Log received data for debugging
    console.log("Received Data:", req.body);
    console.log("Received File:", req.file);

    const { productId, name, author, description } = req.body;

    // Validate required fields
    if (!productId || !name || !author || !description || !req.file) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required (productId, name, author, description, mainImage)",
      });
    }

    // Validate and convert productId to ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Product ID format",
      });
    }

    // Handle main image upload path
    const mainImage = `/uploads/images/${req.file.filename}`;
    console.log("Uploaded Main Image:", mainImage);

    // Create new ProductDetail document
    const productDetail = new ProductDetail({
      productId: new mongoose.Types.ObjectId(productId), // Using 'new' to instantiate ObjectId
      name,
      mainImage,
      author,
      description,
    });

    // Save the product detail to the database
    await productDetail.save();

    res.status(201).json({
      success: true,
      message: "Product detail added successfully!",
      productDetail,
    });
  } catch (error) {
    console.error("Error adding product detail:", error);
    res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};

export const getProductDetail = async (req, res) => {
  try {
    const { productId } = req.params;

    // Validate productId format
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Product ID format",
      });
    }

    // Find the product detail by productId
    const productDetail = await ProductDetail.findOne({ productId });

    // If the product detail is not found
    if (!productDetail) {
      return res.status(404).json({
        success: false,
        message: "Product detail not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product detail retrieved successfully!",
      productDetail,
    });
  } catch (error) {
    console.error("Error fetching product detail:", error);
    res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};
