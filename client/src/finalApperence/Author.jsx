//import { Button } from "./ui/button";

/*const authors = [
  {
    id: 1,
    name: "Jane Austen",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&h=400",
    genre: "Classic Literature",
  },
  {
    id: 2,
    name: "Stephen King",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400",
    genre: "Horror, Thriller",
  },
  {
    id: 3,
    name: "J.K. Rowling",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400",
    genre: "Fantasy",
  },
  {
    id: 4,
    name: "Haruki Murakami",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400",
    genre: "Contemporary Fiction",
  },
];

const Authors = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
          Featured Authors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {authors.map((author) => (
            <div
              key={author.id}
              className="text-center group cursor-pointer"
            >
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

export default Authors;*/

/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";
const Authors = () => {
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

export default Authors;*/




/*import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { Server_URL } from "../utils/config";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

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

  // Navigate to author's page
  const handleAuthorClick = (authorId) => {
    navigate(`/authors/${authorId}`); // Navigate to dynamic route
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
                onClick={() => handleAuthorClick(author.id)}
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

export default Authors;*/



/*import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios";
import { Server_URL } from "../utils/config"; // Replace with your actual config file path

const Authors = () => {
  const [authors, setAuthors] = useState([]); // State for authors
  const navigate = useNavigate(); // Hook for navigation

  // Fetch authors' data from the backend
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/author/allAuthor`); // Fetch authors from the backend
        setAuthors(response.data);
      } catch (error) {
        console.error("Error fetching authors data:", error);
      }
    };

    fetchAuthors();
  }, []);

  // Handle button click to navigate to the author's detail page
  const handleAuthorClick = (authorId) => {
    navigate(`/authors/${authorId}`); // Navigate to the next page with the author's ID
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
                onClick={() => handleAuthorClick(author.id)} // Trigger navigation on click
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

export default Authors;*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Server_URL } from "../utils/config";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

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

  const handleAuthorClick = (authorId) => {
    navigate(`/authors/${authorId}`);
  };

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
          Featured Authors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {authors.map((author) => (
            <div key={author._id} className="text-center group">
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
                onClick={() => handleAuthorClick(author._id)}
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



