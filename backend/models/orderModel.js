/*import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, required: true, default: "order Placed" },
  paymentMethod: { type: String, required: true },
  payment: { type: Boolean, required: true, default: false },
  date: { type: Number, required: true },
});
const order = mongoose.model("Order", orderSchema);
export default order;*/

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Assuming this is a string; if it's an ObjectId, change to mongoose.Schema.Types.ObjectId
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      }, // Reference to the Product model
      title: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  phone: { type: String, required: true },
  amount: { type: Number, required: true }, // Total amount
  status: { type: String, required: true, default: "Order Placed" }, // Status of the order
  paymentMethod: { type: String, required: true }, // Payment method (COD/Online)
  payment: { type: Boolean, required: true, default: false }, // Payment status
  date: { type: Date, default: Date.now }, // Automatically set to current date
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
