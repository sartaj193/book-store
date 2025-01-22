// controllers/cartController.js

/*import Cart from "../models/cartmodel.js";
import mongoose from "mongoose";
export const addItemToCart = async (req, res) => {
  const { guestId, userId, bookId, title, image, price } = req.body;
  const id = userId || guestId;

  try {
    let cart = await Cart.findOne({ $or: [{ guestId: id }, { userId: id }] });

    if (!cart) {
      cart = new Cart({ userId, guestId, items: [], totalAmount: 0 });
    }

    // Check if the item already exists
    const itemIndex = cart.items.findIndex((item) => item.bookId == bookId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({ bookId, title, image, price, quantity: 1 });
    }

    // Update total amount
    cart.totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item to cart" });
  }
};

export const getCart = async (req, res) => {
  const id = req.params.id;
  console.log("Fetching cart for ID:", id); // Debug Log

  try {
    const cart = await Cart.findOne({ $or: [{ guestId: id }, { userId: id }] });
    if (!cart) {
      console.warn("Cart not found for ID:", id); // Debug Warning
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error); // Debug Error
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};

// Update item quantity
export const updateCartItem = async (req, res) => {
  const id = req.params.id;
  const { bookId, quantityChange } = req.body;

  try {
    const cart = await Cart.findOne({ $or: [{ guestId: id }, { userId: id }] });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex((item) => item.bookId == bookId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantityChange;

      // Remove item if quantity is zero
      if (cart.items[itemIndex].quantity <= 0) {
        cart.items.splice(itemIndex, 1);
      }
    }

    // Update total amount
    cart.totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to update cart item" });
  }
};

export const mergeCart = async (req, res) => {
  try {
    const { guestId, userId } = req.body;

    if (!guestId || !userId) {
      return res.status(400).json({
        success: false,
        message: "Both guestId and userId are required for merging.",
      });
    }

    console.log("Merging cart with guestId:", guestId, "and userId:", userId);

    const guestCart = await Cart.findOne({ guestId });
    let userCart = await Cart.findOne({ userId });

    if (!guestCart) {
      console.warn(`No guest cart found for guestId: ${guestId}`);
      return res.status(200).json({
        success: true,
        message: "No guest cart to merge.",
        cart: userCart || { userId, items: [], totalAmount: 0 },
      });
    }

    const mergedItems = userCart ? [...userCart.items] : [];

    guestCart.items.forEach((guestItem) => {
      if (guestItem.quantity > 0 && guestItem.price >= 0) {
        const existingItem = mergedItems.find(
          (item) => item.bookId.toString() === guestItem.bookId.toString()
        );
        if (existingItem) {
          existingItem.quantity += guestItem.quantity;
        } else {
          mergedItems.push(guestItem);
        }
      }
    });

    const totalAmount = mergedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    if (totalAmount < 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid total amount after merging carts.",
      });
    }

    const updateData = {
      items: mergedItems,
      totalAmount,
    };

    if (userCart) {
      userCart = await Cart.findOneAndUpdate({ userId }, updateData, {
        new: true,
        runValidators: true,
      });
    } else {
      userCart = new Cart({ userId, ...updateData });
      await userCart.save();
    }

    await Cart.deleteOne({ guestId });

    return res.status(200).json({
      success: true,
      message: "Carts merged successfully.",
      cart: userCart,
    });
  } catch (error) {
    console.error("Error merging carts:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while merging carts.",
      error: error.message || "Unknown error",
    });
  }
};




// Test the mergeCart function

// Example of the checkout controller handling the place-order action

export const removeCartItem = async (req, res) => {
  const { id, bookId } = req.params; // 'id' can be guestId or userId
  try {
    // Find the cart for either guestId or userId
    const cart = await Cart.findOne({ $or: [{ guestId: id }, { userId: id }] });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Remove the item with the matching bookId
    cart.items = cart.items.filter((item) => item.bookId.toString() !== bookId);

    // Recalculate the total amount
    cart.totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Save the updated cart
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error removing cart item:", error);
    res.status(500).json({ message: "Failed to remove item from cart" });
  }
};

// File: backend/controllers/cartsController.js
*/

import Cart from "../models/cartmodel.js";
import mongoose from "mongoose";

// Add item to cart
export const addItemToCart = async (req, res) => {
  const { guestId, userId, bookId, title, image, price } = req.body;
  const id = userId || guestId;

  try {
    let cart = await Cart.findOne({ $or: [{ guestId: id }, { userId: id }] });

    if (!cart) {
      cart = new Cart({ userId, guestId, items: [], totalAmount: 0 });
    }

    // Check if the item already exists
    const itemIndex = cart.items.findIndex((item) => item.bookId == bookId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({ bookId, title, image, price, quantity: 1 });
    }

    // Update total amount
    cart.totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item to cart" });
  }
};

// Get cart for guestId or userId
// Assuming Cart is your model

export const getCart = async (req, res) => {
  const id = req.params.id;

  try {
    // Try to find the cart by guestId or userId
    let cart = await Cart.findOne({ $or: [{ guestId: id }, { userId: id }] });

    // If cart is not found, create a new cart for the guestId or userId
    if (!cart) {
      cart = new Cart({
        guestId: id, // or userId, depending on whether you are handling a guest or logged-in user
        items: [], // New cart has an empty items array
      });
      await cart.save(); // Save the newly created cart
      return res.status(201).json(cart); // Return the newly created cart
    }

    // If cart is found, return it
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};

// Update item quantity in cart
export const updateCartItem = async (req, res) => {
  const id = req.params.id;
  const { bookId, quantityChange } = req.body;

  try {
    const cart = await Cart.findOne({ $or: [{ guestId: id }, { userId: id }] });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex((item) => item.bookId == bookId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantityChange;

      // Remove item if quantity is zero
      if (cart.items[itemIndex].quantity <= 0) {
        cart.items.splice(itemIndex, 1);
      }
    }

    // Update total amount
    cart.totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to update cart item" });
  }
};

// Remove an item from the cart
export const removeCartItem = async (req, res) => {
  const { id, bookId } = req.params;

  try {
    const cart = await Cart.findOne({ $or: [{ guestId: id }, { userId: id }] });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter((item) => item.bookId.toString() !== bookId);

    // Recalculate the total amount
    cart.totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Failed to remove item from cart" });
  }
};

// Utility function to merge carts
export const mergeCartUtility = async (guestId, userId) => {
  if (!guestId || !userId) {
    throw new Error("Both guestId and userId are required for merging.");
  }

  const guestCart = await Cart.findOne({ guestId });
  let userCart = await Cart.findOne({ userId });

  if (!guestCart) {
    return userCart || { userId, items: [], totalAmount: 0 };
  }

  const mergedItems = userCart ? [...userCart.items] : [];

  guestCart.items.forEach((guestItem) => {
    if (guestItem.quantity > 0 && guestItem.price >= 0) {
      const existingItem = mergedItems.find(
        (item) => item.bookId.toString() === guestItem.bookId.toString()
      );
      if (existingItem) {
        existingItem.quantity += guestItem.quantity;
      } else {
        mergedItems.push(guestItem);
      }
    }
  });

  const totalAmount = mergedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (totalAmount < 0) {
    throw new Error("Invalid total amount after merging carts.");
  }

  const updateData = {
    items: mergedItems,
    totalAmount,
  };

  if (userCart) {
    userCart = await Cart.findOneAndUpdate({ userId }, updateData, {
      new: true,
      runValidators: true,
    });
  } else {
    userCart = new Cart({ userId, ...updateData });
    await userCart.save();
  }

  await Cart.deleteOne({ guestId });
  return userCart;
};

// Merge carts route handler
export const mergeCart = async (req, res) => {
  try {
    const { guestId, userId } = req.body;

    if (!guestId || !userId) {
      return res.status(400).json({
        success: false,
        message: "Both guestId and userId are required for merging.",
      });
    }

    const mergedCart = await mergeCartUtility(guestId, userId);
    res.status(200).json({
      success: true,
      message: "Carts merged successfully.",
      cart: mergedCart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while merging carts.",
    });
  }
};
