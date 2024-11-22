/*import React, { useState, useEffect } from "react";
import { useCart } from "../context/cartcontext"; // Adjust the path according to your structure
import axios from "axios";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const { state, dispatch } = useCart(); // Access the cart state
  const [formData, setFormData] = useState({
    userId: "", // If you want to keep userId, it can be set manually or handled differently
    address: {
      street: "",
      city: "",
      state: "",
      zip: ""
    },
    paymentMethod: "",
    amount: 0
  });

  // Calculate total amount based on cart items
  useEffect(() => {
    if (state?.items) {
      const totalAmount = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setFormData((prev) => ({ ...prev, amount: totalAmount }));
    }
  }, [state.items]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      userId: formData.userId, // Ensure userId is set appropriately before submitting
      items: state.items,
      amount: formData.amount,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
      date: Date.now(),
    };

    try {
      const response = await axios.post("/api/order/place", orderData);

      toast.success("Order placed successfully!");
      console.log(response.data);

      // Clear the cart after successful order
      dispatch({ type: "CLEAR_CART" });
      setFormData({
        userId: "", // Resetting form data after submission
        address: {
          street: "",
          city: "",
          state: "",
          zip: ""
        },
        paymentMethod: "",
        amount: 0
      });
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error placing order: " + error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
       
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={formData.address.street}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.address.state}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div>
          <label>Zip Code:</label>
          <input
            type="text"
            name="zip"
            value={formData.address.zip}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <input
            type="text"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>Total Amount: ₹{formData.amount}</p> 
        </div>


        <h3>Items in Cart:</h3>
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              {item.name} (Quantity: {item.quantity}) - ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>

        <button type="submit">Submit</button>
      </form>
  
      <div id="toast-container" />
    </>
  );
};

export default CheckoutForm;*/


import React, { useState } from 'react';
import { useCart } from '../context/cartcontext'; // Adjust the import based on your project structure
import axios from 'axios';
import { toast } from 'react-hot-toast'; // Ensure you have toast notifications set up

const CheckoutForm = () => {
  const { state: { cartItems = [] } = {} } = useCart(); // Ensure cartItems is available
  const [loading, setLoading] = useState(false);

  // Form state declarations
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit'); // Default payment method

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare order data with name, price, and imagePath for each product
    const orderData = {
      items: cartItems.map(item => ({
        productId: item.id, // assuming you have product ID available
        name: item.title,   // added product name
        price: item.price,  // added product price
        imagePath: item.image, // added product image path (assuming image field exists)
        quantity: item.quantity
      })),
      customerDetails: {
        firstName,
        lastName,
        email,
        address,
        city,
        state,
        zipCode,
        phone,
      },
      paymentMethod,
      totalAmount,
    };

    try {
      const response = await axios.post('http://localhost:3001/api/order/place', orderData);
      toast.success('Order placed successfully!');
      console.log(response.data); // Log response from the server

      // Optional: Clear cart after successful order
      // clearCart(); // Call a function to clear the cart if needed

      // Redirect to success page or reset form (optional)
      // For example: history.push('/success');
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        {/* User Details Form */}
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            State:
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Zip Code:
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </label>
        </div>

        {/* Cart Items */}
        <h2>Your Cart Items:</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>

        {/* Total Amount at the end of form */}
        <h3>Total Amount: ₹{totalAmount}</h3>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
