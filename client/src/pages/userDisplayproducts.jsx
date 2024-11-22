/*import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProductDisplay = () => {
  const [sections, setSections] = useState(["science", "history", "fiction", "non-fiction"]); // Example sections
  const [productsBySection, setProductsBySection] = useState({}); // Store products grouped by section

  // Fetch products for all sections
  const fetchProducts = async () => {
    try {
      const fetchedData = {};

      for (const section of sections) {
        const response = await axios.get(
          `http://localhost:3001/api/product/section/${section}`
        );
        fetchedData[section] = response.data; // Group products by section
      }

      setProductsBySection(fetchedData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch all products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Books by Section</h2>

 
      {sections.map((section) => (
        <div key={section} className="mb-5">

          <h4 className="mb-3">{section}</h4>

 
          <div className="row">
            {productsBySection[section] && productsBySection[section].length > 0 ? (
              productsBySection[section].map((product) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product._id}>
                  <div className="card h-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        <strong>Price:</strong> ₹{product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No products available in this section.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProductDisplay;*/
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Truck, Clock, RefreshCw, MapPin, ShoppingCart, Menu, X } from 'lucide-react';

export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
      console.log(`API Response for ${section}:`, response.data);

      if (response.data && response.data.length > 0) {
        const filteredProducts = response.data.filter(product =>
          product.section.includes(section)
        );
        console.log(`Filtered Products for ${section}:`, filteredProducts);

        setProducts(prevProducts => ({
          ...prevProducts,
          [section]: filteredProducts
        }));
      } else {
        console.error(`No products found or invalid response structure for ${section}.`);
      }
    } catch (error) {
      console.error(`Error fetching products for section ${section}:`, error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([
        fetchProductsBySection('punjabi literature'),
        fetchProductsBySection('punjabi culture'),
        fetchProductsBySection('best sellers'),
        fetchProductsBySection('popular in punjab')
      ]);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const carouselImages = [
    { src: require("../assets/books/one.jpg"), text: "Best Sellers" },
    { src: require('../assets/bookv/six one.jpg'), text: "Punjabi Literature" },
    { src: require('../assets/bookv/sixty.jpg'), text: "New Arrivals" },
  ];

  const styles = {
    container: {
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#FFF5E6',
    },
    infoStrip: {
      background: 'linear-gradient(90deg, #FF9933 0%, #FF8C00 100%)',
      color: 'white',
      padding: '8px 0',
      position: 'relative',
      overflow: 'hidden',
    },
    stripText: {
      animation: 'marquee 20s linear infinite',
      whiteSpace: 'nowrap',
      fontSize: '14px',
      fontWeight: '500',
      letterSpacing: '0.5px',
    },
    navbar: {
      position: 'sticky',
      top: 0,
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 50,
      padding: '12px 0',
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#FF9933',
    },
    menuButton: {
      display: 'none',
      padding: '8px',
      cursor: 'pointer',
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
    navLinks: {
      display: 'flex',
      gap: '32px',
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      },
    },
    link: {
      color: '#4A5568',
      textDecoration: 'none',
      fontWeight: '500',
      ':hover': {
        color: '#FF9933',
      },
    },
    searchBar: {
      width: '100%',
      maxWidth: '300px',
      margin: '0 auto',
      '@media (min-width: 768px)': {
        maxWidth: 'none',
        margin: 0,
      },
    },
    carousel: {
      position: 'relative',
      width: '100%',
      height: '300px',
      '@media (min-width: 640px)': {
        height: '400px',
      },
      '@media (min-width: 1024px)': {
        height: '600px',
      },
      overflow: 'hidden',
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: 'opacity 0.5s ease-in-out',
    },
    activeSlide: {
      opacity: 1,
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
    },
    slideText: {
      position: 'absolute',
      bottom: '48px',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'white',
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '100%',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      '@media (min-width: 640px)': {
        fontSize: '48px',
      },
    },
    features: {
      maxWidth: '1200px',
      margin: '48px auto',
      padding: '0 16px',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
      },
    },
    featureCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      ':hover': {
        transform: 'translateY(-4px)',
      },
    },
    featureIcon: {
      color: '#FF9933',
      marginBottom: '12px',
    },
    featureText: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#4A5568',
      textAlign: 'center',
    },
    booksSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '48px 16px',
    },
    booksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '16px',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
    bookCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      ':hover': {
        transform: 'translateY(-4px)',
      },
    },
    bookImage: {
      width: '100%',
      aspectRatio: '3/4',
      objectFit: 'cover',
    },
    bookInfo: {
      padding: '16px',
    },
    bookTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#2D3748',
      marginBottom: '4px',
    },
    bookAuthor: {
      fontSize: '14px',
      color: '#718096',
      marginBottom: '8px',
    },
    bookPrice: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#FF9933',
    },
    addToCartButton: {
      width: '100%',
      padding: '8px 16px',
      backgroundColor: '#FF9933',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '12px',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: '#F97316',
      },
    },
    footer: {
      backgroundColor: '#2D3748',
      color: 'white',
      padding: '48px 0',
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      textAlign: 'center',
    },
  };

  const renderBookSection = (title, books) => (
    <div style={styles.booksSection}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#2D3748' }}>
        {title}
      </h2>
      <div style={styles.booksGrid}>
        {books && books.length > 0 ? (
          books.map((book) => (
            <div key={book._id} style={styles.bookCard}>
              <img
                src={book.images && book.images.length > 0 ? book.images[0] : "/placeholder.svg?height=300&width=200"}
                alt={book.name}
                style={styles.bookImage}
              />
              <div style={styles.bookInfo}>
                <h3 style={styles.bookTitle}>{book.name}</h3>
                <p style={styles.bookAuthor}>{book.author}</p>
                <p style={styles.bookPrice}>₹{book.price}</p>
                <button
                  style={styles.addToCartButton}
                  onClick={() => setCartCount(prev => prev + 1)}
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No books available in this section.</p>
        )}
      </div>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.infoStrip}>
        <div style={styles.stripText}>
          All Punjabi books available here | 10% Discount on First Order | Free Delivery Above ₹499
        </div>
      </div>

      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <h1 style={styles.logo}>ਪੰਜਾਬੀ ਬੁੱਕਸ</h1>

          <div style={styles.searchBar}>
            <input type="text" placeholder="Search..." style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }} />
          </div>

          <button style={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div style={styles.navLinks}>
            <a href="#" style={styles.link}>Home</a>
            <a href="#" style={styles.link}>Books</a>
            <a href="#" style={styles.link}>About Us</a>
            <a href="#" style={styles.link}>Contact</a>
            <div style={{ position: 'relative' }}>
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#FF9933',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                }}>
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div style={styles.carousel}>
        {carouselImages.map((slide, index) => (
          <div
            key={index}
            style={{
              ...styles.slide,
              ...(index === currentSlide ? styles.activeSlide : {}),
            }}
          >
            <img src={slide.src} alt={slide.text} style={styles.carouselImage} />
            <div style={styles.overlay} />
            <div style={styles.slideText}>{slide.text}</div>
          </div>
        ))}
      </div>

      <div style={styles.features}>
        <div style={styles.featureCard}>
          <Truck size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>Free Delivery</span>
        </div>
        <div style={styles.featureCard}>
          <MapPin size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>Available in Punjab</span>
        </div>
        <div style={styles.featureCard}>
          <Clock size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>24-Hour Support</span>
        </div>
        <div style={styles.featureCard}>
          <RefreshCw size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>Easy Returns</span>
        </div>
      </div>

      <section>
        {renderBookSection("Popular in Punjab", products.popularinpunjab)}
        {renderBookSection("Punjabi Literature", products.punjabiliterature)}
        {renderBookSection("Punjabi Culture", products.punjabiculture)}
        {renderBookSection("Best Sellers", products.bestsellers)}
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            ਪੰਜਾਬੀ ਬੁੱਕਸ
          </h3>
          <p style={{ color: '#A0AEC0' }}>© 2024 Punjabi Bookstore. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}*/


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Truck, Clock, RefreshCw, MapPin, ShoppingCart, Menu, X } from 'lucide-react';

export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
      console.log(`API Response for ${section}:`, response.data);

      if (response.data && response.data.length > 0) {
        const filteredProducts = response.data.filter(product =>
          product.section.includes(section)
        );
        console.log(`Filtered Products for ${section}:`, filteredProducts);

        setProducts(prevProducts => ({
          ...prevProducts,
          [section]: filteredProducts
        }));
      } else {
        console.error(`No products found or invalid response structure for ${section}.`);
      }
    } catch (error) {
      console.error(`Error fetching products for section ${section}:`, error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([
        fetchProductsBySection('punjabi literature'),
        fetchProductsBySection('punjabi culture'),
        fetchProductsBySection('best sellers'),
        fetchProductsBySection('popular in punjab')
      ]);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const carouselImages = [
    { src: "/path/to/your/placeholder.svg?height=600&width=800", text: "Best Sellers" },
    { src: "/path/to/your/placeholder.svg?height=600&width=800", text: "Punjabi Literature" },
    { src: "/path/to/your/placeholder.svg?height=600&width=800", text: "New Arrivals" },
  ];

  const styles = {
    container: {
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#FFF5E6',
    },
    infoStrip: {
      background: 'linear-gradient(90deg, #FF9933 0%, #FF8C00 100%)',
      color: 'white',
      padding: '8px 0',
      position: 'relative',
      overflow: 'hidden',
    },
    stripText: {
      animation: 'marquee 20s linear infinite',
      whiteSpace: 'nowrap',
      fontSize: '14px',
      fontWeight: '500',
      letterSpacing: '0.5px',
    },
    navbar: {
      position: 'sticky',
      top: 0,
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 50,
      padding: '12px 0',
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#FF9933',
    },
    menuButton: {
      display: 'none',
      padding: '8px',
      cursor: 'pointer',
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
    navLinks: {
      display: 'flex',
      gap: '32px',
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      },
    },
    link: {
      color: '#4A5568',
      textDecoration: 'none',
      fontWeight: '500',
      ':hover': {
        color: '#FF9933',
      },
    },
    searchBar: {
      width: '100%',
      maxWidth: '300px',
      margin: '0 auto',
      '@media (min-width: 768px)': {
        maxWidth: 'none',
        margin: 0,
      },
    },
    carousel: {
      position: 'relative',
      width: '100%',
      height: '300px',
      '@media (min-width: 640px)': {
        height: '400px',
      },
      '@media (min-width: 1024px)': {
        height: '600px',
      },
      overflow: 'hidden',
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: 'opacity 0.5s ease-in-out',
    },
    activeSlide: {
      opacity: 1,
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
    },
    slideText: {
      position: 'absolute',
      bottom: '48px',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'white',
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '100%',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      '@media (min-width: 640px)': {
        fontSize: '48px',
      },
    },
    features: {
      maxWidth: '1200px',
      margin: '48px auto',
      padding: '0 16px',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
      },
    },
    featureCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      ':hover': {
        transform: 'translateY(-4px)',
      },
    },
    featureIcon: {
      color: '#FF9933',
      marginBottom: '12px',
    },
    featureText: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#4A5568',
      textAlign: 'center',
    },
    booksSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '48px 16px',
    },
    booksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '16px',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
    bookCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      ':hover': {
        transform: 'translateY(-4px)',
      },
    },
    bookImage: {
      width: '100%',
      aspectRatio: '3/4',
      objectFit: 'cover',
    },
    bookInfo: {
      padding: '16px',
    },
    bookTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#2D3748',
      marginBottom: '4px',
    },
    bookAuthor: {
      fontSize: '14px',
      color: '#718096',
      marginBottom: '8px',
    },
    bookPrice: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#FF9933',
    },
    addToCartButton: {
      width: '100%',
      padding: '8px 16px',
      backgroundColor: '#FF9933',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '12px',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: '#F97316',
      },
    },
    footer: {
      backgroundColor: '#2D3748',
      color: 'white',
      padding: '48px 0',
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      textAlign: 'center',
    },
  };

  const renderBookSection = (title, books) => (
  <div style={styles.booksSection}>
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#2D3748' }}>
      {title}
    </h2>
    <div style={styles.booksGrid}>
      {books && books.length > 0 ? (
        books.map((book) => (
          <div key={book._id} style={styles.bookCard}>
            <img
              src={
                book.images && book.images.length > 0
                  ? book.images[0]
                  : "https://via.placeholder.com/600x800" // Valid placeholder URL
              }
              alt={book.name}
              style={styles.bookImage}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite error loop
                e.target.src = "https://via.placeholder.com/600x800"; // Valid fallback
              }}
            />
              <div style={styles.bookInfo}>
                <h3 style={styles.bookTitle}>{book.name}</h3>
                <p style={styles.bookAuthor}>{book.author}</p>
                <p style={styles.bookPrice}>₹{book.price}</p>
                <button
                  style={styles.addToCartButton}
                  onClick={() => setCartCount(prev => prev + 1)}
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No books available in this section.</p>
        )}
      </div>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.infoStrip}>
        <div style={styles.stripText}>
          All Punjabi books available here | 10% Discount on First Order | Free Delivery Above ₹499
        </div>
      </div>

      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <h1 style={styles.logo}>ਪੰਜਾਬੀ ਬੁੱਕਸ</h1>

          <div style={styles.searchBar}>
            <input type="text" placeholder="Search..." style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }} />
          </div>

          <button style={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div style={styles.navLinks}>
            <a href="#" style={styles.link}>Home</a>
            <a href="#" style={styles.link}>Books</a>
            <a href="#" style={styles.link}>About Us</a>
            <a href="#" style={styles.link}>Contact</a>
            <div style={{ position: 'relative' }}>
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#FF9933',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                }}>
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div style={styles.carousel}>
        {carouselImages.map((slide, index) => (
          <div
            key={index}
            style={{
              ...styles.slide,
              ...(index === currentSlide ? styles.activeSlide : {}),
            }}
          >
            <img src={slide.src} alt={slide.text} style={styles.carouselImage} />
            <div style={styles.overlay} />
            <div style={styles.slideText}>{slide.text}</div>
          </div>
        ))}
      </div>

      <div style={styles.features}>
        <div style={styles.featureCard}>
          <Truck size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>Free Delivery</span>
        </div>
        <div style={styles.featureCard}>
          <MapPin size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>Available in Punjab</span>
        </div>
        <div style={styles.featureCard}>
          <Clock size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>24-Hour Support</span>
        </div>
        <div style={styles.featureCard}>
          <RefreshCw size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>Easy Returns</span>
        </div>
      </div>

      <section>
        {renderBookSection("Popular in Punjab", products.popularinpunjab)}
        {renderBookSection("Punjabi Literature", products.punjabiliterature)}
        {renderBookSection("Punjabi Culture", products.punjabiculture)}
        {renderBookSection("Best Sellers", products.bestsellers)}
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            ਪੰਜਾਬੀ ਬੁੱਕਸ
          </h3>
          <p style={{ color: '#A0AEC0' }}>© 2024 Punjabi Bookstore. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
*/



/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Truck, Clock, RefreshCw, MapPin, ShoppingCart, Menu, X } from 'lucide-react';

export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
      console.log(`API Response for ${section}:`, response.data);

      if (response.data && response.data.length > 0) {
        const filteredProducts = response.data.filter(product =>
          product.section.includes(section)
        );
        console.log(`Filtered Products for ${section}:`, filteredProducts);

        setProducts(prevProducts => ({
          ...prevProducts,
          [section]: filteredProducts
        }));
      } else {
        console.error(`No products found or invalid response structure for ${section}.`);
      }
    } catch (error) {
      console.error(`Error fetching products for section ${section}:`, error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([
        fetchProductsBySection('punjabi literature'),
        fetchProductsBySection('punjabi culture'),
        fetchProductsBySection('best sellers'),
        fetchProductsBySection('popular in punjab')
      ]);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const carouselImages = [
    { src: "https://via.placeholder.com/800x600.png?text=Best+Sellers", text: "Best Sellers" },
    { src: "https://via.placeholder.com/800x600.png?text=Punjabi+Literature", text: "Punjabi Literature" },
    { src: "https://via.placeholder.com/800x600.png?text=New+Arrivals", text: "New Arrivals" },
  ];

  const styles = {
    container: {
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#FFF5E6',
    },
    infoStrip: {
      background: 'linear-gradient(90deg, #FF9933 0%, #FF8C00 100%)',
      color: 'white',
      padding: '8px 0',
      position: 'relative',
      overflow: 'hidden',
    },
    stripText: {
      animation: 'marquee 20s linear infinite',
      whiteSpace: 'nowrap',
      fontSize: '14px',
      fontWeight: '500',
      letterSpacing: '0.5px',
    },
    navbar: {
      position: 'sticky',
      top: 0,
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 50,
      padding: '12px 0',
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#FF9933',
    },
    menuButton: {
      display: 'none',
      padding: '8px',
      cursor: 'pointer',
    },
    navLinks: {
      display: 'flex',
      gap: '32px',
    },
    link: {
      color: '#4A5568',
      textDecoration: 'none',
      fontWeight: '500',
    },
    searchBar: {
      width: '100%',
      maxWidth: '300px',
      margin: '0 auto',
    },
    carousel: {
      position: 'relative',
      width: '100%',
      height: '300px',
      overflow: 'hidden',
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: 'opacity 0.5s ease-in-out',
    },
    activeSlide: {
      opacity: 1,
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
    },
    slideText: {
      position: 'absolute',
      bottom: '48px',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'white',
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '100%',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    features: {
      maxWidth: '1200px',
      margin: '48px auto',
      padding: '0 16px',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
    },
    featureCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
    },
    featureIcon: {
      color: '#FF9933',
      marginBottom: '12px',
    },
    featureText: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#4A5568',
      textAlign: 'center',
    },
    booksSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '48px 16px',
    },
    booksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '16px',
    },
    bookCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
    },
    bookImage: {
      width: '100%',
      aspectRatio: '3/4',
      objectFit: 'cover',
    },
    bookInfo: {
      padding: '16px',
    },
    bookTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#2D3748',
      marginBottom: '4px',
    },
    bookAuthor: {
      fontSize: '14px',
      color: '#718096',
      marginBottom: '8px',
    },
    bookPrice: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#FF9933',
    },
    addToCartButton: {
      width: '100%',
      padding: '8px 16px',
      backgroundColor: '#FF9933',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '12px',
      transition: 'background-color 0.2s',
    },
    footer: {
      backgroundColor: '#2D3748',
      color: 'white',
      padding: '48px 0',
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      textAlign: 'center',
    },
  };

 const renderBookSection = (title, books) => (
  <div style={styles.booksSection}>
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#2D3748' }}>
      {title}
    </h2>
    <div style={styles.booksGrid}>
      {books && books.length > 0 ? (
        books.map((book) => (
          <div key={book._id} style={styles.bookCard}>
            <img
              src={
                book.images && book.images.length > 0
                  ? `http://localhost:3001${book.images[0]}`  // Ensure correct URL
                  : "https://via.placeholder.com/300x400.png?text=No+Image"  // Fallback image if no image exists
              }
              alt={book.name || "Book Image"}
              style={styles.bookImage}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite fallback loop
                e.target.src = "https://via.placeholder.com/300x400.png?text=No+Image"; // Placeholder on error
              }}
            />
            <div style={styles.bookInfo}>
              <h3 style={styles.bookTitle}>{book.name}</h3>
              <p style={styles.bookAuthor}>{book.author}</p>
              <p style={styles.bookPrice}>₹{book.price}</p>
            
                <button
                  style={styles.addToCartButton}
                  onClick={() => setCartCount(prev => prev + 1)}
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No books available in this section.</p>
        )}
      </div>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.infoStrip}>
        <div style={styles.stripText}>
          All Punjabi books available here | 10% Discount on First Order | Free Delivery Above ₹499
        </div>
      </div>

      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <h1 style={styles.logo}>ਪੰਜਾਬੀ ਬੁੱਕਸ</h1>

          <div style={styles.searchBar}>
            <input type="text" placeholder="Search..." style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }} />
          </div>

          <button style={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div style={{
            ...styles.navLinks,
            ...(isMenuOpen ? {
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              padding: '16px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            } : {}),
          }}>
            <a href="#" style={styles.link}>Home</a>
            <a href="#" style={styles.link}>Books</a>
            <a href="#" style={styles.link}>About Us</a>
            <a href="#" style={styles.link}>Contact</a>
            <div style={{ position: 'relative' }}>
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#FF9933',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                }}>
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div style={styles.carousel}>
        {carouselImages.map((slide, index) => (
          <div
            key={index}
            style={{
              ...styles.slide,
              ...(index === currentSlide ? styles.activeSlide : {}),
            }}
          >
            <img src={slide.src} alt={slide.text} style={styles.carouselImage} />
            <div style={styles.overlay} />
            <div style={styles.slideText}>{slide.text}</div>
          </div>
        ))}
      </div>

      <div style={styles.features}>
        <div style={styles.featureCard}>
          <Truck size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>Free Delivery</span>
        </div>
        <div style={styles.featureCard}>
          <MapPin size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>Available in Punjab</span>
        </div>
        <div style={styles.featureCard}>
          <Clock size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>24-Hour Support</span>
        </div>
        <div style={styles.featureCard}>
          <RefreshCw size={32} style={styles.featureIcon} />
          <span style={styles.featureText}>Easy Returns</span>
        </div>
      </div>

      <section>
        {renderBookSection("Popular in Punjab", products.popularinpunjab)}
        {renderBookSection("Punjabi Literature", products.punjabiliterature)}
        {renderBookSection("Punjabi Culture", products.punjabiculture)}
        {renderBookSection("Best Sellers", products.bestsellers)}
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            ਪੰਜਾਬੀ ਬੁੱਕਸ
          </h3>
          <p style={{ color: '#A0AEC0' }}>© 2024 Punjabi Bookstore. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
*/


