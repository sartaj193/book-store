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

/*import React from 'react';
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

export default ProductCard;*/

/*import React from 'react';
import { ShoppingCart } from 'lucide-react';
import axios from 'axios';

import { baseUrl } from '../utils/config';

const ProductCard = ({ book, guestId }) => {
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

  const imageUrl = book.images && book.images.length > 0
    ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
      ? book.images[0]
      : `${baseUrl}/uploads/images/${book.images[0].replace(/^\/+/, '')}`
    : "https://via.placeholder.com/300x400.png?text=No+Image";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:-translate-y-1">
      <div className="relative pt-[133%]">
        <img
          src={imageUrl}
          alt={book.name || 'Book Cover'}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-1 truncate">{book.name || 'Untitled Book'}</h3>
        <p className="text-xs text-gray-600 mb-2 truncate">{book.author || 'Unknown Author'}</p>
        <p className="text-lg font-bold text-orange-500 mb-3">₹{book.price || 0}</p>
        <button
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={16} className="mr-2" />
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

import { baseUrl } from '../utils/config';

const ProductCard = ({ book, guestId, onAddToCart }) => {
  const imageUrl = book.images && book.images.length > 0
    ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
      ? book.images[0]
      : `${baseUrl}/uploads/images/${book.images[0].replace(/^\/+/, '')}`
    : "https://via.placeholder.com/300x400.png?text=No+Image";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative pt-[150%]">
        <img
          src={imageUrl}
          alt={book.name || 'Book Cover'}
          className="absolute top-0 left-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
        <button
          className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md"
          onClick={onAddToCart}
        >
          <ShoppingCart size={20} className="text-orange-500" />
        </button>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">{book.name || 'Untitled Book'}</h3>
        <p className="text-xs text-gray-600 mb-1">{book.author || 'Unknown Author'}</p>
        <p className="text-lg font-bold text-orange-500">₹{book.price || 0}</p>
      </div>
    </div>
  );
};

export default ProductCard;*/


/*import React from 'react';
import { ShoppingCart } from 'lucide-react';
import axios from 'axios';

import { baseUrl } from '../utils/config';

const ProductCard = ({ book, guestId, onAddToCart }) => {
  const imageUrl = book.images && book.images.length > 0
    ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
      ? book.images[0]
      : `${baseUrl}/uploads/images/${book.images[0].replace(/^\/+/, '')}`
    : "https://via.placeholder.com/300x400.png?text=No+Image";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative pt-[150%]">
        <img
          src={imageUrl}
          alt={book.name || 'Book Cover'}
          className="absolute top-0 left-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
        <button
          className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md"
          onClick={onAddToCart}
        >
          <ShoppingCart size={20} className="text-orange-500" />
        </button>
      </div>
      <div className="p-2">
        <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">{book.name || 'Untitled Book'}</h3>
        <p className="text-xs text-gray-600 mb-1">{book.author || 'Unknown Author'}</p>
        <p className="text-lg font-bold text-orange-500">₹{book.price || 0}</p>
      </div>
    </div>
  );
};

export default ProductCard;
*/



/*import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { baseUrl } from '../utils/config';

const ProductCard = ({ book, guestId, onAddToCart }) => {
  const imageUrl = book.images && book.images.length > 0
    ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
      ? book.images[0]
      : `${baseUrl}/uploads/images/${book.images[0].replace(/^\/+/, '')}`
    : "https://via.placeholder.com/300x400.png?text=No+Image";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative pt-[150%]">
        <img
          src={imageUrl}
          alt={book.name || 'Book Cover'}
          className="absolute top-0 left-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
        <button
          className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md"
          onClick={onAddToCart}
        >
          <ShoppingCart size={20} className="text-orange-500" />
        </button>
      </div>
      <div className="p-2">
        <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">{book.name || 'Untitled Book'}</h3>
        <p className="text-xs text-gray-600 mb-1">{book.author || 'Unknown Author'}</p>
        <p className="text-lg font-bold text-orange-500">₹{book.price || 0}</p>
      </div>
    </div>
  );
};

export default ProductCard;*/

/*import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { baseUrl } from '../utils/config';

const ProductCard = ({ book, guestId, onAddToCart }) => {
  const imageUrl = book.images && book.images.length > 0
    ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
      ? book.images[0]
      : `${baseUrl}/uploads/images/${book.images[0].replace(/^\/+/, '')}`
    : "https://via.placeholder.com/300x400.png?text=No+Image";

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
        width: '100%',
      }}
    >
      <div style={{ position: 'relative', paddingTop: '150%' }}>
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
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
        <button
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            backgroundColor: 'white',
            padding: '8px',
            borderRadius: '50%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
          onClick={onAddToCart}
        >
          <ShoppingCart size={20} style={{ color: '#f97316' }} />
        </button>
      </div>
      <div style={{ padding: '16px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#2d3748', marginBottom: '8px' }}>
          {book.name || 'Untitled Book'}
        </h3>
        <p style={{ fontSize: '0.875rem', color: '#718096', marginBottom: '8px' }}>
          {book.author || 'Unknown Author'}
        </p>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#f97316' }}>
          ₹{book.price || 0}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;*/
//working

/*import React from 'react';
import { ShoppingCart } from 'lucide-react';
import axios from 'axios';
//import { baseUrl } from '../utils/config';
import { Server_URL } from '../utils/config';
const ProductCard = ({ book, guestId, userId }) => {
  const imageUrl =
    book.images && book.images.length > 0
      ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
        ? book.images[0]
        : `${Server_URL}/uploads/images/${book.images[0].replace(/^\/+/, '')}`
      : 'https://via.placeholder.com/300x400.png?text=No+Image';

  const handleAddToCart = async () => {
    try {
      const cartData = {
        guestId,
        userId,
        bookId: book._id,
        title: book.name,
        image: imageUrl,
        price: book.price,
      };
      
      const response = await axios.post(`${Server_URL}api/cart/add`, cartData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Cart updated:', response.data);
      alert('Item added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart.');
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
        width: '100%',
      }}
    >
      <div style={{ position: 'relative', paddingTop: '150%' }}>
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
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x400.png?text=No+Image';
          }}
        />
        <button
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            backgroundColor: 'white',
            padding: '8px',
            borderRadius: '50%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
          onClick={handleAddToCart}
        >
          <ShoppingCart size={20} style={{ color: '#f97316' }} />
        </button>
      </div>
      <div style={{ padding: '16px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#2d3748', marginBottom: '8px' }}>
          {book.name || 'Untitled Book'}
        </h3>
        <p style={{ fontSize: '0.875rem', color: '#718096', marginBottom: '8px' }}>
          {book.author || 'Unknown Author'}
        </p>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#f97316' }}>
          ₹{book.price || 0}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;*/

//working
/*import React from 'react';
import { ShoppingCart } from 'lucide-react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const ProductCard = ({ book, guestId, userId }) => {
  const imageUrl =
    book.images && book.images.length > 0
      ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
        ? book.images[0]
        : `${Server_URL}/uploads/images/${book.images[0].replace(/^\/+/, '')}`
      : 'https://via.placeholder.com/300x400.png?text=No+Image';

  const handleAddToCart = async () => {
    try {
      const cartData = {
        guestId,
        userId,
        bookId: book._id,
        title: book.name,
        image: imageUrl,
        price: book.price,
      };
      
      const response = await axios.post(`${Server_URL}api/cart/add`, cartData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Cart updated:', response.data);
      alert('Item added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart.');
    }
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '8px',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        paddingBottom: '150%',
        position: 'relative',
        marginBottom: '8px',
      }}>
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
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x400.png?text=No+Image';
          }}
        />
      </div>
      <h3 style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#333',
        marginBottom: '4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
      }}>
        {book.name || 'Untitled Book'}
      </h3>
      <p style={{
        fontSize: '12px',
        color: '#666',
        marginBottom: '4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
      }}>
        {book.author || 'Unknown Author'}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        <p style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#f97316',
        }}>
          ₹{book.price || 0}
        </p>
        <button
          style={{
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '6px 12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '12px',
          }}
          onClick={handleAddToCart}
        >
          <ShoppingCart size={16} style={{ marginRight: '4px' }} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;*/
// working
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const ProductCard = ({ book, guestId, userId }) => {
  const imageUrl =
    book.images && book.images.length > 0
      ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
        ? book.images[0]
        : `${Server_URL}/uploads/images/${book.images[0].replace(/^\/+/, '')}`
      : 'https://via.placeholder.com/300x400.png?text=No+Image';

  const handleAddToCart = async () => {
    try {
      const cartData = {
        guestId,
        userId,
        bookId: book._id,
        title: book.name,
        image: imageUrl,
        price: book.price,
      };
      
      const response = await axios.post(`${Server_URL}api/cart/add`, cartData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Cart updated:', response.data);
      alert('Item added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart.');
    }
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '8px',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        paddingBottom: '150%',
        position: 'relative',
        marginBottom: '8px',
        overflow: 'hidden',
      }}>
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
            transition: 'transform 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x400.png?text=No+Image';
          }}
        />
      </div>
      <h3 style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#333',
        marginBottom: '4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
      }}>
        {book.name || 'Untitled Book'}
      </h3>
      <p style={{
        fontSize: '12px',
        color: '#666',
        marginBottom: '4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
      }}>
        {book.author || 'Unknown Author'}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        <p style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#f97316',
        }}>
          ₹{book.price || 0}
        </p>
        <button
          style={{
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '6px 12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '12px',
          }}
          onClick={handleAddToCart}
        >
          <ShoppingCart size={16} style={{ marginRight: '4px' }} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

/*import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Server_URL } from '../utils/config';

import { useCart } from '../finalApperence/Cartlogic';
const ProductCard = ({ book }) => {
  const { handleAddToCart } = useCart();

  const imageUrl =
    book.images && book.images.length > 0
      ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
        ? book.images[0]
        : `${Server_URL}/uploads/images/${book.images[0].replace(/^\/+/, '')}`
      : 'https://via.placeholder.com/300x400.png?text=No+Image';

  const onAddToCart = async () => {
    try {
      await handleAddToCart(book);
      alert('Item added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart.');
    }
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '8px',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        paddingBottom: '150%',
        position: 'relative',
        marginBottom: '8px',
        overflow: 'hidden',
      }}>
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
            transition: 'transform 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x400.png?text=No+Image';
          }}
        />
      </div>
      <h3 style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#333',
        marginBottom: '4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
      }}>
        {book.name || 'Untitled Book'}
      </h3>
      <p style={{
        fontSize: '12px',
        color: '#666',
        marginBottom: '4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
      }}>
        {book.author || 'Unknown Author'}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        <p style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#f97316',
        }}>
          ₹{book.price || 0}
        </p>
        <button
          style={{
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '6px 12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '12px',
          }}
          onClick={onAddToCart}
        >
          <ShoppingCart size={16} style={{ marginRight: '4px' }} />
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
import { Server_URL } from '../utils/config';

const ProductCard = ({ book, guestId, userId }) => {
  const imageUrl =
    book.images && book.images.length > 0
      ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
        ? book.images[0]
        : `${Server_URL}/uploads/images/${book.images[0].replace(/^\/+/, '')}`
      : 'https://via.placeholder.com/300x400.png?text=No+Image';

  const handleAddToCart = async () => {
    try {
      const cartData = {
        guestId,
        userId,
        bookId: book._id,
        title: book.name,
        image: imageUrl,
        price: book.price,
      };
      
      const response = await axios.post(`${Server_URL}api/cart/add`, cartData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Cart updated:', response.data);
      alert('Item added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart.');
    }
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '8px',
      boxSizing: 'border-box',
      margin: '0',
      backgroundColor: '#ffffff',
    }}>
      <div style={{
        width: '100%',
        paddingBottom: '130%',
        position: 'relative',
        marginBottom: '8px',
      }}>
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
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x400.png?text=No+Image';
          }}
        />
      </div>
      <h3 style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#333',
        marginBottom: '4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
      }}>
        {book.name || 'Untitled Book'}
      </h3>
      <p style={{
        fontSize: '12px',
        color: '#666',
        marginBottom: '4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
      }}>
        {book.author || 'Unknown Author'}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        <p style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#f97316',
          margin: '0',
        }}>
          ₹{book.price || 0}
        </p>
        <button
          style={{
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '6px 8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '12px',
          }}
          onClick={handleAddToCart}
        >
          <ShoppingCart size={14} style={{ marginRight: '4px' }} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;*/











/*import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ book, guestId, onAddToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart(book);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image"}
        alt={book.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate">{book.name}</h3>
        <p className="text-gray-600 mb-2 truncate">{book.author}</p>
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-bold">₹{book.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors duration-300"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;*/



