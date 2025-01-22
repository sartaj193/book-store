/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { baseUrl } from "../utils/config";
const CheckoutPageO = ({ cartItems, user, guestId }) => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    state: "",
    city: "",
    pinCode: "",
  });
  const navigate = useNavigate();

  // State to handle merged cart
  const [mergedCartItems, setMergedCartItems] = useState(cartItems || []);

  useEffect(() => {
    if (guestId && user) {
      mergeCart();
    }
  }, [guestId, user]);

  const mergeCart = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/cart/merge`,
        { guestId, userId: user.id },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      setMergedCartItems(response.data.items || []); // Update cart items after merging
    } catch (error) {
      console.error("Error merging cart:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    return mergedCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleSubmit = async () => {
    if (!user) {
      navigate("/register");
      return;
    }

    const orderData = {
      cartItems: mergedCartItems,
      userDetails,
      guestId,
      userId: user.id,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/order/place-order",
        orderData,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      if (response.data.orderId) {
        navigate(`/thank-you/${response.data.orderId}`);
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const styles = {
    checkout: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
    },
    userForm: {
      width: "45%",
      padding: "20px",
      background: "#f9f9f9",
      borderRadius: "10px",
    },
    cartSummary: {
      width: "45%",
      padding: "20px",
      background: "#fff",
      borderRadius: "10px",
    },
    freeDelivery: { color: "green", fontWeight: "bold" },
    orderButton: {
      background: "#007BFF",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
    },
    item: { display: "flex", justifyContent: "space-between", marginBottom: "10px" },
  };

  return (
    <div style={styles.checkout}>
      <div style={styles.userForm}>
        <h3>Your Details</h3>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={userDetails.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={userDetails.lastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={userDetails.phoneNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={userDetails.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={userDetails.state}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={userDetails.city}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="pinCode"
          placeholder="PIN Code"
          value={userDetails.pinCode}
          onChange={handleInputChange}
        />
      </div>
      <div style={styles.cartSummary}>
        <h3>Your Order</h3>
        {mergedCartItems.length > 0 ? (
          mergedCartItems.map((item) => (
            <div key={item.id} style={styles.item}>
              <span>{item.title}</span>
              <span>{item.price} USD</span>
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
        <h4>Subtotal: {calculateTotal()} USD</h4>
        <p style={styles.freeDelivery}>Free Delivery!</p>
        <button onClick={handleSubmit} style={styles.orderButton}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPageO;
*/
/*import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutPage = ({ userToken }) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "Punjab",
    pinCode: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      setError(null);

      const guestId = localStorage.getItem("guestId");

      if (!guestId && !userToken) {
        setError("No guest ID or user token available");
        setLoading(false);
        return;
      }

      try {
        const headers = {};
        if (userToken) {
          headers.Authorization = `Bearer ${userToken}`;
        }

        const cartId = userToken ? 'user' : guestId;
        const response = await axios.get(
          `http://localhost:3001/api/cart/${cartId}`,
          { headers }
        );

        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setError("Failed to fetch cart. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userToken]);

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    const guestId = localStorage.getItem("guestId");

    if (!userToken) {
      navigate("/register", { state: { guestId } });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/order/place-order",
        {
          userId: userToken ? cart.userId : guestId,
          userDetails,
          guestId,
        },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );

      if (response.data.success) {
        navigate("/thank-you", { state: { orderId: response.data.orderId } });
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    formSection: {
      flex: 1,
      marginBottom: "20px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
    },
    cartSection: {
      flex: 1,
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    cartItem: {
      display: "flex",
      marginBottom: "15px",
      alignItems: "center",
    },
    itemImage: {
      width: "60px",
      height: "60px",
      objectFit: "cover",
      marginRight: "10px",
      borderRadius: "4px",
    },
    itemDetails: {
      flex: 1,
    },
    itemName: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    itemPrice: {
      color: "#555",
    },
    submitButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
    },
    totalSection: {
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "#e6ffe6",
      borderRadius: "8px",
      textAlign: "center",
      fontWeight: "bold",
    },
    errorMessage: {
      color: "red",
      marginBottom: "15px",
      textAlign: "center",
    },
  };

  if (loading) {
    return <div style={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div style={styles.container}>
      <p style={styles.errorMessage}>{error}</p>
    </div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.formSection}>
        <h2 style={styles.heading}>Your Details</h2>
        <form onSubmit={handleCheckout}>
          <div style={styles.formGroup}>
            <label style={styles.label}>First Name</label>
            <input
              style={styles.input}
              type="text"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Last Name</label>
            <input
              style={styles.input}
              type="text"
              name="lastName"
              value={userDetails.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              style={styles.input}
              type="text"
              name="phoneNumber"
              value={userDetails.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Address</label>
            <input
              style={styles.input}
              type="text"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>City</label>
            <input
              style={styles.input}
              type="text"
              name="city"
              value={userDetails.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>State</label>
            <input
              style={styles.input}
              type="text"
              name="state"
              value={userDetails.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Pin Code</label>
            <input
              style={styles.input}
              type="text"
              name="pinCode"
              value={userDetails.pinCode}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Submit Order
          </button>
        </form>
      </div>
      <div style={styles.cartSection}>
        <h2 style={styles.heading}>Your Cart</h2>
        {cart.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.items.map((item) => (
              <div key={item.bookId} style={styles.cartItem}>
                <img src={item.image} alt={item.title} style={styles.itemImage} />
                <div style={styles.itemDetails}>
                  <p style={styles.itemName}>{item.title}</p>
                  <p style={styles.itemPrice}>
                    ₹{item.price} x {item.quantity}
                  </p>
                </div>
              </div>
            ))}
            <div style={styles.totalSection}>
              <p>Total Amount: ₹{cart.totalAmount}</p>
              <p>Free Delivery Within Punjab</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
*/

/*import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutPage = ({ userToken }) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "Punjab",
    pinCode: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const guestId = localStorage.getItem("guestId");
        if (!guestId && !userToken) {
          setError("No guest ID or user token available");
          setLoading(false);
          return;
        }

        const headers = userToken ? { Authorization: `Bearer ${userToken}` } : {};
        const cartId = userToken ? 'user' : guestId;
        const response = await axios.get(
          `http://localhost:3001/api/cart/${cartId}`,
          { headers }
        );

        // Calculate total amount
        const totalAmount = response.data.items.reduce((sum, item) => 
          sum + (Number(item.price) * item.quantity), 0);

        setCart({
          ...response.data,
          totalAmount
        });
      } catch (error) {
        console.error("Error fetching cart:", error);
        setError("Failed to fetch cart. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userToken]);

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    
    try {
      const guestId = localStorage.getItem("guestId");
      
      if (!userToken) {
        navigate("/register", { state: { guestId } });
        return;
      }

      const response = await axios.post(
        "http://localhost:3001/api/order/place-order",
        {
          userId: userToken ? cart.userId : guestId,
          userDetails,
          guestId,
          paymentMethod: "COD"
        },
        {
          headers: userToken ? { Authorization: `Bearer ${userToken}` } : {}
        }
      );

      if (response.data.success) {
        navigate("/thank-you", { 
          state: { 
            orderId: response.data.orderId,
            orderDetails: {
              items: cart.items,
              totalAmount: cart.totalAmount,
              userDetails
            }
          } 
        });
      }
    } catch (error) {
      console.error("Error placing order:", error);
      setError("Failed to place order. Please try again.");
    }
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>
          <form onSubmit={handleCheckout} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Detailed Address</label>
              <textarea
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
                rows="3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={userDetails.city}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={userDetails.state}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Pin Code</label>
              <input
                type="text"
                name="pinCode"
                value={userDetails.pinCode}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Place Order
            </button>
          </form>
        </div>

     
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-600">
                    ₹{item.price} x {item.quantity}
                  </p>
                  <p className="font-medium">
                    Subtotal: ₹{Number(item.price) * item.quantity}
                  </p>
                </div>
              </div>
            ))}
            <div className="pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total Amount:</span>
                <span>₹{cart.totalAmount}</span>
              </div>
              <p className="text-green-600 text-center mt-2">
                Free Delivery Within Punjab
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;*/

/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const CheckoutO = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    detailedAddress: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
  });
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setIsLoading(true);
        setError('');
        const token = Cookies.get('authToken');
        const userId = Cookies.get('userId');
        const guestId = localStorage.getItem('guestId');
        const id = userId || guestId;

        if (!id) {
          throw new Error('User ID not found');
        }

        const response = await axios.get(`http://localhost:3001/api/cart/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data && Array.isArray(response.data.items)) {
          setCartItems(response.data.items);
          setTotalAmount(response.data.totalAmount || 0);
        } else {
          throw new Error('Invalid cart data received');
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
        setError('Failed to fetch cart. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const token = Cookies.get('authToken');
      const userId = Cookies.get('userId');
      const guestId = localStorage.getItem('guestId');

      if (!token) {
        navigate('/register');
        return;
      }

      const response = await axios.post('http://localhost:3001/api/order/place-order', {
        userId,
        guestId,
        userDetails,
        paymentMethod: 'COD',
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        navigate('/thank-you');
      } else {
        setError(response.data.message || 'Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      setError('An error occurred while placing the order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checkout</h1>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="firstName" style={styles.label}>First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="lastName" style={styles.label}>Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phoneNumber" style={styles.label}>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={userDetails.phoneNumber}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="detailedAddress" style={styles.label}>Detailed Address:</label>
          <textarea
            id="detailedAddress"
            name="detailedAddress"
            value={userDetails.detailedAddress}
            onChange={handleInputChange}
            required
            style={styles.textarea}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="address" style={styles.label}>Street Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="city" style={styles.label}>City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={userDetails.city}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="state" style={styles.label}>State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={userDetails.state}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="pinCode" style={styles.label}>PIN Code:</label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={userDetails.pinCode}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.cartSection}>
          <h2 style={styles.cartTitle}>Your Cart</h2>
          {cartItems.map((item) => (
            <div key={item.bookId} style={styles.cartItem}>
              <img src={item.image} alt={item.title} style={styles.cartItemImage} />
              <div style={styles.cartItemDetails}>
                <p style={styles.cartItemTitle}>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <h3 style={styles.totalAmount}>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
        </div>

        <button type="submit" disabled={isSubmitting} style={styles.submitButton}>
          {isSubmitting ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    minHeight: '100px',
  },
  cartSection: {
    marginTop: '30px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '15px',
  },
  cartTitle: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '15px',
  },
  cartItem: {
    display: 'flex',
    marginBottom: '15px',
    borderBottom: '1px solid #eee',
    paddingBottom: '15px',
  },
  cartItemImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '15px',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  totalAmount: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '15px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
    textAlign: 'center',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '50px',
  },
};

export default CheckoutO;
*/
/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { utilityFunctions } from '../utils/module';
import { Server_URL } from '../utils/config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutO = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    detailedAddress: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = utilityFunctions.getCookieValue('userToken');
    if (!token) {
      navigate('/login', { state: { from: '/checkout' } });
    } else {
      fetchCart(token);
    }
  }, [navigate]);

  const fetchCart = async (token) => {
    try {
      setIsLoading(true);
      setError('');
      const userId = utilityFunctions.parseJwt(token).userId;
      const response = await axios.get(`${Server_URL}api/cart/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data && Array.isArray(response.data.items)) {
        setCartItems(response.data.items);
        const total = response.data.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalAmount(total);
      } else {
        setError('Invalid cart data received. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
      if (error.response && error.response.status === 404) {
        setCartItems([]);
        setTotalAmount(0);
        toast.info('Your cart is empty. Add some items before checking out.');
      } else {
        setError('Failed to fetch cart. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const token = utilityFunctions.getCookieValue('userToken');
      if (!token) {
        toast.error('Please log in to place an order.');
        navigate('/login', { state: { from: '/checkout' } });
        return;
      }

      const userId = utilityFunctions.parseJwt(token).userId;

      if (cartItems.length === 0) {
        toast.error('Your cart is empty. Add some items before placing an order.');
        setIsSubmitting(false);
        return;
      }

      const orderData = {
        userId,
        userDetails,
        paymentMethod: 'COD',
        cartItems,
        totalAmount,
      };

      const response = await axios.post(`${Server_URL}api/order/place-order`, orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        toast.success('Order placed successfully!');
        navigate('/thank-you', { state: { orderId: response.data.orderId } });
      } else {
        setError(response.data.message || 'Failed to place order');
        toast.error(response.data.message || 'Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      setError('An error occurred while placing the order. Please try again.');
      toast.error('An error occurred while placing the order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <ToastContainer />
      <h1 style={styles.title}>Checkout</h1>
      {error && <div style={styles.error}>{error}</div>}
      <div style={styles.content}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="firstName" style={styles.label}>First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="lastName" style={styles.label}>Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userDetails.lastName}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="phoneNumber" style={styles.label}>Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={userDetails.phoneNumber}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="detailedAddress" style={styles.label}>Detailed Address:</label>
            <textarea
              id="detailedAddress"
              name="detailedAddress"
              value={userDetails.detailedAddress}
              onChange={handleInputChange}
              required
              style={styles.textarea}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="street" style={styles.label}>Street:</label>
            <input
              type="text"
              id="street"
              name="street"
              value={userDetails.street}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="city" style={styles.label}>City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={userDetails.city}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="state" style={styles.label}>State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={userDetails.state}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="zip" style={styles.label}>ZIP Code:</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={userDetails.zip}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting || cartItems.length === 0} 
            style={cartItems.length === 0 ? styles.disabledButton : styles.submitButton}
          >
            {isSubmitting ? 'Placing Order...' : 'Place Order'}
          </button>
        </form>
        <div style={styles.cartSection}>
          <h2 style={styles.cartTitle}>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p style={styles.emptyCart}>Your cart is empty. Add some items before checking out.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.bookId} style={styles.cartItem}>
                  <img src={item.image} alt={item.title} style={styles.cartItemImage} />
                  <div style={styles.cartItemDetails}>
                    <p style={styles.cartItemTitle}>{item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <h3 style={styles.totalAmount}>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  form: {
    flex: '1 1 600px',
    marginRight: '20px',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    minHeight: '100px',
  },
  cartSection: {
    flex: '1 1 300px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '4px',
  },
  cartTitle: {
    fontSize: '20px',
    marginBottom: '15px',
  },
  cartItem: {
    display: 'flex',
    marginBottom: '15px',
    borderBottom: '1px solid #eee',
    paddingBottom: '15px',
  },
  cartItemImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '15px',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  totalAmount: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '15px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
    color: '#666666',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'not-allowed',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#ffebee',
    borderRadius: '4px',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '50px',
  },
  emptyCart: {
    textAlign: 'center',
    fontSize: '16px',
    color: '#666',
    marginTop: '20px',
  },
};

export default CheckoutO;*/


/*import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module"; // Utility functions (getCookieValue, parseJwt)
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config"; // Your API base URL

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const token = utilityFunctions.getCookieValue("userToken");
  const guestId = localStorage.getItem("guestId") || generateGuestId();
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;

  useEffect(() => {
    fetchCart();
  }, []);

  const generateGuestId = () => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  };

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${Server_URL}api/cart/${guestId}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setCart(res.data.items);
      setTotalPrice(
        res.data.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      );
    } catch (error) {
      console.error("Error fetching cart:", error);
      toast.error("Failed to load cart.");
    }
  };

  const onSubmit = async (data) => {
    const detailedAddress = `${data.street}, ${data.city}, ${data.state}, ${data.zip}`;
    
    try {
      const res = await axios.post(
        `${Server_URL}api/order/place-order`,
        {
          userDetails: { ...data, detailedAddress },
          guestId,
          userId,
          paymentMethod: "COD",
        },
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      );

      if (res.data.success) {
        toast.success("Order placed successfully!");
        localStorage.removeItem("guestId");
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("An error occurred while placing the order.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <ToastContainer />
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
 
          <input {...register("firstName", { required: true })} placeholder="First Name" />
          {errors.firstName && <p style={{ color: "red" }}>First Name is required</p>}

          <input {...register("lastName", { required: true })} placeholder="Last Name" />
          {errors.lastName && <p style={{ color: "red" }}>Last Name is required</p>}

          <input {...register("street", { required: true })} placeholder="Street" />
          {errors.street && <p style={{ color: "red" }}>Street is required</p>}

          <input {...register("city", { required: true })} placeholder="City" />
          {errors.city && <p style={{ color: "red" }}>City is required</p>}

          <input {...register("state", { required: true })} placeholder="State" />
          {errors.state && <p style={{ color: "red" }}>State is required</p>}

          <input {...register("zip", { required: true })} placeholder="ZIP Code" />
          {errors.zip && <p style={{ color: "red" }}>ZIP Code is required</p>}

          <input {...register("phoneNumber", { required: true })} placeholder="Phone Number" />
          {errors.phoneNumber && <p style={{ color: "red" }}>Phone Number is required</p>}

          <button type="submit">Submit Order</button>
        </form>
      </div>

      <div style={{ flex: 1, border: "1px solid #ccc", padding: "20px" }}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index}>
                <img src={item.imagePath} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutO;
*/

/*import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module"; // Utility functions (getCookieValue, parseJwt)
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config"; // Your API base URL

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const token = utilityFunctions.getCookieValue("userToken");
  const guestId = localStorage.getItem("guestId") || generateGuestId();
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;

  useEffect(() => {
    fetchCart();
  }, []);

  const generateGuestId = () => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  };

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${Server_URL}api/cart/${guestId}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setCart(res.data.items);
      setTotalPrice(
        res.data.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      );
    } catch (error) {
      console.error("Error fetching cart:", error.response ? error.response.data : error.message);
      toast.error(error.response ? error.response.data.message : "Failed to load cart.");
    }
  };

  const onSubmit = async (data) => {
    const detailedAddress = `${data.street}, ${data.city}, ${data.state}, ${data.zip}`;
    
    try {
      const res = await axios.post(
        `${Server_URL}api/order/place-order`,
        {
          userDetails: { ...data, detailedAddress },
          guestId,
          userId,
          paymentMethod: "COD", // Assuming Cash On Delivery is default
        },
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      );

      if (res.data.success) {
        toast.success("Order placed successfully!");
        // Clear cart
        setCart([]);
        setTotalPrice(0);
        // Optionally remove guestId from localStorage
        localStorage.removeItem("guestId");
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Error placing order:", error.response ? error.response.data : error.message);
      toast.error("An error occurred while placing the order.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <ToastContainer />
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      
          <input {...register("firstName", { required: true })} placeholder="First Name" />
          {errors.firstName && <p style={{ color: "red" }}>First Name is required</p>}

          <input {...register("lastName", { required: true })} placeholder="Last Name" />
          {errors.lastName && <p style={{ color: "red" }}>Last Name is required</p>}

          <input {...register("street", { required: true })} placeholder="Street" />
          {errors.street && <p style={{ color: "red" }}>Street is required</p>}

          <input {...register("city", { required: true })} placeholder="City" />
          {errors.city && <p style={{ color: "red" }}>City is required</p>}

          <input {...register("state", { required: true })} placeholder="State" />
          {errors.state && <p style={{ color: "red" }}>State is required</p>}

          <input {...register("zip", { required: true })} placeholder="ZIP Code" />
          {errors.zip && <p style={{ color: "red" }}>ZIP Code is required</p>}

          <input {...register("phoneNumber", { required: true })} placeholder="Phone Number" />
          {errors.phoneNumber && <p style={{ color: "red" }}>Phone Number is required</p>}

          <button type="submit">Submit Order</button>
        </form>
      </div>

      <div style={{ flex: 1, border: "1px solid #ccc", padding: "20px" }}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} style={{ display: "flex", marginBottom: "15px" }}>
                <img src={item.imagePath} alt={item.name} style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "15px" }} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutO;*/

/*import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module"; // Utility functions (getCookieValue, parseJwt)
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config"; // Your API base URL

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const token = utilityFunctions.getCookieValue("userToken");
  const guestId = localStorage.getItem("guestId") || generateGuestId();
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;

  useEffect(() => {
    if (token) {
      validateTokenAndFetchCart();
    } else {
      toast.error("Please log in to continue.");
      navigate("/login");
    }
  }, [token]);

  const validateTokenAndFetchCart = async () => {
    try {
      await axios.get(`${Server_URL}api/auth/validate`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCart();
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        localStorage.removeItem("userToken");
        navigate("/login");
      } else {
        toast.error("Failed to validate session. Try again.");
      }
    }
  };

  const generateGuestId = () => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  };

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${Server_URL}api/cart/${guestId}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setCart(res.data.items);
      setTotalPrice(
        res.data.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      );
    } catch (error) {
      console.error("Error fetching cart:", error.response ? error.response.data : error.message);
      toast.error(error.response ? error.response.data.message : "Failed to load cart.");
    }
  };

  const onSubmit = async (data) => {
    if (!token) {
      toast.error("Please log in to place the order.");
      navigate("/login");
      return;
    }

    const detailedAddress = `${data.street}, ${data.city}, ${data.state}, ${data.zip}`;

    try {
      const res = await axios.post(
        `${Server_URL}api/order/place-order`,
        {
          userDetails: { ...data, detailedAddress },
          guestId,
          userId,
          paymentMethod: "COD",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        toast.success("Order placed successfully!");
        setCart([]);
        setTotalPrice(0);
        localStorage.removeItem("guestId");
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Authorization failed. Please log in again.");
        localStorage.removeItem("userToken");
        navigate("/login");
      } else {
        console.error("Error placing order:", error.response || error.message);
        toast.error("An error occurred while placing the order.");
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <ToastContainer />
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: true })} placeholder="First Name" />
          {errors.firstName && <p style={{ color: "red" }}>First Name is required</p>}

          <input {...register("lastName", { required: true })} placeholder="Last Name" />
          {errors.lastName && <p style={{ color: "red" }}>Last Name is required</p>}

          <input {...register("street", { required: true })} placeholder="Street" />
          {errors.street && <p style={{ color: "red" }}>Street is required</p>}

          <input {...register("city", { required: true })} placeholder="City" />
          {errors.city && <p style={{ color: "red" }}>City is required</p>}

          <input {...register("state", { required: true })} placeholder="State" />
          {errors.state && <p style={{ color: "red" }}>State is required</p>}

          <input {...register("zip", { required: true })} placeholder="ZIP Code" />
          {errors.zip && <p style={{ color: "red" }}>ZIP Code is required</p>}

          <input {...register("phoneNumber", { required: true })} placeholder="Phone Number" />
          {errors.phoneNumber && <p style={{ color: "red" }}>Phone Number is required</p>}

          <button type="submit">Submit Order</button>
        </form>
      </div>
      <div style={{ flex: 1, border: "1px solid #ccc", padding: "20px" }}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index}>
                <img src={item.imagePath} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutO;*/

/*import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Retrieve token and IDs from cookies or localStorage
  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const guestId = localStorage.getItem("guestId");

  useEffect(() => {
    if (token) {
      fetchCart(); // Fetch user or guest cart
    } else {
      toast.error("Please log in to continue.");
      navigate("/login");
    }
  }, [token]);

  // Fetch cart data with fallback to guest cart
  const fetchCart = async () => {
    try {
      const res = await axios.get(`${Server_URL}api/cart/${userId || guestId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data.items);
      setTotalPrice(res.data.items.reduce((sum, item) => sum + item.price * item.quantity, 0));
    } catch (error) {
      if (error.response?.status === 404) {
        // Fallback: Handle cart migration from guest to user
        migrateGuestCart();
      } else {
        handleError(error, "Failed to load cart.");
      }
    }
  };

  // Migrate guest cart to user cart
  const migrateGuestCart = async () => {
    try {
      if (!userId || !guestId) return;
      const res = await axios.post(
        `${Server_URL}api/cart/merge`,
        { guestId, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        toast.success("Cart migrated successfully.");
        fetchCart(); // Re-fetch cart after migration
      } else {
        toast.warn("No cart to migrate.");
      }
    } catch (error) {
      handleError(error, "Failed to migrate guest cart.");
    }
  };

  // Submit the order
  const onSubmit = async (data) => {
    const detailedAddress = `${data.street}, ${data.city}, ${data.state}, ${data.zip}`;
    try {
      const res = await axios.post(
        `${Server_URL}api/order/place-order`,
        {
          userDetails: { ...data, detailedAddress },
          userId,
          cartItems: cart,
          paymentMethod: "COD",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        toast.success("Order placed successfully!");
        setCart([]);
        setTotalPrice(0);
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      handleError(error, "An error occurred while placing the order.");
    }
  };

  const handleError = (error, defaultMessage) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      utilityFunctions.removeCookie("userToken");
      navigate("/login");
    } else {
      toast.error(error.response?.data?.message || defaultMessage);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <ToastContainer />
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: true })} placeholder="First Name" />
          {errors.firstName && <p style={{ color: "red" }}>First Name is required</p>}

          <input {...register("lastName", { required: true })} placeholder="Last Name" />
          {errors.lastName && <p style={{ color: "red" }}>Last Name is required</p>}

          <input {...register("street", { required: true })} placeholder="Street" />
          {errors.street && <p style={{ color: "red" }}>Street is required</p>}

          <input {...register("city", { required: true })} placeholder="City" />
          {errors.city && <p style={{ color: "red" }}>City is required</p>}

          <input {...register("state", { required: true })} placeholder="State" />
          {errors.state && <p style={{ color: "red" }}>State is required</p>}

          <input {...register("zip", { required: true })} placeholder="ZIP Code" />
          {errors.zip && <p style={{ color: "red" }}>ZIP Code is required</p>}

          <input {...register("phoneNumber", { required: true })} placeholder="Phone Number" />
          {errors.phoneNumber && <p style={{ color: "red" }}>Phone Number is required</p>}

          <button type="submit">Submit Order</button>
        </form>
      </div>

      <div style={{ flex: 1, border: "1px solid #ccc", padding: "20px" }}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index}>
                <img src={item.imagePath} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutO;*/



//in use

/*import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Retrieve token and IDs from cookies or localStorage
  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const guestId = localStorage.getItem("guestId") || generateGuestId();

  useEffect(() => {
    if (token || guestId) {
      fetchCart();
    } else {
      toast.error("Please log in to continue.");
      navigate("/login");
    }
  }, [token]);

  const generateGuestId = () => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  };

  // Fetch cart data
  const fetchCart = async () => {
    const cartId = userId || guestId;
    try {
      const res = await axios.get(`${Server_URL}api/cart/${guestId || userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data.items);
      setTotalPrice(
        res.data.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      );
    } catch (error) {
      if (error.response?.status === 404) {
        toast.error("Cart not found. Please add items to your cart.");
      } else if (error.message.includes("Network Error")) {
        toast.error("Network error. Check your connection.");
      } else {
        handleError(error, "Failed to load cart.");
      }
    }
  };

  // Submit the order
  const onSubmit = async (data) => {
    const detailedAddress = `${data.street}, ${data.city}, ${data.state}, ${data.zip}`;
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    try {
      const res = await axios.post(
        `${Server_URL}api/order/place-order`,
        {
          userDetails: {
            firstName: data.firstName,
            lastName: data.lastName,
            street: data.street,
            city: data.city,
            state: data.state,
            zip: data.zip,
            detailedAddress,
            phoneNumber: data.phoneNumber,
          },
          userId,
          guestId,
          cartItems: cart.map((item) => ({
            id: item._id,
            quantity: item.quantity,
          })),
          paymentMethod: "COD",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        toast.success("Order placed successfully!");
        setCart([]);
        setTotalPrice(0);
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      handleError(error, "An error occurred while placing the order.");
    }
  };

  // Handle errors
  const handleError = (error, defaultMessage) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      utilityFunctions.removeCookie("userToken");
      navigate("/login");
    } else if (error.response?.status === 400) {
      toast.error("Invalid request. Please check your order details.");
    } else if (error.response?.status === 500) {
      toast.error("Server error. Please try again later.");
    } else if (error.message === "Network Error") {
      toast.error("Network error. Check your internet connection.");
    } else {
      toast.error(error.response?.data?.message || defaultMessage);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <ToastContainer />
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: true })} placeholder="First Name" />
          {errors.firstName && <p style={{ color: "red" }}>First Name is required</p>}

          <input {...register("lastName", { required: true })} placeholder="Last Name" />
          {errors.lastName && <p style={{ color: "red" }}>Last Name is required</p>}

          <input {...register("street", { required: true })} placeholder="Street" />
          {errors.street && <p style={{ color: "red" }}>Street is required</p>}

          <input {...register("city", { required: true })} placeholder="City" />
          {errors.city && <p style={{ color: "red" }}>City is required</p>}

          <input {...register("state", { required: true })} placeholder="State" />
          {errors.state && <p style={{ color: "red" }}>State is required</p>}

          <input {...register("zip", { required: true })} placeholder="ZIP Code" />
          {errors.zip && <p style={{ color: "red" }}>ZIP Code is required</p>}

          <input {...register("phoneNumber", { required: true })} placeholder="Phone Number" />
          {errors.phoneNumber && <p style={{ color: "red" }}>Phone Number is required</p>}

          <button type="submit">Submit Order</button>
        </form>
      </div>

      <div style={{ flex: 1, border: "1px solid #ccc", padding: "20px" }}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index}>
                <img src={item.imagePath} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutO;*/
/*import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Retrieve token and IDs from cookies or localStorage
  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const guestId = localStorage.getItem("guestId") || generateGuestId();

  useEffect(() => {
    if (userId && guestId) {
      mergeCartAndFetch();
    } else if (token) {
      fetchCart(userId);
    } else {
      toast.error("Please log in to continue.");
      navigate("/login");
    }
  }, [token]);

  // Generate guest ID if not present
  const generateGuestId = () => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  };

  // Merge guest cart into user cart, then fetch the updated cart
  

  // Fetch cart data
  const fetchCart = async () => {
    try {
      const res = await axios.get(`${Server_URL}api/cart/${guestId || userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data.items);
      setTotalPrice(res.data.items.reduce((sum, item) => sum + item.price * item.quantity, 0));
    } catch (error) {
      if (error.response?.status === 404) {
        toast.error("Cart not found. Please add items to your cart.");
      } else if (error.message.includes("Network Error")) {
        toast.error("Network error. Check your connection.");
      } else {
        handleError(error, "Failed to load cart.");
      }
    }
  };

  // Submit the order
  const onSubmit = async (data) => {
    const detailedAddress = `${data.street}, ${data.city}, ${data.state}, ${data.zip}`;
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    try {
      const res = await axios.post(
        `${Server_URL}api/order/place-order`,
        {
          userDetails: {
            firstName: data.firstName,
            lastName: data.lastName,
            street: data.street,
            city: data.city,
            state: data.state,
            zip: data.zip,
            detailedAddress,
            phoneNumber: data.phoneNumber,
          },
          userId,
          guestId,
          cartItems: cart.map((item) => ({
            id: item._id,
            quantity: item.quantity,
          })),
          paymentMethod: "COD",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        toast.success("Order placed successfully!");
        setCart([]);
        setTotalPrice(0);
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      handleError(error, "An error occurred while placing the order.");
    }
  };
const mergeCartAndFetch = async () => {
    try {
      await axios.post(`${Server_URL}api/cart/merge`, {
        guestId,
        userId,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Cart merged successfully!");
      fetchCart(userId);
      localStorage.removeItem("guestId"); // Clear guestId after merging
    } catch (error) {
      toast.error("Failed to merge guest cart.");
      console.error("Error merging cart:", error);
    }
  };
  // Handle errors
  const handleError = (error, defaultMessage) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      utilityFunctions.removeCookie("userToken");
      navigate("/login");
    } else if (error.response?.status === 400) {
      toast.error("Invalid request. Please check your order details.");
    } else if (error.response?.status === 500) {
      toast.error("Server error. Please try again later.");
    } else if (error.message === "Network Error") {
      toast.error("Network error. Check your internet connection.");
    } else {
      toast.error(error.response?.data?.message || defaultMessage);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <ToastContainer />
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: true })} placeholder="First Name" />
          {errors.firstName && <p style={{ color: "red" }}>First Name is required</p>}

          <input {...register("lastName", { required: true })} placeholder="Last Name" />
          {errors.lastName && <p style={{ color: "red" }}>Last Name is required</p>}

          <input {...register("street", { required: true })} placeholder="Street" />
          {errors.street && <p style={{ color: "red" }}>Street is required</p>}

          <input {...register("city", { required: true })} placeholder="City" />
          {errors.city && <p style={{ color: "red" }}>City is required</p>}

          <input {...register("state", { required: true })} placeholder="State" />
          {errors.state && <p style={{ color: "red" }}>State is required</p>}

          <input {...register("zip", { required: true })} placeholder="ZIP Code" />
          {errors.zip && <p style={{ color: "red" }}>ZIP Code is required</p>}

          <input {...register("phoneNumber", { required: true })} placeholder="Phone Number" />
          {errors.phoneNumber && <p style={{ color: "red" }}>Phone Number is required</p>}

          <button type="submit">Submit Order</button>
        </form>
      </div>

      <div style={{ flex: 1, border: "1px solid #ccc", padding: "20px" }}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index}>
                <img src={item.imagePath} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutO;*/

/*import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Retrieve token and IDs from cookies or localStorage
  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const guestId = localStorage.getItem("guestId") || generateGuestId();

  useEffect(() => {
    if (userId && guestId) {
      mergeCartAndFetch();
    } else if (token) {
      fetchCart(userId);
    } else {
      fetchCart(guestId);
    }
  }, [token, userId, guestId]);

  // Generate guest ID if not present
  function generateGuestId() {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  }

  // Merge guest cart into user cart, then fetch the updated cart
  const mergeCartAndFetch = async () => {
    try {
      await axios.post(`${Server_URL}api/cart/merge`, {
        guestId,
        userId,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Cart merged successfully!");
      fetchCart(userId);
      localStorage.removeItem("guestId"); // Clear guestId after merging
    } catch (error) {
      handleError(error, "Failed to merge guest cart.");
    }
  };

  // Fetch cart data
  const fetchCart = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`${Server_URL}api/cart/${guestId || userId}`, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });
      if (res.data && Array.isArray(res.data.items)) {
        setCart(res.data.items);
        setTotalPrice(res.data.items.reduce((sum, item) => sum + item.price * item.quantity, 0));
      } else {
        setCart([]);
        setTotalPrice(0);
      }
    } catch (error) {
      handleError(error, "Failed to load cart.");
    } finally {
      setLoading(false);
    }
  };

  // Submit the order
  const onSubmit = async (data) => {
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    try {
      const res = await axios.post(
        `${Server_URL}api/order/place-order`,
        {
          userDetails: {
            ...data,
            detailedAddress: `${data.street}, ${data.city}, ${data.state}, ${data.zip}`,
          },
          userId,
          guestId,
          cartItems: cart.map((item) => ({
            id: item._id,
            quantity: item.quantity,
          })),
          paymentMethod: "COD",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        toast.success("Order placed successfully!");
        setCart([]);
        setTotalPrice(0);
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      handleError(error, "An error occurred while placing the order.");
    }
  };

  // Handle errors
  const handleError = (error, defaultMessage) => {
    console.error("Error:", error);
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      utilityFunctions.removeCookie("userToken");
      navigate("/login");
    } else if (error.response?.status === 400) {
      toast.error(error.response.data.message || "Invalid request. Please check your order details.");
    } else if (error.response?.status === 404) {
      toast.info("Your cart is empty. Add some items before checking out.");
    } else if (error.response?.status === 500) {
      toast.error("Server error. Please try again later.");
    } else if (error.message === "Network Error") {
      toast.error("Network error. Check your internet connection.");
    } else {
      toast.error(error.response?.data?.message || defaultMessage);
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    formContainer: {
      flex: 1,
      marginRight: "20px",
    },
    cartContainer: {
      flex: 1,
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "5px",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    error: {
      color: "red",
      fontSize: "14px",
    },
    button: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "12px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "10px",
    },
    cartItem: {
      display: "flex",
      marginBottom: "15px",
      borderBottom: "1px solid #eee",
      paddingBottom: "15px",
    },
    cartItemImage: {
      width: "80px",
      height: "80px",
      objectFit: "cover",
      marginRight: "15px",
    },
    cartItemDetails: {
      flex: 1,
    },
    loadingOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    loadingText: {
      color: "white",
      fontSize: "24px",
    },
  };

  if (loading) {
    return (
      <div style={styles.loadingOverlay}>
        <div style={styles.loadingText}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <ToastContainer />
      <div style={styles.formContainer}>
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={styles.input}
            {...register("firstName", { required: "First Name is required" })}
            placeholder="First Name"
          />
          {errors.firstName && <p style={styles.error}>{errors.firstName.message}</p>}

          <input
            style={styles.input}
            {...register("lastName", { required: "Last Name is required" })}
            placeholder="Last Name"
          />
          {errors.lastName && <p style={styles.error}>{errors.lastName.message}</p>}

          <input
            style={styles.input}
            {...register("street", { required: "Street is required" })}
            placeholder="Street"
          />
          {errors.street && <p style={styles.error}>{errors.street.message}</p>}

          <input
            style={styles.input}
            {...register("city", { required: "City is required" })}
            placeholder="City"
          />
          {errors.city && <p style={styles.error}>{errors.city.message}</p>}

          <input
            style={styles.input}
            {...register("state", { required: "State is required" })}
            placeholder="State"
          />
          {errors.state && <p style={styles.error}>{errors.state.message}</p>}

          <input
            style={styles.input}
            {...register("zip", { required: "ZIP Code is required" })}
            placeholder="ZIP Code"
          />
          {errors.zip && <p style={styles.error}>{errors.zip.message}</p>}

          <input
            style={styles.input}
            {...register("phoneNumber", { required: "Phone Number is required" })}
            placeholder="Phone Number"
          />
          {errors.phoneNumber && <p style={styles.error}>{errors.phoneNumber.message}</p>}

          <button style={styles.button} type="submit">Submit Order</button>
        </form>
      </div>

      <div style={styles.cartContainer}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} style={styles.cartItem}>
                <img src={item.imagePath} alt={item.name} style={styles.cartItemImage} />
                <div style={styles.cartItemDetails}>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutO;*/


/*import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [mergeAttempted, setMergeAttempted] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  let guestId = localStorage.getItem("guestId");

  useEffect(() => {
    if (!guestId) guestId = generateGuestId();
    if (userId && guestId && !mergeAttempted) {
      mergeCartAndFetch();
    } else if (token) {
      fetchCart(userId);
    } else {
      fetchCart(guestId);
    }
  }, [token, userId, guestId]);

  function generateGuestId() {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  }

  const mergeCartAndFetch = async () => {
    try {
      await axios.post(
        `${Server_URL}api/cart/merge`,
        { guestId, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Cart merged successfully!");
      localStorage.removeItem("guestId");
      setMergeAttempted(true);
      fetchCart(userId);
    } catch (error) {
      handleError(error, "Failed to merge guest cart.");
    }
  };

  const fetchCart = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`${Server_URL}api/cart/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });
      if (res.data && Array.isArray(res.data.items) && res.data.items.length > 0) {
        setCart(res.data.items);
        setTotalPrice(res.data.items.reduce((sum, item) => sum + item.price * item.quantity, 0));
      } else {
        setCart([]);
        setTotalPrice(0);
        toast.error("No items in your cart.");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        await createNewCart(id);
      } else {
        handleError(error, "Failed to load cart.");
      }
    } finally {
      setLoading(false);
    }
  };

  const createNewCart = async (guestId) => {
    try {
      await axios.post(`${Server_URL}api/cart/create`, { guestId, items: [] });
      toast.info("New guest cart created.");
      setCart([]);
      setTotalPrice(0);
    } catch (error) {
      handleError(error, "Failed to create new guest cart.");
    }
  };

  const onSubmit = async (data) => {
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    try {
      const cartItems = cart.map((item) => ({
        id: item._id,
        quantity: item.quantity,
      }));

      if (!cartItems.length) {
        toast.error("No items in the cart to place an order.");
        return;
      }

      const payload = {
        userDetails: {
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          phoneNumber: data.phoneNumber.trim(),
          detailedAddress: `${data.street.trim()}, ${data.city.trim()}, ${data.state.trim()}, ${data.zip.trim()}`,
        },
        userId,
        cartItems,
        paymentMethod: "COD",
      };

      console.log("Submitting payload:", payload);

      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        setCart([]);
        setTotalPrice(0);
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      handleError(error, "An error occurred while placing the order.");
    }
  };

  const handleError = (error, defaultMessage) => {
    console.error("Error:", error);
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      utilityFunctions.removeCookie("userToken");
      navigate("/login");
    } else if (error.response?.status === 400) {
      toast.error(error.response.data.message || "Invalid request. Please check your order details.");
    } else if (error.response?.status === 404) {
      toast.info("Cart not found, creating a new one.");
    } else if (error.response?.status === 500) {
      toast.error("Server error. Please try again later.");
    } else {
      toast.error(error.response?.data?.message || defaultMessage);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <ToastContainer />
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: "First Name is required" })} placeholder="First Name" />
          {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
          <input {...register("lastName", { required: "Last Name is required" })} placeholder="Last Name" />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName.message}</p>}
          <input {...register("street", { required: "Street is required" })} placeholder="Street" />
          {errors.street && <p style={{ color: "red" }}>{errors.street.message}</p>}
          <input {...register("city", { required: "City is required" })} placeholder="City" />
          {errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}
          <input {...register("state", { required: "State is required" })} placeholder="State" />
          {errors.state && <p style={{ color: "red" }}>{errors.state.message}</p>}
          <input {...register("zip", { required: "ZIP Code is required" })} placeholder="ZIP Code" />
          {errors.zip && <p style={{ color: "red" }}>{errors.zip.message}</p>}
          <input {...register("phoneNumber", { required: "Phone Number is required" })} placeholder="Phone Number" />
          {errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>}
          <button type="submit">Submit Order</button>
        </form>
      </div>
      <div style={{ flex: 1 }}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? <p>No items in your cart.</p> : cart.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;*/















/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { utilityFunctions } from '../utils/module';

const CheckoutO = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    detailedAddress: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchCartData = async () => {
      try {
        await retryFetchCart();
      } catch (error) {
        if (isMounted) {
          console.error('Error in useEffect:', error);
        }
      }
    };

    fetchCartData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const retryFetchCart = async (retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        await fetchCart();
        return; // Success, exit the retry loop
      } catch (error) {
        console.error(`Attempt ${i + 1} failed:`, error);
        if (i === retries - 1) {
          setError('Failed to fetch cart after multiple attempts. Please try again later.');
        }
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Exponential backoff
      }
    }
  };

  const fetchCart = async () => {
    try {
      setIsLoading(true);
      setError('');
      const token = utilityFunctions.getCookieValue('userToken');
      const userId = token ? utilityFunctions.parseJwt(token).userId : null;
      const guestId = localStorage.getItem('guestId');
      const id = userId || guestId;

      if (!id) {
        throw new Error('User ID not found');
      }

      console.log('Fetching cart for ID:', id); // Add this line for debugging

      const response = await axios.get(`http://localhost:3001/api/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log('Cart response:', response.data); // Add this line for debugging

      if (response.data && Array.isArray(response.data.items)) {
        setCartItems(response.data.items);
        setTotalAmount(response.data.totalAmount || 0);
      } else {
        console.warn('Unexpected response format:', response.data);
        setError('Invalid cart data received. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
      setError(`Failed to fetch cart. ${error.response?.status === 404 ? 'Cart not found.' : 'Please try again.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    try {
      const token = utilityFunctions.getCookieValue('userToken');
      if (!token) {
        setError('Please log in to place an order.');
        navigate('/login');
        return;
      }

      const userId = utilityFunctions.parseJwt(token).userId;
      const guestId = localStorage.getItem('guestId');

      const orderData = {
        userId,
        guestId,
        userDetails: {
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          phoneNumber: userDetails.phoneNumber,
          detailedAddress: userDetails.detailedAddress,
          street: userDetails.street,
          city: userDetails.city,
          state: userDetails.state,
          zip: userDetails.zip,
        },
        paymentMethod: 'COD',
        cartItems: cartItems,
        totalAmount: totalAmount,
      };

      const response = await axios.post('http://localhost:3001/api/order/place-order', orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setSuccessMessage(`Order placed successfully! Order ID: ${response.data.orderId}`);
        if (guestId) {
          localStorage.removeItem('guestId');
        }
        // Clear the cart after successful order placement
        setCartItems([]);
        setTotalAmount(0);
        // Navigate to thank you page after a short delay
        setTimeout(() => {
          navigate('/thank-you', { state: { orderId: response.data.orderId } });
        }, 3000);
      } else {
        setError(response.data.message || 'Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      setError(error.response?.data?.message || 'An error occurred while placing the order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checkout</h1>
      {error && <div style={styles.error}>{error}</div>}
      {successMessage && <div style={styles.success}>{successMessage}</div>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="firstName" style={styles.label}>First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="lastName" style={styles.label}>Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phoneNumber" style={styles.label}>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={userDetails.phoneNumber}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="detailedAddress" style={styles.label}>Detailed Address:</label>
          <textarea
            id="detailedAddress"
            name="detailedAddress"
            value={userDetails.detailedAddress}
            onChange={handleInputChange}
            required
            style={styles.textarea}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="street" style={styles.label}>Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={userDetails.street}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="city" style={styles.label}>City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={userDetails.city}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="state" style={styles.label}>State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={userDetails.state}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="zip" style={styles.label}>ZIP Code:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={userDetails.zip}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.cartSection}>
          <h2 style={styles.cartTitle}>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p style={styles.emptyCart}>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.bookId} style={styles.cartItem}>
                <img src={item.image} alt={item.title} style={styles.cartItemImage} />
                <div style={styles.cartItemDetails}>
                  <p style={styles.cartItemTitle}>{item.title}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
          <h3 style={styles.totalAmount}>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting || cartItems.length === 0} 
          style={cartItems.length === 0 ? styles.disabledButton : styles.submitButton}
        >
          {isSubmitting ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    minHeight: '100px',
  },
  cartSection: {
    marginTop: '30px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '15px',
  },
  cartTitle: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '15px',
    fontSize: '20px',
  },
  cartItem: {
    display: 'flex',
    marginBottom: '15px',
    borderBottom: '1px solid #eee',
    paddingBottom: '15px',
  },
  cartItemImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '15px',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  totalAmount: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '15px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
    color: '#666666',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'not-allowed',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#ffebee',
    borderRadius: '4px',
  },
  success: {
    color: 'green',
    marginBottom: '15px',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px',
    backgroundColor: '#e8f5e9',
    borderRadius: '4px',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '50px',
  },
  emptyCart: {
    textAlign: 'center',
    fontSize: '16px',
    color: '#666',
    marginTop: '20px',
  },
};



export default CheckoutO;*/




/*import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const [guestId, setGuestId] = useState(localStorage.getItem("guestId"));

  const generateGuestId = useCallback(() => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  }, []);

  const fetchCart = useCallback(async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`${Server_URL}api/cart/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });
      if (res.data && Array.isArray(res.data.items)) {
        setCart(res.data.items);
        setTotalPrice(res.data.totalAmount);
      } else {
        setCart([]);
        setTotalPrice(0);
        toast.info("Your cart is empty.");
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
      toast.error("Error fetching cart.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  const mergeCarts = useCallback(async () => {
    if (!userId || !guestId) return;

    try {
      const res = await axios.post(
        `${Server_URL}api/cart/merge`,
        { guestId, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        setCart(res.data.cart.items);
        setTotalPrice(res.data.cart.totalAmount);
        localStorage.removeItem("guestId");
        setGuestId(null);
      } else {
        toast.error(res.data.message || "Failed to merge carts.");
      }
    } catch (error) {
      console.error("Failed to merge carts:", error);
      toast.error("Error merging carts. Please try again.");
    }
  }, [userId, guestId, token]);

  useEffect(() => {
    if (!guestId && !userId) {
      const newGuestId = generateGuestId();
      setGuestId(newGuestId);
    }

    if (userId && guestId) {
      mergeCarts();
    } else {
      fetchCart(userId || guestId);
    }
  }, [userId, guestId, fetchCart, mergeCarts, generateGuestId]);

  const onSubmit = async (data) => {
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    try {
      const payload = {
        userDetails: {
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          phoneNumber: data.phoneNumber.trim(),
          detailedAddress: `${data.street.trim()}, ${data.city.trim()}, ${data.state.trim()}, ${data.zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
      };

      console.log("Submitting payload:", payload);

      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        setCart([]);
        setTotalPrice(0);
        if (!userId) {
          localStorage.removeItem("guestId");
          setGuestId(null);
        }
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <ToastContainer />
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: "First Name is required" })} placeholder="First Name" />
          {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
          
          <input {...register("lastName", { required: "Last Name is required" })} placeholder="Last Name" />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName.message}</p>}
          
          <input {...register("street", { required: "Street is required" })} placeholder="Street" />
          {errors.street && <p style={{ color: "red" }}>{errors.street.message}</p>}
          
          <input {...register("city", { required: "City is required" })} placeholder="City" />
          {errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}
          
          <input {...register("state", { required: "State is required" })} placeholder="State" />
          {errors.state && <p style={{ color: "red" }}>{errors.state.message}</p>}
          
          <input {...register("zip", { required: "ZIP Code is required" })} placeholder="ZIP Code" />
          {errors.zip && <p style={{ color: "red" }}>{errors.zip.message}</p>}
          
          <input {...register("phoneNumber", { required: "Phone Number is required" })} placeholder="Phone Number" />
          {errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>}
          
          <button type="submit" disabled={loading || cart.length === 0}>
            {loading ? "Loading..." : "Submit Order"}
          </button>
        </form>
      </div>
      <div style={{ flex: 1 }}>
        <h2>Your Cart</h2>
        {loading ? (
          <p>Loading cart...</p>
        ) : cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price.toFixed(2)}</p>
            </div>
          ))
        )}
        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;
*/

/*import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const [guestId, setGuestId] = useState(localStorage.getItem("guestId"));

  const generateGuestId = useCallback(() => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  }, []);

  const fetchCart = useCallback(async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`${Server_URL}api/cart/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });
      if (res.data && Array.isArray(res.data.items)) {
        setCart(res.data.items);
        setTotalPrice(res.data.totalAmount);
      } else {
        setCart([]);
        setTotalPrice(0);
        toast.info("Your cart is empty.");
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
      toast.error("Error fetching cart.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  const mergeCarts = useCallback(async () => {
    if (!userId || !guestId) return;

    try {
      const res = await axios.post(
        `${Server_URL}api/cart/merge`,
        { guestId, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        setCart(res.data.cart.items);
        setTotalPrice(res.data.cart.totalAmount);
        localStorage.removeItem("guestId");
        setGuestId(null);
      } else {
        toast.error(res.data.message || "Failed to merge carts.");
      }
    } catch (error) {
      console.error("Failed to merge carts:", error);
      toast.error("Error merging carts. Please try again.");
    }
  }, [userId, guestId, token]);

  useEffect(() => {
    if (!guestId && !userId) {
      const newGuestId = generateGuestId();
      setGuestId(newGuestId);
    }

    if (userId && guestId) {
      mergeCarts();
    } else {
      fetchCart(userId || guestId);
    }
  }, [userId, guestId, fetchCart, mergeCarts, generateGuestId]);

  const onSubmit = async (data) => {
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    try {
      const payload = {
        userDetails: {
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          phoneNumber: data.phoneNumber.trim(),
          detailedAddress: `${data.street.trim()}, ${data.city.trim()}, ${data.state.trim()}, ${data.zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
      };

      console.log("Submitting payload:", payload);

      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        setCart([]);
        setTotalPrice(0);
        if (!userId) {
          localStorage.removeItem("guestId");
          setGuestId(null);
        }
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    }
  };

  return (
    <div className="flex justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-5">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          
          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            {loading ? "Loading..." : "Submit Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {loading ? (
          <p>Loading cart...</p>
        ) : cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;
*/

 /*import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const [guestId, setGuestId] = useState(localStorage.getItem("guestId"));

  const generateGuestId = useCallback(() => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  }, []);

  const fetchCart = useCallback(async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`${Server_URL}api/cart/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });
      if (res.data && Array.isArray(res.data.items)) {
        setCart(res.data.items);
        setTotalAmount(res.data.totalAmount);
      } else {
        setCart([]);
        setTotalAmount(0);
        toast.info("Your cart is empty.");
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
      toast.error("Error fetching cart.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  const mergeCarts = useCallback(async () => {
    if (!userId || !guestId) {
      console.warn("Missing userId or guestId for merge.");
      return;
    }

    try {
      const payload = { guestId, userId };
      const headers = { Authorization: `Bearer ${token}` };

      const res = await axios.post(`${Server_URL}api/cart/merge`, payload, { headers });
      
      if (res.data.success) {
        setCart(res.data.cart.items);
        setTotalAmount(res.data.cart.totalAmount);
        localStorage.removeItem("guestId");
        setGuestId(null);
      } else {
        toast.error(res.data.message || "Failed to merge carts.");
      }
    } catch (error) {
      console.error("Failed to merge carts:", error.response || error);
      toast.error(error.response?.data?.message || "Error merging carts. Please try again.");
    }
  }, [userId, guestId, token]);

  useEffect(() => {
    if (!guestId && !userId) {
      const newGuestId = generateGuestId();
      setGuestId(newGuestId);
    }

    if (userId && guestId) {
      mergeCarts();
    } else {
      fetchCart(userId || guestId);
    }
  }, [userId, guestId, fetchCart, mergeCarts, generateGuestId]);

  const onSubmit = async (data) => {
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }
const { street, city, state, zip } = data;

  // Check if any address field is missing or empty
  if (!street || !city || !state || !zip) {
    toast.error("Please fill in all address fields.");
    return;
  }
    try {
    const payload = {
      userDetails: {
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        phoneNumber: data.phoneNumber.trim(),
        // Ensure all address fields are included correctly
        street: street.trim(),
        city: city.trim(),
        state: state.trim(),
        zip: zip.trim(),
        // Correct field name for detailedAddress
        detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
      },
      userId: userId,
      guestId: userId ? undefined : guestId,
      paymentMethod: "COD",  // or whichever payment method you use
    };

      const headers = { Authorization: token ? `Bearer ${token}` : undefined };

      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        setCart([]);
        setTotalAmount(0);
        if (!userId) {
          localStorage.removeItem("guestId");
          setGuestId(null);
        }
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    }
  };

  return (
    <div className="flex justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-5">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
           <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            {loading ? "Loading..." : "Submit Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
     
        {loading ? (
          <p>Loading cart...</p>
        ) : cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{totalPrice.toFixed(2)}</h3>
      
    
      </div>
    </div>
  );
};

export default CheckoutO;*/


/*import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const [guestId, setGuestId] = useState(localStorage.getItem("guestId"));

  const generateGuestId = useCallback(() => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  }, []);

  const fetchCart = useCallback(async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`${Server_URL}api/cart/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });
      if (res.data && Array.isArray(res.data.items)) {
        setCart(res.data.items);
        setTotalAmount(res.data.totalAmount);
      } else {
        setCart([]);
        setTotalAmount(0);
        toast.info("Your cart is empty.");
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
      toast.error("Error fetching cart.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  const mergeCarts = useCallback(async () => {
    if (!userId || !guestId) {
      console.warn("Missing userId or guestId for merge.");
      return;
    }

    try {
      const payload = { guestId, userId };
      const headers = { Authorization: `Bearer ${token}` };

      const res = await axios.post(`${Server_URL}api/cart/merge`, payload, { headers });
      
      if (res.data.success) {
        setCart(res.data.cart.items);
        setTotalAmount(res.data.cart.totalAmount);
        localStorage.removeItem("guestId");
        setGuestId(null);
      } else {
        toast.error(res.data.message || "Failed to merge carts.");
      }
    } catch (error) {
      console.error("Failed to merge carts:", error.response || error);
      toast.error(error.response?.data?.message || "Error merging carts. Please try again.");
    }
  }, [userId, guestId, token]);

  useEffect(() => {
    if (!guestId && !userId) {
      const newGuestId = generateGuestId();
      setGuestId(newGuestId);
    }

    if (userId && guestId) {
      mergeCarts();
    } else {
      fetchCart(userId || guestId);
    }
  }, [userId, guestId, fetchCart, mergeCarts, generateGuestId]);

  const onSubmit = async (data) => {
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { street, city, state, zip } = data;

    if (!street || !city || !state || !zip) {
      toast.error("Please fill in all address fields.");
      return;
    }

    try {
      const payload = {
        userDetails: {
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          phoneNumber: data.phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
      };

      const headers = { Authorization: token ? `Bearer ${token}` : undefined };
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        setCart([]);
        setTotalAmount(0);
        if (!userId) {
          localStorage.removeItem("guestId");
          setGuestId(null);
        }
        navigate("/thank-you");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    }
  };

  return (
    <div className="flex justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-5">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            {loading ? "Loading..." : "Submit Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {loading ? (
          <p>Loading cart...</p>
        ) : cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;
*/








/*import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const [guestId, setGuestId] = useState(localStorage.getItem("guestId"));

  const generateGuestId = useCallback(() => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  }, []);

  const fetchCart = useCallback(async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`${Server_URL}api/cart/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });
      if (res.data && Array.isArray(res.data.items)) {
        setCart(res.data.items);
        setTotalAmount(res.data.totalAmount);
      } else {
        setCart([]);
        setTotalAmount(0);
        toast.info("Your cart is empty.");
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
      toast.error("Error fetching cart.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  const mergeCarts = useCallback(async () => {
    if (!userId || !guestId) {
      console.warn("Missing userId or guestId for merge.");
      return;
    }

    try {
      const payload = { guestId, userId };
      const headers = { Authorization: `Bearer ${token}` };

      const res = await axios.post(`${Server_URL}api/cart/merge`, payload, { headers });
      
      if (res.data.success) {
        setCart(res.data.cart.items);
        setTotalAmount(res.data.cart.totalAmount);
        localStorage.removeItem("guestId");
        setGuestId(null);
      } else {
        toast.error(res.data.message || "Failed to merge carts.");
      }
    } catch (error) {
      console.error("Failed to merge carts:", error.response || error);
      toast.error(error.response?.data?.message || "Error merging carts. Please try again.");
    }
  }, [userId, guestId, token]);

  useEffect(() => {
    if (!guestId && !userId) {
      const newGuestId = generateGuestId();
      setGuestId(newGuestId);
    }

    if (userId && guestId) {
      mergeCarts();
    } else {
      fetchCart(userId || guestId);
    }
  }, [userId, guestId, fetchCart, mergeCarts, generateGuestId]);

  const onSubmit = async (data) => {
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip } = data;

    // Debugging step: Log the data before sending it to the server
    console.log("Submitting order with data:", data);

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
      };

      const headers = { Authorization: token ? `Bearer ${token}` : undefined };
      console.log("Placing order with payload:", payload); // Debugging step
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        console.log("Order response:", res.data); // Debugging step
        setCart([]);
        setTotalAmount(0);
        if (!userId) {
          localStorage.removeItem("guestId");
          setGuestId(null);
        }
        navigate("/thank-you");
      } else {
        console.error("Order failed:", res.data); // Debugging step
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    }
  };

  return (
    <div className="flex justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-5">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            {loading ? "Loading..." : "Submit Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {loading ? (
          <p>Loading cart...</p>
        ) : cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;
*/
// working
/*import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const [guestId, setGuestId] = useState(localStorage.getItem("guestId"));

  const generateGuestId = useCallback(() => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  }, []);

  const fetchCart = useCallback(async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`${Server_URL}api/cart/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });
      if (res.data && Array.isArray(res.data.items)) {
        setCart(res.data.items);
        setTotalAmount(res.data.totalAmount);
      } else {
        setCart([]);
        setTotalAmount(0);
        toast.info("Your cart is empty.");
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
      toast.error("Error fetching cart.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  const mergeCarts = useCallback(async () => {
    if (!userId || !guestId) {
      console.warn("Missing userId or guestId for merge.");
      return;
    }

    try {
      const payload = { guestId, userId };
      const headers = { Authorization: `Bearer ${token}` };

      const res = await axios.post(`${Server_URL}api/cart/merge`, payload, { headers });
      
      if (res.data.success) {
        setCart(res.data.cart.items);
        setTotalAmount(res.data.cart.totalAmount);
        localStorage.removeItem("guestId");
        setGuestId(null);
      } else {
        toast.error(res.data.message || "Failed to merge carts.");
      }
    } catch (error) {
      console.error("Failed to merge carts:", error.response || error);
      toast.error(error.response?.data?.message || "Error merging carts. Please try again.");
    }
  }, [userId, guestId, token]);

  useEffect(() => {
    if(!token){
      toast.error("please login to place order");
      navigate("/login")
    }
    if (!guestId && !userId) {
      const newGuestId = generateGuestId();
      setGuestId(newGuestId);
    }

    if (userId && guestId) {
      mergeCarts();
    } else {
      fetchCart(userId || guestId);
    }
  }, [userId, guestId, fetchCart, mergeCarts, generateGuestId]);

  const onSubmit = async (data) => {
    
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip } = data;

    // Debugging step: Log the data before sending it to the server
    console.log("Submitting order with data:", data);

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
      };

      const headers = { Authorization: token ? `Bearer ${token}` : undefined };
      console.log("Placing order with payload:", payload); // Debugging step
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        console.log("Order response:", res.data); // Debugging step
        setCart([]);
        setTotalAmount(0);
        if (!userId) {
          localStorage.removeItem("guestId");
          setGuestId(null);
        }
        navigate("/thanks");
      } else {
        console.error("Order failed:", res.data); // Debugging step
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    }
  };

  return (
    <div className="flex justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-5">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            {loading ? "Loading..." : "Submit Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {loading ? (
          <p>Loading cart...</p>
        ) : cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO*/

// partail workign
/*import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

import { useCart } from "../finalApperence/Cartlogic";
const CheckoutO = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { cart, loading, guestId, fetchCart, clearCart } = useCart();

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;

  useEffect(() => {
    if (!token) {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }

    fetchCart();
  }, [token, navigate, fetchCart]);

  const onSubmit = async (data) => {
    if (cart.items.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip } = data;

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
      };

      const headers = { Authorization: token ? `Bearer ${token}` : undefined };
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, {
        headers
      });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        clearCart();
        navigate("/thanks");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-0 md:mr-5 mb-5 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading || cart.items.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            {loading ? "Loading..." : "Submit Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {loading ? (
          <p>Loading cart...</p>
        ) : cart.items.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item.bookId} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{cart.totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;*/

/*import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

import { useCart } from "../finalApperence/Cartlogic";
const CheckoutO = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { cart, loading, guestId, fetchCart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;

  useEffect(() => {
    if (!token) {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }

    fetchCart();
  }, [token, navigate, fetchCart]);

  const onSubmit = async (data) => {
    if (cart.items.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip } = data;

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
        cartItems: cart.items
      };

      const headers = { Authorization: token ? `Bearer ${token}` : undefined };
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        await clearCart();
        navigate("/thanks");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-0 md:mr-5 mb-5 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting || cart.items.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isSubmitting ? "Processing..." : "Place Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.items.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item.bookId} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{cart.totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;*/
// workign
/*import React, { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

import { useCart } from "../finalApperence/Cartlogic";
const CheckoutO = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { cart, loading, guestId, fetchCart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;

  useEffect(() => {
    if (!token) {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }

    fetchCart();
  }, [token, navigate, fetchCart]);

  useEffect(() => {
    console.log("Current cart state in CheckoutO:", cart);
  }, [cart]);

  const onSubmit = useCallback(async (data) => {
    if (!cart.items || cart.items.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip } = data;

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
        cartItems: cart.items.map(item => ({
          bookId: item.bookId,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity
        }))
      };

      console.log("Payload being sent:", JSON.stringify(payload, null, 2));

      const headers = { 
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json'
      };
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      console.log("Server response:", res.data);

      if (res.data.success) {
        toast.success("Order placed successfully!");
        await clearCart();
        navigate("/thanks");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    } finally {
      setIsSubmitting(false);
    }
  }, [cart, userId, guestId, token, clearCart, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-0 md:mr-5 mb-5 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !cart.items || cart.items.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isSubmitting ? "Processing..." : "Place Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {!cart.items || cart.items.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item.bookId} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Book ID: {item.bookId}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{cart.totalAmount.toFixed(2)}</h3>
        <p className="mt-2">Number of items: {cart.items ? cart.items.length : 0}</p>
      </div>
    </div>
  );
};

export default CheckoutO;*/

// workign
/*import React, { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";
import { useCart } from "../finalApperence/Cartlogic";

const CheckoutO = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { cart, loading, guestId, fetchCart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;

  useEffect(() => {
    if (!token) {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }
    fetchCart();
  }, [token, navigate, fetchCart]);

  useEffect(() => {
    console.log("Current cart state in CheckoutO:", cart);
  }, [cart]);

  const onSubmit = useCallback(async (data) => {
    if (!cart.items || cart.items.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip } = data;

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
        cartItems: cart.items.map(item => ({
          bookId: item.bookId,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity
        }))
      };

      console.log("Payload being sent:", JSON.stringify(payload, null, 2));

      const headers = { 
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json'
      };
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      console.log("Server response:", res.data);

      if (res.data.success) {
        toast.success("Order placed successfully!");
        await clearCart();
        navigate("/thanks");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    } finally {
      setIsSubmitting(false);
    }
  }, [cart, userId, guestId, token, clearCart, navigate]);

  const containerStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '2rem'
  };

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'transform 0.3s ease'
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    marginBottom: '1.5rem',
    border: '2px solid #e2e8f0',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#1A1F2C'
  };

  const buttonStyle = {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#9b87f5',
    color: 'white',
    border: 'none',
    borderRadius: '0.75rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(155, 135, 245, 0.2)',
    marginTop: '1.5rem'
  };

  const cartItemStyle = {
    padding: '1.5rem',
    borderRadius: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0'
  };

  if (loading) {
    return <div style={{...containerStyle, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1.5rem'}}>Loading...</div>;
  }

  return (
    <div style={containerStyle}>
      <ToastContainer />
      <div className="flex flex-col md:flex-row justify-between gap-8 max-w-7xl mx-auto">
        <div className="flex-1" style={glassStyle}>
          <h2 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1A1F2C', textAlign: 'center'}}>Checkout Details</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{marginBottom: '1.5rem'}}>
              <label style={labelStyle}>First Name</label>
              <input
                {...register("firstName", { required: "First Name is required" })}
                placeholder="Enter your first name"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#9b87f5'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
              {errors.firstName && <p style={{color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem'}}>{errors.firstName.message}</p>}
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={labelStyle}>Last Name</label>
              <input
                {...register("lastName", { required: "Last Name is required" })}
                placeholder="Enter your last name"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#9b87f5'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
              {errors.lastName && <p style={{color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem'}}>{errors.lastName.message}</p>}
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={labelStyle}>Phone Number</label>
              <input
                {...register("phoneNumber", { required: "Phone Number is required" })}
                placeholder="Enter your phone number"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#9b87f5'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
              {errors.phoneNumber && <p style={{color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem'}}>{errors.phoneNumber.message}</p>}
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={labelStyle}>Street</label>
              <input
                {...register("street", { required: "Street is required" })}
                placeholder="Enter your street"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#9b87f5'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
              {errors.street && <p style={{color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem'}}>{errors.street.message}</p>}
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={labelStyle}>City</label>
              <input
                {...register("city", { required: "City is required" })}
                placeholder="Enter your city"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#9b87f5'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
              {errors.city && <p style={{color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem'}}>{errors.city.message}</p>}
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={labelStyle}>State</label>
              <input
                {...register("state", { required: "State is required" })}
                placeholder="Enter your state"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#9b87f5'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
              {errors.state && <p style={{color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem'}}>{errors.state.message}</p>}
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={labelStyle}>ZIP Code</label>
              <input
                {...register("zip", { required: "ZIP Code is required" })}
                placeholder="Enter your ZIP code"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#9b87f5'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
              {errors.zip && <p style={{color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem'}}>{errors.zip.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !cart.items || cart.items.length === 0}
              style={{
                ...buttonStyle,
                backgroundColor: (isSubmitting || !cart.items || cart.items.length === 0) ? '#9CA3AF' : '#9b87f5',
                cursor: (isSubmitting || !cart.items || cart.items.length === 0) ? 'not-allowed' : 'pointer',
                opacity: (isSubmitting || !cart.items || cart.items.length === 0) ? '0.7' : '1'
              }}
            >
              {isSubmitting ? "Processing..." : "Complete Order"}
            </button>
          </form>
        </div>
        
        <div className="flex-1" style={glassStyle}>
          <h2 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1A1F2C', textAlign: 'center'}}>Order Summary</h2>
          {!cart.items || cart.items.length === 0 ? (
            <p style={{textAlign: 'center', color: '#666', fontSize: '1.1rem'}}>Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div key={item.bookId} style={cartItemStyle}>
                  <p style={{fontSize: '1.1rem', fontWeight: '600', color: '#1A1F2C', marginBottom: '0.5rem'}}>{item.title}</p>
                  <p style={{color: '#666', marginBottom: '0.25rem'}}>Quantity: {item.quantity}</p>
                  <p style={{color: '#9b87f5', fontWeight: '600'}}>₹{item.price.toFixed(2)}</p>
                </div>
              ))}
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                borderTop: '2px solid rgba(155, 135, 245, 0.2)',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(155, 135, 245, 0.05)'
              }}>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#1A1F2C', marginBottom: '0.5rem'}}>
                  Total: ₹{cart.totalAmount.toFixed(2)}
                </h3>
                <p style={{color: '#666'}}>Items: {cart.items ? cart.items.length : 0}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutO;*/

import React, { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";
import { useCart } from "../finalApperence/Cartlogic";

const CheckoutO = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { cart, loading, guestId, fetchCart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;

  useEffect(() => {
    if (!token) {
      toast.error("Please login to place an order");
      navigate("/register");
      return;
    }
    fetchCart();
  }, [token, navigate, fetchCart]);

  useEffect(() => {
    console.log("Current cart state in CheckoutO:", cart);
  }, [cart]);

  const onSubmit = useCallback(async (data) => {
    if (!cart.items || cart.items.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip, detailedAddress } = data;

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip || !detailedAddress) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: detailedAddress.trim(),
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
        cartItems: cart.items.map(item => ({
          bookId: item.bookId,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity
        }))
      };

      console.log("Payload being sent:", JSON.stringify(payload, null, 2));

      const headers = { 
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json'
      };
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      console.log("Server response:", res.data);

      if (res.data.success) {
        toast.success("Order placed successfully!");
        await clearCart();
        navigate("/thanks");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    } finally {
      setIsSubmitting(false);
    }
  }, [cart, userId, guestId, token, clearCart, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl">
          <div className="loader"></div>
          <p className="mt-4 text-lg font-semibold text-gray-700">Loading your checkout...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="max-w-7xl mx-auto">
        <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/2 xl:w-3/5 p-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Checkout Details</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      {...register("firstName", { required: "First Name is required" })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.firstName && <p className="mt-2 text-sm text-red-600">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      {...register("lastName", { required: "Last Name is required" })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.lastName && <p className="mt-2 text-sm text-red-600">{errors.lastName.message}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    {...register("phoneNumber", { required: "Phone Number is required" })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.phoneNumber && <p className="mt-2 text-sm text-red-600">{errors.phoneNumber.message}</p>}
                </div>
                <div>
                  <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street</label>
                  <input
                    type="text"
                    id="street"
                    {...register("street", { required: "Street is required" })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.street && <p className="mt-2 text-sm text-red-600">{errors.street.message}</p>}
                </div>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      id="city"
                      {...register("city", { required: "City is required" })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                    <input
                      type="text"
                      id="state"
                      {...register("state", { required: "State is required" })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.state && <p className="mt-2 text-sm text-red-600">{errors.state.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                    <input
                      type="text"
                      id="zip"
                      {...register("zip", { required: "ZIP Code is required" })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.zip && <p className="mt-2 text-sm text-red-600">{errors.zip.message}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="detailedAddress" className="block text-sm font-medium text-gray-700">Detailed Address</label>
                  <textarea
                    id="detailedAddress"
                    rows="3"
                    {...register("detailedAddress", { required: "Detailed Address is required" })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Please provide any additional address details"
                  ></textarea>
                  {errors.detailedAddress && <p className="mt-2 text-sm text-red-600">{errors.detailedAddress.message}</p>}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Method</h3>
                  <p className="text-sm text-gray-600 mb-4">Sorry, we only have Cash on Delivery available right now.</p>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-sm text-gray-800">For online payment, you can pay to this number through google pay or contact us for further information : <span className="font-semibold">7986438681</span></p>
                     <p className="text-sm text-gray-600 mb-4">No extra charges for Delivery</p>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !cart.items || cart.items.length === 0}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                      (isSubmitting || !cart.items || cart.items.length === 0) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? "Processing..." : "Complete Order"}
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-1/2 xl:w-2/5 p-8 bg-gray-50">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Order Summary</h2>
              {!cart.items || cart.items.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.items.map((item) => (
                    <div key={item.bookId} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                      <img src={item.image} alt={item.title} className="w-16 h-24 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-indigo-600 font-semibold">₹{item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-8 bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Total: ₹{cart.totalAmount.toFixed(2)}</h3>
                    <p className="text-gray-600">Items: {cart.items ? cart.items.length : 0}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .loader {
          border: 5px solid #f3f3f3;
          border-top: 5px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CheckoutO;






/*import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

import { useCart } from "../finalApperence/Cartlogic";
const CheckoutO = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { cart, loading, guestId, fetchCart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;

  useEffect(() => {
    if (!token) {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }

    fetchCart();
  }, [token, navigate, fetchCart]);

  useEffect(() => {
    console.log("Current cart state:", cart);
  }, [cart]);

  const onSubmit = async (data) => {
    if (cart.items.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip } = data;

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
        cartItems: cart.items
      };

      console.log("Payload being sent:", payload);

      const headers = { 
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json'
      };
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        await clearCart();
        navigate("/thanks");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-0 md:mr-5 mb-5 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting || cart.items.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isSubmitting ? "Processing..." : "Place Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.items.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item.bookId} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Book ID: {item.bookId}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{cart.totalAmount.toFixed(2)}</h3>
        <p className="mt-2">Number of items: {cart.items.length}</p>
      </div>
    </div>
  );
};

export default CheckoutO;*/







/*import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

import { useCart } from "../finalApperence/Cartlogic";
const CheckoutO = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { cart, setCart, loading, guestId, clearCart } = useCart();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;

  useEffect(() => {
    if (!token) {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/cart/${userId || guestId}`);
        setCart(response.data || { items: [], totalAmount: 0 });
      } catch (error) {
        console.error('Error fetching cart:', error);
        setCart({ items: [], totalAmount: 0 });
      } finally {
        setIsInitialLoad(false);
      }
    };

    if (isInitialLoad) {
      fetchCart();
    }
  }, [token, navigate, userId, guestId, setCart, isInitialLoad]);

  const onSubmit = async (data) => {
    if (cart.items.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip } = data;

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
      };

      const headers = { Authorization: token ? `Bearer ${token}` : undefined };
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        clearCart();
        navigate("/thanks");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    }
  };

  if (isInitialLoad) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-0 md:mr-5 mb-5 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading || cart.items.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            {loading ? "Loading..." : "Submit Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {loading ? (
          <p>Loading cart...</p>
        ) : cart.items.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item.bookId} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{cart.totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;
*/








/*import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";
import { utilityFunctions } from "../utils/module";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cartFetchedFor, setCartFetchedFor] = useState(null); // Track if cart is fetched for userId or guestId
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const guestId = localStorage.getItem("guestId") || Date.now().toString();
  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;

  useEffect(() => {
    if (!localStorage.getItem("guestId")) {
      localStorage.setItem("guestId", guestId);
    }
  }, [guestId]);

  // Fetch cart items
  const fetchCart = useCallback(async (id, idType) => {
    if (!id) return;

    setLoading(true);
    try {
      const response = await axios.get(`${Server_URL}api/cart/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });

      if (response.data && Array.isArray(response.data.items)) {
        setCart(response.data.items);
        setTotalAmount(response.data.totalAmount || 0);
        setCartFetchedFor(idType); // Track if we fetched for userId or guestId
      } else {
        setCart([]);
        setTotalAmount(0);
        toast.info("Your cart is empty.");
      }

      console.log(`Cart fetch response (${idType}):`, response.data); // Debugging
    } catch (error) {
      console.error(`Error fetching cart (${idType}):`, error);
      toast.error("Failed to load cart. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  // Merge carts
  const mergeCarts = useCallback(async () => {
    if (!userId || !guestId) return;

    try {
      const payload = { guestId, userId };
      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.post(`${Server_URL}api/cart/merge`, payload, { headers });

      if (response.data.success) {
        console.log("Cart merge response:", response.data);
        // Fetch the merged cart for userId
        await fetchCart(userId, "userId");
      } else {
        toast.error(response.data.message || "Failed to merge carts.");
      }
    } catch (error) {
      console.error("Error merging carts:", error);
      toast.error("An error occurred while merging carts.");
    }
  }, [userId, guestId, token, fetchCart]);

  // Initialize cart
  useEffect(() => {
    const initializeCart = async () => {
      if (!token && !guestId) {
        toast.error("Please log in to proceed.");
        navigate("/login");
        return;
      }

      if (userId) {
        if (cartFetchedFor !== "userId") {
          await mergeCarts();
        }
      } else {
        if (cartFetchedFor !== "guestId") {
          await fetchCart(guestId, "guestId");
        }
      }
    };

    initializeCart();
  }, [mergeCarts, fetchCart, token, userId, guestId, navigate, cartFetchedFor]);

  const onSubmit = async (data) => {
    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip } = data;

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
      };

      const headers = { Authorization: token ? `Bearer ${token}` : undefined };
      const response = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      if (response.data.success) {
        toast.success("Order placed successfully!");
        setCart([]);
        setTotalAmount(0);
        navigate("/thanks");
      } else {
        toast.error(response.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("An error occurred while placing the order.");
    }
  };

  return (
    <div className="flex justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-5">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            {loading ? "Loading..." : "Submit Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {loading ? (
          <p>Loading cart...</p>
        ) : cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="border-b pb-2">
              <p className="font-semibold">{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price.toFixed(2)}</p>
            </div>
          ))
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;*/

//4rgt
/*import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

import { useCart } from "../finalApperence/Cartlogic";
const CheckoutO = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { cart, totalPrice, loading, fetchCart, mergeCarts, clearCart } = useCart();

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const [guestId, setGuestId] = useState(localStorage.getItem("guestId"));

  const generateGuestId = useCallback(() => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  }, []);

  useEffect(() => {
    if (!token) {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }

    if (!guestId && !userId) {
      const newGuestId = generateGuestId();
      setGuestId(newGuestId);
    }

    const initializeCart = async () => {
      if (userId && guestId) {
        await mergeCarts(userId, guestId);
      } else {
        await fetchCart(userId || guestId);
      }
    };

    initializeCart();
  }, [userId, guestId, fetchCart, mergeCarts, generateGuestId, token, navigate]);

  const onSubmit = async (data) => {
    if (!cart || cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip } = data;

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        guestId: userId ? undefined : guestId,
        paymentMethod: "COD",
      };

      const headers = { Authorization: token ? `Bearer ${token}` : undefined };
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        clearCart();
        if (!userId) {
          localStorage.removeItem("guestId");
          setGuestId(null);
        }
        navigate("/thanks");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "An error occurred while placing the order.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-0 md:mr-5 mb-5 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading || !cart || cart.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            {loading ? "Loading..." : "Submit Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {loading ? (
          <p>Loading cart...</p>
        ) : !cart || cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{totalPrice ? totalPrice.toFixed(2) : '0.00'}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;*/




/*import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import { useCart } from "../finalApperence/Cartlogic";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const { cartItems = [], updateQuantity, loading, error, fetchCart } = useCart(); // Default to an empty array
  const [totalPrice, setTotalAmount] = useState(0);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [token, setToken] = useState(utilityFunctions.getCookieValue("userToken"));
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const currentToken = utilityFunctions.getCookieValue("userToken");
    setToken(currentToken);

    if (currentToken) {
      try {
        const decodedToken = utilityFunctions.parseJwt(currentToken);
        setUserId(decodedToken.userId);
      } catch (err) {
        console.error("Error parsing token:", err.message);
        setUserId(null);
      }
    }

    fetchCart().catch((err) => {
      console.error("Error fetching cart:", err.message);
    });
  }, [fetchCart]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setTotalAmount(cartItems.reduce((total, item) => total + item.price * item.quantity, 0));
    }
  }, [cartItems]);

  const onSubmit = async (data) => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    try {
      const payload = {
        userDetails: {
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          phoneNumber: data.phoneNumber.trim(),
          street: data.street.trim(),
          city: data.city.trim(),
          state: data.state.trim(),
          zip: data.zip.trim(),
          detailedAddress: `${data.street.trim()}, ${data.city.trim()}, ${data.state.trim()}, ${data.zip.trim()}`,
        },
        userId,
        guestId: userId ? undefined : localStorage.getItem("guestId"),
        paymentMethod: "COD",
      };

      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        await fetchCart(); // Refresh the cart
        navigate("/thanks");
      } else {
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (err) {
      console.error("Order submission error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "An error occurred while placing the order.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col md:flex-row justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-5 mb-5 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {["firstName", "lastName", "phoneNumber", "street", "city", "state", "zip"].map((field) => (
            <div key={field}>
              <input
                {...register(field, { required: `${field} is required` })}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full p-2 border rounded"
              />
              {errors[field] && (
                <p className="text-red-500">{errors[field].message}</p>
              )}
            </div>
          ))}
          <button
            type="submit"
            disabled={loading || cartItems.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Submit Order
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.bookId} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.bookId, -1)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateQuantity(item.bookId, 1)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;*/





















/*import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { utilityFunctions } from "../utils/module";
import "react-toastify/dist/ReactToastify.css";
import { Server_URL } from "../utils/config";

const CheckoutO = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const [guestId, setGuestId] = useState(localStorage.getItem("guestId"));

  const generateGuestId = useCallback(() => {
    const newGuestId = Date.now().toString();
    localStorage.setItem("guestId", newGuestId);
    return newGuestId;
  }, []);

  const fetchCart = useCallback(async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`${Server_URL}api/cart/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : undefined },
      });
      if (res.data && Array.isArray(res.data.items)) {
        setCart(res.data.items);
        setTotalAmount(res.data.totalAmount);
      } else {
        setCart([]);
        setTotalAmount(0);
        toast.info("Your cart is empty.");
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
      toast.error("Error fetching cart.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  const mergeCarts = useCallback(async () => {
    if (!userId || !guestId) {
      console.warn("Missing userId or guestId for merge.");
      return;
    }

    try {
      const payload = { guestId, userId };
      const headers = { Authorization: `Bearer ${token}` };

      const res = await axios.post(`${Server_URL}api/cart/merge`, payload, { headers });
      
      if (res.data.success) {
        setCart(res.data.cart.items);
        setTotalAmount(res.data.cart.totalAmount);
        localStorage.removeItem("guestId");
        setGuestId(null);
      } else {
        toast.error(res.data.message || "Failed to merge carts.");
      }
    } catch (error) {
      console.error("Failed to merge carts:", error.response || error);
      toast.error(error.response?.data?.message || "Error merging carts. Please try again.");
    }
  }, [userId, guestId, token]);

  useEffect(() => {
    if (!guestId && !userId) {
      const newGuestId = generateGuestId();
      setGuestId(newGuestId);
    }

    if (userId && guestId) {
      mergeCarts();
    } else {
      fetchCart(userId || guestId);
    }
  }, [userId, guestId, fetchCart, mergeCarts, generateGuestId]);

  const onSubmit = async (data) => {
    if (!token) {
      toast.error("Please log in to place an order.");
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty. Add items before placing the order.");
      return;
    }

    const { firstName, lastName, phoneNumber, street, city, state, zip } = data;

    if (!firstName || !lastName || !phoneNumber || !street || !city || !state || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const payload = {
        userDetails: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phoneNumber: phoneNumber.trim(),
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          zip: zip.trim(),
          detailedAddress: `${street.trim()}, ${city.trim()}, ${state.trim()}, ${zip.trim()}`,
        },
        userId: userId,
        paymentMethod: "COD",
      };

      const headers = { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

      console.log("Placing order with payload:", payload);
      const res = await axios.post(`${Server_URL}api/order/place-order`, payload, { headers });

      if (res.data.success) {
        toast.success("Order placed successfully!");
        console.log("Order response:", res.data);
        setCart([]);
        setTotalAmount(0);
        navigate("/thank-you");
      } else {
        console.error("Order failed:", res.data);
        toast.error(res.data.message || "Failed to place the order.");
      }
    } catch (error) {
      console.error("Order submission error:", error.response?.data || error);
      if (error.response?.status === 401) {
        toast.error("Your session has expired. Please log in again.");
        navigate("/login");
      } else {
        toast.error(error.response?.data?.message || "An error occurred while placing the order.");
      }
    }
  };

  return (
    <div className="flex justify-between p-5">
      <ToastContainer />
      <div className="flex-1 mr-5">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
          <div>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <input
              {...register("street", { required: "Street is required" })}
              placeholder="Street"
              className="w-full p-2 border rounded"
            />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}
          </div>
          <div>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <input
              {...register("state", { required: "State is required" })}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              placeholder="ZIP Code"
              className="w-full p-2 border rounded"
            />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            {loading ? "Loading..." : "Submit Order"}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {loading ? (
          <p>Loading cart...</p>
        ) : cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mt-4">Total: ₹{totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CheckoutO;*/





