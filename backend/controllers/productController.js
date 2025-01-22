/*import cloudinary from "../lib/cloudinary.js"; // Adjust this path according to your project structure
import productModel from "../models/productModel.js"; // Adjust this path as per your structure

export const productController = async (req, res) => {
  try {
    const { name, description, price, bestsellers } = req.body;
    const imagePreview = req.file; // Access the uploaded file

    // Log product details and uploaded file
    console.log("Product Details:", { name, description, price, bestsellers });
    console.log("Uploaded Image Preview:", imagePreview);

    // Check if the file was uploaded
    if (!imagePreview) {
      return res.status(400).json({
        success: false,
        message:
          "No image file uploaded. Please make sure to send the file with the key 'image'.",
      });
    }

    // Upload the image to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) {
            reject(new Error("Failed to upload image to Cloudinary."));
          } else {
            resolve(result);
          }
        }
      );
      stream.end(imagePreview.buffer); // Pipe buffer to Cloudinary stream
    });

    // Create a product instance and save to the database
    const product = new productModel({
      name,
      description,
      price,
      bestsellers,
      image: result.secure_url, // Use the secure URL from Cloudinary
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Error in productController:", error); // Log the entire error object
    res.status(500).json({
      success: false,
      message: `Error creating product: ${error.message || error}`,
    });
  }
};*/
/*import productModel from "../models/productModel.js"; // Adjust this path as per your structure

export const productController = async (req, res) => {
  try {
    const { name, description, price, bestsellers } = req.body;

    // Log product details
    console.log("Product Details:", { name, description, price, bestsellers });

    // Check if any files were uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No image files uploaded. Please upload at least one image.",
      });
    }

    // Get the local paths of the uploaded images
    const imagePaths = req.files.map(
      (file) => `/uploads/images/${file.filename}`
    );

    // Create a product instance and save to the database
    const product = new productModel({
      name,
      description,
      price,
      bestsellers,
      images: imagePaths, // Store all the local paths of the images
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully with images",
      product,
    });
  } catch (error) {
    console.error("Error in productController:", error); // Log the entire error object
    res.status(500).json({
      success: false,
      message: `Error creating product: ${error.message || error}`,
    });
  }
};*/

import productModel from "../models/productModel.js"; // Adjust this path as per your structure

/*export const productController = async (req, res) => {
  try {
    const { name, description, price, bestsellers } = req.body;
    const imageFiles = req.files; // Access multiple uploaded files

    // Log product details and uploaded files
    console.log("Product Details:", { name, description, price, bestsellers });
    console.log("Uploaded Images:", imageFiles);

    // Check if any images were uploaded
    if (!imageFiles || imageFiles.length === 0) {
      return res.status(400).json({
        success: false,
        message:
          "No image files uploaded. Please make sure to send the files with the key 'images'.",
      });
    }

    // Map the uploaded files to get their paths
    const imagePaths = imageFiles.map(
      (file) => `/uploads/images/${file.filename}`
    );

    // Create a product instance and save to the database
    const product = new productModel({
      name,
      description,
      price,
      bestsellers,
      images: imagePaths, // Save all image paths as an array
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Error in productController:", error); // Log the entire error object
    res.status(500).json({
      success: false,
      message: `Error creating product: ${error.message || error}`,
    });
  }
};

//list product

export const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
*/

// Adjust import according to your project structure

/*export const productController = async (req, res) => {
  try {
    const { name, description, price, bestsellers, sections } = req.body; // `sections` is an array of section names
    const imageFiles = req.files; // Array of uploaded files

    // Check if required fields are present
    if (!name || !description || !price || !imageFiles || !sections) {
      return res.status(400).json({
        success: false,
        message: "All fields, including sections and images, are required.",
      });
    }

    // Validate if the number of sections matches the number of images
    if (imageFiles.length !== sections.length) {
      return res.status(400).json({
        success: false,
        message: "Each uploaded image must have a corresponding section.",
      });
    }

    // Map uploaded images with their corresponding sections
    const imagesWithSections = imageFiles.map((file, index) => ({
      path: `/uploads/images/${file.filename}`, // Path to the image
      section: sections[index], // The section from the request
    }));

    // Create the product document
    const product = new productModel({
      name,
      description,
      price,
      bestsellers,
      images: imagesWithSections, // Associating images with sections
    });

    // Save to database
    await product.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully with section-specific images.",
      product,
    });
  } catch (error) {
    console.error("Error in productController:", error);
    res.status(500).json({
      success: false,
      message: `Error creating product: ${error.message || error}`,
    });
  }
};

export const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};*/
// controllers/productController.js
// Import your existing product model

// Function to add a product with image and details
/*const addProduct = async (req, res) => {
  try {
    // Destructure incoming request body
    const { name, author, price, section } = req.body;
    const images = req.files.map((file) => file.path); // Assuming multiple files are uploaded via 'multipart/form-data'

    // Validate that images are provided
    if (images.length !== 4) {
      return res
        .status(400)
        .json({ message: "Please upload exactly 4 images." });
    }

    // Loop through the images and details, creating a new product for each
    const products = images.map((image, index) => ({
      name: `${name} ${index + 1}`, // Name of product, appending the index to differentiate
      author,
      price,
      image,
      section,
    }));

    // Save all products to the database using your existing model
    await productModel.insertMany(products);

    res.status(201).json({ message: "Products added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding products!" });
  }
};
*/
/*const addProduct = async (req, res) => {
  try {
    const { name, author, price, section } = req.body;

    // Extract file paths
    const imagePaths = req.files.map((file) => file.path);

    if (!imagePaths.length) {
      return res
        .status(400)
        .json({ message: "At least one image is required." });
    }

    // Create a new product
    const product = new productModel({
      name,
      author,
      price,
      section,
      images: imagePaths, // Save image paths
    });

    await product.save();

    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Function to get products by section
const getProductsBySection = async (req, res) => {
  try {
    const section = req.params.section;
    const products = await productModel.find({ section });

    if (!products.length) {
      return res
        .status(404)
        .json({ message: `No products found in ${section} section!` });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products!" });
  }
};

export { addProduct, getProductsBySection };*/

/*export const addProduct = async (req, res) => {
  try {
    const { name, author, price, section } = req.body;

    // Validate types
    if (
      typeof name !== "string" ||
      typeof author !== "string" ||
      typeof section !== "string"
    ) {
      return res.status(400).json({
        error:
          "Invalid data format: name, author, and section must be strings.",
      });
    }

    if (typeof price !== "number") {
      return res.status(400).json({
        error: "Invalid data format: price must be a number.",
      });
    }

    // Extract file paths
    const imagePaths = req.files?.map((file) => file.path) || [];

    if (!imagePaths.length) {
      return res
        .status(400)
        .json({ message: "At least one image is required." });
    }

    // Create a new product
    const product = new productModel({
      name,
      author,
      price,
      section,
      images: imagePaths, // Save image paths
    });

    await product.save();

    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Server error", error });
  }
};*/

/*export const addProduct = async (req, res) => {
  try {
    const { name, author, price, section } = req.body;

    // Images will be available in req.files after multer processes them
    const images = req.files.map((file) => `/uploads/images/${file.filename}`); // Get the file paths

    console.log("Section provided:", section);
    console.log("Images:", images); // Log the image paths to ensure they are being received

    // Ensure section is a valid string
    const sectionValue =
      typeof section === "string" ? section.toLowerCase() : null;

    const validSections = [
      "fiction",
      "non-fiction",
      "technology",
      "science",
      "history",
    ];

    if (!sectionValue || !validSections.includes(sectionValue)) {
      return res.status(400).json({
        message: `Invalid section: ${section}. Allowed sections are ${validSections.join(
          ", "
        )}.`,
      });
    }

    // Create product
    const product = new productModel({
      name:
        typeof name === "string" ? name : Array.isArray(name) ? name[0] : "",
      author:
        typeof author === "string"
          ? author
          : Array.isArray(author)
          ? author[0]
          : "",
      price: typeof price === "number" ? price : parseFloat(price),
      section: sectionValue,
      images: images, // Store image paths in the database
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(400).json({ error: error.message });
  }
};*/

/*export const addProduct = async (req, res) => {
  try {
    const { name, author, price, section } = req.body;

    // Images will be available in req.files after multer processes them
    const images = req.files.map((file) => `/uploads/images/${file.filename}`); // Get the file paths

    console.log("Sections provided:", section); // Log the section(s) to check their format
    console.log("Images:", images); // Log the image paths to ensure they are being received

    // Ensure section is an array or split it if it's a string
    let sections = Array.isArray(section)
      ? section
      : section.split(",").map((s) => s.trim().toLowerCase());

    
    const validSections = [
      "popular in punjab",
      "punjabi literature",
      "punjabi culture",
      "best sellers",
    ];

    // Validate each section
    const invalidSections = sections.filter((s) => !validSections.includes(s));
    if (invalidSections.length > 0) {
      return res.status(400).json({
        message: `Invalid sections: ${invalidSections.join(
          ", "
        )}. Allowed sections are ${validSections.join(", ")}.`,
      });
    }

    // Create product
    const product = new productModel({
      name:
        typeof name === "string" ? name : Array.isArray(name) ? name[0] : "",
      author:
        typeof author === "string"
          ? author
          : Array.isArray(author)
          ? author[0]
          : "",
      price: typeof price === "number" ? price : parseFloat(price),
      section: sections, // Store an array of sections in the database
      images: images, // Store image paths in the database
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(400).json({ error: error.message });
  }
};*/
// Ensure you import your product model

/*export const addProduct = async (req, res) => {
  try {
    // Extract form data from the request body
    const { name, author, price, section } = req.body;

    // Validate and extract image file paths from req.files
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No images uploaded" });
    }
    const images = req.files.map((file) => `/uploads/images/${file.filename}`); // Save relative paths

    // Log for debugging purposes
    console.log("Received Sections:", section);
    console.log("Uploaded Images:", images);

    // Ensure `section` is an array or parse it from a comma-separated string
    let sections = Array.isArray(section)
      ? section
      : section.split(",").map((s) => s.trim().toLowerCase());

    // Define allowed sections
    const validSections = [
      "popular in punjab",
      "punjabi literature",
      "punjabi culture",
      "best sellers",
    ];

    // Validate provided sections
    const invalidSections = sections.filter((s) => !validSections.includes(s));
    if (invalidSections.length > 0) {
      return res.status(400).json({
        message: `Invalid sections: ${invalidSections.join(
          ", "
        )}. Allowed sections are: ${validSections.join(", ")}.`,
      });
    }

    // Create a new product document
    const product = new productModel({
      name:
        typeof name === "string" ? name : Array.isArray(name) ? name[0] : "",
      author:
        typeof author === "string"
          ? author
          : Array.isArray(author)
          ? author[0]
          : "",
      price: typeof price === "number" ? price : parseFloat(price),
      section: sections, // Store an array of sections
      images: images, // Store image paths
    });

    // Save product to the database
    await product.save();

    // Respond with success
    res.status(201).json({
      message: "Product added successfully!",
      product,
    });
  } catch (error) {
    // Log and respond with error details
    console.error("Error adding product:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};*/

export const addProduct = async (req, res) => {
  try {
    const { name, author, price, section } = req.body;

    // Validate and extract image file paths
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No images uploaded" });
    }
    const images = req.files.map((file) => `/uploads/images/${file.filename}`);

    // Ensure `section` is an array
    let sections = Array.isArray(section)
      ? section
      : section.split(",").map((s) => s.trim().toLowerCase());

    const validSections = [
      "popular in punjab",
      "punjabi literature",
      "punjabi culture",
      "best sellers",
    ];

    const invalidSections = sections.filter((s) => !validSections.includes(s));
    if (invalidSections.length > 0) {
      return res.status(400).json({
        message: `Invalid sections: ${invalidSections.join(
          ", "
        )}. Allowed sections: ${validSections.join(", ")}.`,
      });
    }

    // Check for duplicate product name
    const existingProduct = await productModel.findOne({ name });
    if (existingProduct) {
      return res
        .status(409)
        .json({ message: `Product with name "${name}" already exists.` });
    }

    const product = new productModel({
      name: typeof name === "string" ? name.trim() : "",
      author: typeof author === "string" ? author.trim() : "",
      price: parseFloat(price),
      section: sections,
      images: images,
    });

    await product.save();
    res.status(201).json({
      message: "Product added successfully!",
      product,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    if (error.code === 11000) {
      res.status(409).json({
        message: "Duplicate product name",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }
};

/*export const getProductsBySection = async (req, res) => {
  try {
    const section = req.params.section?.toString().toLowerCase();

    if (!section) {
      return res
        .status(400)
        .json({ message: "Section parameter is required." });
    }

    const products = await productModel.find({ section }).sort({ name: 1 }); // Sort by name alphabetically

    if (!products.length) {
      return res
        .status(404)
        .json({ message: `No products found in ${section} section!` });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products!", error });
  }
};
*/
/*export const getProductsBySection = async (req, res) => {
  try {
    const section = req.params.section?.toString().toLowerCase();

    if (!section) {
      return res
        .status(400)
        .json({ message: "Section parameter is required." });
    }

    // Match the correct field name in your schema
    const products = await productModel
      .find({ category: section })
      .sort({ name: 1 });

    if (!products.length) {
      return res
        .status(404)
        .json({ message: `No products found in the ${section} section!` });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products!", error });
  }
};
*/

/*export const getProductsBySection = async (req, res) => {
  try {
    const section = req.params.section?.toString().toLowerCase();
    console.log("Requested section:", section);

    // Static sections
    const validSections = ["fiction", "non-fiction", "history", "science"];

    if (!section || !validSections.includes(section)) {
      return res
        .status(400)
        .json({ message: "Invalid or missing section parameter." });
    }

    // Find products where the section array contains the requested section
    const products = await productModel
      .find({ section: section })
      .sort({ name: 1 });

    if (!products.length) {
      return res
        .status(404)
        .json({ message: `No products found in the ${section} section!` });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products!", error });
  }
};
*/

// controllers/productController.js

// Import your product model

// Controller to get products by section
/*export const getProductsBySection = (req, res) => {
  const { section } = req.params; // Get section from request parameters

  productModel
    .find({ section: section }) // Assuming section is a field in the Product model
    .then((products) => {
      if (products.length === 0) {
        return res
          .status(404)
          .json({ message: "No products found for this section" });
      }
      res.json(products); // Send the fetched products as a response
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Error fetching products" });
    });
};*/
export const getProductsBySection = async (req, res) => {
  try {
    const section = req.params.section || req.query.section;

    // Ensure a section is provided
    if (!section) {
      return res.status(400).json({ message: "Section is required." });
    }

    // Query products that match the section
    const products = await productModel.find({
      section: { $in: [section.toLowerCase()] }, // Convert section to lowercase for consistency
    });

    // Handle case where no products are found
    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: `No products found for section "${section}".` });
    }

    res.status(200).json(products); // Send products in response
  } catch (error) {
    console.error("Error fetching products by section:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching products." });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get product ID from request parameters

    const product = await productModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully", product });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Error deleting product" });
  }
};

// Update Product
/*export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get product ID from request parameters
    const { name, author, price, section } = req.body;

    // Process updated images if provided
    let updatedImages = [];
    if (req.files && req.files.length > 0) {
      updatedImages = req.files.map(
        (file) => `/uploads/images/${file.filename}`
      );
    }

    let sections = Array.isArray(section)
      ? section
      : section.split(",").map((s) => s.trim().toLowerCase());

    const validSections = [
      "fiction",
      "non-fiction",
      "technology",
      "science",
      "history",
    ];

    const invalidSections = sections.filter((s) => !validSections.includes(s));
    if (invalidSections.length > 0) {
      return res.status(400).json({
        message: `Invalid sections: ${invalidSections.join(
          ", "
        )}. Allowed sections are ${validSections.join(", ")}.`,
      });
    }

    // Find and update the product
    const product = await productModel.findByIdAndUpdate(
      id,
      {
        name,
        author,
        price,
        section: sections,
        ...(updatedImages.length > 0 && { images: updatedImages }),
      },
      { new: true } // Return the updated document
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Error updating product" });
  }
};
*/ /*export const updateProduct = async (req, res) => {
  try {
    const { name, author, price, section } = req.body;
    const productId = req.params.id;

    // Retrieve the product by ID
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Handle the images update
    let updatedImages = [...product.images]; // Start with the existing images

    if (req.files && req.files.images) {
      // If there are new images, add them to the updatedImages array
      updatedImages = [...updatedImages, ...req.files.images];
    }

    // Update the product with new values
    product.name = name || product.name;
    product.author = author || product.author;
    product.price = price || product.price;
    product.section = section || product.section;
    product.images = updatedImages;

    // Save the updated product
    await product.save();

    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};
*/

/*export const updateProduct = async (req, res) => {
  try {
    const { name, author, price, section } = req.body;
    const productId = req.params.id;

    // Retrieve the product by ID
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Handle the images update
    let updatedImages = [...product.images]; // Start with the existing images

    if (req.files && req.files.images) {
      // If new images are provided, replace the existing images or append new ones
      updatedImages = req.files.images.map((file) => file.path); // Save file paths, or adjust depending on your setup
    }

    // Update the product details
    product.name = name || product.name;
    product.author = author || product.author;
    product.price = price || product.price;
    product.section = section || product.section;
    product.images = updatedImages; // Set the new image paths

    // Save the updated product
    await product.save();

    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};
*/

export const updateProduct = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Request Files:", req.files);

    const { name, author, price, section } = req.body;
    const productId = req.params.id;

    // Retrieve the product by ID
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    console.log("Existing Product:", product);

    // Update product details
    product.name = name || product.name;
    product.author = author || product.author;
    product.price = price || product.price;
    product.section = section || product.section;

    // Handle images
    if (req.files && req.files.length > 0) {
      const uploadedImages = req.files.map((file) => file.path);
      product.images = uploadedImages; // Replace images
    }

    // Save updated product
    const updatedProduct = await product.save();
    console.log("Updated Product:", updatedProduct);

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};
