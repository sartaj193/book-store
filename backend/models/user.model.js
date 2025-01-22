/*import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, " Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, " emai is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, " password is required"],
      minlength: [6, "Password must be of atleast 6 characters"],
    },
    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    role: {
      type: Number,
      role: 0,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;*/

// models/user.model.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      trim: true,
    },
    cart: [
      {
        productId: { type: String, required: true }, // Using static product ID
        name: { type: String, required: true }, // Product name
        price: { type: Number, required: true }, // Product price
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
