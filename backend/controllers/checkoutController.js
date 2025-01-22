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

/*import Order from "../models/ordersmodel.js";
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
};*/

/*import Order from "../models/ordersmodel.js";
import Product from "../models/productModel.js";
import Cart from "../models/cartmodel.js";
// Import mergeCart for cart merging
import { mergeCart } from "./cartscontroller.js";
export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails } = req.body;

    // Step 1: Ensure user or guest ID is provided
    if (!guestId && !userId) {
      return res.status(400).json({
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    // Step 2: Merge guest cart into user cart (if both IDs exist)
    if (guestId && userId) {
      await mergeCart(
        { body: { guestId, userId } },
        { status: () => {}, json: () => {} }
      );
    }

    // Step 3: Fetch the updated cart
    const cart = await Cart.findOne({ userId });
    if (!cart || cart.items.length === 0) {
      return res
        .status(400)
        .json({ message: "No items in the cart to place an order." });
    }

    // Step 4: Prepare products for the order
    const orderProducts = [];
    for (const item of cart.items) {
      const product = await Product.findById(item.bookId);

      if (!product) {
        return res
          .status(404)
          .json({ message: `Product with ID ${item.bookId} not found.` });
      }

      orderProducts.push({
        productId: product._id,
        name: product.name,
        author: product.author || "Unknown Author",
        price: product.price,
        image: product.images && product.images[0], // Use the first image or fallback
        quantity: item.quantity,
      });
    }

    // Step 5: Calculate the total order amount
    const totalAmount = orderProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Step 6: Create a new order
    const order = new Order({
      userId,
      userDetails, // User's details: name, address, etc.
      products: orderProducts,
      totalAmount,
      status: "Pending", // Default order status
    });

    await order.save(); // Save the order

    // Step 7: Clear the cart after order placement
    await Cart.deleteOne({ userId });

    return res.status(201).json({
      message: "Order placed successfully!",
      orderId: order._id,
      orderDetails: order,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({
      message: "Server error occurred while placing the order.",
      error: error.message,
    });
  }
};
*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import Product from "../models/productModel.js"; // Import Product model
import { mergeCart } from "./cartscontroller.js";

export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    // Ensure user or guest ID is provided
    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    // Merge guest cart into user cart if applicable
    if (guestId && userId) {
      await mergeCart(
        { body: { guestId, userId } },
        { status: () => {}, json: () => {} }
      );
    }

    // Fetch the user's cart
    const cart = await Cart.findOne({ $or: [{ userId }, { guestId }] });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    // Prepare order items with product details (fetch names from Product model)
    const orderItems = await Promise.all(
      cart.items.map(async (item) => {
        const product = await Product.findById(item.bookId);
        return {
          productId: item.bookId,
          name: product ? product.name : "Unknown Product", // Add product name
          amount: item.price * item.quantity,
          quantity: item.quantity,
        };
      })
    );

    // Calculate the total amount
    const totalAmount = orderItems.reduce((sum, item) => sum + item.amount, 0);

    // Create a new Price document
    const price = new Price({
      userId: userId || guestId, // Use userId if logged in, otherwise guestId
      items: orderItems,
      address: userDetails, // Address details from checkout form
      status: "Order Placed",
      paymentMethod,
      payment: false, // Payment status
      date: new Date(),
    });

    await price.save(); // Save the order in the database

    // Clear the cart after placing the order
    await Cart.deleteOne({ $or: [{ userId }, { guestId }] });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: price._id,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
    });
  }
};
*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    // Ensure user or guest ID is provided
    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    // Merge guest cart into user cart if applicable
    if (guestId && userId) {
      await mergeCart(
        { body: { guestId, userId } },
        { status: () => {}, json: () => {} } // Mock response for mergeCart
      );
    }

    // Fetch the cart (handle both userId and guestId)
    const cart = await Cart.findOne({ $or: [{ userId }, { guestId }] });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    // Prepare order items
    const orderItems = cart.items.map((item) => ({
      productId: item.bookId,
      amount: item.price * item.quantity,
      quantity: item.quantity,
    }));

    // Calculate total amount
    const totalAmount = orderItems.reduce((sum, item) => sum + item.amount, 0);

    // Create a new order (Price model)
    const order = new Price({
      userId: userId || guestId, // Use userId if logged in, otherwise guestId
      items: orderItems,
      address: userDetails, // Address details from checkout form
      status: "Order Placed",
      paymentMethod,
      payment: false, // Payment status
      date: new Date(),
    });

    await order.save(); // Save the order in the database

    // Clear the cart after placing the order
    await Cart.deleteOne({ $or: [{ userId }, { guestId }] });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
    });
  }
};*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    if (guestId && userId) {
      await mergeCart(
        { body: { guestId, userId } },
        { status: () => {}, json: () => {} }
      );
    }

    const cart = await Cart.findOne({ $or: [{ userId }, { guestId }] });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    // Calculate total amount
    const totalAmount = cart.items.reduce((sum, item) => {
      return sum + Number(item.price) * item.quantity;
    }, 0);

    // Create order with the exact MongoDB structure
    const order = new Price({
      userId: userId || guestId,
      items: cart.items.map((item) => ({
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        street: userDetails.address,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.pinCode,
      },
      status: "order Placed",
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    });

    await order.save();
    await Cart.deleteOne({ $or: [{ userId }, { guestId }] });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
    });
  }
};*/

// checkoutController.js
// checkoutController.js
// checkoutController.js
// checkoutController.js
/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    // If both guest and user IDs are provided, merge the carts
    if (guestId && userId) {
      const mergeResult = await mergeCart({ body: { guestId, userId } });

      if (!mergeResult.success) {
        return res.status(500).json({
          success: false,
          message: mergeResult.message || "Error merging cart",
        });
      }
    }

    const cart = await Cart.findOne({ $or: [{ userId }, { guestId }] });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = new Price({
      userId: userId || guestId,
      items: cart.items.map((item) => ({
        id: item.id,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        street: userDetails.address,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.pinCode,
      },
      status: "order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    await order.save();
    await Cart.deleteOne({ $or: [{ userId }, { guestId }] });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
    });
  }
};
*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    let cart;

    // If both guest and user IDs are provided, merge the carts
    if (guestId && userId) {
      const mergeResult = await mergeCart(guestId, userId);

      if (!mergeResult.success) {
        return res.status(500).json({
          success: false,
          message: mergeResult.message || "Error merging cart",
        });
      }

      cart = await Cart.findOne({ userId: userId });
    } else {
      // Find the cart for either guestId or userId
      cart = await Cart.findOne({ $or: [{ userId }, { guestId }] });
    }

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = new Price({
      userId: userId || guestId,
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        street: userDetails.address,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.pinCode,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    await order.save();
    await Cart.deleteOne({ _id: cart._id });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    // Validate required IDs
    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    let cart;

    // If both guestId and userId are provided, merge the carts
    if (guestId && userId) {
      const mergeResult = await mergeCart(guestId, userId);
      if (!mergeResult.success) {
        return res.status(500).json({
          success: false,
          message: mergeResult.message || "Error merging cart.",
        });
      }
      cart = await Cart.findOne({ userId });
    } else {
      // If only userId is provided (logged-in user), fetch the cart using userId
      if (userId) {
        cart = await Cart.findOne({ userId });
      } else {
        // If only guestId is provided, fetch the cart using guestId
        cart = await Cart.findOne({ guestId });
      }
    }

    // Check if cart exists and has items
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    // Calculate total amount
    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create new order based on updated schema
    const order = new Price({
      userId: userId || guestId,
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        street: userDetails.street,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.zip,
        detailedAddress: userDetails.detailedAddress,
        phoneNumber: userDetails.phoneNumber,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    // Save the order and clear the cart
    await order.save();
    await Cart.deleteOne({ _id: cart._id });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};
*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    let cart;
    if (guestId && userId) {
      // Use the utility function
      cart = await mergeCart(guestId, userId);
    } else {
      cart = guestId
        ? await Cart.findOne({ guestId })
        : await Cart.findOne({ userId });
    }

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create order
    const order = new Price({
      userId: userId || guestId,
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        street: userDetails.street,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.zip,
        detailedAddress: userDetails.detailedAddress,
        phoneNumber: userDetails.phoneNumber,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    await order.save();
    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = "eopjdpoeni"; // Make sure this matches the key used to sign your JWT

// Utility function to verify the token
const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;
    const token = req.headers.authorization?.split(" ")[1]; // Get token from header

    let user;

    if (token) {
      try {
        user = verifyToken(token); // Verify the token and get the user
      } catch (error) {
        return res.status(401).json({
          success: false,
          message: "Invalid token or token expired",
        });
      }
    }

    if (!guestId && !userId && !user) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    let cart;
    if (guestId && userId) {
      // Use the utility function to merge guest cart with user cart
      cart = await mergeCart(guestId, userId);
    } else {
      cart = guestId
        ? await Cart.findOne({ guestId })
        : await Cart.findOne({ userId });
    }

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = new Price({
      userId: userId || guestId,
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        street: userDetails.street,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.zip,
        detailedAddress: userDetails.detailedAddress,
        phoneNumber: userDetails.phoneNumber,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    await order.save();
    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};
*/

// checkoutcontroller.js
//use this in code
/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

const generateGuestId = () => {
  return Date.now().toString();
};

export const placeOrder = async (req, res) => {
  try {
    let { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    if (!guestId) {
      guestId = generateGuestId();
    }

    let cart;
    try {
      if (guestId && userId) {
        cart = await mergeCart(guestId, userId);
      } else {
        cart = await Cart.findOne({ $or: [{ guestId }, { userId }] });
      }

      if (!cart) {
        return res.status(404).json({
          success: false,
          message: "Cart not found.",
        });
      }
    } catch (error) {
      console.error("Error fetching or merging cart:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing the cart.",
        error: error.message,
      });
    }

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = new Price({
      userId: userId || guestId,
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        street: userDetails.street,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.zip,
        detailedAddress: userDetails.detailedAddress,
        phoneNumber: userDetails.phoneNumber,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    await order.save();

    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};*/
// controllers/checkoutController.js

/*export const placeOrder = async (req, res) => {
  try {
    let { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    // Generate a guest ID if not provided
    if (!guestId) {
      guestId = generateGuestId();
    }

    let cart;
    try {
      if (guestId && userId) {
        // Merge guest cart into user cart if both exist
        cart = await mergeCart(guestId, userId);
      } else {
        // Find cart based on either guestId or userId
        cart = await Cart.findOne({ $or: [{ guestId }, { userId }] });
      }

      if (!cart) {
        return res.status(404).json({
          success: false,
          message: "Cart not found.",
        });
      }
    } catch (error) {
      console.error("Error fetching or merging cart:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing the cart.",
        error: error.message,
      });
    }

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    // Calculate the total amount for the cart
    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create a new order from the cart
    const order = new Price({
      userId: userId || guestId, // Save guestId if userId doesn't exist
      guestId: guestId, // Ensure guestId is saved in the order
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        street: userDetails.street,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.zip,
        detailedAddress: userDetails.detailedAddress,
        phoneNumber: userDetails.phoneNumber,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false, // Assuming the payment is pending for "COD"
      date: Date.now(),
    });

    // Save the order to the database
    await order.save();

    // Clear the cart after the order is placed
    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId, // Return guestId in the response
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};*/
/*export const placeOrder = async (req, res) => {
  try {
    const { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    let cart;
    try {
      if (guestId && userId) {
        // Pass guestId and userId to the updated mergeCart
        const mergeResult = await mergeCart(guestId, userId);
        cart = mergeResult.cart;
      } else {
        cart = await Cart.findOne({ $or: [{ guestId }, { userId }] });
      }

      if (!cart) {
        return res.status(404).json({
          success: false,
          message: "Cart not found.",
        });
      }
    } catch (error) {
      console.error("Error fetching or merging cart:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing the cart.",
        error: error.message,
      });
    }

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = new Price({
      userId: userId || guestId,
      guestId: guestId,
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: userDetails,
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    await order.save();
    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};
*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

export const placeOrder = async (req, res) => {
  try {
    let { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    if (!guestId) {
      guestId = generateGuestId();
    }

    let cart;
    try {
      if (guestId && userId) {
        // Merge carts if both guestId and userId are present
        const mergeResult = await mergeCart(
          { body: { guestId, userId } },
          { json: () => {} }
        );
        if (mergeResult.success) {
          cart = mergeResult.cart;
        } else {
          return res.status(400).json(mergeResult);
        }
      } else {
        cart = await Cart.findOne({ $or: [{ guestId }, { userId }] });
      }

      if (!cart || !cart.items || cart.items.length === 0) {
        return res.status(400).json({
          success: false,
          message: "No items in the cart to place an order.",
        });
      }
    } catch (error) {
      console.error("Error fetching or merging cart:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing the cart.",
        error: error.message,
      });
    }

    // Validate user details
    if (
      !userDetails ||
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.detailedAddress ||
      !userDetails.phoneNumber
    ) {
      return res.status(400).json({
        success: false,
        message: "Complete user details are required to place an order.",
      });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = new Price({
      userId: userId || null,
      guestId: guestId || null,
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: userDetails,
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    await order.save();
    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

// Generate a guest ID if none is provided
const generateGuestId = () => {
  return `guest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const placeOrder = async (req, res) => {
  try {
    let { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    if (!guestId) {
      guestId = generateGuestId();
    }

    let cart;
    try {
      if (guestId && userId) {
        // Merge carts if both guestId and userId are present
        const mergeResult = await mergeCart(
          { body: { guestId, userId } },
          { json: () => {} }
        );
        if (mergeResult.success) {
          cart = mergeResult.cart;
        } else {
          return res.status(400).json(mergeResult);
        }
      } else {
        cart = await Cart.findOne({ $or: [{ guestId }, { userId }] });
      }

      if (!cart || !cart.items || cart.items.length === 0) {
        return res.status(400).json({
          success: false,
          message: "No items in the cart to place an order.",
        });
      }
    } catch (error) {
      console.error("Error fetching or merging cart:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing the cart.",
        error: error.message,
      });
    }

    // Validate user details
    if (
      !userDetails ||
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.detailedAddress ||
      !userDetails.phoneNumber
    ) {
      return res.status(400).json({
        success: false,
        message: "Complete user details are required to place an order.",
      });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = new Price({
      userId: userId || null,
      guestId: guestId || null,
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: userDetails,
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    await order.save();
    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

const generateGuestId = () => {
  return `guest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const placeOrder = async (req, res) => {
  try {
    let { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    if (!guestId) {
      guestId = generateGuestId();
    }

    let cart;

    try {
      if (guestId && userId) {
        const mergeResult = await mergeCart({ body: { guestId, userId } });
        if (mergeResult.success && mergeResult.cart) {
          cart = mergeResult.cart;
        } else {
          return res.status(400).json(mergeResult);
        }
      } else {
        cart = await Cart.findOne({ $or: [{ guestId }, { userId }] });
      }

      if (!cart || !cart.items || cart.items.length === 0) {
        return res.status(400).json({
          success: false,
          message: "No items in the cart to place an order.",
        });
      }

      // Validate cart items to ensure no invalid price or quantity
      cart.items.forEach((item) => {
        if (item.price <= 0 || item.quantity <= 0) {
          throw new Error("Invalid item price or quantity in the cart.");
        }
      });
    } catch (error) {
      console.error("Error fetching or merging cart:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing the cart.",
        error: error.message,
      });
    }

    // Validate user details
    if (
      !userDetails ||
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.detailedAddress ||
      !userDetails.phoneNumber ||
      !userDetails.detailedAddress.street ||
      !userDetails.detailedAddress.city ||
      !userDetails.detailedAddress.state ||
      !userDetails.detailedAddress.zip
    ) {
      return res.status(400).json({
        success: false,
        message: "Complete user details are required to place an order.",
      });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = new Price({
      userId: userId || null,
      guestId: guestId || null,
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: userDetails,
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    await order.save();
    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message || error,
    });
  }
};*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCartUtility } from "./cartscontroller.js"; // Use utility function to merge carts

// Utility function to generate guest ID
const generateGuestId = () => {
  return Date.now().toString();
};

// Place order function
export const placeOrder = async (req, res) => {
  try {
    let { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    // Check for userId or guestId
    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    // Generate a new guest ID if not provided
    if (!guestId) {
      guestId = generateGuestId();
    }

    // Validate userDetails for required address fields
    const requiredFields = [
      "firstName",
      "lastName",
      "street",
      "city",
      "state",
      "zip",

      "phoneNumber",
    ];
    const missingFields = requiredFields.filter((field) => !userDetails[field]);

    // Return error message if any required fields are missing
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required address fields: ${missingFields.join(", ")}`,
      });
    }

    // Fetch the cart based on either guestId or userId
    let cart;
    try {
      if (guestId && userId) {
        cart = await mergeCartUtility(guestId, userId); // Merge carts
      } else {
        cart = guestId
          ? await Cart.findOne({ guestId })
          : await Cart.findOne({ userId });
      }
    } catch (error) {
      console.error("Error fetching or merging cart:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing the cart.",
        error: error.message,
      });
    }

    // Check if the cart exists and contains items
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    // Calculate the total amount of the order
    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create the order object
    const order = new Price({
      userId: userId || guestId, // Use userId if available, otherwise guestId
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        street: userDetails.street,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.zip,
        phoneNumber: userDetails.phoneNumber,
        detailedAddress: userDetails.detailedAddress,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    // Save the order to the database
    await order.save();

    // Clear the cart after placing the order
    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId, // Return guestId for frontend to store if needed
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};
*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCartUtility } from "./cartscontroller.js"; // Use utility function to merge carts

// Utility function to generate guest ID
const generateGuestId = () => {
  return Date.now().toString();
};

// Place order function
export const placeOrder = async (req, res) => {
  try {
    let { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    // Check for userId or guestId
    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    // Generate a new guest ID if not provided
    if (!guestId) {
      guestId = generateGuestId();
    }

    // Validate userDetails for required address fields
    const requiredFields = [
      "firstName",
      "lastName",
      "street",
      "city",
      "state",
      "zip",
      "phoneNumber",
      "detailedAddress", // Ensure 'detailedAddress' is included
    ];
    const missingFields = requiredFields.filter((field) => !userDetails[field]);

    // Return error message if any required fields are missing
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Fetch the cart based on either guestId or userId
    let cart;
    try {
      if (guestId && userId) {
        cart = await mergeCartUtility(guestId, userId); // Merge carts
      } else {
        cart = guestId
          ? await Cart.findOne({ guestId })
          : await Cart.findOne({ userId });
      }
    } catch (error) {
      console.error("Error fetching or merging cart:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing the cart.",
        error: error.message,
      });
    }

    // Check if the cart exists and contains items
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    // Calculate the total amount of the order
    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create the order object
    const order = new Price({
      userId: userId || guestId, // Use userId if available, otherwise guestId
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        street: userDetails.street,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.zip,
        phoneNumber: userDetails.phoneNumber,
        detailedAddress: userDetails.detailedAddress,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    // Save the order to the database
    await order.save();

    // Clear the cart after placing the order
    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId, // Return guestId for frontend to store if needed
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};*/

import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCartUtility } from "./cartscontroller.js"; // Use utility function to merge carts

// Utility function to generate guest ID
const generateGuestId = () => {
  return Date.now().toString();
};

// Place order function
/*export const placeOrder = async (req, res) => {
  try {
    let { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    // Check if userDetails is provided
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "User details are required to place an order.",
      });
    }

    // Check for userId or guestId
    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    // Generate a new guest ID if not provided
    if (!guestId) {
      guestId = generateGuestId();
    }

    // Validate userDetails for required address fields
    const requiredFields = [
      "firstName",
      "lastName",
      "street",
      "city",
      "state",
      "zip",
      "phoneNumber",
      "detailedAddress", // Ensure 'detailedAddress' is included
    ];
    const missingFields = requiredFields.filter((field) => !userDetails[field]);

    // Return error message if any required fields are missing
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Fetch the cart based on either guestId or userId
    let cart;
    try {
      if (guestId && userId) {
        cart = await mergeCartUtility(guestId, userId); // Merge carts
      } else {
        cart = guestId
          ? await Cart.findOne({ guestId })
          : await Cart.findOne({ userId });
      }
    } catch (error) {
      console.error("Error fetching or merging cart:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing the cart.",
        error: error.message,
      });
    }

    // Check if the cart exists and contains items
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    // Calculate the total amount of the order
    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create the order object
    const order = new Price({
      userId: userId || guestId, // Use userId if available, otherwise guestId
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        street: userDetails.street,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.zip,
        phoneNumber: userDetails.phoneNumber,
        detailedAddress: userDetails.detailedAddress,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    // Save the order to the database
    await order.save();

    // Clear the cart after placing the order
    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId, // Return guestId for frontend to store if needed
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "Error placing order",
      error: error.message,
    });
  }
};*/

export const placeOrder = async (req, res) => {
  try {
    let {
      guestId,
      userId,
      userDetails,
      paymentMethod = "COD",
      cartItems,
    } = req.body;

    console.log("Received order data:", JSON.stringify(req.body, null, 2));

    // Check if userDetails is provided
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "User details are required to place an order.",
      });
    }

    // Check for userId or guestId
    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    // Generate a new guest ID if not provided
    if (!guestId) {
      guestId = generateGuestId();
    }

    // Validate userDetails for required address fields
    const requiredFields = [
      "firstName",
      "lastName",
      "street",
      "city",
      "state",
      "zip",
      "phoneNumber",
      "detailedAddress",
    ];
    const missingFields = requiredFields.filter((field) => !userDetails[field]);

    // Return error message if any required fields are missing
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Use cartItems from the request if provided, otherwise fetch from the database
    let items;
    if (cartItems && cartItems.length > 0) {
      items = cartItems;
    } else {
      // Fetch the cart based on either guestId or userId
      let cart;
      try {
        if (guestId && userId) {
          cart = await mergeCartUtility(guestId, userId); // Merge carts
        } else {
          cart = guestId
            ? await Cart.findOne({ guestId })
            : await Cart.findOne({ userId });
        }

        if (!cart || cart.items.length === 0) {
          return res.status(400).json({
            success: false,
            message: "No items in the cart to place an order.",
          });
        }
        items = cart.items;
      } catch (error) {
        console.error("Error fetching or merging cart:", error);
        return res.status(500).json({
          success: false,
          message: "An error occurred while processing the cart.",
          error: error.message,
        });
      }
    }

    // Calculate the total amount of the order
    const totalAmount = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create the order object
    const order = new Price({
      userId: userId || guestId, // Use userId if available, otherwise guestId
      items: items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        street: userDetails.street,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.zip,
        phoneNumber: userDetails.phoneNumber,
        detailedAddress: userDetails.detailedAddress,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    // Save the order to the database
    await order.save();

    // Clear the cart after placing the order
    if (guestId || userId) {
      await Cart.deleteOne({ $or: [{ guestId }, { userId }] });
    }

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId, // Return guestId for frontend to store if needed
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "Error placing order",
      error: error.message,
    });
  }
};

//user oder ispaly

/*export const orderDispaly = async (req, res) => {
  try {
    const { orderId } = req.params;
    if (!orderId) {
      res.json({ success: false, message: "order id is required" });
    }
    const order = await Price.findById(orderId);

    if (!order) {
      res.json({ success: false, message: "order  is required" });
    }
    res.status(200).json({
      success: true,
      message: "Order details retrieved successfully.",
      order: {
        id: order._id,
        items: order.items,
        amount: order.amount,
        status: order.status,
        address: order.address,
        paymentMethod: order.paymentMethod,
        date: order.date,
      },
    });
  } catch (errro) {
    res.json({ success: false, message: errro.message });
  }
};*/

// Correct import for your Price model

// Correct model import

// Correct model import

// Correct model import

// Ensure you're using the correct model

// Ensure you're using the correct model

/*export const orderDisplay = async (req, res) => {
  try {
    const userId = req.user?.userId; // Extract userId from the middleware
    console.log("User ID from token:", userId); // Debugging log

    const { guestId } = req.query; // Extract guestId from query params
    console.log("Guest ID from query params:", guestId); // Debug log for guestId

    const query = userId ? { userId } : guestId ? { userId: guestId } : null;
    console.log("Query Object:", query); // Debug log for the query

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to fetch the order.",
      });
    }

    const order = await Price.findOne(query).sort({ date: -1 }); // Most recent order

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "No orders found for the user.",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching order",
      error: error.message,
    });
  }
};
*/
export const orderDisplay = async (req, res) => {
  try {
    const { userId } = req.body; // Assuming the user ID is attached to the request by the auth middleware

    const orders = await Price.find({ userId }).sort({ date: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching user orders",
      error: error.message,
    });
  }
};
//admin orders
export const allOrders = async (req, res) => {
  try {
    const ordersed = await Price.find({});
    res.json({
      success: true,
      message: "Fetched successfully",
      orders: ordersed, // Return orders properly in the response
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching user orders",
      error: error.message,
    });
  }
};
// Update an order (admin only)
export const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params; // Order ID passed in the URL
    const updates = req.body; // Admin-provided updates

    // Validate that the order ID exists
    const order = await Price.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    // Apply the updates
    Object.keys(updates).forEach((key) => {
      order[key] = updates[key];
    });

    // Save the updated order to the database
    await order.save();

    res.json({
      success: true,
      message: "Order updated successfully.",
      updatedOrder: order, // Return updated order details
    });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({
      success: false,
      message: "Error updating order.",
      error: error.message,
    });
  }
};
/// delete order
export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const deleted = await Price.findById(orderId);
    if (!deleted) {
      res.json({ success: false, message: "order is not found" });
    }
    await Price.findByIdAndDelete(orderId);

    res.json({
      success: "true",
      message: `order with ${orderId} deelted successfully`,
    });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({
      success: false,
      message: "Error updating order.",
      error: error.message,
    });
  }
};

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

const generateGuestId = () => {
  return Date.now().toString();
};





export const placeOrder = async (req, res) => {
  try {
    let { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    if (!guestId) {
      guestId = generateGuestId();
    }

    let cart;
    try {
      // Merge cart if both guestId and userId are provided, otherwise find cart for the respective ID
      if (guestId && userId) {
        cart = await mergeCart(guestId, userId); // Ensure mergeCart works without using res
      } else {
        cart = await Cart.findOne({ $or: [{ guestId }, { userId }] });
      }

      if (!cart) {
        return res.status(404).json({
          success: false,
          message: "Cart not found.",
        });
      }
    } catch (error) {
      console.error("Error fetching or merging cart:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing the cart.",
        error: error.message,
      });
    }

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    // Calculate the total amount of the order
    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create a new order document
    const order = new Price({
      userId: userId || guestId, // Use userId or guestId
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        street: userDetails.street,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.zip,
        detailedAddress: userDetails.detailedAddress,
        phoneNumber: userDetails.phoneNumber,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    // Save the order to the database
    await order.save();

    // Delete the cart after successful order placement
    await Cart.deleteOne({ _id: cart._id });

    // Send the response with the order details
    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};*/

/*import Price from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";
import { mergeCart } from "./cartscontroller.js";

// Utility function to generate guest ID
const generateGuestId = () => {
  return Date.now().toString();
};

export const placeOrder = async (req, res) => {
  try {
    let { guestId, userId, userDetails, paymentMethod = "COD" } = req.body;

    if (!guestId && !userId) {
      return res.status(400).json({
        success: false,
        message: "User ID or Guest ID is required to place an order.",
      });
    }

    // Handle missing or empty guest ID
    if (!guestId) {
      guestId = generateGuestId();
    }

    let cart;
    if (guestId && userId) {
      cart = await mergeCart(guestId, userId); // Merging cart for logged-in users
    } else {
      cart = guestId
        ? await Cart.findOne({ guestId })
        : await Cart.findOne({ userId });
    }

    // Handle case where cart is empty or non-existent
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the cart to place an order.",
      });
    }

    // Calculate total amount
    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create the order object
    const order = new Price({
      userId: userId || guestId,
      items: cart.items.map((item) => ({
        id: item.bookId,
        title: item.title,
        imageUrl: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      address: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        street: userDetails.street,
        city: userDetails.city,
        state: userDetails.state,
        zip: userDetails.zip,
        detailedAddress: userDetails.detailedAddress,
        phoneNumber: userDetails.phoneNumber,
      },
      status: "Order Placed",
      paymentMethod,
      payment: false,
      date: Date.now(),
    });

    await order.save();

    // Clear the cart after placing the order
    await Cart.deleteOne({ _id: cart._id });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      orderId: order._id,
      guestId, // Return guestId for frontend to store if needed
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while placing the order.",
      error: error.message,
    });
  }
};
*/
