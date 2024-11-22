import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./route/auth.route.js"; // Ensure this path is correct
import productRoutes from "./route/product.route.js"; // Ensure this path is correct
import { connectDB } from "./lib/db.js"; // Ensure this path is correct
//import cartRoutes from "./route/CartRoute.js"
import ordersroute from "./route/ordersroute.js";
import cartsRoute from "./route/cartsroute.js";

dotenv.config();

// Connect to the database before starting the server
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads")); // Uncommented line

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
//app.use("/api/cart",cartRoutes)
app.use("/api/order", ordersroute);
app.use("/api/cart", cartsRoute);
//app.use("/api/cart", cartRoute);
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
