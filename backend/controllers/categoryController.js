/*import slugify from "slugify";
import categoryModel from "../models/categorymodel.js";

export const categoryProductController = async (req, res) => {
  try {
    const { name } = req.body;
    // validations
    if (!name) {
      return res.status(401).send({
        message: "name is required",
      });
    }
    const existingProduct = await categoryModel.findOne({ name });
    if (existingProduct) {
      res.status(400).send({
        message: "product already existed",
      });
    }
    const product = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    return res.status(200).send({
      message: "product created successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};
*/

// controllers/categoryController.js

import Category from "../models/categorymodel.js";
// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("sections");
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};

// Create a new category
// Adjust the path as needed

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !req.file) {
      return res.status(400).json({ message: "Name and image are required." });
    }

    // Use the path to the uploaded image
    const imagePath = `/uploads/images/${req.file.filename}`;

    const category = new Category({ name, image: imagePath });
    await category.save();

    res.status(201).json({
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating category", error });
  }
};

// Update a category
export const CategoryIO = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image } = req.body;
    const category = await Category.findByIdAndUpdate(
      id,
      { name, image },
      { new: true }
    );
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res
      .status(200)
      .json({ message: "Category updated successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
};

// Delete a category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
};

import Section from "../models/sectionModel.js";
export const getCategorySections = async (req, res) => {
  try {
    const { id } = req.params; // Category ID
    const sections = await Section.find({ category: id }); // Assuming Section model has a `category` field
    if (!sections.length) {
      return res
        .status(404)
        .json({ message: "No sections found for this category." });
    }
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sections", error });
  }
};
