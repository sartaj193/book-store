/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Server_URL } from "../utils/config";

const SectionsView = () => {
  const { id } = useParams(); // Get category ID from the URL
  const [sections, setSections] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    fetchSections();
  }, [id]);

  const fetchSections = async () => {
    try {
      const response = await axios.get(`${Server_URL}api/category/${id}/sections`);
      setSections(response.data);
      const categoryResponse = await axios.get(`${Server_URL}api/category/te`);
      const category = categoryResponse.data.find((cat) => cat._id === id);
      setCategoryName(category?.name || "Category");
    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
          Sections in {categoryName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div
              key={section._id}
              className="flex flex-col items-center p-6 rounded-lg bg-gray-100"
            >
              <span className="font-medium text-charcoal">{section.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionsView;*/





/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Server_URL } from "../utils/config";

const SectionsView = () => {
  const { id } = useParams(); // Get category ID from the URL
  const [sections, setSections] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    fetchSections();
  }, [id]);

  const fetchSections = async () => {
    try {
      const response = await axios.get(`${Server_URL}api/category/${id}/sections`);
      setSections(response.data);
      const categoryResponse = await axios.get(`${Server_URL}api/category/te`);
      const category = categoryResponse.data.find((cat) => cat._id === id);
      setCategoryName(category?.name || "Category");
    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
          Sections in {categoryName}
        </h2>
        <div>
          {sections.length > 0 ? (
            sections.map((section) => (
              <h3 key={section._id} className="text-xl font-medium text-charcoal mb-4">
                {section.name}
              </h3>
            ))
          ) : (
            <p className="text-center text-gray-500">No sections available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionsView;*/




/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../pages/oo"; // Adjust path to your ProductCard component
import { Server_URL } from "../utils/config";

const SectionsView = () => {
  const { id } = useParams(); // Category ID from the URL
  const [sections, setSections] = useState([]);
  const [categoryName, setCategoryName] = useState(""); // Name of the category
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSectionsWithBooks();
  }, [id]);

  const fetchSectionsWithBooks = async () => {
    try {
      setLoading(true);

      // Fetch sections and books for the selected category
      const response = await axios.get(`${Server_URL}api/category/${id}/sections`);
      setSections(response.data);

      // Fetch category name for the title
      const categoryResponse = await axios.get(`${Server_URL}api/category/te`);
      const category = categoryResponse.data.find((cat) => cat._id === id);
      setCategoryName(category?.name || "Category");
    } catch (error) {
      console.error("Error fetching sections with books:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderSectionWithBooks = (section) => (
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
              onAddToCart={(book) => console.log("Add to Cart:", book)}
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
          Sections in {categoryName}
        </h2>
        <div>
          {sections.length > 0 ? (
            sections.map((section) => renderSectionWithBooks(section))
          ) : (
            <p className="text-center text-gray-500">No sections available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionsView;*/


/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../pages/oo"; // Adjust path to your ProductCard component
import { Server_URL } from "../utils/config";

const SectionsView = () => {
  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSectionsWithBooks();
  }, [id]);

  const fetchSectionsWithBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${Server_URL}api/category/${id}/sections`);
      setSections(response.data);

      const categoryResponse = await axios.get(`${Server_URL}api/category/te`);
      const category = categoryResponse.data.find((cat) => cat._id === id);
      setCategoryName(category?.name || "Category");
    } catch (error) {
      console.error("Error fetching sections with books:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderSectionWithBooks = (section) => (
    <div key={section._id} style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '48px 16px',
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '24px',
        color: '#333',
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
            <ProductCard
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
    <section style={{
      padding: '64px 0',
      backgroundColor: '#ffffff',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px',
      }}>
        <h2 style={{
          fontSize: '36px',
          fontFamily: 'serif',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '48px',
          textAlign: 'center',
        }}>
          Sections in {categoryName}
        </h2>
        <div>
          {sections.length > 0 ? (
            sections.map((section) => renderSectionWithBooks(section))
          ) : (
            <p style={{
              textAlign: 'center',
              color: '#6b7280',
            }}>No sections available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionsView;
*/




/*import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductCardI from "./ProductCArd";// Adjust the path as per your project structure
import { Server_URL } from "../utils/config"; // Adjust the path as per your project structure

const SectionsView = () => {
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

export default SectionsView;*/



/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCardI from "./ProductCArd";
import { Server_URL } from "../utils/config";

const SectionsView = () => {
  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectionsWithBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Server_URL}api/books/category/${id}/sections`);
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
  }, [id]);

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
      <h2 style={{
        fontSize: '36px',
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: '48px',
        textAlign: 'center',
      }}>
        Sections in {categoryName}
      </h2>
      {sections.map(renderBookSection)}
    </div>
  );
    
};

export default SectionsView;*/




// working
/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCardI from "./ProductCArd";
import { Server_URL } from "../utils/config";
import Layout from "./Layout";

const SectionsView = () => {
  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectionsWithBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Server_URL}api/books/category/${id}/sections`);
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
  }, [id]);

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

  const content = loading ? (
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
  ) : error ? (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: '#ef4444',
    }}>
      Error: {error}
    </div>
  ) : (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '32px 0',
    }}>
      <h2 style={{
        fontSize: '36px',
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: '48px',
        textAlign: 'center',
      }}>
        Sections in {categoryName}
      </h2>
      {sections.map(renderBookSection)}
    </div>
  );

  return <Layout>{content}</Layout>;
};

export default SectionsView;*/

/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCardI from "./ProductCArd"; // Adjust the path as needed
import { Server_URL } from "../utils/config"; // Adjust the path as needed
import Layout from "./Layout";
import "./SectionsView.css"; // Import the CSS file

const SectionsView = () => {
  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectionsWithBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Server_URL}api/books/category/${id}/sections`);
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
  }, [id]);

  const renderBookSection = (section) => (
    <div key={section._id} className="section-container">
      <h2 className="section-title">{section.name}</h2>
      <div className="card-grid">
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

export default SectionsView;*/


// working
/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCardI from "./ProductCArd"; // Adjust the path as needed
import { Server_URL } from "../utils/config"; // Adjust the path as needed
import Layout from "./Layout";
import "./SectionsView.css"; // Import the CSS file

const SectionsView = () => {
  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectionsWithBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Server_URL}api/books/category/${id}/sections`);
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
  }, [id]);

  const renderBookSection = (section) => (
    <div key={section._id} className="section-container">
      <h2 className="section-title">{section.name}</h2>
      <div className="card-grid">
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

export default SectionsView;
*/



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCardI from "./ProductCArd"; // Make sure this path is correct
import { Server_URL } from "../utils/config";
import Layout from "./Layout";
import "./SectionsView.css"; // Make sure this file exists and contains your styles

const SectionsView = () => {
  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectionsWithBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Server_URL}api/books/category/${id}/sections`);
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
  }, [id]);

  const renderBookSection = (section) => (
    <div key={section._id} className="section-container">
      <h2 className="section-title">{section.name}</h2>
      <div className="card-grid">
        {section.books && section.books.length > 0 ? (
          section.books.map((book) => (
            <ProductCardI
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

export default SectionsView;













