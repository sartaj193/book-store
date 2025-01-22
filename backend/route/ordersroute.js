import express from "express";

import {
  placeOrder,
  orderDisplay,
  allOrders,
  updateOrder,
  deleteOrder,
} from "../controllers/checkoutController.js";
// Middleware to protect routes (optional)
import { authUser } from "../middlewares/auth.js";
const router = express.Router();

// Place an order route
router.delete("/:orderId", deleteOrder);
router.put("/:orderId", updateOrder);
router.post("/place-order", authUser, placeOrder);
router.get("/display", authUser, orderDisplay);
router.get("/see", allOrders);
export default router;
