/*import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model
      required: true,
    },
    userDetails: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      address: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
      pinCode: { type: String, required: true },
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: { type: String, required: true },
        author: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
*/

/*import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model
      required: true,
    },
    userDetails: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      address: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
      pinCode: { type: String, required: true },
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: { type: String, required: true },
        author: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 }, // Ensure positive quantity
      },
    ],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Completed", "Cancelled"],
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
*/

/*import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    userDetails: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      address: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
      pinCode: { type: String, required: true },
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: "Pending" }, // Default order status
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps
);

const Orders = mongoose.model("Orders", ordersSchema);

export default Orders;*/

/*import mongoose from "mongoose";

const PriceSchema = new mongoose.Schema({
  userId: {
    type: String, // Can be userId or guestId
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Reference to Product model
        required: true,
      },
      amount: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  address: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: String, required: true },
    detailedAddress: { type: String, required: true }, // Optional
  },
  status: {
    type: String,
    default: "Order Placed", // Initial order status
  },
  paymentMethod: {
    type: String,
    default: "COD", // Cash on Delivery as default
  },
  payment: {
    type: Boolean,
    default: false, // Payment status (false if unpaid)
  },
  date: {
    type: Date,
    default: Date.now, // Order date
  },
});

const Price = mongoose.model("Price", PriceSchema);

export default Price;
*/

/*import mongoose from "mongoose";

const PriceSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: [
    {
      id: { type: Number, required: true },
      title: { type: String, required: true },
      imageUrl: { type: String, required: true },
      price: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  amount: {
    type: Number,
    required: true,
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  status: {
    type: String,
    default: "order Placed",
  },
  paymentMethod: {
    type: String,
    default: "COD",
  },
  payment: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Number,
    default: () => Date.now(),
  },
});

const Price = mongoose.model("Price", PriceSchema);

export default Price;*/

import mongoose from "mongoose";

// Define the schema
const PriceSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    items: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId, // Use ObjectId for product reference
          ref: "Product", // Referencing Product collection
          required: true,
        },
        title: { type: String, required: true },
        imageUrl: { type: String, required: true },
        price: { type: Number, required: true }, // Price should be a number
        quantity: { type: Number, required: true },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: {
      firstName: { type: String, required: true }, // Add firstName
      lastName: { type: String, required: true }, // Add lastName
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      detailedAddress: { type: String, required: true }, // Add phoneNumber
    },
    status: {
      type: String,
      default: "order Placed",
    },
    paymentMethod: {
      type: String,
      default: "COD",
    },
    payment: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Number,
      default: () => Date.now(),
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Create the model
const Price = mongoose.model("Price", PriceSchema);

export default Price;
