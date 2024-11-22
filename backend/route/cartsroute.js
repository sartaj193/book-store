// routes/cartRoutes.js

import express from "express";
import {
  addItemToCart,
  getCart,
  updateCartItem,
  mergeCart,
  removeCartItem,
} from "../controllers/cartscontroller.js";
const router = express.Router();

// Add an item to the cart
router.post("/add", addItemToCart);

// Get the cart by userId or guestId
router.get("/:id", getCart); // id can be userId or guestId

// Update cart item (increase/decrease quantity)
router.put("/update/:id", updateCartItem);

// Merge cart on login
router.post("/merge", mergeCart);
router.delete("/remove/:id/:bookId", removeCartItem); // 'id' can be guestId or userId

export default router;
