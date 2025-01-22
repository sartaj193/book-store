
/*import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../pages/oo"; // Adjust the path as per your project structure
import { Server_URL } from "../utils/config"; // Adjust the path as per your project structure

const BookSections = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectionsWithBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Server_URL}api/books/sections-with-books`);
        setSections(response.data);
      } catch (error) {
        console.error("Error fetching sections with books:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSectionsWithBooks();
  }, []);

  const renderBookSection = (section) => (
    <div key={section._id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 relative inline-block">
        {section.name}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {section.books && section.books.length > 0 ? (
          section.books.map((book) => (
            <ProductCard
              key={book._id}
              book={book}
              guestId={localStorage.getItem("guestId")}
               onAddToCart={(book) => console.log("Add to Cart:", book)} // Pass appropriate logic here
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No books available in this section.
          </p>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  return <div>{sections.map(renderBookSection)}</div>;
};

export default BookSections;
*/

import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductCardI from "./ProductCArd"; // Adjust the path as per your project structure
import { Server_URL } from "../utils/config"; // Adjust the path as per your project structure

const BookSections = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectionsWithBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Server_URL}api/books/sections-with-books`);
        setSections(response.data);
      } catch (error) {
        console.error("Error fetching sections with books:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSectionsWithBooks();
  }, []);

  const renderBookSection = (section) => (
    <div key={section._id} style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '48px 16px',
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '24px',
        color: '#1f2937',
        position: 'relative',
        display: 'inline-block',
      }}>
        {section.name}
        <span style={{
          position: 'absolute',
          bottom: '-4px',
          left: '0',
          width: '100%',
          height: '2px',
          backgroundColor: '#f97316',
          transform: 'scaleX(0)',
          transition: 'transform 0.3s',
        }}></span>
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '24px',
      }}>
        {section.books && section.books.length > 0 ? (
          section.books.map((book) => (
            <ProductCardI
              key={book._id}
              book={book}
              guestId={localStorage.getItem("guestId")}
              onAddToCart={(book) => console.log("Add to Cart:", book)}
            />
          ))
        ) : (
          <p style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            color: '#6b7280',
          }}>
            No books available in this section.
          </p>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          border: '4px solid #f3f4f6',
          borderTopColor: '#f97316',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: '#ef4444',
      }}>
        Error: {error}
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '32px 0',
    }}>
      {sections.map(renderBookSection)}
    </div>
  );
};

export default BookSections;











