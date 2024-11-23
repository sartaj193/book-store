/*import React, { useState, useEffect } from "react";
import axios from "axios";
  // Import the ProductCard component
import ProductCard from "./proug";
const ListItemsi = () => {
  const [products, setProducts] = useState([]);
  const [selectedSection, setSelectedSection] = useState("popular in punjab"); // Default section

  // Fetch products based on the selected section
  const fetchProductsBySection = async (section) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
      if (response.data && response.data.length > 0) {
        setProducts(response.data);  // Set products based on section
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error(`Error fetching products for section ${section}:`, error);
      setProducts([]);  // Optionally clear the products on error
    }
  };

  // Fetch products when the component mounts or when section changes
  useEffect(() => {
    fetchProductsBySection(selectedSection);
  }, [selectedSection]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products in {selectedSection} Section</h2>

      <div className="text-center mb-4">
        <button onClick={() => setSelectedSection("popular in punjab")} className="btn btn-primary mx-2">
          popular in punjab
        </button>
        <button onClick={() => setSelectedSection("punjabi literature")} className="btn btn-primary mx-2">
          punjabi literature
        </button>
        <button onClick={() => setSelectedSection("punjabi culture")} className="btn btn-primary mx-2">
          punjabi culture
        </button>
        <button onClick={() => setSelectedSection("best sellers")} className="btn btn-primary mx-2">
          best sellers
        </button>
      </div>

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />  // Use ProductCard for each product
          ))
        ) : (
          <p className="text-center">No products found for this section.</p>
        )}
      </div>
    </div>
  );
};

export default ListItemsi;*/


/*import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ book, onAddToCart, styles }) => {
  return (
    <div style={styles.bookCard}>
      <img
        src={
          book.images && book.images.length > 0
            ? `http://localhost:3001${book.images[0]}`
            : "https://via.placeholder.com/300x400.png?text=No+Image"
        }
        alt={book.name || "Book Image"}
        style={styles.bookImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
        }}
      />
      <div style={styles.bookInfo}>
        <h3 style={styles.bookTitle}>{book.name}</h3>
        <p style={styles.bookAuthor}>{book.author}</p>
        <p style={styles.bookPrice}>₹{book.price}</p>
        <button
          style={styles.addToCartButton}
          onClick={() => onAddToCart()}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;*/

/*import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ book, onAddToCart, styles }) => {
  return (
    <div style={styles.bookCard}>
      <img
  src={
    book.images && book.images.length > 0
      ? `http://localhost:3001${book.images[0]}`
      : "https://via.placeholder.com/300x400.png?text=No+Image"
  }
  alt={book.name || "Book Image"}
  style={styles.bookImage}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
  }}
/>

      <div style={styles.bookInfo}>
        <h3 style={styles.bookTitle}>{book.name}</h3>
        <p style={styles.bookAuthor}>{book.author}</p>
        <p style={styles.bookPrice}>₹{book.price}</p>
        <button
          style={styles.addToCartButton}
          onClick={() => onAddToCart()}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;*/


/*const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img
          src={
            product.images && product.images.length > 0
              ? `http://localhost:3001/uploads/images/${product.images[0]}`
              : "https://via.placeholder.com/300x400.png?text=No+Image"
          }
          alt={product.name || "Book Image"}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.author}</p>
          <p className="card-text">₹{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
*/


/*import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img
          src={
            product.images && product.images.length > 0
              ? `http://localhost:3001/uploads/images/${product.images[0]}`
              : "https://via.placeholder.com/300x400.png?text=No+Image"
          }
          alt={product.name || "Book Image"}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.author || "Unknown Author"}</p>
          <p className="card-text">₹{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
*/


/*import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-img-top">
          <img
            src={
              product.images && product.images.length > 0
                ? `http://localhost:3001/uploads/images/${product.images[0]}`
                : "https://via.placeholder.com/300x400.png?text=No+Image"
            }
            alt={product.name || "Book Image"}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
            }}
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title text-truncate">{product.name}</h5>
          <p className="card-text text-muted">{product.author || "Author Unknown"}</p>
          <p className="card-text fw-bold text-success">₹{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;*/


/*import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ book, onAddToCart, styles }) => {
  const imageUrl = book.images && book.images.length > 0
    ? `http://localhost:3001/uploads/images/${book.images[0]}`
    : "https://via.placeholder.com/300x400.png?text=No+Image";

  return (
    <div style={styles.bookCard}>
      <div style={{ position: 'relative', paddingTop: '133%' }}>
        <img
          src={imageUrl}
          alt={book.name || 'Book Cover'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px 8px 0 0'
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
      </div>
      <div style={styles.bookInfo}>
        <h3 style={styles.bookTitle}>{book.name || 'Untitled Book'}</h3>
        <p style={styles.bookAuthor}>{book.author || 'Unknown Author'}</p>
        <p style={styles.bookPrice}>₹{book.price || 0}</p>
        <button 
          style={styles.addToCartButton}
          onClick={() => onAddToCart(book)}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;*/


/*import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ book, onAddToCart, styles }) => {
  const imageUrl = book.images && book.images.length > 0
    ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
      ? book.images[0] // Use the provided URL as-is
      : `http://localhost:3001/uploads/images/${book.images[0].replace(/^\/+/, '')}`
    : "https://via.placeholder.com/300x400.png?text=No+Image";

  return (
    <div style={styles.bookCard}>
      <div style={{ position: 'relative', paddingTop: '133%' }}>
        <img
          src={imageUrl}
          alt={book.name || 'Book Cover'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px 8px 0 0',
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
      </div>
      <div style={styles.bookInfo}>
        <h3 style={styles.bookTitle}>{book.name || 'Untitled Book'}</h3>
        <p style={styles.bookAuthor}>{book.author || 'Unknown Author'}</p>
        <p style={styles.bookPrice}>₹{book.price || 0}</p>
        <button 
          style={styles.addToCartButton}
          onClick={() => onAddToCart(book)}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;*/
/*import React from 'react';
import { ShoppingCart } from 'lucide-react';
import axios from 'axios';

const ProductCard = ({ book, guestId, styles }) => {
  // Add to Cart functionality
  const handleAddToCart = async () => {
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      await axios.post('http://localhost:3001/api/cart/add', payload);
      alert(`${book.name} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart. Please try again.');
    }
  };

  // Image URL resolution
  const imageUrl = book.images && book.images.length > 0
    ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
      ? book.images[0]
      : `http://localhost:3001/uploads/images/${book.images[0].replace(/^\/+/, '')}`
    : "https://via.placeholder.com/300x400.png?text=No+Image";

  return (
    <div style={styles.bookCard}>
      <div style={{ position: 'relative', paddingTop: '133%' }}>
        <img
          src={imageUrl}
          alt={book.name || 'Book Cover'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px 8px 0 0',
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
      </div>
      <div style={styles.bookInfo}>
        <h3 style={styles.bookTitle}>{book.name || 'Untitled Book'}</h3>
        <p style={styles.bookAuthor}>{book.author || 'Unknown Author'}</p>
        <p style={styles.bookPrice}>₹{book.price || 0}</p>
        <button 
          style={styles.addToCartButton}
          onClick={handleAddToCart} // Use the cart functionality
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
*/

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import axios from 'axios';

import { baseUrl } from '../utils/config';
const ProductCard = ({ book, guestId, styles }) => {
  // Add to Cart functionality
  const handleAddToCart = async () => {
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      await axios.post(`${baseUrl}/api/cart/add`, payload);
      alert(`${book.name} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart. Please try again.');
    }
  };

  // Image URL resolution
  const imageUrl = book.images && book.images.length > 0
    ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
      ? book.images[0]
      : `${baseUrl}/uploads/images/${book.images[0].replace(/^\/+/, '')}`
    : "https://via.placeholder.com/300x400.png?text=No+Image";

  return (
    <div style={styles.bookCard}>
      <div style={{ position: 'relative', paddingTop: '133%' }}>
        <img
          src={imageUrl}
          alt={book.name || 'Book Cover'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px 8px 0 0',
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
      </div>
      <div style={styles.bookInfo}>
        <h3 style={styles.bookTitle}>{book.name || 'Untitled Book'}</h3>
        <p style={styles.bookAuthor}>{book.author || 'Unknown Author'}</p>
        <p style={styles.bookPrice}>₹{book.price || 0}</p>
        <button
          style={styles.addToCartButton}
          onClick={handleAddToCart} // Use the cart functionality
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

