/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const guestId = localStorage.getItem('guestId') || Date.now().toString();

  useEffect(() => {
    localStorage.setItem('guestId', guestId);
    fetchCart();
  }, [guestId]);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${Server_URL}api/cart/${guestId}`);
      setCartItems(response.data.items);
    } catch (error) {
      console.error('Error fetching cart:', error.message);
    }
  };

  const handleAddToCart = async (book) => {
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post(`${Server_URL}/api/cart/add`, payload);
      setCartItems(response.data.items);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart. Please try again.');
    }
  };

  const updateQuantity = async (bookId, change) => {
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
      setCartItems(response.data.items);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  return { cartItems, handleAddToCart, updateQuantity, guestId };
};
*/

/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const guestId = localStorage.getItem("guestId") || Date.now().toString();

  useEffect(() => {
    localStorage.setItem("guestId", guestId);
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    } else {
      fetchCart();
    }
  }, [guestId]);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${Server_URL}api/cart/${guestId}`);
      const items = response.data.items || [];
      setCartItems(items);
      localStorage.setItem("cartItems", JSON.stringify(items));
    } catch (error) {
      console.error("Error fetching cart:", error.message);
    }
  };

  const handleAddToCart = async (book) => {
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post(`${Server_URL}/api/cart/add`, payload);
      const items = response.data.items || [];
      setCartItems(items);
      localStorage.setItem("cartItems", JSON.stringify(items));
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };

  const updateQuantity = async (bookId, change) => {
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
      const items = response.data.items || [];
      setCartItems(items);
      localStorage.setItem("cartItems", JSON.stringify(items));
    } catch (error) {
      console.error("Error updating cart:", error.message);
    }
  };

  return { cartItems, handleAddToCart, updateQuantity, guestId, fetchCart };
};
*/
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const guestId = localStorage.getItem('guestId') || Date.now().toString();

  useEffect(() => {
    localStorage.setItem('guestId', guestId);
    fetchCart();
  }, [guestId]);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${Server_URL}api/cart/${guestId}`);
      setCartItems(response.data.items || []);
    } catch (error) {
      console.error('Error fetching cart:', error.message);
    }
  };

  const handleAddToCart = async (book) => {
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post(`${Server_URL}/api/cart/add`, payload);
      setCartItems(response.data.items || []);
    } catch (error) {
      console.error('Error adding to cart:', error.message);
    }
  };

  const updateQuantity = async (bookId, change) => {
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
      setCartItems(response.data.items || []);
    } catch (error) {
      console.error('Error updating cart:', error.message);
    }
  };

  return { cartItems, handleAddToCart, updateQuantity, guestId, fetchCart };
};*/
// partial working
/*import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const [loading, setLoading] = useState(false);
  const [guestId, setGuestId] = useState(localStorage.getItem('guestId') || Date.now().toString());

  useEffect(() => {
    localStorage.setItem('guestId', guestId);
  }, [guestId]);

  const fetchCart = useCallback(async (id = guestId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${Server_URL}api/cart/${id}`);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCart({ items: [], totalAmount: 0 });
    } finally {
      setLoading(false);
    }
  }, [guestId]);

  const addToCart = async (book) => {
    setLoading(true);
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post(`${Server_URL}/api/cart/add`, payload);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (bookId, change) => {
    setLoading(true);
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error updating cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (bookId) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${Server_URL}api/cart/remove/${guestId}/${bookId}`);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error removing item:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = () => {
    setCart({ items: [], totalAmount: 0 });
  };

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      loading,
      guestId,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      fetchCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

*/

/*import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const [loading, setLoading] = useState(false);
  const [guestId, setGuestId] = useState(localStorage.getItem('guestId') || Date.now().toString());

  useEffect(() => {
    localStorage.setItem('guestId', guestId);
    fetchCart();
  }, [guestId]);

  const fetchCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${Server_URL}api/cart/${guestId}`);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCart({ items: [], totalAmount: 0 });
    } finally {
      setLoading(false);
    }
  }, [guestId]);

  const addToCart = async (book) => {
    setLoading(true);
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post(`${Server_URL}api/cart/add`, payload);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (bookId, change) => {
    setLoading(true);
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error updating cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (bookId) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${Server_URL}api/cart/remove/${guestId}/${bookId}`);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error removing item:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setLoading(true);
    try {
      await axios.delete(`${Server_URL}api/cart/clear/${guestId}`);
      setCart({ items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error clearing cart:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{
      cart,
      loading,
      guestId,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      fetchCart
    }}>
      {children}
    </CartContext.Provider>
  );
};*/

/*import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const [loading, setLoading] = useState(false);
  const [guestId, setGuestId] = useState(localStorage.getItem('guestId') || Date.now().toString());

  const fetchCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${Server_URL}api/cart/${guestId}`);
      console.log("Fetched cart data:", response.data);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCart({ items: [], totalAmount: 0 });
    } finally {
      setLoading(false);
    }
  }, [guestId]);

  useEffect(() => {
    localStorage.setItem('guestId', guestId);
    fetchCart();
  }, [guestId, fetchCart]);

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (book) => {
    setLoading(true);
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post(`${Server_URL}api/cart/add`, payload);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (bookId, change) => {
    setLoading(true);
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error updating cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (bookId) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${Server_URL}api/cart/remove/${guestId}/${bookId}`);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error removing item:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setLoading(true);
    try {
      await axios.delete(`${Server_URL}api/cart/clear/${guestId}`);
      setCart({ items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error clearing cart:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{
      cart,
      loading,
      guestId,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      fetchCart
    }}>
      {children}
    </CartContext.Provider>
  );
};*/

/*import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const [loading, setLoading] = useState(false);
  const [guestId, setGuestId] = useState(localStorage.getItem('guestId') || Date.now().toString());

  const fetchCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${Server_URL}api/cart/${guestId}`);
      console.log("Fetched cart data:", response.data);
      if (response.data && Array.isArray(response.data.items)) {
        setCart(response.data);
      } else {
        console.error("Invalid cart data received:", response.data);
        setCart({ items: [], totalAmount: 0 });
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCart({ items: [], totalAmount: 0 });
    } finally {
      setLoading(false);
    }
  }, [guestId]);

  useEffect(() => {
    localStorage.setItem('guestId', guestId);
    fetchCart();
  }, [guestId, fetchCart]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  useEffect(() => {
    console.log("Current cart state in CartContext:", cart);
  }, [cart]);

  const addToCart = async (book) => {
    setLoading(true);
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post(`${Server_URL}api/cart/add`, payload);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (bookId, change) => {
    setLoading(true);
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error updating cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (bookId) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${Server_URL}api/cart/remove/${guestId}/${bookId}`);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error removing item:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setLoading(true);
    try {
      await axios.delete(`${Server_URL}api/cart/clear/${guestId}`);
      setCart({ items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error clearing cart:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{
      cart,
      loading,
      guestId,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      fetchCart
    }}>
      {children}
    </CartContext.Provider>
  );
};*/

import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const [loading, setLoading] = useState(false);
  const [guestId, setGuestId] = useState(localStorage.getItem('guestId') || Date.now().toString());

  const fetchCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${Server_URL}api/cart/${guestId}`);
      console.log("Fetched cart data:", response.data);
      if (response.data && Array.isArray(response.data.items)) {
        setCart(response.data);
      } else {
        console.error("Invalid cart data received:", response.data);
        setCart({ items: [], totalAmount: 0 });
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCart({ items: [], totalAmount: 0 });
    } finally {
      setLoading(false);
    }
  }, [guestId]);

  useEffect(() => {
    localStorage.setItem('guestId', guestId);
    fetchCart();
  }, [guestId, fetchCart]);

  useEffect(() => {
    console.log("Current cart state in CartContext:", cart);
  }, [cart]);

  const addToCart = async (book) => {
    setLoading(true);
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post(`${Server_URL}api/cart/add`, payload);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (bookId, change) => {
    setLoading(true);
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error updating cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (bookId) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${Server_URL}api/cart/remove/${guestId}/${bookId}`);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error removing item:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setLoading(true);
    try {
      await axios.delete(`${Server_URL}api/cart/clear/${guestId}`);
      setCart({ items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error clearing cart:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{
      cart,
      loading,
      guestId,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      fetchCart
    }}>
      {children}
    </CartContext.Provider>
  );
};








/*import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const guestId = localStorage.getItem('guestId') || Date.now().toString();

  useEffect(() => {
    localStorage.setItem('guestId', guestId);
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${Server_URL}api/cart/${guestId}`);
      setCartItems(response.data.items);
    } catch (error) {
      console.error('Error fetching cart:', error.message);
    }
  };

  const addToCart = async (book) => {
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post(`${Server_URL}/api/cart/add`, payload);
      setCartItems(response.data.items);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart. Please try again.');
    }
  };

  const updateQuantity = async (bookId, change) => {
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
      setCartItems(response.data.items);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      addToCart,
      updateQuantity,
      openCart,
      closeCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};*/

//cart provider
/*import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchCart = useCallback(async (id) => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await axios.get(`${Server_URL}api/cart/${id}`);
      if (res.data && Array.isArray(res.data.items)) {
        setCart(res.data.items);
        setTotalPrice(res.data.totalAmount);
      } else {
        setCart([]);
        setTotalPrice(0);
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
      setCart([]);
      setTotalPrice(0);
    } finally {
      setLoading(false);
    }
  }, []);

  const mergeCarts = useCallback(async (userId, guestId) => {
    if (!userId || !guestId) return;
    setLoading(true);
    try {
      const payload = { guestId, userId };
      const res = await axios.post(`${Server_URL}api/cart/merge`, payload);
      
      if (res.data.success) {
        setCart(res.data.cart.items);
        setTotalPrice(res.data.cart.totalAmount);
        localStorage.removeItem("guestId");
      }
    } catch (error) {
      console.error("Failed to merge carts:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addToCart = useCallback(async (item, userId, guestId) => {
    setLoading(true);
    try {
      const payload = {
        userId: userId,
        guestId: guestId,
        bookId: item._id,
        quantity: 1,
      };
      const res = await axios.post(`${Server_URL}api/cart/add`, payload);
      if (res.data.success) {
        setCart(res.data.cart.items);
        setTotalPrice(res.data.cart.totalAmount);
      }
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <CartContext.Provider value={{
      cart,
      totalPrice,
      loading,
      fetchCart,
      mergeCarts,
      addToCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};
*/






/*import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";
import { utilityFunctions } from "../utils/module";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get or generate cartId
  const getCartId = useCallback(() => {
    const token = utilityFunctions.getCookieValue("userToken");
    if (token) {
      const decodedToken = utilityFunctions.parseJwt(token);
      return decodedToken.userId; // Authenticated user's ID
    }

    let guestId = localStorage.getItem("guestId");
    if (!guestId) {
      guestId = `guest_${Date.now()}`;
      localStorage.setItem("guestId", guestId);
    }
    return guestId;
  }, []);

  // Fetch cart items
  const fetchCart = useCallback(async () => {
    setLoading(true);
    setError(null);
    const cartId = getCartId();
    console.log("Fetching cart with ID:", cartId); // Debugging log

    if (!cartId) {
      setError("No valid user or guest ID found.");
      setLoading(false);
      return;
    }

    try {
      const token = utilityFunctions.getCookieValue("userToken");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await axios.get(`${Server_URL}api/cart/${cartId}`, { headers });
      setCartItems(response.data.items || []);
    } catch (err) {
      console.error("Error fetching cart:", err.message);
      setError("Failed to load cart. Please try again.");
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  }, [getCartId]);

  // Add item to cart
  const handleAddToCart = async (book) => {
    const cartId = getCartId();
    console.log("Adding item to cart with ID:", cartId); // Debugging log

    if (!cartId) {
      setError("No valid cart ID to add item.");
      return;
    }

    try {
      const token = utilityFunctions.getCookieValue("userToken");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const payload = {
        cartId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post(`${Server_URL}api/cart/add`, payload, { headers });
      setCartItems(response.data.items || []);
    } catch (err) {
      console.error("Error adding to cart:", err.message);
      setError("Failed to add to cart. Please try again.");
    }
  };

  // Update item quantity
  const updateQuantity = async (bookId, change) => {
    const cartId = getCartId();
    console.log("Updating cart item with ID:", cartId); // Debugging log

    if (!cartId) {
      setError("No valid cart ID to update item.");
      return;
    }

    try {
      const token = utilityFunctions.getCookieValue("userToken");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${cartId}`, payload, { headers });
      setCartItems(response.data.items || []);
    } catch (err) {
      console.error("Error updating cart:", err.message);
      setError("Failed to update cart. Please try again.");
    }
  };

  // Initialize cart on load
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return { cartItems, handleAddToCart, updateQuantity, loading, error, fetchCart };
};
*/



/*import { useState, useEffect, useCallback } from "react";
import { utilityFunctions } from "../utils/module";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to get or generate cart ID
  const getCartId = useCallback(() => {
    const token = utilityFunctions.getCookieValue("userToken");
    if (token) {
      const decodedToken = utilityFunctions.parseJwt(token);
      return decodedToken.userId; // Authenticated user's ID
    }

    let guestId = localStorage.getItem("guestId");
    if (!guestId) {
      guestId = `guest_${Date.now()}`;
      localStorage.setItem("guestId", guestId);
    }
    return guestId;
  }, []);

  // Fetch cart items (placeholder functionality)
  useEffect(() => {
    const cartId = getCartId();
    console.log(`Cart initialized with ID: ${cartId}`); // Debugging log
    // Add logic here to fetch cart items if needed
  }, [getCartId]);

  return { cartItems, getCartId };
};
*/


/*import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { utilityFunctions } from "../utils/module";
import { Server_URL } from "../utils/config";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]); // Cart items state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to get or generate cart ID
  const getCartId = useCallback(() => {
    const token = utilityFunctions.getCookieValue("userToken");
    if (token) {
      const decodedToken = utilityFunctions.parseJwt(token);
      return decodedToken.userId; // Authenticated user's ID
    }

    let guestId = localStorage.getItem("guestId");
    if (!guestId) {
      guestId = `guest_${Date.now()}`;
      localStorage.setItem("guestId", guestId);
    }
    return guestId;
  }, []);

  // Fetch cart items from the server
  const fetchCart = useCallback(async () => {
    const cartId = getCartId();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${Server_URL}api/cart/${cartId}`);
      setCartItems(response.data.items || []); // Update cart items
    } catch (err) {
      console.error("Error fetching cart:", err.message);
      setError("Failed to load cart.");
      setCartItems([]); // Reset cart items on error
    } finally {
      setLoading(false);
    }
  }, [getCartId]);

  // Add item to the cart
  const handleAddToCart = async (item) => {
    const cartId = getCartId();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${Server_URL}api/cart/add`, {
        cartId,
        bookId: item.bookId,
        title: item.title,
        image: item.image || "https://via.placeholder.com/150",
        price: item.price,
        quantity: 1,
      });
      setCartItems(response.data.items || []); // Immediately update cart items
    } catch (err) {
      console.error("Error adding item to cart:", err.message);
      setError("Failed to add item to cart.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart(); // Fetch cart items on mount
  }, [fetchCart]);

  return {
    cartItems,
    handleAddToCart,
    fetchCart,
    getCartId, // Explicitly expose getCartId
    loading,
    error,
  };
};
*/



/*import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { utilityFunctions } from "../utils/module";
import { Server_URL } from "../utils/config";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to get or generate cart ID
  const getCartId = useCallback(() => {
    const token = utilityFunctions.getCookieValue("userToken");
    if (token) {
      const decodedToken = utilityFunctions.parseJwt(token);
      return decodedToken.userId; // Authenticated user's ID
    }

    let guestId = localStorage.getItem("guestId");
    if (!guestId) {
      guestId = `guest_${Date.now()}`;
      localStorage.setItem("guestId", guestId);
    }
    return guestId;
  }, []);

  // Fetch cart items from the server
  const fetchCart = useCallback(async () => {
    const cartId = getCartId();
    setLoading(true);
    setError(null);

    try {
      console.log(`Fetching cart for ID: ${cartId}`);
      const response = await axios.get(`${Server_URL}api/cart/${cartId}`);
      console.log("Fetched cart data:", response.data); // Debugging log
      setCartItems(response.data.items || []); // Update cart items
    } catch (err) {
      console.error("Error fetching cart:", err.message);
      setError("Failed to load cart.");
      setCartItems([]); // Reset cart items on error
    } finally {
      setLoading(false);
    }
  }, [getCartId]);

  // Add item to the cart
  const handleAddToCart = async (item) => {
    const cartId = getCartId();
    setLoading(true);
    setError(null);

    try {
      console.log("Adding item to cart:", item);
      const response = await axios.post(`${Server_URL}api/cart/add`, {
        cartId,
        bookId: item.bookId,
        title: item.title,
        image: item.image || "https://via.placeholder.com/150",
        price: item.price,
        quantity: 1,
      });

      console.log("Item added successfully. Updated cart:", response.data);
      setCartItems(response.data.items || []); // Immediately update cart items
    } catch (err) {
      console.error("Error adding item to cart:", err.message);
      setError("Failed to add item to cart.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart(); // Fetch cart items on mount
  }, [fetchCart]);

  return {
    cartItems,
    handleAddToCart,
    fetchCart,
    getCartId, // Explicitly return getCartId
    loading,
    error,
  };
};
*/



/*import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';
import { utilityFunctions } from '../utils/module';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCartId = useCallback(() => {
    const token = utilityFunctions.getCookieValue("userToken");
    if (token) {
      const decodedToken = utilityFunctions.parseJwt(token);
      return decodedToken.userId;
    }
    let guestId = localStorage.getItem("guestId");
    if (!guestId) {
      guestId = `guest_${Date.now()}`;
      localStorage.setItem("guestId", guestId);
    }
    return guestId;
  }, []);

  const fetchCart = useCallback(async () => {
    const cartId = getCartId();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${Server_URL}api/cart/${cartId}`);
      console.log("Fetched cart data:", response.data);
      setCartItems(response.data.items || []);
    } catch (err) {
      console.error("Error fetching cart:", err.message);
      setError("Failed to load cart.");
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  }, [getCartId]);

  const addToCart = useCallback(async (item) => {
    const cartId = getCartId();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${Server_URL}api/cart/add`, {
        cartId,
        bookId: item._id,
        title: item.name,
        image: item.images?.[0] || "https://via.placeholder.com/150",
        price: item.price,
        quantity: 1,
      });

      console.log("Added item to cart:", response.data);
      setCartItems(response.data.items || []);
      toast.success("Item added to cart successfully!");
    } catch (err) {
      console.error("Error adding item to cart:", err.message);
      setError("Failed to add item to cart.");
      toast.error("Failed to add item to cart. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [getCartId]);

  const updateQuantity = useCallback(async (bookId, change) => {
    const cartId = getCartId();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(`${Server_URL}api/cart/update/${cartId}`, {
        bookId,
        quantityChange: change,
      });
      console.log("Updated cart:", response.data);
      setCartItems(response.data.items || []);
    } catch (err) {
      console.error("Error updating quantity:", err.message);
      setError("Failed to update quantity.");
      toast.error("Failed to update quantity. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [getCartId]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const value = {
    cartItems,
    loading,
    error,
    addToCart,
    updateQuantity,
    fetchCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};*/

/*import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Retrieve or generate guestId
  const [guestId, setGuestId] = useState(() => {
    let id = localStorage.getItem("guestId");
    if (!id) {
      id = Date.now().toString();
      localStorage.setItem("guestId", id);
    }
    return id;
  });

  // Fetch the cart data based on guestId
  const fetchCart = useCallback(async () => {
    if (!guestId) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${Server_URL}api/cart/${guestId}`);
      if (response.data && Array.isArray(response.data.items)) {
        setCartItems(response.data.items);
        setTotalAmount(response.data.totalAmount || 0);
      } else {
        setCartItems([]);
        setTotalAmount(0);
      }
    } catch (err) {
      setError(err.message || "Failed to fetch cart data.");
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  }, [guestId]);

  // Add an item to the cart
  const handleAddToCart = useCallback(
    async (book) => {
      try {
        const payload = {
          guestId,
          bookId: book._id,
          title: book.name,
          image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
          price: book.price,
        };
        const response = await axios.post(`${Server_URL}/api/cart/add`, payload);
        setCartItems(response.data.items);
        setTotalAmount(response.data.totalAmount || 0);
      } catch (error) {
        console.error("Error adding to cart:", error);
        setError("Failed to add to cart. Please try again.");
      }
    },
    [guestId]
  );

  // Update the quantity of an item in the cart
  const updateQuantity = useCallback(
    async (bookId, change) => {
      try {
        const payload = { bookId, quantityChange: change };
        const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
        setCartItems(response.data.items);
        setTotalAmount(response.data.totalAmount || 0);
      } catch (error) {
        console.error("Error updating cart:", error);
        setError("Failed to update cart. Please try again.");
      }
    },
    [guestId]
  );

  // Clear the cart
  const clearCart = useCallback(() => {
    setCartItems([]);
    setTotalAmount(0);
  }, []);

  // Automatically fetch the cart when the hook is initialized
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return {
    cartItems,
    totalAmount,
    loading,
    error,
    fetchCart,
    handleAddToCart,
    updateQuantity,
    clearCart,
    guestId,
  };
};*/



/*import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";
import { utilityFunctions } from "../utils/module";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCartId = useCallback(() => {
    const token = utilityFunctions.getCookieValue("userToken");
    if (token) {
      const decodedToken = utilityFunctions.parseJwt(token);
      return decodedToken.userId;
    }
    let guestId = localStorage.getItem("guestId");
    if (!guestId) {
      guestId = Date.now().toString();
      localStorage.setItem("guestId", guestId);
    }
    return guestId;
  }, []);

  const fetchCart = useCallback(async () => {
    const cartId = getCartId();
    if (!cartId) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${Server_URL}api/cart/${cartId}`);
      if (response.data && Array.isArray(response.data.items)) {
        setCartItems(response.data.items);
        setTotalAmount(response.data.totalAmount || 0);
      } else {
        setCartItems([]);
        setTotalAmount(0);
      }
    } catch (err) {
      setError(err.message || "Failed to fetch cart data.");
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  }, [getCartId]);

  const handleAddToCart = useCallback(async (book) => {
    const cartId = getCartId();
    try {
      const payload = {
        cartId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post(`${Server_URL}/api/cart/add`, payload);
      setCartItems(response.data.items);
      setTotalAmount(response.data.totalAmount || 0);
    } catch (error) {
      console.error("Error adding to cart:", error);
      setError("Failed to add to cart. Please try again.");
    }
  }, [getCartId]);

  const updateQuantity = useCallback(async (bookId, change) => {
    const cartId = getCartId();
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${cartId}`, payload);
      setCartItems(response.data.items);
      setTotalAmount(response.data.totalAmount || 0);
    } catch (error) {
      console.error("Error updating cart:", error);
      setError("Failed to update cart. Please try again.");
    }
  }, [getCartId]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    setTotalAmount(0);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return {
    cartItems,
    totalAmount,
    loading,
    error,
    fetchCart,
    handleAddToCart,
    updateQuantity,
    clearCart,
    getCartId,
  };
};*/


