/*import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { utilityFunctions } from "../utils/module";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const token = utilityFunctions.getCookieValue("userToken");
  const userId = token ? utilityFunctions.parseJwt(token).userId : null;
  const guestId = localStorage.getItem("guestId") || Date.now().toString();

  useEffect(() => {
    fetchCart();
  }, [userId]);

  const fetchCart = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/cart/${userId || guestId}`
      );
      setCart(response.data.items);
      setTotalAmount(response.data.totalAmount);
    } catch (error) {
      console.error("Error fetching cart:", error);
      toast.error("Failed to fetch cart");
    }
  };

  const addToCart = async (item) => {
    try {
      const response = await axios.post("http://localhost:3001/api/cart/add", {
        userId,
        guestId: userId ? undefined : guestId,
        ...item,
      });
      setCart(response.data.items);
      setTotalAmount(response.data.totalAmount);
      toast.success("Item added to cart");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error("Failed to add item to cart");
    }
  };

  const updateCartItem = async (bookId, quantity) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/cart/update",
        {
          cartId: userId || guestId,
          bookId,
          quantity,
        }
      );
      setCart(response.data.items);
      setTotalAmount(response.data.totalAmount);
    } catch (error) {
      console.error("Error updating cart item:", error);
      toast.error("Failed to update cart item");
    }
  };

  const mergeCart = async () => {
    if (!userId || !localStorage.getItem("guestId")) return;

    try {
      const response = await axios.post(
        "http://localhost:3001/api/cart/merge",
        {
          guestId: localStorage.getItem("guestId"),
          userId,
        }
      );
      setCart(response.data.cart.items);
      setTotalAmount(response.data.cart.totalAmount);
      localStorage.removeItem("guestId");
      toast.success("Carts merged successfully");
    } catch (error) {
      console.error("Error merging carts:", error);
      toast.error("Failed to merge carts");
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotalAmount(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalAmount,
        addToCart,
        updateCartItem,
        mergeCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);*/

/*import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const guestId = localStorage.getItem("guestId") || Date.now().toString();
  const userId = localStorage.getItem("userId"); // Assuming userId is stored when logged in

  // Fetch cart for the logged-in user or guest
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get(
        userId
          ? `http://localhost:3001/api/cart/user/${userId}`
          : `http://localhost:3001/api/cart/guest/${guestId}`
      );
      setCart(response.data.items || []);
      setTotalAmount(response.data.totalAmount || 0);
    } catch (error) {
      console.error("Error fetching cart:", error);
      toast.error("Failed to fetch cart");
    }
  };

  // Add item to cart
  const addToCart = async (item) => {
    try {
      const response = await axios.post("http://localhost:3001/api/cart/add", {
        userId: userId || undefined,
        guestId: guestId || undefined,
        bookId: item.bookId,
        quantity: item.quantity,
      });
      setCart(response.data.items || []);
      setTotalAmount(response.data.totalAmount || 0);
      toast.success("Item added to cart");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error("Failed to add item to cart");
    }
  };

  // Merge guest cart with user cart after login
  const mergeCart = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/cart/merge",
        {
          userId,
          guestId,
        }
      );
      setCart(response.data.items || []);
      setTotalAmount(response.data.totalAmount || 0);
      toast.success("Cart merged successfully");
    } catch (error) {
      console.error("Error merging cart:", error);
      toast.error("Failed to merge cart");
    }
  };

  // Update quantity of an item in the cart
  const updateCartItem = async (item) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/cart/update",
        {
          userId: userId || undefined,
          guestId: guestId || undefined,
          bookId: item.bookId,
          quantity: item.quantity,
        }
      );
      setCart(response.data.items || []);
      setTotalAmount(response.data.totalAmount || 0);
      toast.success("Cart updated successfully");
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.error("Failed to update cart");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, totalAmount, addToCart, mergeCart, updateCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);*/

import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const guestId = localStorage.getItem("guestId") || Date.now().toString();
  const userId = localStorage.getItem("userId"); // Assuming userId is stored when logged in

  // Fetch cart for the logged-in user or guest
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get(
        userId
          ? `http://localhost:3001/api/cart/user/${userId}`
          : `http://localhost:3001/api/cart/guest/${guestId}`
      );
      setCart(response.data.items || []);
      setTotalAmount(response.data.totalAmount || 0);
    } catch (error) {
      console.error("Error fetching cart:", error);
      toast.error("Failed to fetch cart");
    }
  };

  // Add item to cart
  const addToCart = async (item) => {
    try {
      const response = await axios.post("http://localhost:3001/api/cart/add", {
        userId: userId || undefined,
        guestId: userId ? undefined : guestId,
        bookId: item.bookId,
        quantity: item.quantity,
      });
      setCart(response.data.items || []);
      setTotalAmount(response.data.totalAmount || 0);
      toast.success("Item added to cart");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error("Failed to add item to cart");
      throw error; // Re-throw the error so it can be caught in the component
    }
  };

  // Merge guest cart with user cart after login
  const mergeCart = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/cart/merge",
        {
          userId,
          guestId,
        }
      );
      setCart(response.data.items || []);
      setTotalAmount(response.data.totalAmount || 0);
      toast.success("Cart merged successfully");
    } catch (error) {
      console.error("Error merging cart:", error);
      toast.error("Failed to merge cart");
    }
  };

  // Update quantity of an item in the cart
  const updateCartItem = async (bookId, quantity) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/cart/update",
        {
          userId: userId || undefined,
          guestId: userId ? undefined : guestId,
          bookId,
          quantity,
        }
      );
      setCart(response.data.items || []);
      setTotalAmount(response.data.totalAmount || 0);
      toast.success("Cart updated successfully");
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.error("Failed to update cart");
      throw error; // Re-throw the error so it can be caught in the component
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, totalAmount, addToCart, mergeCart, updateCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
