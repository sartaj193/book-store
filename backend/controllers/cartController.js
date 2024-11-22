// controllers/cartController.js
import User from "../models/user.model.js";

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, name, price, quantity } = req.body; // Extracting product data from request
    const userId = req.body.userId; // Extracted userId from authUser middleware

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the product already exists in the user's cart
    const productIndex = user.cart.findIndex(
      (item) => item.productId === productId
    );

    if (productIndex >= 0) {
      // If the product exists, update the quantity
      user.cart[productIndex].quantity += quantity;
    } else {
      // If not, add the product to the cart
      user.cart.push({ productId, name, price, quantity });
    }

    // Save the user document with the updated cart
    await user.save();
    res.status(200).json({ message: "Product added to cart", cart: user.cart });
  } catch (error) {
    res.status(500).json({ message: "Error adding product to cart", error });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body; // Expecting productId to be sent in the request
    const userId = req.body.userId; // Extracted userId from authUser middleware

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Filter out the item to remove it from the cart
    user.cart = user.cart.filter((item) => item.productId !== productId);

    await user.save();
    res
      .status(200)
      .json({ message: "Product removed from cart", cart: user.cart });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error removing product from cart", error });
  }
};

// Get user's cart items
export const getCart = async (req, res) => {
  try {
    const userId = req.body.userId; // Extracted userId from authUser middleware

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ cart: user.cart });
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};

// Clear the cart
export const clearCart = async (req, res) => {
  try {
    const userId = req.body.userId; // Extracted userId from authUser middleware

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Clear the cart by setting it to an empty array
    user.cart = [];
    await user.save();

    res.status(200).json({ message: "Cart cleared", cart: user.cart });
  } catch (error) {
    res.status(500).json({ message: "Error clearing cart", error });
  }
};
