import express from "express";

import { placeOrder } from "../controllers/checkoutController.js";
// Middleware to protect routes (optional)
import { authUser } from "../middlewares/auth.js";
const router = express.Router();

// Place an order route
router.post("/place-order", authUser, placeOrder);

export default router;
