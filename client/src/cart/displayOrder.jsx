/*import React, { useEffect, useState } from "react";
import { utilityFunctions } from "../utils/module"; // Utility functions for cookies
import { Server_URL } from "../utils/config"; // Backend server URL
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]); // Store user orders
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchOrders = async () => {
      const token = utilityFunctions.getCookieValue("userToken"); // Retrieve token from cookies

      if (!token) {
        navigate("/login"); // Redirect to login if no token
        return;
      }

      try {
        const response = await axios.get(`${Server_URL}api/order/display`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
          },
        });

        if (response.data.success) {
          setOrders(response.data.orders); // Set the fetched orders
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError("Failed to fetch orders. Please try again.");
      } finally {
        setLoading(false); // Stop loading once request is completed
      }
    };

    fetchOrders();
  }, [navigate]);

  if (loading) return <div>Loading orders...</div>; // Show loading indicator
  if (error) return <div>Error: {error}</div>; // Show error message
  if (orders.length === 0) return <div>No orders found.</div>; // Handle no orders

  return (
    <div>
      <h1>Your Orders</h1>
      <div>
        {orders.map((order) => (
          <div key={order._id} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
            <h2>Order ID: {order._id}</h2>
            <p><strong>Total Amount:</strong> ${order.amount}</p>
            <p><strong>Payment Status:</strong> {order.paymentMethod === "COD" ? "Cash on Delivery" : "Paid"}</p>
            <p><strong>Order Status:</strong> {order.status}</p>
            <h3>Items</h3>
            {order.items.map((item) => (
              <div key={item.id} style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "10px" }}
                />
                <div>
                  <p><strong>Name:</strong> {item.title}</p>
                  <p><strong>Price:</strong> ${item.price}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;*/


import React, { useEffect, useState } from "react";
import { utilityFunctions } from "../utils/module";
import { Server_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";
import Layout from "../finalApperence/Layout1";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = utilityFunctions.getCookieValue("userToken");

      if (!token) {
        navigate("/register");
        return;
      }

      try {
        const response = await axios.get(`${Server_URL}api/order/display`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          setOrders(response.data.orders);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError("Failed to fetch orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending': return '#f39c12';
      case 'processing': return '#3498db';
      case 'shipped': return '#2ecc71';
      case 'delivered': return '#27ae60';
      default: return '#95a5a6';
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return (
    <div style={styles.loadingContainer}>
      <div style={styles.loadingSpinner}></div>
      <p style={styles.loadingText}>Loading your literary adventures...</p>
    </div>
  );

  if (error) return (
    <div style={styles.errorContainer}>
      <h2 style={styles.errorTitle}>Oops! Something went wrong</h2>
      <p style={styles.errorMessage}>{error}</p>
      <button style={styles.retryButton} onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );

  if (orders.length === 0) return (
    <div style={styles.emptyContainer}>
      <h2 style={styles.emptyTitle}>Your Bookshelf is Empty!</h2>
      <p style={styles.emptyMessage}>Looks like you haven't started your reading journey with us yet.</p>
      <button style={styles.shopButton} onClick={() => navigate("/books")}>Explore Books</button>
    </div>
  );

  return (
   <Layout>
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>Your Literary Journey</h1>
        <p style={styles.subtitle}>Track your reading adventures and upcoming deliveries</p>
        <div>
       <h3 style={{padding:"4px", margin:"3px"}} >For more order details contact 7986438681 on Whatsapp or mobile</h3>
    </div>
      </header>
      <div style={styles.ordersContainer}>
        {orders.map((order) => (
          <div key={order._id} style={styles.orderCard}>
            <div style={styles.orderHeader}>
              <h2 style={styles.orderTitle}>Order #{order._id.slice(-6)}</h2>
              <span style={{...styles.orderStatus, backgroundColor: getStatusColor(order.status)}}>
                {order.status}
              </span>
            </div>
            <div style={styles.orderDetails}>
              <p style={styles.orderInfo}>
                <strong>Date:</strong> {formatDate(order.date)}
              </p>
              <p style={styles.orderInfo}>
                <strong>Total:</strong> ₹{order.amount.toFixed(2)}
              </p>
              <p style={styles.orderInfo}>
                <strong>Payment:</strong> {order.paymentMethod === "COD" ? "Cash on Delivery" : "Paid"}
              </p>
            </div>
            <div style={styles.itemsContainer}>
              {order.items.map((item) => (
                <div key={item.id} style={styles.itemCard}>
                  <img src={item.imageUrl} alt={item.title} style={styles.itemImage} />
                  <div style={styles.itemDetails}>
                    <h3 style={styles.itemTitle}>{item.title}</h3>
                    <p style={styles.itemInfo}>Price: ₹{item.price.toFixed(2)}</p>
                    <p style={styles.itemInfo}>Quantity: {item.quantity}</p>
                  
                  </div>
                 
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
</Layout>
  );
};
  
const styles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
  },
  ordersContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
  orderHeader: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderTitle: {
    margin: 0,
    fontSize: '1.2rem',
  },
  orderStatus: {
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  orderDetails: {
    padding: '15px',
    borderBottom: '1px solid #ecf0f1',
  },
  orderInfo: {
    margin: '5px 0',
    fontSize: '0.9rem',
  },
  itemsContainer: {
    padding: '15px',
  },
  itemCard: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
  },
  itemImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginRight: '15px',
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    margin: '0 0 5px 0',
    fontSize: '1rem',
    color: '#2c3e50',
  },
  itemInfo: {
    margin: '2px 0',
    fontSize: '0.9rem',
    color: '#7f8c8d',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  loadingSpinner: {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#3498db',
  },
  errorContainer: {
    textAlign: 'center',
    padding: '50px',
  },
  errorTitle: {
    fontSize: '2rem',
    color: '#e74c3c',
    marginBottom: '20px',
  },
  errorMessage: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    marginBottom: '30px',
  },
  retryButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#2980b9',
    },
  },
  emptyContainer: {
    textAlign: 'center',
    padding: '50px',
  },
  emptyTitle: {
    fontSize: '2rem',
    color: '#3498db',
    marginBottom: '20px',
  },
  emptyMessage: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    marginBottom: '30px',
  },
  shopButton: {
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#27ae60',
    },
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

export default Orders;


