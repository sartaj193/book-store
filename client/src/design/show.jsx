/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/product/list');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map((product) => (
        <div key={product._id} style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
          <img
            src={`http://localhost:3001${product.images[0]}`} // Display the first image
            alt={product.name}
            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
          />
          <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{product.name}</h3>
          <p style={{ margin: '5px 0' }}>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [booksBySection, setBooksBySection] = useState({});

  // Fetch books and group them by sections
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/product/list');
        if (response.data.success && Array.isArray(response.data.products)) {
          // Group books by their section
          const groupedBooks = response.data.products.reduce((acc, book) => {
            const section = book.section || 'Other';
            if (!acc[section]) acc[section] = [];
            acc[section].push(book);
            return acc;
          }, {});
          setBooksBySection(groupedBooks);
        } else {
          console.error('API response format is incorrect:', response.data);
        }
      } catch (error) {
        console.error('Error fetching books:', error);
        toast.error('Failed to load books. Please try again later.');
      }
    };

    fetchBooks();
  }, []);

  const styles = {
    container: {
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#FFF5E6',
    },
    section: {
      margin: '48px auto',
      maxWidth: '1200px',
      padding: '16px',
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#FF9933',
    },
    booksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '16px',
    },
    bookCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      ':hover': {
        transform: 'translateY(-4px)',
      },
    },
    bookImage: {
      width: '100%',
      aspectRatio: '3/4',
      objectFit: 'cover',
    },
    bookInfo: {
      padding: '16px',
    },
    bookTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '4px',
    },
    bookPrice: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#FF9933',
    },
  };

  return (
    <div style={styles.container}>
      <ToastContainer />
      {Object.keys(booksBySection).map((section) => (
        <div key={section} style={styles.section}>
          <h2 style={styles.sectionTitle}>{section}</h2>
          <div style={styles.booksGrid}>
            {booksBySection[section].map((book) => (
              <div key={book._id} style={styles.bookCard}>
                <img
                  src={book.image} // Use the image URL from the API
                  alt={book.name}
                  style={styles.bookImage}
                />
                <div style={styles.bookInfo}>
                  <h3 style={styles.bookTitle}>{book.name}</h3>
                  <p style={styles.bookPrice}>₹{book.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

