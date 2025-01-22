import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductCard from '../pages/oo'; // Adjust the path as per your project structure
import { Server_URL } from '../utils/config'; // Adjust the path as per your project structure

const BookSections = () => {
  const [products, setProducts] = useState({
    punjabiliterature: [],
    punjabiculture: [],
    bestsellers: [],
    popularinpunjab: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductsBySection = async (section) => {
    try {
      const response = await axios.get(`${Server_URL}api/product/section/${section}`);
      if (response.data && Array.isArray(response.data)) {
        const filteredProducts = response.data.filter(product => {
          const productSection = String(product.section || '').toLowerCase();
          const targetSection = section.toLowerCase();
          return productSection.includes(targetSection);
        });

        setProducts(prevProducts => ({
          ...prevProducts,
          [section.replace(/\s+/g, '').toLowerCase()]: filteredProducts
        }));
      }
    } catch (error) {
      console.error(`Error fetching products for section ${section}:`, error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchProductsBySection('punjabi literature'),
          fetchProductsBySection('punjabi culture'),
          fetchProductsBySection('best sellers'),
          fetchProductsBySection('popular in punjab')
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderBookSection = (title, books) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books && books.length > 0 ? (
          books.map((book) => (
            <ProductCard
              key={book._id}
              book={book}
              guestId={localStorage.getItem('guestId')}
              onAddToCart={(book) => console.log('Add to Cart:', book)} // Pass appropriate logic here
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No books available in this section.</p>
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

  return (
    <div>
      {renderBookSection("Punjabi Literature", products.punjabiliterature)}
      {renderBookSection("Punjabi Culture", products.punjabiculture)}
      {renderBookSection("Best Sellers", products.bestsellers)}
      {renderBookSection("Popular in Punjab", products.popularinpunjab)}
    </div>
  );
};

export default BookSections;
