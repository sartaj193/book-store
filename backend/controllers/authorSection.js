import Authorsection from "../models/AuthorSection.js";
//import Book from "../models/addBookModel.js";
import AuthorBook from "../models/authorbook.js";
import Author from "../models/addAuthor.js";
/*
export const AuthorSectionIO = async (req, res) => {
  try {
    const { name, authorId } = req.body;
    const category = await Author.findById(authorId);
    if (!category) {
      res.json({ success: false, message: "Author not found" });
    }
    const section = new Authorsection({ name, author: authorId });
    await section.save();
    res.json({ success: true, message: "Authorsection craeted successfully" });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
      error,
    });
  }
};
export const getAuthorSectionsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const sections = await Authorsection.find({ category: categoryId });
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sections", error });
  }
};

export const fetchAuthorSectionsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params; // Get category ID from the route

    // Find sections associated with the category
    const sections = await Authorsection.find({ category: categoryId });

    if (!sections.length) {
      return res
        .status(404)
        .json({ message: "No sections found for this category." });
    }

    res.status(200).json(sections);
  } catch (error) {
    console.error("Error fetching sections by category:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};


  try {
    const { categoryId } = req.params;

    // Fetch sections associated with the category
    const sections = await Section.find({ category: categoryId }).lean();

    // Fetch books for each section and attach them
    const sectionsWithBooks = await Promise.all(
      sections.map(async (section) => {
        const books = await Book.find({ section: section._id }).lean();

        // Ensure all books have a price or fallback value
        const sanitizedBooks = books.map((book) => ({
          ...book,
          price: book.price || 0, // Provide a default price if missing
        }));

        return { ...section, books: sanitizedBooks };
      })
    );

    res.status(200).json(sectionsWithBooks);
  } catch (error) {
    console.error("Error fetching sections and books by category:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};


export const fetchSectionsAndBooksByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Fetch sections for the category
    const sections = await Authorsection.find({ category: categoryId }).lean();

    // Fetch books for each section
    const sectionsWithBooks = await Promise.all(
      sections.map(async (section) => {
        const books = await Book.find({ section: section._id }).lean();

        // Ensure fallback values for each book field
        const sanitizedBooks = books.map((book) => ({
          ...book,
          images: book.images?.length ? book.images : ["/default-image.jpg"], // Default image
          author: book.author || "Unknown Author", // Default author
          price: book.price || 0, // Default price
        }));

        return { ...section, books: sanitizedBooks };
      })
    );

    res.status(200).json(sectionsWithBooks);
  } catch (error) {
    console.error("Error fetching sections and books:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
*/

export const AuthorSectionIO = async (req, res) => {
  try {
    const { name, authorId } = req.body;
    const category = await Author.findById(authorId);

    if (!category) {
      return res.json({ success: false, message: "Author not found" });
    }

    const section = new Authorsection({ name, author: authorId });
    await section.save();

    return res.json({
      success: true,
      message: "Author section created successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
      error,
    });
  }
};

export const getAuthorSectionsByCategory = async (req, res) => {
  const { authorId } = req.params;
  try {
    const sections = await Authorsection.find({ author: authorId });
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sections", error });
  }
};

/*export const fetchAuthorSectionsByCategory = async (req, res) => {
  try {
    const { authorId } = req.params; // Get category ID from the route

    // Find sections associated with the category
    const sections = await Authorsection.find({ author: authorId });

    if (!sections.length) {
      return res
        .status(404)
        .json({ message: "No sections found for this category." });
    }

    res.status(200).json(sections);
  } catch (error) {
    console.error("Error fetching sections by category:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
*/
import mongoose from "mongoose";

export const fetchAuthorSectionsByCategory = async (req, res) => {
  try {
    const { authorId } = req.params;

    if (!authorId || !mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ message: "Invalid or missing author ID." });
    }

    const sections = await Authorsection.find({ author: authorId });

    if (!sections.length) {
      return res
        .status(404)
        .json({ message: "No sections found for this author." });
    }

    res.status(200).json(sections);
  } catch (error) {
    console.error("Error in fetchAuthorSectionsByCategory:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
/*export const fetchAuthorSectionsAndBooksByCategory = async (req, res) => {
  try {
    const { authorId } = req.params;

    // Fetch sections for the category
    const sections = await Authorsection.find({ author: authorId }).lean();

    // Fetch books for each section
    const sectionsWithBooks = await Promise.all(
      sections.map(async (authorsection) => {
        const books = await AuthorBook.find({ authorsection: authorsection._id }).lean();

        // Ensure fallback values for each book field
        const sanitizedBooks = books.map((book) => ({
          ...book,
          images: book.images?.length ? book.images : ["/default-image.jpg"], // Default image
          author: book.author || "Unknown Author", // Default author
          price: book.price || 0, // Default price
        }));

        return { ...authorsection, books: sanitizedBooks };
      })
    );

    res.status(200).json(sectionsWithBooks);
  } catch (error) {
    console.error("Error fetching sections and books:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
*/

/*export const fetchAuthorSectionsAndBooksByCategory = async (req, res) => {
  try {
    const { authorId } = req.params;

    // Validate author ID
    if (!mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ message: "Invalid authorId format." });
    }

    // Fetch sections for the author and populate the books field
    const sections = await Authorsection.find({ author: authorId })
      .populate({
        path: "books", // Populate the books array
        model: "AddAuthorBooks", // Ensure this matches the AuthorBook model name
        select: "title authors price images", // Only include necessary fields
      })
      .lean(); // Convert to plain JavaScript objects

    if (!sections.length) {
      return res
        .status(404)
        .json({ message: "No sections found for this author." });
    }

    // Fetch the author's name
    const author = await Author.findById(authorId).lean();
    const categoryName = author ? author.name : "Unknown Author";

    res.status(200).json({
      categoryName,
      sections,
    });
  } catch (error) {
    console.error("Error fetching sections and books:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};*/
//ss
/*export const fetchAuthorSectionsAndBooksByCategory = async (req, res) => {
  try {
    const { authorId } = req.params;

    // Validate authorId
    if (!mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ message: "Invalid authorId format." });
    }

    // Fetch sections for the author and populate the books field
    const sections = await Authorsection.find({ author: authorId })
      .populate({
        path: "books", // Populate the books array
        model: "AddAuthorBooks", // Match the AuthorBook model
        select: "title authors price images", // Specify fields to return
      })
      .lean();

    if (!sections.length) {
      return res
        .status(404)
        .json({ message: "No sections found for this author." });
    }

    // Fetch the author's name
    const author = await Author.findById(authorId).lean();
    const categoryName = author ? author.name : "Unknown Author";

    res.status(200).json({
      categoryName,
      sections,
    });
  } catch (error) {
    console.error("Error fetching sections and books:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
*/

/*export const fetchAuthorSectionsAndBooksByCategory = async (req, res) => {
  try {
    const { authorId } = req.params;

    // Validate authorId
    if (!mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ message: "Invalid authorId format." });
    }

    // Fetch the author's name
    const author = await Author.findById(authorId).lean();
    if (!author) {
      return res.status(404).json({ message: "Author not found." });
    }

    console.log("Author found:", author);

    // Fetch sections for the author
    const sections = await Authorsection.find({ author: authorId }).lean();

    if (!sections.length) {
      return res
        .status(404)
        .json({ message: "No sections found for this author." });
    }

    console.log("Sections found:", sections);

    // Fetch books for each section
    const sectionsWithBooks = await Promise.all(
      sections.map(async (section) => {
        console.log(`Fetching books for section: ${section._id}`);

        const books = await AuthorBook.find({
          $or: [
            { authorsection: section._id },
            { section: section._id }, // Check both field names
          ],
          author: authorId,
        })
          .select("title authors price images")
          .lean();

        console.log(`Books found for section ${section._id}:`, books);

        return {
          ...section,
          books,
        };
      })
    );

    console.log("Sections with books:", sectionsWithBooks);

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
*/

export const fetchAuthorSectionsAndBooksByCategory = async (req, res) => {
  try {
    const { authorId } = req.params;

    // Validate authorId
    if (!mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({ message: "Invalid authorId format." });
    }

    // Fetch the author's name
    const author = await Author.findById(authorId).lean();
    if (!author) {
      return res.status(404).json({ message: "Author not found." });
    }

    console.log("Author found:", author);

    // Fetch sections for the author
    const sections = await Authorsection.find({ author: authorId }).lean();

    if (!sections.length) {
      return res
        .status(404)
        .json({ message: "No sections found for this author." });
    }

    console.log("Sections found:", sections);

    // Fetch books for each section
    const sectionsWithBooks = await Promise.all(
      sections.map(async (section) => {
        console.log(`Fetching books for section: ${section._id}`);

        const books = await AuthorBook.find({
          $or: [
            { authorsection: section._id },
            { authorsection: null, author: authorId },
          ],
        })
          .select("title authors price images")
          .lean();

        console.log(`Books found for section ${section._id}:`, books);

        return {
          ...section,
          books,
        };
      })
    );

    console.log(
      "Sections with books:",
      JSON.stringify(sectionsWithBooks, null, 2)
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
