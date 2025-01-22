import Author from "../models/addAuthor.js";

export const createAuthor = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !req.file) {
      return res.status(400).json({ message: "Name and image are required." });
    }

    // Use the path to the uploaded image
    const imagePath = `/uploads/images/${req.file.filename}`;

    const category = new Author({ name, image: imagePath });
    await category.save();

    res.status(201).json({
      message: "Author created successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating author", error });
  }
};
export const getAllAuthor = async (req, res) => {
  try {
    const categories = await Author.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};
