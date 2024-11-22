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




import React, { useEffect, useState } from 'react';
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

 const removeItem = async (bookId,userId) => {
  const id = userId || guestId; // Use userId if logged in, otherwise guestId
  console.log("Removing item with ID:", id, "and Book ID:", bookId); // Debugging

  try {
    const response = await axios.delete(`http://localhost:3001/api/cart/remove/${id}/${bookId}`);
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

export default CartD;




