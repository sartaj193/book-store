import Section from "../models/sectionModel.js";
import Book from "../models/addBookModel.js";
import Category from "../models/categorymodel.js";

export const SectionIO = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    const category = await Category.findById(categoryId);
    if (!category) {
      res.json({ success: false, message: "category not found" });
    }
    const section = new Section({ name, category: categoryId });
    await section.save();
    res.json({ success: true, message: "section craeted successfully" });
  } catch (error) {
    res.json({ success: false, message: message.error, error });
  }
};
export const getSectionsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const sections = await Section.find({ category: categoryId });
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sections", error });
  }
};

export const fetchSectionsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params; // Get category ID from the route

    // Find sections associated with the category
    const sections = await Section.find({ category: categoryId });

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

/*export const fetchSectionsAndBooksByCategory = async (req, res) => {
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
*/

export const fetchSectionsAndBooksByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Fetch sections for the category
    const sections = await Section.find({ category: categoryId }).lean();

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
