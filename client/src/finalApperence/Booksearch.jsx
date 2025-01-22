import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookSearch = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedSection, setSelectedSection] = useState('general');
  const [authorId, setAuthorId] = useState(''); // For fetching author-specific books
  const [categoryId, setCategoryId] = useState(''); // For fetching category-specific books

  // Fetch books based on the selected section
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let response;
        if (selectedSection === 'general') {
          response = await axios.get(`http://localhost:3001/api/product/section/${selectedSection}`);
        } else if (selectedSection === 'author' && authorId) {
          response = await axios.get(`http://localhost:3001/author/${authorId}/authorsection`);
        } else if (selectedSection === 'category' && categoryId) {
          response = await axios.get(`http://localhost:3001/category/${categoryId}/sections`);
        }

        if (response) {
          setBooks(response.data);
          setResults(response.data); // Initially show all books
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [selectedSection, authorId, categoryId]);

  // Filter results based on the search query
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filteredBooks = books.filter(
      (book) =>
        book.name.includes(value) ||
        (book.transliteratedName && book.transliteratedName.toLowerCase().includes(value.toLowerCase()))
    );

    setResults(filteredBooks);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg p-6">
        <button className="text-gray-500 hover:text-gray-700 float-right" onClick={onClose}>
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Search Books</h2>
        {/* Section Selector */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Section</label>
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="general">General Section</option>
            <option value="author">Author Section</option>
            <option value="category">Category Section</option>
          </select>
          {selectedSection === 'author' && (
            <input
              type="text"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
              placeholder="Enter Author ID"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
            />
          )}
          {selectedSection === 'category' && (
            <input
              type="text"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              placeholder="Enter Category ID"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
            />
          )}
        </div>
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Search books by name (Punjabi or English)"
        />
        {/* Display Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.length > 0 ? (
            results.map((book) => (
              <div key={book.id} className="border p-4 rounded-md">
                <img
                  src={book.image}
                  alt={book.name}
                  className="h-40 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-bold">{book.name}</h3>
                <button className="mt-2 p-2 bg-blue-500 text-white rounded-md">
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No books found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookSearch;
