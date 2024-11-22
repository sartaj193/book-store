/*import React, { useState, useEffect } from 'react';
import { ChevronRight, ShoppingCart, Truck, Clock, RefreshCw } from 'lucide-react';

import "./bookcomponnent.css"
const Button = ({ children, className, ...props }) => (
  <button className={`button ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children, className, ...props }) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);

const Badge = ({ children, className, ...props }) => (
  <span className={`badge ${className}`} {...props}>
    {children}
  </span>
);

const books = {
  featured: [
    { id: 1, title: "ਸੁਹਾਗ", author: "Bhai Vir Singh", price: 299, cover: "/placeholder.svg?height=400&width=300" },
    { id: 2, title: "ਪੰਜਾਬੀ ਵਿਆਕਰਣ", author: "Prof. Brahm Jagdish Singh", price: 199, cover: "/placeholder.svg?height=400&width=300" },
    { id: 3, title: "ਮਿੱਟੀ ਧੁੰਦ", author: "Nanak Singh", price: 249, cover: "/placeholder.svg?height=400&width=300" },
  ],
  popular: [
    { id: 4, title: "ਪੰਜਾਬੀ ਸਾਹਿਤ", author: "Dr. Dharam Singh", price: 399, cover: "/placeholder.svg?height=400&width=300" },
    { id: 5, title: "ਕੱਚ ਦੀਆਂ ਮੁੰਦਰਾਂ", author: "Dalip Kaur Tiwana", price: 299, cover: "/placeholder.svg?height=400&width=300" },
    { id: 6, title: "ਮੇਰਾ ਦਾਗ਼ੀ ਲਹੂ", author: "Shiv Kumar Batalvi", price: 349, cover: "/placeholder.svg?height=400&width=300" },
    { id: 7, title: "ਪਰਛਾਵੇਂ", author: "Gurdial Singh", price: 249, cover: "/placeholder.svg?height=400&width=300" },
    { id: 16, title: "ਲਹੂ ਦੀ ਲੋਅ", author: "S. S. Misha", price: 279, cover: "/placeholder.svg?height=400&width=300" },
    { id: 17, title: "ਪੰਜਾਬੀ ਕਵੀ ਦਰਬਾਰ", author: "Dr. Jagtar", price: 329, cover: "/placeholder.svg?height=400&width=300" },
  ],
  punjabi: [
    { id: 8, title: "ਪੰਜਾਬੀ ਸੂਫ਼ੀ ਕਾਵਿ", author: "Dr. Gurdev Singh", price: 299, cover: "/placeholder.svg?height=400&width=300" },
    { id: 9, title: "ਪੰਜਾਬੀ ਲੋਕ ਸਾਹਿਤ", author: "Dr. Kartar Singh Duggal", price: 349, cover: "/placeholder.svg?height=400&width=300" },
    { id: 10, title: "ਪੰਜਾਬੀ ਸਭਿਆਚਾਰ", author: "Dr. Attar Singh", price: 199, cover: "/placeholder.svg?height=400&width=300" },
    { id: 11, title: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ", author: "Dr. Harkirat Singh", price: 249, cover: "/placeholder.svg?height=400&width=300" },
    { id: 18, title: "ਪੰਜਾਬੀ ਨਾਟਕ", author: "Dr. Satish Kumar Verma", price: 289, cover: "/placeholder.svg?height=400&width=300" },
    { id: 19, title: "ਪੰਜਾਬੀ ਗਲਪ", author: "Dr. Brahm Jagdish Singh", price: 319, cover: "/placeholder.svg?height=400&width=300" },
  ]
};

const BookCard = ({ book, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`book-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="book-card-content">
        <div className="book-cover-container">
          <img 
            src={book.cover} 
            alt={book.title} 
            className="book-cover"
          />
          <button 
            className={`add-to-cart-button ${isHovered ? 'visible' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(book);
            }}
          >
            <ShoppingCart className="icon" />
          </button>
        </div>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          <p className="book-price">₹{book.price}</p>
        </div>
      </div>
    </Card>
  );
};

const CategorySection = ({ title, books, expanded, onViewMore, onAddToCart }) => (
  <section className="category-section">
    <div className="category-header">
      <h2 className="category-title">{title}</h2>
      <Button
        onClick={onViewMore}
        className="view-more-button"
      >
        {expanded ? 'View Less' : 'View More'}
        <ChevronRight className="icon" />
      </Button>
    </div>
    <div className="book-grid">
      {books.slice(0, expanded ? books.length : 5).map((book) => (
        <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
      ))}
    </div>
  </section>
);

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: "ਸਾਹਿਤ ਦੀ ਦੁਨੀਆ",
      subtitle: "Discover the World of Literature",
      image: "/placeholder.svg?height=600&width=1200"
    },
    {
      title: "ਨਵੀਆਂ ਕਿਤਾਬਾਂ",
      subtitle: "New Arrivals",
      image: "/placeholder.svg?height=600&width=1200"
    },
    {
      title: "ਵਿਸ਼ੇਸ਼ ਪੇਸ਼ਕਸ਼",
      subtitle: "Special Offers",
      image: "/placeholder.svg?height=600&width=1200"
    }
  ];

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="slide-overlay" />
          <img
            src={slide.image}
            alt={slide.title}
            className="slide-image"
          />
          <div className="slide-content">
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-subtitle">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="cart-item">
    <img src={item.cover} alt={item.title} className="cart-item-cover" />
    <div className="cart-item-info">
      <h3 className="cart-item-title">{item.title}</h3>
      <p className="cart-item-author">{item.author}</p>
      <p className="cart-item-price">₹{item.price}</p>
    </div>
    <div className="cart-item-actions">
      <Button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
        -
      </Button>
      <span className="cart-item-quantity">{item.quantity}</span>
      <Button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
        +
      </Button>
      <Button onClick={() => onRemove(item.id)} className="remove-button">
        <RefreshCw className="icon" />
      </Button>
    </div>
  </div>
);

const BookstoreInterface = () => {
  const [expandedSections, setExpandedSections] = useState({
    popular: false,
    punjabi: false,
  });
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="bookstore-interface">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <h1 className="navbar-title">Punjabi Bookstore</h1>
            <div className="navbar-links">
              <a href="#" className="navbar-link">Home</a>
              <a href="#" className="navbar-link">Categories</a>
              <a href="#" className="navbar-link">New Arrivals</a>
              <a href="#" className="navbar-link">Contact</a>
            </div>
            <div className="navbar-actions">
              <Button className="cart-button" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart className="icon" />
                {cartItemsCount > 0 && (
                  <span className="cart-count">{cartItemsCount}</span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isCartOpen && (
        <div className="cart-modal">
          <div className="cart-content">
            <div className="cart-header">
              <h2 className="cart-title">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="close-button">
                Close
              </button>
            </div>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
                <div className="cart-footer">
                  <p className="cart-total">Total: ₹{cartTotal.toFixed(2)}</p>
                  <Button className="checkout-button">Checkout</Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <HeroCarousel />

      <main className="main-content">
        <div className="services-grid">
          <div className="service-item">
            <Truck className="service-icon" />
            <h3 className="service-title">Free Delivery</h3>
            <p className="service-description">All over Punjab</p>
          </div>
          <div className="service-item">
            <Clock className="service-icon" />
            <h3 className="service-title">24/7 Support</h3>
            <p className="service-description">Always here to help</p>
          </div>
          <div className="service-item">
            <RefreshCw className="service-icon" />
            <h3 className="service-title">Easy Returns</h3>
            <p className="service-description">7 day return policy</p>
          </div>
        </div>

        <CategorySection
          title="Popular Books"
          books={books.popular}
          expanded={expandedSections.popular}
          onViewMore={() => toggleSection('popular')}
          onAddToCart={addToCart}
        />

        <CategorySection
          title="Punjabi Literature"
          books={books.punjabi}
          expanded={expandedSections.punjabi}
          onViewMore={() => toggleSection('punjabi')}
          onAddToCart={addToCart}
        />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-text">Your trusted source for Punjabi literature and books.</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Terms & Conditions</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Shipping Information</a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="footer-contact">
              <p>Email: info@punjabibooks.com</p>
              <p>Phone: +91 123 456 7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookstoreInterface;
*/
import React, { useState, useEffect } from 'react';
import { ChevronRight, ShoppingCart, Truck, Clock, RefreshCw } from 'lucide-react';

import './Bookinterface.css';
const Button = ({ children, className, ...props }) => (
  <button className={`button ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children, className, ...props }) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);

const Badge = ({ children, className, ...props }) => (
  <span className={`badge ${className}`} {...props}>
    {children}
  </span>
);

const books = {
  featured: [
    { id: 1, title: "ਸੁਹਾਗ", author: "Bhai Vir Singh", price: 299, cover: "/placeholder.svg?height=400&width=300" },
    { id: 2, title: "ਪੰਜਾਬੀ ਵਿਆਕਰਣ", author: "Prof. Brahm Jagdish Singh", price: 199, cover: "/placeholder.svg?height=400&width=300" },
    { id: 3, title: "ਮਿੱਟੀ ਧੁੰਦ", author: "Nanak Singh", price: 249, cover: "/placeholder.svg?height=400&width=300" },
  ],
  popular: [
    { id: 4, title: "ਪੰਜਾਬੀ ਸਾਹਿਤ", author: "Dr. Dharam Singh", price: 399, cover: "/placeholder.svg?height=400&width=300" },
    { id: 5, title: "ਕੱਚ ਦੀਆਂ ਮੁੰਦਰਾਂ", author: "Dalip Kaur Tiwana", price: 299, cover: "/placeholder.svg?height=400&width=300" },
    { id: 6, title: "ਮੇਰਾ ਦਾਗ਼ੀ ਲਹੂ", author: "Shiv Kumar Batalvi", price: 349, cover: "/placeholder.svg?height=400&width=300" },
    { id: 7, title: "ਪਰਛਾਵੇਂ", author: "Gurdial Singh", price: 249, cover: "/placeholder.svg?height=400&width=300" },
    { id: 16, title: "ਲਹੂ ਦੀ ਲੋਅ", author: "S. S. Misha", price: 279, cover: "/placeholder.svg?height=400&width=300" },
    { id: 17, title: "ਪੰਜਾਬੀ ਕਵੀ ਦਰਬਾਰ", author: "Dr. Jagtar", price: 329, cover: "/placeholder.svg?height=400&width=300" },
  ],
  punjabi: [
    { id: 8, title: "ਪੰਜਾਬੀ ਸੂਫ਼ੀ ਕਾਵਿ", author: "Dr. Gurdev Singh", price: 299, cover: "/placeholder.svg?height=400&width=300" },
    { id: 9, title: "ਪੰਜਾਬੀ ਲੋਕ ਸਾਹਿਤ", author: "Dr. Kartar Singh Duggal", price: 349, cover: "/placeholder.svg?height=400&width=300" },
    { id: 10, title: "ਪੰਜਾਬੀ ਸਭਿਆਚਾਰ", author: "Dr. Attar Singh", price: 199, cover: "/placeholder.svg?height=400&width=300" },
    { id: 11, title: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ", author: "Dr. Harkirat Singh", price: 249, cover: "/placeholder.svg?height=400&width=300" },
    { id: 18, title: "ਪੰਜਾਬੀ ਨਾਟਕ", author: "Dr. Satish Kumar Verma", price: 289, cover: "/placeholder.svg?height=400&width=300" },
    { id: 19, title: "ਪੰਜਾਬੀ ਗਲਪ", author: "Dr. Brahm Jagdish Singh", price: 319, cover: "/placeholder.svg?height=400&width=300" },
  ]
};

const BookCard = ({ book, onAddToCart }) => {
  return (
    <Card className="book-card">
      <div className="book-card-content">
        <div className="book-cover-container">
          <img 
            src={book.cover} 
            alt={book.title} 
            className="book-cover"
          />
          <button 
            className="add-to-cart-button"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(book);
            }}
          >
            <ShoppingCart className="icon" />
          </button>
        </div>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          <p className="book-price">₹{book.price}</p>
        </div>
      </div>
    </Card>
  );
};
const CategorySection = ({ title, books, expanded, onViewMore, onAddToCart }) => (
  <section className="category-section">
    <div className="category-header">
      <h2 className="category-title">{title}</h2>
      <Button
        onClick={onViewMore}
        className="view-more-button"
      >
        {expanded ? 'View Less' : 'View More'}
        <ChevronRight className="icon" />
      </Button>
    </div>
    <div className="book-grid">
      {books.slice(0, expanded ? books.length : 5).map((book) => (
        <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
      ))}
    </div>
  </section>
);

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: "ਸਾਹਿਤ ਦੀ ਦੁਨੀਆ",
      subtitle: "Discover the World of Literature",
      image: "/placeholder.svg?height=600&width=1200"
    },
    {
      title: "ਨਵੀਆਂ ਕਿਤਾਬਾਂ",
      subtitle: "New Arrivals",
      image: "/placeholder.svg?height=600&width=1200"
    },
    {
      title: "ਵਿਸ਼ੇਸ਼ ਪੇਸ਼ਕਸ਼",
      subtitle: "Special Offers",
      image: "/placeholder.svg?height=600&width=1200"
    }
  ];

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="slide-overlay" />
          <img
            src={slide.image}
            alt={slide.title}
            className="slide-image"
          />
          <div className="slide-content">
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-subtitle">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="cart-item">
    <img src={item.cover} alt={item.title} className="cart-item-cover" />
    <div className="cart-item-info">
      <h3 className="cart-item-title">{item.title}</h3>
      <p className="cart-item-author">{item.author}</p>
      <p className="cart-item-price">₹{item.price}</p>
    </div>
    <div className="cart-item-actions">
      <Button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
        -
      </Button>
      <span className="cart-item-quantity">{item.quantity}</span>
      <Button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
        +
      </Button>
      <Button onClick={() => onRemove(item.id)} className="remove-button">
        <RefreshCw className="icon" />
      </Button>
    </div>
  </div>
);

const BookstoreInterface = () => {
  const [expandedSections, setExpandedSections] = useState({
    popular: false,
    punjabi: false,
  });
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="bookstore-interface">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <h1 className="navbar-title">Punjabi Bookstore</h1>
            <div className="navbar-links">
              <a href="#" className="navbar-link">Home</a>
              <a href="#" className="navbar-link">Categories</a>
              <a href="#" className="navbar-link">New Arrivals</a>
              <a href="#" className="navbar-link">Contact</a>
            </div>
            <div className="navbar-actions">
              <Button className="cart-button" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart className="icon" />
                {cartItemsCount > 0 && (
                  <span className="cart-count">{cartItemsCount}</span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isCartOpen && (
        <div className="cart-modal">
          <div className="cart-content">
            <div className="cart-header">
              <h2 className="cart-title">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="close-button">
                Close
              </button>
            </div>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
                <div className="cart-footer">
                  <p className="cart-total">Total: ₹{cartTotal.toFixed(2)}</p>
                  <Button className="checkout-button">Checkout</Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <HeroCarousel />

      <main className="main-content">
        <div className="services-grid">
          <div className="service-item">
            <Truck className="service-icon" />
            <h3 className="service-title">Free Delivery</h3>
            <p className="service-description">All over Punjab</p>
          </div>
          <div className="service-item">
            <Clock className="service-icon" />
            <h3 className="service-title">24/7 Support</h3>
            <p className="service-description">Always here to help</p>
          </div>
          <div className="service-item">
            <RefreshCw className="service-icon" />
            <h3 className="service-title">Easy Returns</h3>
            <p className="service-description">7 day return policy</p>
          </div>
        </div>

        <CategorySection
          title="Popular Books"
          books={books.popular}
          expanded={expandedSections.popular}
          onViewMore={() => toggleSection('popular')}
          onAddToCart={addToCart}
        />

        <CategorySection
          title="Punjabi Literature"
          books={books.punjabi}
          expanded={expandedSections.punjabi}
          onViewMore={() => toggleSection('punjabi')}
          onAddToCart={addToCart}
        />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-text">Your trusted source for Punjabi literature and books.</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Terms & Conditions</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Shipping Information</a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="footer-contact">
              <p>Email: info@punjabibooks.com</p>
              <p>Phone: +91 123 456 7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookstoreInterface;