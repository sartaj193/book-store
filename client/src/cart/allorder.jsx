/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${Server_URL}api/order/see`);
      const data = response.data;

      if (data.success) {
        setOrders(data.orders); // Correctly set the orders state
      } else {
        setError(data.message || "Failed to fetch orders.");
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("An error occurred while fetching orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>All Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <h3>Order ID: {order._id}</h3>
              <p>Status: {order.status}</p>
              <p>Total Amount: ${order.amount}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              <h4>Items:</h4>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    {item.title} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
              <h4>Address:</h4>
              <p>
                {order.address.firstName} {order.address.lastName},<br />
                {order.address.street}, {order.address.city},<br />
                {order.address.state}, {order.address.zip}
              </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersList;*/

/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";
import { toast } from "react-toastify";
const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${Server_URL}api/order/see`);
      const data = response.data;

      if (data.success) {
        setOrders(data.orders); // Correctly set the orders state
      } else {
        setError(data.message || "Failed to fetch orders.");
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("An error occurred while fetching orders.");
    } finally {
      setLoading(false);
    }
  };

  // Function to update the order status
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.put(`${Server_URL}api/order/${orderId}`, {
        status: newStatus,
      });

      if (response.data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
        alert(`Order ${orderId} updated to ${newStatus}`);
      } else {
        alert(response.data.message || "Failed to update order status.");
      }
    } catch (err) {
      console.error("Error updating order status:", err);
      alert("An error occurred while updating order status.");
    }
  };
  //delete
  const DeleteOrders =async(orderId)=>{
try{
const response = await axios.delete(`${Server_URL}api/order/${orderId}`);
if(response.data.success){
toast.success("deeletd successfully");

}else{
  toast.error(response.data.message)

}
}catch(error){
 const errorMsg = error.response ? error.response.data.message : error.message;
      toast.error(errorMsg || "An error occurred while deleting the profile");

}
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>All Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <h3>Order ID: {order._id}</h3>
              <p>Total Amount: ${order.amount}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              <h4>Items:</h4>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    {item.title} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
              <h4>Address:</h4>
              <p>
                {order.address.firstName} {order.address.lastName},<br />
                {order.address.street}, {order.address.city},<br />
                {order.address.state}, {order.address.zip}
              </p>
              <div>
                <label htmlFor={`status-${order._id}`}>Status: </label>
                <select
                  id={`status-${order._id}`}
                  value={order.status}
                  onChange={(e) =>
                    updateOrderStatus(order._id, e.target.value)
                  }
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
               <button onClick={() => DeleteOrders(order._id)}>Delete Order</button>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersList;*/


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch orders from the server
  const fetchOrders = async () => {
    setLoading(true); // Start loading
    setError(""); // Clear previous errors
    try {
      const response = await axios.get(`${Server_URL}api/order/see`);
      const data = response.data;

      if (data.success) {
        setOrders(data.orders); // Update orders state
        toast.success("Orders fetched successfully.");
      } else {
        setError(data.message || "Failed to fetch orders.");
        toast.error(data.message || "Failed to fetch orders.");
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("An error occurred while fetching orders.");
      toast.error("An error occurred while fetching orders.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Update the status of an order
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.put(`${Server_URL}api/order/${orderId}`, {
        status: newStatus,
      });

      if (response.data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
        toast.success(`Order ${orderId} updated to ${newStatus}`);
      } else {
        toast.error(response.data.message || "Failed to update order status.");
      }
    } catch (err) {
      console.error("Error updating order status:", err);
      toast.error("An error occurred while updating order status.");
    }
  };

  // Delete an order
  const deleteOrder = async (orderId) => {
    try {
      const response = await axios.delete(`${Server_URL}api/order/${orderId}`);
      if (response.data.success) {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== orderId)
        );
        toast.success(response.data.message || "Order deleted successfully.");
      } else {
        toast.error(response.data.message || "Failed to delete order.");
      }
    } catch (err) {
      console.error("Error deleting order:", err);
      const errorMsg = err.response
        ? err.response.data.message
        : err.message;
      toast.error(errorMsg || "An error occurred while deleting the order.");
    }
  };

  // Fetch orders on component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>All Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <h3>Order ID: {order._id}</h3>
              <p>Total Amount: ${order.amount}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              <h4>Items:</h4>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    {item.title} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
              <h4>Address:</h4>
              <p>
                {order.address.firstName} {order.address.lastName},<br />
                {order.address.street}, {order.address.city},<br />
                {order.address.state}, {order.address.zip}
              </p>
              <div>
                <label htmlFor={`status-${order._id}`}>Status: </label>
                <select
                  id={`status-${order._id}`}
                  value={order.status}
                  onChange={(e) =>
                    updateOrderStatus(order._id, e.target.value)
                  }
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
              <button
                onClick={() =>
                  window.confirm(
                    `Are you sure you want to delete order ${order._id}?`
                  ) && deleteOrder(order._id)
                }
              >
                Delete Order
              </button>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersList;
