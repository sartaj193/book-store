/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";
const AuthorsId = () => {
  const [authors, setAuthors] = useState([]);

  // Fetch authors' data from backend
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/author/allAuthor`); // Replace with your backend endpoint
        setAuthors(response.data);
      } catch (error) {
        console.error("Error fetching authors data:", error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
          Featured Authors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {authors.map((author) => (
            <div key={author.id} className="text-center group cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-full">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-40 h-40 mx-auto object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{author.name}</h3>
              <p className="text-gray-600 mb-4">{author.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorsId;*/





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios";
import { Server_URL } from "../utils/config";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch authors' data from backend
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/author/allAuthor`);
        setAuthors(response.data);
      } catch (error) {
        console.error("Error fetching authors data:", error);
      }
    };

    fetchAuthors();
  }, []);

  // Navigate to the detailed page
  const handleViewDetails = (authorId) => {
    navigate(`/authors/${authorId}/sections`);
  };

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
          Featured Authors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {authors.map((author) => (
            <div key={author.id} className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-full">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-40 h-40 mx-auto object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{author.name}</h3>
              <p className="text-gray-600 mb-4">{author.genre}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleViewDetails(author.id)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authors;
