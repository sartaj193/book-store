import mongoose from "mongoose";
//import Book from "../models/addBookModel.js";
import AuthorBook from "../models/authorbook.js";

import Authorsection from "../models/AuthorSection.js";
import Author from "../models/addAuthor.js";
/*export const addAuthorBook = async (req, res) => {
  try {
    const { title, authors, price, authorsectionId, authorId } = req.body;

    // Validate required fields
    if (!title || !authors || !price || !req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "All fields are required, including images." });
    }

    // Validate sectionId and categoryId (check if they're valid ObjectId)
    if (authorsectionId && !mongoose.Types.ObjectId.isValid(authorsectionId)) {
      return res.status(400).json({ message: "Invalid sectionId format." });
    }

    if (authorId && !mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ message: "Invalid categoryId format." });
    }

    // Extract image file paths
    const images = req.files.map((file) => `/uploads/images/${file.filename}`);

    // Check for duplicate book title
    const existingBook = await AuthorBook.findOne({ title });
    if (existingBook) {
      return res
        .status(409)
        .json({ message: `Book with title "${title}" already exists.` });
    }

    // Create and save the book
    const book = new AuthorBook({
      title: title.trim(),
      authors: authors.trim(),
      price: parseFloat(price),
      images,
      section: authorsectionId || null,
      category: authorId || null,
    });

    await book.save();

    // If sectionId is provided, associate the book with the section
    if (authorsectionId) {
      await Authorsection.findByIdAndUpdate(authorsectionId, {
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

// Fetch books by category and section //ss
export const fetchAuthorSectionsWithBooks = async (req, res) => {
  try {
    const sections = await Authorsection.find().lean(); // Fetch all sections
    const sectionData = await Promise.all(
      sections.map(async (authorsection) => {
        const books = await AuthorBook.find({
          authorsection: authorsection._id,
        }); // Fetch books for each section
        return { ...authorsection, books };
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
*/
/*export const addAuthorBook = async (req, res) => {
  try {
    const { title, authors, price, authorsectionId, authorId } = req.body;

    // Validate required fields
    if (!title || !authors || !price || !req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "All fields are required, including images." });
    }

    // Validate sectionId and authorId
    if (authorsectionId && !mongoose.Types.ObjectId.isValid(authorsectionId)) {
      return res.status(400).json({ message: "Invalid sectionId format." });
    }

    if (authorId && !mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ message: "Invalid authorId format." });
    }

    // Extract image file paths
    const images = req.files.map((file) => `/uploads/images/${file.filename}`);

    // Check for duplicate book title
    const existingBook = await AuthorBook.findOne({ title });
    if (existingBook) {
      return res
        .status(409)
        .json({ message: `Book with title "${title}" already exists.` });
    }

    // Create and save the book
    const book = new AuthorBook({
      title: title.trim(),
      authors: authors.trim(),
      price: parseFloat(price),
      images,
      authorsection: authorsectionId || null,
      author: authorId || null,
    });

    await book.save();

    console.log("New book added:", book);

    // If sectionId is provided, associate the book with the section
    if (authorsectionId) {
      await Authorsection.findByIdAndUpdate(authorsectionId, {
        $push: { books: book._id },
      });
      console.log(`Book associated with section ${authorsectionId}`);
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

// controllers/bookController.js
export const addAuthorBook = async (req, res) => {
  try {
    const { title, authors, price, authorsectionId, authorId } = req.body;

    // Validate required fields
    if (!title || !authors || !price || !req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "All fields are required, including images." });
    }

    // Validate authorsectionId and authorId (check if they're valid ObjectIds)
    if (authorsectionId && !mongoose.Types.ObjectId.isValid(authorsectionId)) {
      return res
        .status(400)
        .json({ message: "Invalid authorsectionId format." });
    }

    if (authorId && !mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ message: "Invalid authorId format." });
    }

    // Extract image file paths
    const images = req.files.map((file) => `/uploads/images/${file.filename}`);

    // Check for duplicate book title
    const existingBook = await AuthorBook.findOne({ title });
    if (existingBook) {
      return res
        .status(409)
        .json({ message: `Book with title "${title}" already exists.` });
    }

    // Create and save the book
    const book = new AuthorBook({
      title: title.trim(),
      authors: authors.trim(),
      price: parseFloat(price),
      images,
      authorsection: authorsectionId || null, // Save author section ID if provided
      author: authorId || null, // Save author ID if provided
    });

    await book.save();

    // If authorsectionId is provided, associate the book with the section
    if (authorsectionId) {
      await Authorsection.findByIdAndUpdate(authorsectionId, {
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
// ... keep the addBook function as is ...

/*export const fetchAuthorSectionsWithBooksByCategory = async (req, res) => {
  try {
    const { authorId } = req.params;

    // Validate categoryId
    if (!mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ message: "Invalid categoryId format." });
    }

    // Fetch the category
    const category = await Author.findById(authorId);
    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    // Fetch sections for the category
    const sections = await Authorsection.find({ author: authorId }).lean();

    // Fetch books for each section
    const sectionData = await Promise.all(
      sections.map(async (authorsection) => {
        const books = await AuthorBook.find({
          authorsection: authorsection._id,
          author: authorId,
        }).lean();
        return { ...authorsection, books };
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
*/

/*export const fetchAuthorSectionsWithBooksByCategory = async (req, res) => {
  try {
    const { authorId } = req.params;

    // Validate authorId
    if (!mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ message: "Invalid authorId format." });
    }

    // Fetch the author
    const author = await Author.findById(authorId);
    if (!author) {
      return res.status(404).json({ message: "Author not found." });
    }

    // Fetch sections for the author
    const sections = await Authorsection.find({ author: authorId }).lean();

    // Fetch books for each section
    const sectionData = await Promise.all(
      sections.map(async (section) => {
        const books = await AuthorBook.find({
          authorsection: section._id,
        }).lean();
        return { ...section, books }; // Include books in the section
      })
    );

    // Return the response
    res.status(200).json({
      categoryName: author.name,
      sections: sectionData,
    });
  } catch (error) {
    console.error("Error fetching sections with books by author:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
*/

// Fetch books by section (authorsectionId)

export const fetchAuthorSectionsAndBooksByCategory = async (req, res) => {
  try {
    const { authorId } = req.params;
    console.log("Fetching sections and books for authorId:", authorId);

    // Validate authorId
    if (!mongoose.Types.ObjectId.isValid(authorId)) {
      console.log("Invalid authorId format");
      return res.status(400).json({ message: "Invalid authorId format." });
    }

    // Fetch the author
    const author = await Author.findById(authorId);
    if (!author) {
      console.log("Author not found");
      return res.status(404).json({ message: "Author not found." });
    }
    console.log("Author found:", author.name);

    // Fetch sections for the author
    const sections = await Authorsection.find({ author: authorId }).lean();
    console.log("Sections found:", sections.length);

    // Fetch books for each section
    const sectionsWithBooks = await Promise.all(
      sections.map(async (section) => {
        const sectionBooks = await AuthorBook.find({
          authorsection: section._id,
        }).lean();
        console.log(
          `Books found for section ${section.name}:`,
          sectionBooks.length
        );

        // Fetch books directly associated with the author (no section)
        const authorBooks = await AuthorBook.find({
          author: authorId,
          authorsection: null,
        }).lean();
        console.log(
          "Books found directly associated with author:",
          authorBooks.length
        );

        const allBooks = [...sectionBooks, ...authorBooks];

        // Ensure fallback values for each book field
        const sanitizedBooks = allBooks.map((book) => ({
          _id: book._id,
          title: book.title,
          authors: book.authors || "Unknown Author",
          price: book.price || 0,
          images: book.images?.length ? book.images : ["/default-image.jpg"],
        }));

        return {
          _id: section._id,
          name: section.name,
          author: section.author,
          books: sanitizedBooks,
          createdAt: section.createdAt,
        };
      })
    );

    console.log(
      "Final response:",
      JSON.stringify(
        {
          categoryName: author.name,
          sections: sectionsWithBooks,
        },
        null,
        2
      )
    );

    res.status(200).json({
      categoryName: author.name,
      sections: sectionsWithBooks,
    });
  } catch (error) {
    console.error("Error fetching sections and books:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
