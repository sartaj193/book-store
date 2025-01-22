/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';
import { useParams } from 'react-router-dom';

const AddAuthorBookForm = () => {
  const { authorId } = useParams();
  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [bookData, setBookData] = useState({
    title: '',
    authors: '',
    price: '',
    images: [],
  });
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch all categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/author/allAuthor`);
        setCategories(response.data); // Assuming the API returns an array of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
        setFormError("Failed to load categories. Please try again.");
      }
    };
    fetchCategories();
  }, []);

  // Fetch sections based on selected category
  useEffect(() => {
    if (!selectedCategory) {
      setSections([]);
      return;
    }

    const fetchSections = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/authorsection/${selectedCategory}`);
        setSections(response.data); // Assuming the API returns an array of sections
      } catch (error) {
        console.error("Error fetching sections:", error);
        setFormError("Failed to load sections. Please try again.");
      }
    };
    fetchSections();
  }, [selectedCategory]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file uploads
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setBookData((prevState) => ({
      ...prevState,
      images: files,
    }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setLoading(true);

    if (!bookData.title || !bookData.authors || !bookData.price || !selectedCategory || !selectedSection || bookData.images.length === 0) {
      setFormError('Please fill out all fields and upload at least one image.');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('title', bookData.title);
    formData.append('authors', bookData.authors);
    formData.append('price', bookData.price);
    formData.append('categoryId', selectedCategory);
    formData.append('sectionId', selectedSection);

    bookData.images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post(`${Server_URL}api/authors/authorbookk`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        alert('Book added successfully!');
        setBookData({
          title: '',
          authors: '',
          price: '',
          images: [],
        });
        setSelectedCategory('');
        setSelectedSection('');
      } else {
        throw new Error('Failed to add book');
      }
    } catch (error) {
      console.error("Error adding book:", error.response ? error.response.data : error.message);
      setFormError(error.response ? error.response.data.message : 'Failed to add book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Book</h2>

      {formError && <div style={{ color: 'red', marginBottom: '20px' }}>{formError}</div>}

      <form onSubmit={handleSubmit}>
       
        <div style={{ marginBottom: '15px' }}>
          <label>Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
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
          <label>Section</label>
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            disabled={!selectedCategory}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
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
          <label>Book Title</label>
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Author</label>
          <input
            type="text"
            name="authors"
            value={bookData.authors}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={bookData.price}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>

          <div style={{ marginBottom: '15px' }}>
          <label>Images</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{ width: '100%' }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          {loading ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default AddAuthorBookForm;*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";

const AddAuthorBookForm = () => {
  const [authors, setAuthors] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [bookData, setBookData] = useState({
    title: "",
    authors: "",
    price: "",
    images: [],
  });
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/author/allAuthor`);
        setAuthors(response.data || []);
      } catch (error) {
        console.error("Error fetching authors:", error);
        setFormError("Failed to load authors. Please try again.");
      }
    };
    fetchAuthors();
  }, []);

  useEffect(() => {
    if (!selectedAuthor) {
      setSections([]);
      return;
    }

    const fetchSections = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/authorsection/${selectedAuthor}`);
        setSections(response.data || []);
      } catch (error) {
        console.error("Error fetching sections:", error);
        setFormError("Failed to load sections. Please try again.");
      }
    };
    fetchSections();
  }, [selectedAuthor]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setBookData((prevState) => ({
      ...prevState,
      images: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setLoading(true);

    if (
      !bookData.title ||
      !bookData.authors ||
      !bookData.price ||
      !selectedAuthor ||
      !selectedSection ||
      bookData.images.length === 0
    ) {
      setFormError("Please fill out all fields and upload at least one image.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", bookData.title);
    formData.append("authors", bookData.authors);
    formData.append("price", bookData.price);
    formData.append("authorId", selectedAuthor);
    formData.append("authorsectionId", selectedSection);

    bookData.images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await axios.post(
        `${Server_URL}api/authors/authorbookk`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        alert("Book added successfully!");
        setBookData({
          title: "",
          authors: "",
          price: "",
          images: [],
        });
        setSelectedAuthor("");
        setSelectedSection("");
      } else {
        throw new Error("Failed to add book");
      }
    } catch (error) {
      console.error(
        "Error adding book:",
        error.response ? error.response.data : error.message
      );
      setFormError(
        error.response
          ? error.response.data.message
          : "Failed to add book. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Book</h2>

      {formError && (
        <div className="text-red-500 mb-4 text-center">{formError}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Author</label>
          <select
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Author</option>
            {authors.map((author) => (
              <option key={author._id} value={author._id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Section</label>
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            disabled={!selectedAuthor}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Section</option>
            {sections.map((section) => (
              <option key={section._id} value={section._id}>
                {section.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Book Title</label>
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Authors</label>
          <input
            type="text"
            name="authors"
            value={bookData.authors}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={bookData.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Images</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddAuthorBookForm;

