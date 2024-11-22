
/*import React from 'react';
import { useCart } from '../context/cartcontext'; // Correct path to your context
import './catoryItem.style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CategoryItem = ({ category }) => {
  const { addToCart } = useCart(); // Fetching cart context function
  const { imageUrl, title, price, id } = category;

  return (
    <div className="category-item">
      <div className="category-image">
        <img src={imageUrl} alt={title} />
        <button 
          onClick={() => addToCart({ id, title, price, imageUrl })} 
          className="cart-icon"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
      <div className="category-info">
        <span className="item-name">{title}</span>
        <span className="item-price">₹{price}</span>
      </div>
    </div>
  );
};

export default CategoryItem;*/








// src/component/categoryItem.component.js
// src/component/categoryItem.component.js
// src/component/categoryItem.component.jsx
/*import React from 'react';
import './catoryItem.style.css'; // Keep your external styles

import { useCart } from '../context/cartcontext'; // Adjusted path
import 'font-awesome/css/font-awesome.min.css'; // Ensure this package is installed

const CategoryItem = ({ category }) => {
  const { imageUrl, title, price } = category; // Ensure these fields match your backend response
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { ...category } });
  };

  return (
    <div className="category-item">
      <div className="category-image">
        <img src={imageUrl} alt={title} />
        <button className="cart-icon" onClick={addToCart}>
          <i className="fa fa-shopping-cart"></i> 
        </button>
      </div>
      <div className="category-info">
        <h3 className="item-name">{title}</h3>
        <hr />
        <p className="item-price">₹{price}</p>
        <hr />
      </div>
    </div>
  );
};

export default CategoryItem;*/

import React from 'react';
import './catoryItem.style.css'; 
import { useCart } from '../context/cartcontext'; 
import { useAuth } from '../context/authcontext'; 
import 'font-awesome/css/font-awesome.min.css'; 

const CategoryItem = ({ category }) => {
  const { imageUrl, title, price, id } = category;
  const { state, dispatch } = useCart(); 
  const { user } = useAuth(); 

  // Check if the item is in the cart for the current user
  const isInCart = state.cartItems.some(item => item.id === id && item.userId === user?.id);

  const addToCart = () => {
    if (!isInCart) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: { ...category, userId: user.id }, // Ensure userId is included
      });
    }
  };

  return (
    <div className="category-item">
      <div className="category-image">
        <img src={imageUrl} alt={title} />
        <button className="cart-icon" onClick={addToCart} disabled={isInCart}>
          <i className="fa fa-shopping-cart"></i>
        </button>
      </div>
      <div className="category-info">
        <h3 className="item-name">{title}</h3>
        <hr />
        <p className="item-price">₹{price}</p>
        <hr />
      </div>
    </div>
  );
};

export default CategoryItem;
