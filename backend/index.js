import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./route/auth.route.js";
import productRoutes from "./route/product.route.js";
import { connectDB } from "./lib/db.js";
import ordersroute from "./route/ordersroute.js";
import cartsRoute from "./route/cartsroute.js";
import productdetail from "./route/productdetail.js";
import categoryroute from "./route/category.route.js";
import section from "./route/sectionroute.js";
import addBooks from "./route/addBookroute.js";
import addAuthor from "./route/AddAuthor.js";
import authorSection from "./route/AuthorSection.js";
import authorboook from "./route/authorbook.js";
import bookdemand from "./route/BookDemand.js";

dotenv.config();

// Database connection
connectDB();

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., uploaded files)
app.use("/uploads", express.static("uploads"));

// API Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", ordersroute);
app.use("/api/cart", cartsRoute);
app.use("/api/detail", productdetail);
app.use("/api/category", categoryroute);
app.use("/api/section", section);
app.use("/api/books", addBooks);
app.use("/api/author", addAuthor);
app.use("/api/authors", authorboook);
app.use("/api/bookdemand", bookdemand);
app.use("/api/authorsection", authorSection);

// Serve the React build folder
app.use(express.static(path.join(_dirname, "../client/build")));

// Catch-all route to serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "../client/build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
