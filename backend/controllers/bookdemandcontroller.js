import BookDemand from "../models/bookondemad.js";

/*export const addBookDetails = async (req, res) => {
  try {
    const { name, email, phone, bookdetails, additionalnotes } = req.body;
    console.log(req.body);
    // Validate required fields
    if (!name || !email || !phone || !bookdetails || additionalnotes) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate sectionId and categoryId (check if they're valid ObjectId)

    // Extract image file paths

    // Check for duplicate book title

    // Create and save the book
    const book = new BookDemand({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),

      bookdetails: bookdetails.trim(),
      additionalnotes: additionalnotes.trim(),
    });

    await book.save();

    // If sectionId is provided, associate the book with the section

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
*/

/*export const addBookDetails = async (req, res) => {
  try {
    const { name, email, phone, bookdetails, additionalnotes } = req.body;

    console.log("Request body:", req.body);

    // Validate required fields
    if (!name || !email || !phone || !bookdetails || !additionalnotes) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create and save the book
    const book = new BookDemand({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      bookdetails: bookdetails.trim(),
      additionalnotes: additionalnotes.trim(),
    });

    await book.save();

    res.status(201).json({
      message: "Book added successfully!",
      book,
    });
  } catch (error) {
    console.error("Error adding book:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      const duplicateKey = Object.keys(error.keyPattern).join(", ");
      return res.status(400).json({
        message: `Duplicate value for field: ${duplicateKey}. Please provide a unique value.`,
        field: duplicateKey,
      });
    }

    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};*/

/*export const addBookDetails = async (req, res) => {
  try {
    const { name, email, phone, bookdetails, additionalnotes } = req.body;

    console.log("Request body:", req.body);

    // Validate required fields
    if (!name || !email || !phone || !bookdetails || !additionalnotes) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create and save the book
    const book = new BookDemand({
      name,
      email,
      phone,
      bookdetails,
      additionalnotes,
    });

    await book.save();

    res.status(201).json({
      message: "Book added successfully!",
      book,
    });
  } catch (error) {
    console.error("Error adding book:", error);

    // Handle duplicate key error

    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
*/

/*export const addBookDetails = async (req, res) => {
  try {
    const { name, email, phone, bookdetails, additionalnotes } = req.body;

    console.log("Request body:", req.body);

    // Validate required fields
    if (!name || !email || !phone || !bookdetails || !additionalnotes) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if a book demand with the same name and email already exists
    const existingBook = await BookDemand.findOne({ name, email });
    if (existingBook) {
      return res
        .status(400)
        .json({ message: "Book demand already exists for this user." });
    }

    // Create and save the book
    const book = new BookDemand({
      name,
      email,
      phone,
      bookdetails,
      additionalnotes,
    });

    await book.save();

    res.status(201).json({
      message: "Book added successfully!",
      book,
    });
  } catch (error) {
    console.error("Error adding book:", error);

    // Handle duplicate key error (if any)
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Duplicate entry error", error: error.message });
    }

    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
*/

export const addBookDetails = async (req, res) => {
  try {
    const { name, email, phone, bookdetails, additionalnotes } = req.body;

    console.log("Request body:", req.body);

    // Validate required fields
    if (!name || !email || !phone || !bookdetails || !additionalnotes) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create and save the book demand entry
    const book = new BookDemand({
      name,
      email,
      phone,
      bookdetails,
      additionalnotes,
    });

    await book.save();

    res.status(201).json({
      message: "Book added successfully!",
      book,
    });
  } catch (error) {
    console.error("Error adding book:", error);

    // Handle unexpected errors
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
