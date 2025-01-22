/*import Book from "../models/addBookModel.js";
import Section from "../models/sectionModel.js";
export const addBook = async (req, res) => {
  try {
    const { title, author, price, sectionId, categoryId } = req.body;

    // Validate required fields
    if (!title || !author || !price || !req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "All fields are required, including images." });
    }

    // Extract image file paths
    const images = req.files.map((file) => `/uploads/images/${file.filename}`);

    // Check for duplicate book title
    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      return res
        .status(409)
        .json({ message: `Book with title "${title}" already exists.` });
    }

    // Create and save the book
    const book = new Book({
      title: title.trim(),
      author: author.trim(),
      price: parseFloat(price),
      images,
      section: sectionId || null,
      category: categoryId || null,
    });

    await book.save();

    // If sectionId is provided, associate the book with the section
    if (sectionId) {
      await Section.findByIdAndUpdate(sectionId, {
        $push: { books: book._id },
      });
    }

    res.status(201).json({
      message: "Book added successfully!",
      book,
    });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};*/

import mongoose from "mongoose";
import Book from "../models/addBookModel.js";
import Section from "../models/sectionModel.js";
import Category from "../models/categorymodel.js";
export const addBook = async (req, res) => {
  try {
    const { title, author, price, sectionId, categoryId } = req.body;

    // Validate required fields
    if (!title || !author || !price || !req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "All fields are required, including images." });
    }

    // Validate sectionId and categoryId (check if they're valid ObjectId)
    if (sectionId && !mongoose.Types.ObjectId.isValid(sectionId)) {
      return res.status(400).json({ message: "Invalid sectionId format." });
    }

    if (categoryId && !mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({ message: "Invalid categoryId format." });
    }

    // Extract image file paths
    const images = req.files.map((file) => `/uploads/images/${file.filename}`);

    // Check for duplicate book title
    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      return res
        .status(409)
        .json({ message: `Book with title "${title}" already exists.` });
    }

    // Create and save the book
    const book = new Book({
      title: title.trim(),
      author: author.trim(),
      price: parseFloat(price),
      images,
      section: sectionId || null,
      category: categoryId || null,
    });

    await book.save();

    // If sectionId is provided, associate the book with the section
    if (sectionId) {
      await Section.findByIdAndUpdate(sectionId, {
        $push: { books: book._id },
      });
    }

    res.status(201).json({
      message: "Book added successfully!",
      book,
    });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Fetch books based on category and section

// Fetch books by category and section
export const fetchSectionsWithBooks = async (req, res) => {
  try {
    const sections = await Section.find().lean(); // Fetch all sections
    const sectionData = await Promise.all(
      sections.map(async (section) => {
        const books = await Book.find({ section: section._id }); // Fetch books for each section
        return { ...section, books };
      })
    );

    res.status(200).json(sectionData);
  } catch (error) {
    console.error("Error fetching sections with books:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// controllers/bookController.js

// ... keep the addBook function as is ...

export const fetchSectionsWithBooksByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Validate categoryId
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({ message: "Invalid categoryId format." });
    }

    // Fetch the category
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    // Fetch sections for the category
    const sections = await Section.find({ category: categoryId }).lean();

    // Fetch books for each section
    const sectionData = await Promise.all(
      sections.map(async (section) => {
        const books = await Book.find({
          section: section._id,
          category: categoryId,
        }).lean();
        return { ...section, books };
      })
    );

    res.status(200).json({
      categoryName: category.name,
      sections: sectionData,
    });
  } catch (error) {
    console.error("Error fetching sections with books by category:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
