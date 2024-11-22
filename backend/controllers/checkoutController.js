/*import Order from "../models/ordersmodel.js";

import Product from "../models/productModel.js";

export const placeOrder = async (req, res) => {
  try {
    const { cartItems, userDetails } = req.body; // Get the cart items and user details from the request body

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ message: "No items in the cart" });
    }

    // Create an array to hold the order details
    const orderProducts = [];

    // Loop through the cartItems and fetch product details
    for (let item of cartItems) {
      const product = await Product.findById(item.productId); // Find product by ID

      if (!product) {
        return res
          .status(404)
          .json({ message: `Product ${item.productId} not found` });
      }

      // Prepare order product data with product details
      orderProducts.push({
        productId: item.productId,
        name: product.name,
        author: product.author,
        price: product.price,
        image: product.images[0], // Assume the first image is the one to display
        quantity: item.quantity,
      });
    }

    // Create the order object to save in the database
    const order = new Order({
      userId: req.user._id, // User ID from auth middleware
      userDetails,
      products: orderProducts,
      totalAmount: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      status: "Pending", // You can later add a status like 'Confirmed', 'Shipped', etc.
    });

    // Save the order to the database
    await order.save();

    return res
      .status(201)
      .json({ message: "Order placed successfully", orderId: order._id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
*/

/*import Order from "../models/ordersmodel.js";
import Product from "../models/productModel.js";

 import Cart from "../models/cartmodel.js"
 // Import the mergeCart function
import { mergeCart } from "./cartscontroller.js";
export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails } = req.body; // Get guest ID, user ID, and user details from the request body

    // Step 1: Merge guest cart into user cart if applicable
    if (guestId && userId) {
      await mergeCart({ body: { guestId, userId } }, res); // Call mergeCart function with necessary parameters
    }

    // Step 2: Fetch the user's updated cart
    const cart = await Cart.findOne({ userId });

    if (!cart || cart.items.length === 0) {
      return res
        .status(400)
        .json({ message: "No items in the cart to place an order" });
    }

    // Step 3: Prepare order products array
    const orderProducts = [];
    for (let item of cart.items) {
      const product = await Product.findById(item.bookId); // Find product by ID

      if (!product) {
        return res
          .status(404)
          .json({ message: `Product ${item.bookId} not found` });
      }

      // Add product details to the order array
      orderProducts.push({
        productId: product._id,
        name: product.name,
        author: product.author,
        price: product.price,
        image: product.images[0], // Use the first image
        quantity: item.quantity,
      });
    }

    // Step 4: Calculate total amount
    const totalAmount = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Step 5: Create a new order
    const order = new Order({
      userId, // User ID
      userDetails, // User details like name, address, etc.
      products: orderProducts, // Products in the order
      totalAmount,
      status: "Pending", // Default status
    });

    // Save the order to the database
    await order.save();

    // Step 6: Clear the cart after order is placed
    await cart.delete();

    return res
      .status(201)
      .json({ message: "Order placed successfully", orderId: order._id });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};*/

import Order from "../models/ordersmodel.js";
import Product from "../models/productModel.js";
import Cart from "../models/cartmodel.js";
// Import the mergeCart function
import { mergeCart } from "./cartscontroller.js";
export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails } = req.body; // Extract guestId, userId, and userDetails from the request body

    // Step 1: Merge guest cart into user cart if applicable
    if (guestId && userId) {
      const mergeRes = { status: 200, json: () => {} }; // Mock a response object
      await mergeCart({ body: { guestId, userId } }, mergeRes); // Call mergeCart API directly
    }

    // Step 2: Fetch the user's updated cart
    const cart = await Cart.findOne({ userId });

    if (!cart || cart.items.length === 0) {
      return res
        .status(400)
        .json({ message: "No items in the cart to place an order" });
    }

    // Step 3: Prepare order products array
    const orderProducts = [];
    for (let item of cart.items) {
      const product = await Product.findById(item.bookId); // Find product by ID

      if (!product) {
        return res
          .status(404)
          .json({ message: `Product ${item.bookId} not found` });
      }

      // Add product details to the order array
      orderProducts.push({
        productId: product._id,
        name: product.name,
        author: product.author,
        price: product.price,
        image: product.images[0], // Use the first image
        quantity: item.quantity,
      });
    }

    // Step 4: Calculate total amount
    const totalAmount = orderProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Step 5: Create a new order
    const order = new Order({
      userId, // User ID
      userDetails, // User details like name, address, etc.
      products: orderProducts, // Products in the order
      totalAmount,
      status: "Pending", // Default status
    });

    // Save the order to the database
    await order.save();

    // Step 6: Clear the cart after order is placed
    await cart.delete();

    return res
      .status(201)
      .json({ message: "Order placed successfully", orderId: order._id });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
