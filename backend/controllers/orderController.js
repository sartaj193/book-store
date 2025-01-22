import Order from "../models/ordersmodel.js";
import Cart from "../models/cartmodel.js";

export const placeOrder = async (req, res) => {
  try {
    const { userId, shippingDetails, paymentMethod } = req.body;

    if (!userId) {
      return res
        .status(401)
        .json({ message: "User must be logged in to place an order" });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = new Order({
      userId,
      items: cart.items,
      shippingDetails,
      totalAmount: cart.totalAmount,
      paymentMethod,
    });

    await order.save();
    await Cart.deleteOne({ userId });

    res
      .status(201)
      .json({ message: "Order placed successfully", orderId: order._id });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error placing order", error: error.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching order", error: error.message });
  }
};
