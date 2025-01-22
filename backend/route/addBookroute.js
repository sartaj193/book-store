import express from "express";

import upload from "../middlewares/multer.js"; // Assuming Multer middleware for file uploads

import {
  addBook,
  fetchSectionsWithBooksByCategory,
  fetchSectionsWithBooks,
} from "../controllers/addBooks.js";
const router = express.Router();

// Endpoint to add a book
router.post("/ser", upload.array("images", 4), addBook); // Accept up to 4 images
router.get("/sections-with-books", fetchSectionsWithBooks);
router.get("/category/:categoryId/sections", fetchSectionsWithBooksByCategory);
export default router;
