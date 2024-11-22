// controllers/cartController.js

import Cart from "../models/cartmodel.js";
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

// Get cart by userId or guestId
export const getCart = async (req, res) => {
  const id = req.params.id;

  try {
    const cart = await Cart.findOne({ $or: [{ guestId: id }, { userId: id }] });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
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

// Merge guest cart with user cart on login
export const mergeCart = async (req, res) => {
  const { guestId, userId } = req.body;

  try {
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ userId });

    if (guestCart) {
      if (userCart) {
        // Merge items
        guestCart.items.forEach((guestItem) => {
          const userItemIndex = userCart.items.findIndex(
            (item) => item.bookId.toString() === guestItem.bookId.toString()
          );

          if (userItemIndex > -1) {
            userCart.items[userItemIndex].quantity += guestItem.quantity;
          } else {
            userCart.items.push(guestItem);
          }
        });

        userCart.totalAmount = userCart.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        await userCart.save();

        // Remove guest cart
        await guestCart.delete();
      } else {
        // Assign guest cart to user
        guestCart.userId = userId;
        guestCart.guestId = null;
        await guestCart.save();
      }
    }

    res.status(200).json(userCart || guestCart || {});
  } catch (error) {
    res.status(500).json({ error: "Failed to merge cart" });
  }
};
// Ensure you have the Cart model imported

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
