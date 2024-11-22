/*import express from "express";
import { productController } from "../controllers/productController.js"; // Adjust path if needed
import upload from "../middlewares/multer.js"; // Import multer middleware

const router = express.Router();

// Route to upload product with image
router.post("/upload", upload.single("image"), productController);

export default router;*/
// routes/product.route.js

/*import express from "express";
import {
  listProduct,
  productController,
} from "../controllers/productController.js";
import upload from "../middlewares/multer.js"; // Import multer middleware

const router = express.Router();

// Route to upload product with multiple images
router.post("/upload", upload.array("images", 4), productController); // Use upload.array for multiple files
router.get("/list", listProduct);
export default router;*/
import express from "express";
import {
  addProduct, // Use the correct function name here (addProduct)
  getProductsBySection,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import upload from "../middlewares/multer.js"; // Import multer middleware

const router = express.Router();

// Route to upload product with multiple images and their details
router.post("/add", upload.array("images", 4), addProduct); // Use upload.array for multiple files, and changed the route to "/add"

// Route to get products by section
router.get("/section/:section", getProductsBySection); // Get products by specific section
router.delete("/:id", deleteProduct); // Delete product by ID
router.put("/:id", updateProduct);
//router.delete("/remove/:id/:bookId", removeCartItem);
export default router;
