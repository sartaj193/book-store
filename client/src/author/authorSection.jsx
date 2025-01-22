import React, { useState, useEffect } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";
const CreateAuthorSection = () => {
  const [categories, setCategories] = useState([]); // Holds all categories
  const [selectedCategory, setSelectedCategory] = useState(""); // Selected category
  const [sectionName, setSectionName] = useState(""); // Section name
  const [message, setMessage] = useState(""); // Success/error message

  // Fetch categories from the server
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/author/allAuthor`); // Adjust the URL to your API endpoint
        setCategories(response.data); // Assuming the response contains an array of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCategory || !sectionName) {
      setMessage("Please select a category and enter a section name.");
      return;
    }

    try {
      const response = await axios.post(`${Server_URL}api/authorsection/authorsection`, {
        name: sectionName,
        authorId: selectedCategory,
      });

      if (response.data.success) {
        setMessage(response.data.message);
        setSectionName("");
        setSelectedCategory("");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Error creating section. Please try again.");
      console.error("Error creating section:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Create Section</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="sectionName" className="form-label">
            Section Name
          </label>
          <input
            type="text"
            className="form-control"
            id="sectionName"
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
            placeholder="Enter section name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Select Category
          </label>
          <select
            className="form-select"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Choose a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Create Section
        </button>
      </form>

      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
};

export default CreateAuthorSection;
