/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';
const AddBookForm = () => {
  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [bookData, setBookData] = useState({
    name: '',
    author: '',
    price: '',
    images: []
  });

  // Fetch all categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/category/te`);  // Get all categories
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch sections when a category is selected
  useEffect(() => {
    if (selectedCategory) {
      const fetchSections = async () => {
        try {
          const response = await axios.get(`${Server_URL}api/section/${selectedCategory}`); // Get sections for the selected category
          setSections(response.data);
        } catch (error) {
          console.error("Error fetching sections:", error);
        }
      };
      fetchSections();
    }
  }, [selectedCategory]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setBookData({
      ...bookData,
      images: files
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', bookData.name);
    formData.append('author', bookData.author);
    formData.append('price', bookData.price);
    formData.append('categoryId', selectedCategory);
    formData.append('sectionId', selectedSection);

    // Append images
    bookData.images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      await axios.post(`${Server_URL}api/books/ser`, formData);
      alert("Book added successfully!");
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book.");
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Book</h2>

      <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Category</label>
          <select
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

       
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Section</label>
          <select
            name="section"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            disabled={!selectedCategory}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          >
            <option value="">Select Section</option>
            {sections.map((section) => (
              <option key={section._id} value={section._id}>
                {section.name}
              </option>
            ))}
          </select>
        </div>

     
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Book Name</label>
          <input
            type="text"
            name="name"
            value={bookData.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

      
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Author</label>
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Price</label>
          <input
            type="number"
            name="price"
            value={bookData.price}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

       
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Images (Up to 4)</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            required
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '12px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
*/


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const AddBookForm = () => {
  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [bookData, setBookData] = useState({
    name: '',
    author: '',
    price: '',
    images: []
  });

  // Fetch all categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/category/te`);  // Get all categories
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch sections when a category is selected
  useEffect(() => {
    if (selectedCategory) {
      const fetchSections = async () => {
        try {
          // Correct API call for sections with selectedCategory as categoryId
          const response = await axios.get(`${Server_URL}api/section/${selectedCategory}`);
          setSections(response.data);  // Set sections in state
        } catch (error) {
          console.error("Error fetching sections:", error);
        }
      };
      fetchSections();
    } else {
      setSections([]);  // Reset sections if no category is selected
    }
  }, [selectedCategory]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setBookData({
      ...bookData,
      images: files
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', bookData.name);
    formData.append('author', bookData.author);
    formData.append('price', bookData.price);
    formData.append('categoryId', selectedCategory);
    formData.append('sectionId', selectedSection);

    // Append images
    bookData.images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      await axios.post(`${Server_URL}api/books/ser`, formData);
      alert("Book added successfully!");
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book.");
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Book</h2>

      <form onSubmit={handleSubmit}>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Category</label>
          <select
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Section</label>
          <select
            name="section"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            disabled={!selectedCategory}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          >
            <option value="">Select Section</option>
            {sections.map((section) => (
              <option key={section._id} value={section._id}>
                {section.name}
              </option>
            ))}
          </select>
        </div>

     
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Book Name</label>
          <input
            type="text"
            name="name"
            value={bookData.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

      
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Author</label>
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

  
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Price</label>
          <input
            type="number"
            name="price"
            value={bookData.price}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

     
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Images (Up to 4)</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            required
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

     
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '12px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const AddBookForm = () => {
  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    price: '',
    images: []
  });
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/category/te`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setFormError("Failed to load categories. Please try again.");
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const fetchSections = async () => {
        try {
          const response = await axios.get(`${Server_URL}api/section/${selectedCategory}`);
          setSections(response.data);
        } catch (error) {
          console.error("Error fetching sections:", error);
          setFormError("Failed to load sections. Please try again.");
        }
      };
      fetchSections();
    } else {
      setSections([]);
    }
  }, [selectedCategory]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setBookData({
      ...bookData,
      images: files
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setLoading(true);

    if (!bookData.title || !bookData.author || !bookData.price || !selectedCategory || !selectedSection || bookData.images.length === 0) {
      setFormError('Please fill out all fields and upload at least one image.');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('title', bookData.title);
    formData.append('author', bookData.author);
    formData.append('price', bookData.price);
    formData.append('categoryId', selectedCategory);
    formData.append('sectionId', selectedSection);

    bookData.images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post(`${Server_URL}api/books/ser`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        alert("Book added successfully!");
        setBookData({
          title: '',
          author: '',
          price: '',
          images: []
        });
        setSelectedCategory('');
        setSelectedSection('');
      } else {
        throw new Error('Failed to add book');
      }
    } catch (error) {
      console.error("Error adding book:", error.response ? error.response.data : error.message);
      setFormError(error.response ? error.response.data.message : "Failed to add book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Book</h2>

      {formError && <div style={{ color: 'red', marginBottom: '20px' }}>{formError}</div>}

      <form onSubmit={handleSubmit}>
        {/* Category Dropdown */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Category</label>
          <select
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Section Dropdown */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Section</label>
          <select
            name="section"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            disabled={!selectedCategory}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          >
            <option value="">Select Section</option>
            {sections.map((section) => (
              <option key={section._id} value={section._id}>
                {section.name}
              </option>
            ))}
          </select>
        </div>

        {/* Book Title */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Book Name</label>
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

        {/* Author */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Author</label>
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

        {/* Price */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Price</label>
          <input
            type="number"
            name="price"
            value={bookData.price}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

        {/* Image Upload */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '16px', fontWeight: 'bold' }}>Images (Up to 4)</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '12px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Book'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
