// models/Cart.js

import mongoose from "mongoose";
const CartSchema = new mongoose.Schema({
  userId: { type: String, default: null }, // Logged-in user
  guestId: { type: String, default: null }, // Temporary guest ID
  items: [
    {
      bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
      },
      title: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
  totalAmount: { type: Number, default: 0 },
});

const Cart = mongoose.model("Cart", CartSchema);
export default Cart;
