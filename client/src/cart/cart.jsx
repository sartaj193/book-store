/*mport React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CartD = ({ guestId }) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/cart/${guestId}`);
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, [guestId]);

  const updateQuantity = async (bookId, change) => {
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`http://localhost:3001/api/cart/update/${guestId}`, payload);
      setCart(response.data);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>
      {cart.items.map((item) => (
        <div key={item.bookId} style={styles.item}>
          <img src={item.image} alt={item.title} style={styles.image} />
          <div>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <div style={styles.controls}>
              <button onClick={() => updateQuantity(item.bookId, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.bookId, 1)}>+</button>
            </div>
          </div>
        </div>
      ))}
      <h3>Total: ${cart.totalAmount}</h3>
      <button style={styles.checkoutButton} onClick={() => navigate('/checkout')}>Checkout</button>
    </div>
  );
};

const styles = {
  container: { padding: '20px' },
  item: { display: 'flex', alignItems: 'center', marginBottom: '15px' },
  image: { width: '50px', height: '50px', marginRight: '10px', borderRadius: '5px' },
  controls: { display: 'flex', alignItems: 'center', gap: '5px' },
  checkoutButton: { backgroundColor: '#28A745', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px' },
};

export default CartD;*/

/*import React from 'react';
import { X, Minus, Plus } from 'lucide-react';

const CartPage = ({ isOpen, onClose, cartItems, updateQuantity, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      maxWidth: '400px',
      backgroundColor: 'white',
      boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
      zIndex: 1000,
      padding: '20px',
      overflowY: 'auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Your Cart</h2>
        <button 
          onClick={onClose}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div 
              key={item._id}
              style={{
                display: 'flex',
                padding: '10px',
                borderBottom: '1px solid #eee',
                marginBottom: '10px'
              }}
            >
              <img
                src={item.images?.[0] ? `http://localhost:3001/uploads/images/${item.images[0]}` : "https://via.placeholder.com/100x150.png?text=No+Image"}
                alt={item.name}
                style={{ width: '80px', height: '120px', objectFit: 'cover', marginRight: '15px' }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>{item.name}</h3>
                <p style={{ color: '#666', marginBottom: '5px' }}>₹{item.price}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => updateQuantity(item._id, Math.max(0, item.quantity - 1))}
                    style={{
                      background: '#f0f0f0',
                      border: 'none',
                      borderRadius: '50%',
                      padding: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    style={{
                      background: '#f0f0f0',
                      border: 'none',
                      borderRadius: '50%',
                      padding: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#ff4444'
                }}
              >
                <X size={20} />
              </button>
            </div>
          ))}
          
          <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Subtotal:</span>
              <span>₹{total}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span>Delivery:</span>
              <span>{total >= 499 ? 'Free' : '₹50'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
              <span>Total:</span>
              <span>₹{total >= 499 ? total : total + 50}</span>
            </div>
            <button
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#FF9933',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                marginTop: '20px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;*/



//rr
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
import { baseUrl } from '../utils/config';
=======
//import { baseUrl } from '../utils/config';
import { Server_URL } from '../utils/config';
>>>>>>> e6a9c0b (first commit)
const CartD = ({ guestId }) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get(`${baseUrl}/api/cart/${guestId}`);
=======
        const response = await axios.get(`${Server_URL}api/cart/${guestId}`);
>>>>>>> e6a9c0b (first commit)
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, [guestId]);

  const updateQuantity = async (bookId, change) => {
    try {
      const payload = { bookId, quantityChange: change };
<<<<<<< HEAD
      const response = await axios.put(`${baseUrl}/api/cart/update/${guestId}`, payload);
=======
      const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
>>>>>>> e6a9c0b (first commit)
      setCart(response.data);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

 const removeItem = async (bookId,userId) => {
  const id = userId || guestId; // Use userId if logged in, otherwise guestId
  console.log("Removing item with ID:", id, "and Book ID:", bookId); // Debugging

  try {
<<<<<<< HEAD
    const response = await axios.delete(`${baseUrl}//api/cart/remove/${id}/${bookId}`);
=======
    const response = await axios.delete(`${Server_URL}api/cart/remove/${id}/${bookId}`);
>>>>>>> e6a9c0b (first commit)
    setCart(response.data); // Update cart state after removing the item
  } catch (error) {
    console.error("Error removing item:", error);
  }
};





  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Your Cart</h2>
      {cart.items.length > 0 ? (
        cart.items.map((item) => (
          <div key={item.bookId} style={styles.item}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <div style={styles.details}>
              <h4 style={styles.title}>{item.title}</h4>
              <p style={styles.price}>₹{item.price}</p>
              <div style={styles.controls}>
                <button style={styles.quantityButton} onClick={() => updateQuantity(item.bookId, -1)}>
                  -
                </button>
                <span style={styles.quantity}>{item.quantity}</span>
                <button style={styles.quantityButton} onClick={() => updateQuantity(item.bookId, 1)}>
                  +
                </button>
                <button style={styles.removeButton} onClick={() => removeItem(item.bookId)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p style={styles.emptyMessage}>Your cart is empty.</p>
      )}
      <h3 style={styles.total}>Total: ₹{cart.totalAmount}</h3>
      {cart.items.length > 0 && (
        <button style={styles.checkoutButton} onClick={() => navigate('/ciu')}>
          Checkout
        </button>
      )}
    </div>
  );
};

const styles = {
  container: { padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' },
  header: { fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' },
  item: { display: 'flex', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' },
  image: { width: '80px', height: '100px', objectFit: 'cover', borderRadius: '5px', marginRight: '20px' },
  details: { flex: 1 },
  title: { fontSize: '18px', fontWeight: 'bold', marginBottom: '5px', color: '#333' },
  price: { fontSize: '16px', fontWeight: 'bold', color: '#28A745', marginBottom: '10px' },
  controls: { display: 'flex', alignItems: 'center', gap: '10px' },
  quantityButton: {
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  quantity: { fontSize: '16px', fontWeight: 'bold' },
  removeButton: {
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#DC3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  total: { fontSize: '20px', fontWeight: 'bold', marginTop: '20px', textAlign: 'center' },
  checkoutButton: {
    backgroundColor: '#28A745',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'block',
    margin: '20px auto',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  emptyMessage: { fontSize: '16px', color: '#555', textAlign: 'center', marginTop: '20px' },
};

export default CartD;*/

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Server_URL } from '../utils/config';

const CartD = ({ guestId, onClose }) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/cart/${guestId}`);
        setCart(response.data || { items: [], totalAmount: 0 });
      } catch (error) {
        console.error('Error fetching cart:', error.message);
      }
    };
    fetchCart();
  }, [guestId]);

  const updateQuantity = async (bookId, change) => {
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}api/cart/update/${guestId}`, payload);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error updating cart:', error.message);
    }
  };

  const removeItem = async (bookId) => {
    try {
      const response = await axios.delete(`${Server_URL}api/cart/remove/${guestId}/${bookId}`);
      setCart(response.data || { items: [], totalAmount: 0 });
    } catch (error) {
      console.error('Error removing item:', error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Your Cart</h2>
      {cart.items.length > 0 ? (
        cart.items.map((item) => (
          <div key={item.bookId} style={styles.item}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <div style={styles.details}>
              <h4 style={styles.title}>{item.title}</h4>
              <p style={styles.price}>₹{item.price}</p>
              <div style={styles.controls}>
                <button style={styles.quantityButton} onClick={() => updateQuantity(item.bookId, -1)}>
                  -
                </button>
                <span style={styles.quantity}>{item.quantity}</span>
                <button style={styles.quantityButton} onClick={() => updateQuantity(item.bookId, 1)}>
                  +
                </button>
                <button style={styles.removeButton} onClick={() => removeItem(item.bookId)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p style={styles.emptyMessage}>Your cart is empty.</p>
      )}
      <h3 style={styles.total}>Total: ₹{cart.totalAmount}</h3>
      {cart.items.length > 0 && (
        <button style={styles.checkoutButton} onClick={() => navigate('/ciu')}>
          Proceed to Checkout
        </button>
      )}
      <button style={styles.closeButton} onClick={onClose}>
        Close Cart
      </button>
    </div>
  );
};

const styles = {
  container: { padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' },
  header: { fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' },
  item: { display: 'flex', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' },
  image: { width: '80px', height: '100px', objectFit: 'cover', marginRight: '20px' },
  details: { flex: 1 },
  title: { fontSize: '18px', fontWeight: 'bold', color: '#333' },
  price: { fontSize: '16px', color: '#28A745' },
  controls: { display: 'flex', alignItems: 'center', gap: '10px' },
  quantityButton: { padding: '5px', fontSize: '14px', cursor: 'pointer', backgroundColor: '#007BFF', color: 'white', borderRadius: '5px' },
  removeButton: { padding: '5px', fontSize: '14px', cursor: 'pointer', backgroundColor: '#DC3545', color: 'white', borderRadius: '5px' },
  total: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center' },
  checkoutButton: { marginTop: '20px', padding: '10px 20px', backgroundColor: '#28A745', color: 'white', cursor: 'pointer', borderRadius: '5px' },
  closeButton: { marginTop: '10px', padding: '10px', cursor: 'pointer', backgroundColor: '#DC3545', color: 'white', borderRadius: '5px' },
  emptyMessage: { fontSize: '16px', textAlign: 'center', color: '#555' },
};

export default CartD;*/

// partial working
/*import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../finalApperence/Cartlogic';
const CartD = ({ onClose }) => {
  const { cart, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                  <div className="ml-3 h-7 flex items-center">
                    <button onClick={onClose} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cart.items.map((item) => (
                        <li key={item.bookId} className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-full object-center object-cover" />
                          </div>

                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{item.title}</h3>
                                <p className="ml-4">₹{item.price}</p>
                              </div>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <div className="flex items-center">
                                <button onClick={() => updateQuantity(item.bookId, -1)} className="font-medium text-indigo-600 hover:text-indigo-500">-</button>
                                <p className="mx-2 text-gray-500">Qty {item.quantity}</p>
                                <button onClick={() => updateQuantity(item.bookId, 1)} className="font-medium text-indigo-600 hover:text-indigo-500">+</button>
                              </div>
                              <div className="flex">
                                <button onClick={() => removeItem(item.bookId)} className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>₹{cart.totalAmount.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      onClose();
                      navigate('/ciu');
                    }}
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Checkout
                  </button>
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{' '}
                    <button
                      type="button"
                      className="text-indigo-600 font-medium hover:text-indigo-500"
                      onClick={onClose}
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartD;*/
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../finalApperence/Cartlogic';
const CartD = ({ onClose }) => {
  const { cart, updateQuantity, removeItem, fetchCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                  <div className="ml-3 h-7 flex items-center">
                    <button onClick={onClose} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cart.items && cart.items.length > 0 ? (
                        cart.items.map((item) => (
                          <li key={item.bookId} className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                              <img src={item.image} alt={item.title} className="w-full h-full object-center object-cover" />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{item.title}</h3>
                                  <p className="ml-4">₹{item.price}</p>
                                </div>
                              </div>
                              <div className="flex-1 flex items-end justify-between text-sm">
                                <div className="flex items-center">
                                  <button onClick={() => updateQuantity(item.bookId, -1)} className="font-medium text-indigo-600 hover:text-indigo-500">-</button>
                                  <p className="mx-2 text-gray-500">Qty {item.quantity}</p>
                                  <button onClick={() => updateQuantity(item.bookId, 1)} className="font-medium text-indigo-600 hover:text-indigo-500">+</button>
                                </div>
                                <div className="flex">
                                  <button onClick={() => removeItem(item.bookId)} className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))
                      ) : (
                        <li className="py-6">
                          <p className="text-center text-gray-500">Your cart is empty</p>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>₹{cart.totalAmount ? cart.totalAmount.toFixed(2) : '0.00'}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      onClose();
                      navigate('/ciu');
                    }}
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={!cart.items || cart.items.length === 0}
                  >
                    Checkout
                  </button>
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{' '}
                    <button
                      type="button"
                      className="text-indigo-600 font-medium hover:text-indigo-500"
                      onClick={onClose}
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartD;






/*import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../finalApperence/Cartlogic';
const CartD = () => {
  const { cartItems, updateQuantity, closeCart, isCartOpen } = useCart();
 const navigate = useNavigate();
  if (!isCartOpen) return null;

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full overflow-y-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button 
              onClick={closeCart}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.bookId} className="flex items-center mb-4 pb-4 border-b">
                  <img src={item.image} alt={item.title} className="w-16 h-24 object-cover mr-4" />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => updateQuantity(item.bookId, -1)}
                        className="bg-gray-200 px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.bookId, 1)}
                        className="bg-gray-200 px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <p className="text-xl font-bold">Total: ₹{totalAmount.toFixed(2)}</p>
                <button className="w-full bg-orange-500 text-white py-2 rounded mt-4 hover:bg-orange-600" onClick={() => navigate('/ciu')}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartD;*/





//wprkiong




/*import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../finalApperence/Cartlogic";
const CartD = () => {
  const { cartItems, totalAmount, loading, error, fetchCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  if (loading) {
    return <div style={styles.loading}>Loading cart...</div>;
  }

  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.bookId} style={styles.item}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <div style={styles.details}>
              <h4 style={styles.title}>{item.title}</h4>
              <p style={styles.price}>₹{item.price}</p>
              <div style={styles.controls}>
                <button
                  style={styles.quantityButton}
                  onClick={() => updateQuantity(item.bookId, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span style={styles.quantity}>{item.quantity}</span>
                <button 
                  style={styles.quantityButton} 
                  onClick={() => updateQuantity(item.bookId, 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p style={styles.emptyMessage}>Your cart is empty.</p>
      )}
      <h3 style={styles.total}>Total: ₹{totalAmount}</h3>
      {cartItems.length > 0 && (
        <button style={styles.checkoutButton} onClick={() => navigate("/ciu")}>
          Checkout
        </button>
      )}
    </div>
  );
};

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif" },
  header: { fontSize: "24px", fontWeight: "bold", marginBottom: "20px" },
  loading: { fontSize: "16px", textAlign: "center", marginTop: "20px" },
  error: { fontSize: "16px", color: "red", textAlign: "center", marginTop: "20px" },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
  },
  image: { width: "100px", height: "150px", objectFit: "cover", borderRadius: "5px", marginRight: "20px" },
  details: { flex: 1 },
  title: { fontSize: "18px", fontWeight: "bold", marginBottom: "5px", color: "#333" },
  price: { fontSize: "16px", fontWeight: "bold", color: "#28A745", marginBottom: "10px" },
  controls: { display: "flex", alignItems: "center", gap: "10px" },
  quantityButton: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  quantity: { fontSize: "16px", fontWeight: "bold" },
  total: { fontSize: "20px", fontWeight: "bold", marginTop: "20px", textAlign: "center" },
  checkoutButton: {
    backgroundColor: "#28A745",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "block",
    margin: "20px auto",
    fontSize: "16px",
    fontWeight: "bold",
  },
  emptyMessage: { fontSize: "16px", color: "#555", textAlign: "center", marginTop: "20px" },
};

export default CartD;*/






/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Server_URL } from '../utils/config';

const CartD = ({ guestId, userId }) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const [loading, setLoading] = useState(true); // Loading state for fetching data
  const navigate = useNavigate();

  const id = userId || guestId; // Use userId if logged in, otherwise guestId

  useEffect(() => {
    if (!id) {
      console.error('Error: No valid user or guest ID provided.');
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await axios.get(`${Server_URL}/api/cart/${id}`);
        setCart(response.data);
      } catch (error) {
        console.error(
          'Error fetching cart:',
          error.response?.status || 'Network Error',
          error.response?.data?.message || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [id]);

  const updateQuantity = async (bookId, change) => {
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`${Server_URL}/api/cart/update/${id}`, payload);
      setCart(response.data);
    } catch (error) {
      console.error('Error updating cart:', error.message);
    }
  };

  const removeItem = async (bookId) => {
    try {
      const response = await axios.delete(`${Server_URL}/api/cart/remove/${id}/${bookId}`);
      setCart(response.data); // Update cart state after removing the item
    } catch (error) {
      console.error('Error removing item:', error.message);
    }
  };

  if (loading) {
    return <p style={styles.loading}>Loading your cart...</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Your Cart</h2>
      {cart.items.length > 0 ? (
        cart.items.map((item) => (
          <div key={item.bookId} style={styles.item}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <div style={styles.details}>
              <h4 style={styles.title}>{item.title}</h4>
              <p style={styles.price}>₹{item.price}</p>
              <div style={styles.controls}>
                <button
                  style={styles.quantityButton}
                  onClick={() => updateQuantity(item.bookId, -1)}
                  disabled={item.quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span style={styles.quantity}>{item.quantity}</span>
                <button
                  style={styles.quantityButton}
                  onClick={() => updateQuantity(item.bookId, 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
                <button
                  style={styles.removeButton}
                  onClick={() => removeItem(item.bookId)}
                  aria-label="Remove item"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p style={styles.emptyMessage}>Your cart is empty.</p>
      )}
      <h3 style={styles.total}>Total: ₹{cart.totalAmount}</h3>
      {cart.items.length > 0 && (
        <button style={styles.checkoutButton} onClick={() => navigate('/ciu')}>
          Checkout
        </button>
      )}
    </div>
  );
};

const styles = {
  container: { padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' },
  header: { fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' },
  item: { display: 'flex', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' },
  image: { width: '80px', height: '100px', objectFit: 'cover', borderRadius: '5px', marginRight: '20px' },
  details: { flex: 1 },
  title: { fontSize: '18px', fontWeight: 'bold', marginBottom: '5px', color: '#333' },
  price: { fontSize: '16px', fontWeight: 'bold', color: '#28A745', marginBottom: '10px' },
  controls: { display: 'flex', alignItems: 'center', gap: '10px' },
  quantityButton: {
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  quantity: { fontSize: '16px', fontWeight: 'bold' },
  removeButton: {
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#DC3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  total: { fontSize: '20px', fontWeight: 'bold', marginTop: '20px', textAlign: 'center' },
  checkoutButton: {
    backgroundColor: '#28A745',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'block',
    margin: '20px auto',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  emptyMessage: { fontSize: '16px', color: '#555', textAlign: 'center', marginTop: '20px' },
  loading: { textAlign: 'center', fontSize: '18px', color: '#555', marginTop: '20px' },
};

export default CartD;*/





