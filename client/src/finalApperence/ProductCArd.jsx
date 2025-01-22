/*import React from 'react';
import { ShoppingCart } from 'lucide-react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const ProductCardI = ({ book, guestId, userId }) => {
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
        {book.title || 'Untitled Book'}
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

export default ProductCardI;*/





/*import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Server_URL } from '../utils/config';

const ProductCardI = ({ book, guestId, onAddToCart }) => {
  const imageUrl = book.images && book.images.length > 0
    ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
      ? book.images[0]
      : `${Server_URL}uploads/images/${book.images[0].replace(/^\/+/, '')}`
    : 'https://via.placeholder.com/300x400.png?text=No+Image';

  const handleAddToCart = () => {
    onAddToCart(book);
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    }}>
      <div style={{
        width: '100%',
        paddingTop: '133%',
        position: 'relative',
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
      <div style={{
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
      }}>
        <div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '4px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {book.title|| 'Untitled Book'}
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#4b5563',
            marginBottom: '4px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {book.author || 'Unknown Author'}
          </p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '8px',
        }}>
          <p style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#f97316',
            margin: '0',
          }}>
            ₹{book.price ? book.price.toFixed(2) : '0.00'}
          </p>
          <button
            style={{
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '8px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              fontWeight: '500',
            }}
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} style={{ marginRight: '6px' }} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardI;
*/

// working
/*import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Server_URL } from '../utils/config';

const ProductCardI = ({ book, guestId, onAddToCart }) => {
  const imageUrl = book.images && book.images.length > 0
    ? book.images[0].startsWith('http') || book.images[0].includes('uploads/images')
      ? book.images[0]
      : ${Server_URL}uploads/images/${book.images[0].replace(/^\/+/, '')}
    : 'https://via.placeholder.com/300x400.png?text=No+Image';

  const handleAddToCart = () => {
    onAddToCart(book);
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    }}>
      <div style={{
        width: '100%',
        paddingTop: '133%',
        position: 'relative',
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
      <div style={{
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
      }}>
        <div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '4px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {book.title|| 'Untitled Book'}
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#4b5563',
            marginBottom: '4px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {book.author || 'Unknown Author'}
          </p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '8px',
        }}>
          <p style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#f97316',
            margin: '0',
          }}>
            ₹{book.price ? book.price.toFixed(2) : '0.00'}
          </p>
          <button
            style={{
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '8px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              fontWeight: '500',
            }}
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} style={{ marginRight: '6px' }} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardI;*/


/*import React from "react";
import { ShoppingCart } from "lucide-react";
import axios from "axios";
import { Server_URL } from "../utils/config";

const ProductCardI = ({ book, guestId, userId, onAddToCart }) => {
  const imageUrl =
    book.images && book.images.length > 0
      ? book.images[0].startsWith("http") || book.images[0].includes("uploads/images")
        ? book.images[0]
        : `${Server_URL}/uploads/images/${book.images[0].replace(/^\/+/, "")}`
      : "https://via.placeholder.com/300x400.png?text=No+Image";

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
          "Content-Type": "application/json",
        },
      });

      console.log("Cart updated:", response.data);
      alert("Item added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "8px",
        boxSizing: "border-box",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        backgroundColor: "#ffffff",
      }}
    >
      
      <div
        style={{
          width: "100%",
          paddingBottom: "150%",
          position: "relative",
          marginBottom: "8px",
        }}
      >
        <img
          src={imageUrl}
          alt={book.name || "Book Cover"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "4px",
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
      </div>

     
      <h3
        style={{
          fontSize: "14px",
          fontWeight: "500",
          color: "#333",
          marginBottom: "4px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
        {book.title || "Untitled Book"}
      </h3>
     <p
        style={{
          fontSize: "12px",
          color: "#666",
          marginBottom: "4px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
        {book.author || "Unknown Author"}
      </p>


      <p
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "#f97316",
          marginBottom: "12px",
          width: "100%",
        }}
      >
        ₹{book.price || 0}
      </p>

    
      <button
        style={{
          backgroundColor: "#f97316",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "8px 12px",
          cursor: "pointer",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
        onClick={handleAddToCart}
      >
        <ShoppingCart size={16} style={{ marginRight: "4px" }} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardI;
*/


/*import React from "react";
import { ShoppingCart } from 'lucide-react';
import axios from "axios";
import { Server_URL } from "../utils/config";

const ProductCardI = ({ book, guestId, userId }) => {
  const imageUrl =
    book.images && book.images.length > 0
      ? book.images[0].startsWith("http") || book.images[0].includes("uploads/images")
        ? book.images[0]
        : `${Server_URL}/uploads/images/${book.images[0].replace(/^\/+/, "")}`
      : "https://via.placeholder.com/300x400.png?text=No+Image";

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
          "Content-Type": "application/json",
        },
      });

      alert("Item added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "150px" }}>
     
      <div style={{ width: "100%", aspectRatio: "3/4", marginBottom: "10px" }}>
        <img
          src={imageUrl}
          alt={book.name || "Book Cover"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "4px",
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
      </div>

   
      <h3
        style={{
          fontSize: "14px",
          fontWeight: "bold",
          margin: "5px 0",
          color: "#1a1a1a",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {book.title || "Untitled Book"}
      </h3>

 
      <p
        style={{
          fontSize: "12px",
          color: "#666",
          margin: "5px 0",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {book.author || "Unknown Author"}
      </p>


      <p
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "#f97316",
          margin: "5px 0",
        }}
      >
        ₹{book.price ? book.price.toFixed(0) : "0"}
      </p>

      
      <button
        style={{
          backgroundColor: "#f97316",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "8px",
          fontSize: "12px",
          fontWeight: "500",
          cursor: "pointer",
          width: "100%",
        }}
        onClick={handleAddToCart}
      >
        <ShoppingCart size={14} style={{ marginRight: "6px" }} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardI;*/




/*import React from "react";
import { ShoppingCart } from 'lucide-react';
import axios from "axios";
import { Server_URL } from "../utils/config";

const ProductCardI = ({ book, guestId, userId, onAddToCart }) => {
  const imageUrl =
    book.images && book.images.length > 0
      ? book.images[0].startsWith("http") || book.images[0].includes("uploads/images")
        ? book.images[0]
        : `${Server_URL}/uploads/images/${book.images[0].replace(/^\/+/, "")}`
      : "https://via.placeholder.com/300x400.png?text=No+Image";

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
          "Content-Type": "application/json",
        },
      });

      console.log("Cart updated:", response.data);
      alert("Item added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        transition: "transform 0.2s ease",
        padding: "8px",
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
    >
     
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "140%",
          marginBottom: "12px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl}
          alt={book.name || "Book Cover"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
      </div>

   
      <div style={{ padding: "0 4px" }}>
    
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#333333",
            marginBottom: "4px",
            lineHeight: "1.4",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            height: "40px",
          }}
        >
          {book.title || "Untitled Book"}
        </h3>

        
        <p
          style={{
            fontSize: "13px",
            color: "#666666",
            marginBottom: "8px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {book.author || "Unknown Author"}
        </p>


        <p
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#ee5d1a",
            marginBottom: "12px",
          }}
        >
          ₹{book.price ? book.price.toFixed(0) : "0"}
        </p>

     
        <button
          style={{
            backgroundColor: "#ee5d1a",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "8px 12px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            transition: "background-color 0.2s ease",
          }}
          onClick={handleAddToCart}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#d64d12"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ee5d1a"}
        >
          <ShoppingCart size={15} style={{ marginRight: "6px" }} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCardI;
*/
import React from "react";
import { ShoppingCart } from 'lucide-react';
import axios from "axios";
import { Server_URL } from "../utils/config";

const ProductCardI = ({ book, guestId, userId }) => {
  const imageUrl =
    book.images && book.images.length > 0
      ? book.images[0].startsWith("http") || book.images[0].includes("uploads/images")
        ? book.images[0]
        : `${Server_URL}/uploads/images/${book.images[0].replace(/^\/+/, "")}`
      : "https://via.placeholder.com/300x400.png?text=No+Image";

  const handleAddToCart = async () => {
    try {
      const cartData = {
        guestId,
        userId,
        bookId: book._id,
        title: book.title, // Changed from book.name to book.title
        image: imageUrl,
        price: book.price,
      };

      const response = await axios.post(`${Server_URL}api/cart/add`, cartData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Cart updated:", response.data);
      alert("Item added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        transition: "transform 0.2s ease",
        padding: "8px",
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
    >
      {/* Image Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "140%",
          marginBottom: "12px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl}
          alt={book.title || "Book Cover"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image";
          }}
        />
      </div>

      {/* Book Details */}
      <div style={{ padding: "0 4px" }}>
        {/* Title */}
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#333333",
            marginBottom: "4px",
            lineHeight: "1.4",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            height: "40px",
          }}
        >
          {book.title || "Untitled Book"}
        </h3>

        {/* Author */}
        <p
          style={{
            fontSize: "13px",
            color: "#666666",
            marginBottom: "8px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {book.author || "Unknown Author"}
        </p>

        {/* Price */}
        <p
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#ee5d1a",
            marginBottom: "12px",
          }}
        >
          ₹{book.price ? book.price.toFixed(0) : "0"}
        </p>

        {/* Add to Cart Button */}
        <button
          style={{
            backgroundColor: "#ee5d1a",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "8px 12px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            transition: "background-color 0.2s ease",
          }}
          onClick={handleAddToCart}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#d64d12"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ee5d1a"}
        >
          <ShoppingCart size={15} style={{ marginRight: "6px" }} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCardI;

