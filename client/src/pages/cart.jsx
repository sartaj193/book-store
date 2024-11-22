/*import React from 'react';
import { useCart } from '../context/cartcontext';
import './cart.styles.scss'; // Adjust this to your actual styles file

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price with checks for valid price and quantity
  const totalAmount = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0; // Convert to float, fallback to 0
    const quantity = parseInt(item.quantity, 10) || 1; // Convert to int, fallback to 1
    return acc + (price * quantity);
  }, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.title} className="product-image" />
                <span>
                  {item.title} - ₹{item.price} x {item.quantity} = ₹{(parseFloat(item.price) || 0) * (parseInt(item.quantity, 10) || 1)}
                </span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <h2>Total: ₹{totalAmount.toFixed(2)}</h2> 
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;*/


/*import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import { useCart } from '../context/cartcontext';
import './cart.styles.scss'; // Adjust this to your actual styles file

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  // Calculate total price with checks for valid price and quantity
  const totalAmount = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0; // Convert to float, fallback to 0
    const quantity = parseInt(item.quantity, 10) || 1; // Convert to int, fallback to 1
    return acc + (price * quantity);
  }, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start adding items!</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.title} className="product-image" />
                <div className="item-details">
                  <span>
                    {item.title} - ₹{item.price} x {item.quantity} = ₹{(parseFloat(item.price) || 0) * (parseInt(item.quantity, 10) || 1)}
                  </span>
                  <div className="quantity-control">
                    <button 
                      className="quantity-btn" 
                      onClick={() => decreaseQuantity(item.id)} 
                      aria-label={`Decrease quantity of ${item.title}`}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => increaseQuantity(item.id)} 
                      aria-label={`Increase quantity of ${item.title}`}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-button" 
                  onClick={() => removeFromCart(item.id)} 
                  aria-label={`Remove ${item.title} from cart`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <h2>Total: ₹{totalAmount.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

// Adding PropTypes for better type checking
CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CartPage;*/




  



                                




  /*import React from "react";
import { useCart } from "../context/cartcontext"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
import "./cart.styles.scss";

const CartPage = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  // Function to handle checkout
  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to checkout
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => {
            const price = parseFloat(item.price);
            return (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ₹{isNaN(price) ? "Invalid price" : price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch({ type: "DECREMENT_QUANTITY", payload: item.id })}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch({ type: "INCREMENT_QUANTITY", payload: item.id })}
                    >
                      +
                    </button>
                  </div>
                  <p>Total: ₹{isNaN(price) ? "Invalid total" : (price * item.quantity).toFixed(2)}</p>
                  <button
                    className="remove-button"
                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>

      {cartItems.length > 0 && (
        <button className="clear-cart" onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear Cart
        </button>
      )}

      {cartItems.length > 0 && (
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default CartPage;*/

/*import React from "react";
import { useCart } from "../context/cartcontext"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
import "./cart.styles.scss";

const CartPage = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  // Function to handle checkout
  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to checkout
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => {
            const price = parseFloat(item.price);
            return (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ₹{isNaN(price) ? "Invalid price" : price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch({ type: "DECREMENT_QUANTITY", payload: { id: item.id, userId: item.userId } })}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch({ type: "INCREMENT_QUANTITY", payload: { id: item.id, userId: item.userId } })}
                    >
                      +
                    </button>
                  </div>
                  <p>Total: ₹{isNaN(price) ? "Invalid total" : (price * item.quantity).toFixed(2)}</p>
                  <button
                    className="remove-button"
                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: { id: item.id, userId: item.userId } })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>

      {cartItems.length > 0 && (
        <button className="clear-cart" onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear Cart
        </button>
      )}

      {cartItems.length > 0 && (
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default CartPage;*/


/*import React from "react";
import { useCart } from "../context/cartcontext"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext"; // Import your auth context
import "./cart.styles.scss";

const CartPage = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;
  const { userId } = useAuth(); // Get user ID from auth context
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to checkout
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => {
            const price = parseFloat(item.price);
            return (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ₹{isNaN(price) ? "Invalid price" : price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch({ type: "DECREMENT_QUANTITY", payload: { id: item.id, userId } })}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch({ type: "INCREMENT_QUANTITY", payload: { id: item.id, userId } })}
                    >
                      +
                    </button>
                  </div>
                  <p>Total: ₹{isNaN(price) ? "Invalid total" : (price * item.quantity).toFixed(2)}</p>
                  <button
                    className="remove-button"
                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: { id: item.id, userId } })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>

      {cartItems.length > 0 && (
        <button className="clear-cart" onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear Cart
        </button>
      )}

      {cartItems.length > 0 && (
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default CartPage;
*/



import React from "react";
import { useCart } from "../context/cartcontext"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext"; // Import your auth context
import "./cart.styles.scss";

const CartPage = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;
  const { user } = useAuth(); // Ensure `user` is defined
  const userId = user?.id || "guest"; // Fallback if user is not logged in
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  const handleCheckout = () => {
    if (!userId || userId === "guest") {
      alert("Please log in to proceed to checkout.");
      return;
    }
    navigate("/checkout"); // Navigate to checkout
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => {
            const price = parseFloat(item.price);
            return (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ₹{isNaN(price) ? "Invalid price" : price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        dispatch({
                          type: "DECREMENT_QUANTITY",
                          payload: { id: item.id, userId },
                        })
                      }
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        dispatch({
                          type: "INCREMENT_QUANTITY",
                          payload: { id: item.id, userId },
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                  <p>Total: ₹{isNaN(price) ? "Invalid total" : (price * item.quantity).toFixed(2)}</p>
                  <button
                    className="remove-button"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: { id: item.id, userId },
                      })
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>

      {cartItems.length > 0 && (
        <button className="clear-cart" onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear Cart
        </button>
      )}

      {cartItems.length > 0 && (
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default CartPage;
