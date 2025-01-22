/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Server_URL } from "../utils/config";

const AuthorDetails = () => {
  const { authorId } = useParams(); // Get the authorId from the route
  const [sections, setSections] = useState([]); // State to hold sections
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch sections for the author
  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get(
          `${Server_URL}api/authorsection/${authorId}/sections`
        );
        setSections(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching sections");
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, [authorId]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p>Loading sections...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  return (
    <section style={{ padding: "2rem", background: "#f9f9f9" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "1rem" }}>
          Author Sections
        </h1>
        {sections.map((section) => (
          <div
            key={section._id}
            style={{
              marginBottom: "1.5rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              {section.title}
            </h2>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Description:</strong> {section.description || "No description"}
            </p>
            {section.books?.length > 0 ? (
              <ul style={{ paddingLeft: "1rem" }}>
                {section.books.map((book) => (
                  <li key={book._id} style={{ marginBottom: "0.5rem" }}>
                    {book.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No books available in this section.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthorDetails;
*/



/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Server_URL } from "../utils/config";

const AuthorDetails = () => {
  const { authorId } = useParams(); // Get the authorId from the route
  const [sections, setSections] = useState([]); // State to hold sections
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch sections for the author
  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get(
          `${Server_URL}api/authorsection/author/${authorId}/sections`
        );
        setSections(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching sections.");
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, [authorId]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p>Loading sections...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  return (
    <section style={{ padding: "2rem", background: "#f9f9f9" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "1rem" }}>
          Author Sections
        </h1>
        {sections.map((section) => (
          <div
            key={section._id}
            style={{
              marginBottom: "1.5rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              {section.name || "Untitled Section"}
            </h2>
            <p>No further details available for this section.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthorDetails;*/




/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Server_URL } from "../utils/config";

const AuthorDetails = () => {
  const { authorId } = useParams();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Author ID:", authorId); // Debugging authorId
    if (!authorId) {
      setError("Author ID is missing.");
      setLoading(false);
      return;
    }

    const fetchSections = async () => {
      try {
        const response = await axios.get(`${Server_URL}api/authorsection/author/${authorId}/sections`);
        setSections(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching sections.");
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, [authorId]);

  if (loading) return <p>Loading sections...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Author Sections</h1>
      {sections.map((section) => (
        <div key={section._id}>
          <h2>{section.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default AuthorDetails;*/




/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Server_URL } from "../utils/config";

const AuthorDetails = () => {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      if (!authorId) {
        setError("Author ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const [authorResponse, sectionsResponse] = await Promise.all([
          axios.get(`${Server_URL}api/author/${authorId}`),
          axios.get(`${Server_URL}api/authorsection/author/${authorId}/sections`)
        ]);

        setAuthor(authorResponse.data);
        setSections(sectionsResponse.data);
      } catch (err) {
        console.error("Error fetching author details:", err);
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError(`Server error: ${err.response.status} - ${err.response.data.message || 'Unknown error'}`);
        } else if (err.request) {
          // The request was made but no response was received
          setError("No response received from server. Please check your network connection.");
        } else {
          // Something happened in setting up the request that triggered an Error
          setError(`Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorDetails();
  }, [authorId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading author details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-xl text-red-500 mb-4">Error loading author details</p>
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Author not found.</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <img
            src={author.image}
            alt={author.name}
            className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
          />
          <h1 className="text-4xl font-serif font-bold text-charcoal mb-2">{author.name}</h1>
          <p className="text-xl text-gray-600">{author.genre}</p>
        </div>

        <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 text-center">
          Author Sections
        </h2>

        {sections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <div
                key={section._id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{section.name || "Untitled Section"}</h3>
                <p className="text-gray-600">{section.description || "No description available."}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">No sections found for this author.</p>
        )}
      </div>
    </section>
  );
};

export default AuthorDetails;*/


/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Server_URL } from "../utils/config";

const AuthorDetails = () => {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      if (!authorId) {
        setError("Author ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const [authorResponse, sectionsResponse] = await Promise.all([
          axios.get(`${Server_URL}api/authorsection/${authorId}`),
          axios.get(`${Server_URL}api/authorsection/author/${authorId}/sections`)
        ]);

        setAuthor(authorResponse.data);
        setSections(sectionsResponse.data);
      } catch (err) {
        console.error("Error fetching author details:", err);
        if (err.response) {
          setError(`Server error: ${err.response.status} - ${err.response.data.message || 'Unknown error'}`);
        } else if (err.request) {
          setError("No response received from server. Please check your network connection.");
        } else {
          setError(`Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorDetails();
  }, [authorId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading author details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-xl text-red-500 mb-4">Error loading author details</p>
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Author not found.</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <img
            src={author.image}
            alt={author.name}
            className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
          />
          <h1 className="text-4xl font-serif font-bold text-charcoal mb-2">{author.name}</h1>
          <p className="text-xl text-gray-600">{author.genre}</p>
        </div>

        <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 text-center">
          Author Sections
        </h2>

        {sections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <div
                key={section._id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{section.name || "Untitled Section"}</h3>
                <p className="text-gray-600">{section.description || "No description available."}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">No sections found for this author.</p>
        )}
      </div>
    </section>
  );
};

export default AuthorDetails;*/


/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Server_URL } from "../utils/config";

const AuthorDetails = () => {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      if (!authorId) {
        setError("Author ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const [authorResponse, sectionsResponse] = await Promise.all([
          axios.get(`${Server_URL}api/authorsection/${authorId}`),
          axios.get(`${Server_URL}api/authorsection/author/${authorId}/sections`)
        ]);

        setAuthor(authorResponse.data);
        setSections(sectionsResponse.data);
      } catch (err) {
        console.error("Error fetching author details:", err);
        if (err.response) {
          setError(`Server error: ${err.response.status} - ${err.response.data.message || 'Unknown error'}`);
        } else if (err.request) {
          setError("No response received from server. Please check your network connection.");
        } else {
          setError(`Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorDetails();
  }, [authorId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading author details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-xl text-red-500 mb-4">Error loading author details</p>
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Author not found.</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <img
            src={author.image}
            alt={author.name}
            className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
          />
          <h1 className="text-4xl font-serif font-bold text-charcoal mb-2">{author.name}</h1>
          <p className="text-xl text-gray-600">{author.genre}</p>
        </div>

        <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 text-center">
          Author Sections
        </h2>

        {sections.length > 0 ? (
          <div className="">
            {sections.map((section) => (
              <div
                key={section._id}
                className="section-container"
              >
                <h3 className="section-title">{section.name || "Untitled Section"}</h3>
                
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">No sections found for this author.</p>
        )}
      </div>
    </section>
  );
};

export default AuthorDetails;
*/

/*import React, { useEffect, useState } from "react";
import axios from "axios";

//import ProductCardI from "./ProductCArd";
import ProductCardI from "../finalApperence/ProductCArd"; // Adjust the path as per your project structure
import { Server_URL } from "../utils/config"; // Adjust the path as per your project structure

const AuthorDetails= () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectionsWithBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Server_URL}api/authors/sections-with-books`);
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

export default AuthorDetails;*/




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//import ProductCardI from "../finalApperence/ProductCArd"; // Make sure this path is correct
import { Server_URL } from "../utils/config";
import ProductCardII from "./detailpage";
import Layout from "../finalApperence/Layout";
//import "./SectionsView.css"; // Make sure this file exists and contains your styles

const AuthorDetails = () => {
  const { authorId } = useParams();
  const [sections, setSections] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectionsWithBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Server_URL}api/authors/author/${authorId}/authorsection`);
        setSections(response.data.sections);
        setCategoryName(response.data.categoryName);
      } catch (error) {
        console.error("Error fetching sections with books:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSectionsWithBooks();
  }, [authorId]);

  const renderBookSection = (section) => (
    <div key={section._id} className="section-container">
      <h2 className="section-title">{section.name}</h2>
      <div className="card-grid">
        {section.books && section.books.length > 0 ? (
          section.books.map((book) => (
            <ProductCardII
              key={book._id}
              book={book}
              guestId={localStorage.getItem("guestId")}
              userId={localStorage.getItem("userId")}
            />
          ))
        ) : (
          <p className="no-books">No books available in this section.</p>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        Error: {error}
      </div>
    );
  }

  return (
    <Layout>
      <div className="sections-view">
        <h2 className="main-title">Sections in {categoryName}</h2>
        {sections.map(renderBookSection)}
      </div>
    </Layout>
  );
};

export default AuthorDetails;




