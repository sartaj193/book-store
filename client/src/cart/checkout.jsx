import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        "http://localhost:3001/api/cart/merge",
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
