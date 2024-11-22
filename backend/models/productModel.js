/*import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number, // Use Number for price, more appropriate for calculations
      required: true,
    },
    images: {
      type: [String], // Store multiple image URLs as an array of strings
      required: true,
    },
    bestsellers: {
      type: Boolean,
      default: false, // Set a default value for bestsellers
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", productSchema);
export default productModel;*/

/*import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: [
      {
        path: { type: String, required: true }, // Path of the image file
        section: { type: String, required: true }, // Section name
      },
    ],
    bestsellers: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", productSchema);
export default productModel;*/

// models/Product.js
/*const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true }, // Array to store image paths
  section: { type: String, required: true },  // Section/category for the product (e.g., Bestsellers, New Arrivals)
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;*/

/*import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true, // Automatically trims whitespace from the start and end
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
    trim: true, // Automatically trims whitespace from the start and end
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a positive number"], // Ensuring the price is a positive number
  },
  images: {
    type: [String],
    required: [true, "At least one image is required"],
    validate: {
      validator: function (v) {
        return v && v.length > 0; // Ensures the array is not empty
      },
      message: "At least one image is required",
    },
  },
  section: {
    type: String,
    required: [true, "Section is required"],
    enum: ["Bestsellers", "New Arrivals", "Sale", "Featured"], // Example sections, you can adjust this list as needed
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;*/
import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Single string
    author: { type: String, required: true }, // Single string
    price: { type: Number, required: true }, // Single number
    images: {
      type: [String], // Array of strings
      required: true,
      validate: [(arr) => arr.length > 0, "At least one image is required"],
    },
    section: {
      type: [String], // Now an array of strings["popular in punjab", "punjabi literature", "punjabi culture", "best sellers", "popular in punjab"],
      enum: [
        "popular in punjab",
        "punjabi literature",
        "punjabi culture",
        "best sellers",
      ],
      required: true,
      validate: [
        (array) => array.length > 0,
        "At least one section is required",
      ],
      set: (value) => value.map((v) => v.toLowerCase()), // Convert all sections to lowercase
    },
  },
  { timestamps: true }
);

// Create the product model
const Product = mongoose.model("Product", productSchema);

export default Product;
