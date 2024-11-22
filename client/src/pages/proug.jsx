/*import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img
          src={product.images && product.images.length > 0 ? product.images[0] : "https://via.placeholder.com/300x400.png?text=No+Image"}
          alt={product.name}
          className="card-img-top"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.author}</p>
          <p className="card-text">₹{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;*/


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Truck, Clock, RefreshCw, MapPin, ShoppingCart, Menu, X } from 'lucide-react';

import ProductCard from './oo';
export default function PunjabiBookstoreii() {
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
    try {
      await Promise.all([
        fetchProductsBySection('punjabi literature'),
        fetchProductsBySection('punjabi culture'),
        fetchProductsBySection('best sellers'),
        fetchProductsBySection('popular in punjab')
      ]);
    } finally {
      setLoading(false);
    }
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
    // ... (keep all the styles from the original code)
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
            <ProductCard
              key={book._id}
              book={book}
              onAddToCart={() => setCartCount(prev => prev + 1)}
              styles={styles}
            />
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
     popular in punjab punjabi literature  punjabi culture best sellers
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

import ProductCard from './oo';
export default function PunjabiBookstoreii() {
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
      textAlign: 'center',
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
      alignItems: 'center',
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    link: {
      color: '#4A5568',
      textDecoration: 'none',
      fontWeight: '500',
      cursor: 'pointer',
    },
    searchBar: {
      width: '100%',
      maxWidth: '300px',
      margin: '0 16px',
    },
    searchInput: {
      width: '100%',
      padding: '8px 16px',
      border: '1px solid #E2E8F0',
      borderRadius: '4px',
      fontSize: '14px',
    },
    carousel: {
      position: 'relative',
      width: '100%',
      height: '400px',
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
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
      '&:hover': {
        transform: 'translateY(-4px)',
      },
    },
    featureIcon: {
      color: '#FF9933',
      marginBottom: '16px',
    },
    featureText: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#4A5568',
      textAlign: 'center',
    },
    booksSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 16px',
    },
    booksGrid: {
      display: 'grid',
      gap: '24px',
    },
    bookCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
      },
    },
    bookInfo: {
      padding: '16px',
    },
    bookTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#2D3748',
      marginBottom: '8px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
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
      marginBottom: '16px',
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
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: '#F97316',
      },
    },
    footer: {
      backgroundColor: '#2D3748',
      color: 'white',
      padding: '48px 0',
      marginTop: '48px',
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      textAlign: 'center',
    },
  };

  const fetchProductsBySection = async (section) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
      if (response.data && Array.isArray(response.data)) {
        // Safely filter products by checking if section exists and is a string
        const filteredProducts = response.data.filter(product => {
          const productSection = String(product.section || '').toLowerCase();
          const targetSection = section.toLowerCase();
          return productSection.includes(targetSection);
        });

        // Update products state with the filtered results
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


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderBookSection = (title, books) => (
    <div style={styles.booksSection}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#2D3748' }}>
        {title}
      </h2>
      <div style={{
        ...styles.booksGrid,
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '24px'
      }}>
        {books && books.length > 0 ? (
          books.map((book) => (
            <ProductCard
              key={book._id}
              book={book}
              onAddToCart={() => setCartCount(prev => prev + 1)}
              styles={styles}
            />
          ))
        ) : (
          <p>No books available in this section.</p>
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
        height: '100vh' 
      }}>
        Loading...
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
        color: 'red' 
      }}>
        Error: {error}
      </div>
    );
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
            <input
              type="text"
              placeholder="Search books..."
              style={styles.searchInput}
            />
          </div>

          <button 
            style={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div style={{
            ...styles.navLinks,
            ...(isMenuOpen && {
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              padding: '16px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }),
          }}>
            <a href="#" style={styles.link}>Home</a>
            <a href="#" style={styles.link}>Books</a>
            <a href="#" style={styles.link}>About Us</a>
            <a href="#" style={styles.link}>Contact</a>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
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

      <section style={{ padding: '32px 0' }}>
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
import { useNavigate } from 'react-router-dom';

import ProductCard from './oo';

import CartD from '../cart/cart';
export default function PunjabiBookstoreii() {
  const [cartItems, setCartItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState({
    punjabiliterature: [],
    punjabiculture: [],
    bestsellers: [],
    popularinpunjab: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const guestId = localStorage.getItem('guestId') || Date.now().toString();
  localStorage.setItem('guestId', guestId);

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
      textAlign: 'center',
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
      alignItems: 'center',
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    link: {
      color: '#4A5568',
      textDecoration: 'none',
      fontWeight: '500',
      cursor: 'pointer',
    },
    searchBar: {
      width: '100%',
      maxWidth: '300px',
      margin: '0 16px',
    },
    searchInput: {
      width: '100%',
      padding: '8px 16px',
      border: '1px solid #E2E8F0',
      borderRadius: '4px',
      fontSize: '14px',
    },
    carousel: {
      position: 'relative',
      width: '100%',
      height: '400px',
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
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
      '&:hover': {
        transform: 'translateY(-4px)',
      },
    },
    featureIcon: {
      color: '#FF9933',
      marginBottom: '16px',
    },
    featureText: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#4A5568',
      textAlign: 'center',
    },
    booksSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 16px',
    },
    booksGrid: {
      display: 'grid',
      gap: '24px',
    },
    bookCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
      },
    },
    bookInfo: {
      padding: '16px',
    },
    bookTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#2D3748',
      marginBottom: '8px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
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
      marginBottom: '16px',
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
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: '#F97316',
      },
    },
    footer: {
      backgroundColor: '#2D3748',
      color: 'white',
      padding: '48px 0',
      marginTop: '48px',
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      textAlign: 'center',
    },
  };

  const fetchProductsBySection = async (section) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/cart/${guestId}`);
        setCartItems(response.data.items);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, [guestId]);

  const handleAddToCart = async (book) => {
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post('http://localhost:3001/api/cart/add', payload);
      setCartItems(response.data.items);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart. Please try again.');
    }
  };

  const updateQuantity = async (bookId, change) => {
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`http://localhost:3001/api/cart/update/${guestId}`, payload);
      setCartItems(response.data.items);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const renderBookSection = (title, books) => (
    <div style={styles.booksSection}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#2D3748' }}>
        {title}
      </h2>
      <div style={{
        ...styles.booksGrid,
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '24px'
      }}>
        {books && books.length > 0 ? (
          books.map((book) => (
            <ProductCard
              key={book._id}
              book={book}
              guestId={guestId}
              onAddToCart={() => handleAddToCart(book)}
              styles={styles}
            />
          ))
        ) : (
          <p>No books available in this section.</p>
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
        height: '100vh' 
      }}>
        Loading...
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
        color: 'red' 
      }}>
        Error: {error}
      </div>
    );
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
            <input
              type="text"
              placeholder="Search books..."
              style={styles.searchInput}
            />
          </div>

          <button 
            style={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div style={{
            ...styles.navLinks,
            ...(isMenuOpen && {
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              padding: '16px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }),
          }}>
            <a href="#" style={styles.link}>Home</a>
            <a href="#" style={styles.link}>Books</a>
            <a href="#" style={styles.link}>About Us</a>
            <a href="#" style={styles.link}>Contact</a>
            <div 
              style={{ position: 'relative', cursor: 'pointer' }}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
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
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
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

      <section style={{ padding: '32px 0' }}>
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

      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '300px',
          backgroundColor: 'white',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
          zIndex: 1000,
          padding: '20px',
          overflowY: 'auto'
        }}>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
          <CartD 
            guestId={guestId} 
            cart={{ items: cartItems, totalAmount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0) }}
            updateQuantity={updateQuantity}
          />
        </div>
      )}
    </div>
  );
}
*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Truck, Clock, RefreshCw, MapPin, ShoppingCart, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './oo';
import CartD from '../cart/cart';

export default function PunjabiBookstoreii() {
  const [cartItems, setCartItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState({
    punjabiliterature: [],
    punjabiculture: [],
    bestsellers: [],
    popularinpunjab: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const guestId = localStorage.getItem('guestId') || Date.now().toString();
  localStorage.setItem('guestId', guestId);

  const carouselImages = [
    { src: require("../assets/books/one.jpg"), text: "Best Sellers" },
    { src: require('../assets/bookv/six one.jpg'), text: "Punjabi Literature" },
    { src: require('../assets/bookv/sixty.jpg'), text: "New Arrivals" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fetchProductsBySection = async (section) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
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

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/cart/${guestId}`);
        setCartItems(response.data.items);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, [guestId]);

  const handleAddToCart = async (book) => {
    try {
      const payload = {
        guestId,
        bookId: book._id,
        title: book.name,
        image: book.images?.[0] || "https://via.placeholder.com/300x400.png?text=No+Image",
        price: book.price,
      };
      const response = await axios.post('http://localhost:3001/api/cart/add', payload);
      setCartItems(response.data.items);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart. Please try again.');
    }
  };

  const updateQuantity = async (bookId, change) => {
    try {
      const payload = { bookId, quantityChange: change };
      const response = await axios.put(`http://localhost:3001/api/cart/update/${guestId}`, payload);
      setCartItems(response.data.items);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const renderBookSection = (title, books) => (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '48px 16px',
    }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#2D3748' }}>
        {title}
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '16px',
        '@media (min-width: 640px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media (min-width: 1024px)': {
          gridTemplateColumns: 'repeat(4, 1fr)',
        },
      }}>
        {books && books.length > 0 ? (
          books.map((book) => (
            <ProductCard
              key={book._id}
              book={book}
              guestId={guestId}
              onAddToCart={() => handleAddToCart(book)}
              styles={{
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
              }}
            />
          ))
        ) : (
          <p>No books available in this section.</p>
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
        height: '100vh' 
      }}>
        Loading...
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
        color: 'red' 
      }}>
        Error: {error}
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#FFF5E6',
    }}>
      <div style={{
        background: 'linear-gradient(90deg, #FF9933 0%, #FF8C00 100%)',
        color: 'white',
        padding: '8px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          animation: 'marquee 20s linear infinite',
          whiteSpace: 'nowrap',
          fontSize: '14px',
          fontWeight: '500',
          letterSpacing: '0.5px',
          textAlign: 'center',
        }}>
          All Punjabi books available here | 10% Discount on First Order | Free Delivery Above ₹499
        </div>
      </div>

      <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 50,
        padding: '12px 0',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#FF9933',
          }}>ਪੰਜਾਬੀ ਬੁੱਕਸ</h1>

          <div style={{
            width: '100%',
            maxWidth: '300px',
            margin: '0 16px',
          }}>
            <input
              type="text"
              placeholder="Search books..."
              style={{
                width: '100%',
                padding: '8px 16px',
                border: '1px solid #E2E8F0',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            />
          </div>

          <button 
            style={{
              display: 'none',
              padding: '8px',
              cursor: 'pointer',
              '@media (max-width: 768px)': {
                display: 'block',
              },
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
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
          }}>
            <a href="#" style={{
              color: '#4A5568',
              textDecoration: 'none',
              fontWeight: '500',
              cursor: 'pointer',
            }}>Home</a>
            <a href="#" style={{
              color: '#4A5568',
              textDecoration: 'none',
              fontWeight: '500',
              cursor: 'pointer',
            }}>Books</a>
            <a href="#" style={{
              color: '#4A5568',
              textDecoration: 'none',
              fontWeight: '500',
              cursor: 'pointer',
            }}>About Us</a>
            <a href="#" style={{
              color: '#4A5568',
              textDecoration: 'none',
              fontWeight: '500',
              cursor: 'pointer',
            }}>Contact</a>
            <div 
              style={{ position: 'relative', cursor: 'pointer' }}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
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
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div style={{
        position: 'relative',
        width: '100vw',
        height: '300px',
        '@media (min-width: 640px)': {
          height: '400px',
        },
        '@media (min-width: 1024px)': {
          height: '600px',
        },
        overflow: 'hidden',
      }}>
        {carouselImages.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            <img src={slide.src} alt={slide.text} style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
            }} />
            <div style={{
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
            }}>{slide.text}</div>
          </div>
        ))}
      </div>

      <div style={{
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
      }}>
        <div style={{
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
        }}>
          <Truck size={32} style={{ color: '#FF9933', marginBottom: '12px' }} />
          <span style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#4A5568',
            textAlign: 'center',
          }}>Free Delivery</span>
        </div>
        <div style={{
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
        }}>
          <MapPin size={32} style={{ color: '#FF9933', marginBottom: '12px' }} />
          <span style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#4A5568',
            textAlign: 'center',
          }}>Available in Punjab</span>
        </div>
        <div style={{
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
        }}>
          <Clock size={32} style={{ color: '#FF9933', marginBottom: '12px' }} />
          <span style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#4A5568',
            textAlign: 'center',
          }}>24-Hour Support</span>
        </div>
        <div style={{
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
        }}>
          <RefreshCw size={32} style={{ color: '#FF9933', marginBottom: '12px' }} />
          <span style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#4A5568',
            textAlign: 'center',
          }}>Easy Returns</span>
        </div>
      </div>

      <section style={{ padding: '32px 0' }}>
        {renderBookSection("Popular in Punjab", products.popularinpunjab)}
        {renderBookSection("Punjabi Literature", products.punjabiliterature)}
        {renderBookSection("Punjabi Culture", products.punjabiculture)}
        {renderBookSection("Best Sellers", products.bestsellers)}
      </section>

      <footer style={{
        backgroundColor: '#2D3748',
        color: 'white',
        padding: '48px 0',
        marginTop: '48px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          textAlign: 'center',
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            ਪੰਜਾਬੀ ਬੁੱਕਸ
          </h3>
          <p style={{ color: '#A0AEC0' }}>© 2024 Punjabi Bookstore. All Rights Reserved.</p>
        </div>
      </footer>

      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '300px',
          backgroundColor: 'white',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
          zIndex: 1000,
          padding: '20px',
          overflowY: 'auto'
        }}>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
          <CartD 
            guestId={guestId} 
            cart={{ items: cartItems, totalAmount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0) }}
            updateQuantity={updateQuantity}
          />
        </div>
      )}
    </div>
  );
}




