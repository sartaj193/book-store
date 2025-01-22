import mongoose from "mongoose";

const productDetailSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true, // Link to the main Product model
    },
    name: { type: String, required: true }, // Product name included in detail
    mainImage: { type: String, default: null }, // Main product image
    // Optional additional images
    author: { type: String, required: true }, // Author or manufacturer
    description: { type: String, required: true }, // Full description of the product
  },
  { timestamps: true }
);

const ProductDetail = mongoose.model("ProductDetail", productDetailSchema);
export default ProductDetail;
