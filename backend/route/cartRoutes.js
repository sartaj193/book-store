// routes/cartRoutes.js
import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
  clearCart,
} from "../controllers/cartController.js";
// Updated middleware import
import { authUser } from "../middlewares/auth.js";
const router = express.Router();

// Cart routes
router.post("/add", authUser, addToCart); // Add item to cart
router.delete("/remove", authUser, removeFromCart); // Remove item from cart
router.get("/", authUser, getCart); // Get all cart items
router.post("/clear", authUser, clearCart); // Clear the cart

export default router;
