/*import React, { useState, useEffect } from 'react';

export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cart, setCart] = useState([]);

  const books = [
    { id: 1, name: "ਪੰਜਾਬੀ ਸਾਹਿਤ", author: "ਅਮਰਜੀਤ ਸਿੰਘ", price: "₹450", image: "/placeholder.svg?height=300&width=200" },
    { id: 2, name: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ", author: "ਹਰਪ੍ਰੀਤ ਕੌਰ", price: "₹350", image: "../../assets/books/ten.jpg?height=300&width=200" },
    { id: 3, name: "ਪੰਜਾਬੀ ਵਿਰਸਾ", author: "ਸੁਰਿੰਦਰ ਸਿੰਘ", price: "₹550", image: "/placeholder.svg?height=300&width=200" },
    { id: 4, name: "ਪੰਜਾਬੀ ਕਵਿਤਾ", author: "ਰਵਿੰਦਰ ਕੌਰ", price: "₹400", image: "/placeholder.svg?height=300&width=200" },
    { id: 5, name: "ਸੂਫ਼ੀ ਕਾਵਿ", author: "ਜਸਵਿੰਦਰ ਸਿੰਘ", price: "₹500", image: "/placeholder.svg?height=300&width=200" },
    { id: 6, name: "ਪੰਜਾਬੀ ਲੋਕ ਗੀਤ", author: "ਮਨਪ੍ਰੀਤ ਕੌਰ", price: "₹300", image: "/placeholder.svg?height=300&width=200" },
    { id: 7, name: "ਪੰਜਾਬੀ ਨਾਵਲ", author: "ਗੁਰਮੀਤ ਸਿੰਘ", price: "₹600", image: "/placeholder.svg?height=300&width=200" },
    { id: 8, name: "ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ", author: "ਨਵਜੋਤ ਕੌਰ", price: "₹450", image: "/placeholder.svg?height=300&width=200" },
  ];

  const carouselImages = [
    { src: "/placeholder.svg?height=400&width=1200", text: "Best Sellers" },
    { src: "/placeholder.svg?height=400&width=1200", text: "Punjabi Literature" },
    { src: "/placeholder.svg?height=400&width=1200", text: "New Arrivals" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (book) => {
    setCartCount(prevCount => prevCount + 1);
    setCart(prevCart => [...prevCart, book]);
  };

  const styles = {
    navbar: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#FFD700',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    navLink: {
      color: '#00008B',
      textDecoration: 'none',
      margin: '0 10px',
      fontWeight: 'bold',
    },
    infoStrip: {
      backgroundColor: '#B22222',
      color: 'white',
      padding: '10px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    carousel: {
      position: 'relative',
      height: '400px',
      marginTop: '-20px',
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    carouselText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '2em',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    iconRow: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '20px 0',
      backgroundColor: '#F0F0F0',
    },
    icon: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#00008B',
    },
    bookSection: {
      padding: '20px',
    },
    bookGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
    },
    bookCard: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      textAlign: 'center',
      position: 'relative',
    },
    bookImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    cartIcon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#FFD700',
      borderRadius: '50%',
      padding: '5px',
      cursor: 'pointer',
    },
    cartPage: {
      padding: '20px',
    },
    cartItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      borderBottom: '1px solid #ddd',
      paddingBottom: '10px',
    },
    cartItemImage: {
      width: '50px',
      height: '75px',
      objectFit: 'cover',
      marginRight: '10px',
    },
    checkoutButton: {
      backgroundColor: '#00008B',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1em',
      marginTop: '20px',
    },
    footer: {
      backgroundColor: '#00008B',
      color: 'white',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    footerSection: {
      margin: '10px',
    },
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={styles.navbar}>
        <div>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>Books</a>
          <a href="#" style={styles.navLink}>About Us</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </div>
        <div>
          🛒 {cartCount}
        </div>
      </nav>

      <div style={styles.infoStrip}>
        <marquee>All Punjabi books available here | 10% Discount | Enhance your reading!</marquee>
      </div>

      <div style={styles.carousel}>
        <img src={carouselImages[carouselIndex].src} alt="Carousel" style={styles.carouselImage} />
        <div style={styles.carouselText}>{carouselImages[carouselIndex].text}</div>
      </div>

      <div style={styles.iconRow}>
        <div style={styles.icon}>🚚 Free Delivery</div>
        <div style={styles.icon}>📍 Available in Punjab</div>
        <div style={styles.icon}>🎧 24-Hour Customer Support</div>
        <div style={styles.icon}>🔄 Easy Returns</div>
      </div>

      <div style={styles.bookSection}>
        <h2>Best Sellers</h2>
        <div style={styles.bookGrid}>
          {books.slice(0, 4).map((book) => (
            <div key={book.id} style={styles.bookCard}>
              <img src={book.image} alt={book.name} style={styles.bookImage} />
              <h3>{book.name}</h3>
              <p>{book.author}</p>
              <p>{book.price}</p>
              <div style={styles.cartIcon} onClick={() => addToCart(book)}>🛒</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.bookSection}>
        <h2>Popular in Punjab</h2>
        <div style={styles.bookGrid}>
          {books.slice(4, 8).map((book) => (
            <div key={book.id} style={styles.bookCard}>
              <img src={book.image} alt={book.name} style={styles.bookImage} />
              <h3>{book.name}</h3>
              <p>{book.author}</p>
              <p>{book.price}</p>
              <div style={styles.cartIcon} onClick={() => addToCart(book)}>🛒</div>
            </div>
          ))}
        </div>
      </div>

      {cart.length > 0 && (
        <div style={styles.cartPage}>
          <h2>Your Cart</h2>
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.cartItemImage} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.author}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
          <p>Total: ₹{cart.reduce((total, item) => total + parseInt(item.price.slice(1)), 0)}</p>
          <button style={styles.checkoutButton}>Proceed to Checkout</button>
        </div>
      )}

      <footer style={styles.footer}>
        <div style={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: info@punjabibookstore.com</p>
          <p>Phone: +91 123 456 7890</p>
        </div>
        <div style={styles.footerSection}>
          <h3>Follow Us</h3>
          <p>Facebook | Twitter | Instagram</p>
        </div>
        <div style={styles.footerSection}>
          <h3>Policies</h3>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
}
*//*import React, { useState, useEffect } from 'react';

export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cart, setCart] = useState([]);

  const books = [
    { id: 1, title: "ਪੰਜਾਬੀ ਸਾਹਿਤ", imageUrl: require('../assets/books/one.jpg'), price: "₹450" },
    { id: 2, title: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ", imageUrl: require('../assets/books/ten.jpg'), price: "₹350" },
    { id: 3, title: "ਪੰਜਾਬੀ ਵਿਰਸਾ", imageUrl: require('../assets/books/two.jpg'), price: "₹550" },
    { id: 4, title: "ਪੰਜਾਬੀ ਕਵਿਤਾ", imageUrl: require('../assets/books/three.jpg'), price: "₹400" },
    { id: 5, title: "ਸੂਫ਼ੀ ਕਾਵਿ", imageUrl: require('../assets/books/four.jpg'), price: "₹500" },
    { id: 6, title: "ਪੰਜਾਬੀ ਲੋਕ ਗੀਤ", imageUrl: require('../assets/books/five.jpg'), price: "₹300" },
    { id: 7, title: "ਪੰਜਾਬੀ ਨਾਵਲ", imageUrl: require('../assets/books/six.jpg'), price: "₹600" },
    { id: 8, title: "ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ", imageUrl: require('../assets/books/seven.jpg'), price: "₹450" },
  ];
 const carouselImages = [
  { src: require('../assets/books/one.jpg'), text: "Best Sellers" },
    { src: require('../assets/books/ten.jpg'), text: "Punjabi Literature" },
    { src: require('../assets/books/two.jpg'), text: "New Arrivals" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (book) => {
    setCartCount(prevCount => prevCount + 1);
    setCart(prevCart => [...prevCart, book]);
  };

  const styles = {
    navbar: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#FFD700',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    navLink: {
      color: '#00008B',
      textDecoration: 'none',
      margin: '0 10px',
      fontWeight: 'bold',
    },
    infoStrip: {
      backgroundColor: '#B22222',
      color: 'white',
      padding: '10px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    carousel: {
      position: 'relative',
      height: '400px',
      marginTop: '-20px',
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    carouselText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '2em',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    iconRow: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '20px 0',
      backgroundColor: '#F0F0F0',
    },
    icon: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#00008B',
    },
    bookSection: {
      padding: '20px',
    },
    bookGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
    },
    bookCard: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      textAlign: 'center',
      position: 'relative',
    },
    bookImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    cartIcon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#FFD700',
      borderRadius: '50%',
      padding: '5px',
      cursor: 'pointer',
    },
    cartPage: {
      padding: '20px',
    },
    cartItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      borderBottom: '1px solid #ddd',
      paddingBottom: '10px',
    },
    cartItemImage: {
      width: '50px',
      height: '75px',
      objectFit: 'cover',
      marginRight: '10px',
    },
    checkoutButton: {
      backgroundColor: '#00008B',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1em',
      marginTop: '20px',
    },
    footer: {
      backgroundColor: '#00008B',
      color: 'white',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    footerSection: {
      margin: '10px',
    },
  };

  // Function to calculate the total amount in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseInt(item.price.replace('₹', '')), 0);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={styles.navbar}>
        <div>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>Books</a>
          <a href="#" style={styles.navLink}>About Us</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </div>
        <div>
          🛒 {cartCount}
        </div>
      </nav>

      <div style={styles.infoStrip}>
        <marquee>All Punjabi books available here | 10% Discount | Enhance your reading!</marquee>
      </div>

      <div style={styles.carousel}>
        <img src={carouselImages[carouselIndex].src} alt="Carousel" style={styles.carouselImage} />
        <div style={styles.carouselText}>{carouselImages[carouselIndex].text}</div>
      </div>

      <div style={styles.iconRow}>
        <div style={styles.icon}>🚚 Free Delivery</div>
        <div style={styles.icon}>📍 Available in Punjab</div>
        <div style={styles.icon}>🎧 24-Hour Customer Support</div>
        <div style={styles.icon}>🔄 Easy Returns</div>
      </div>

      <div style={styles.bookSection}>
        <h2>Best Sellers</h2>
        <div style={styles.bookGrid}>
          {books.slice(0, 4).map((book) => (
            <div key={book.id} style={styles.bookCard}>
              <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
              <h3>{book.title}</h3>
              <p>{book.price}</p>
              <div style={styles.cartIcon} onClick={() => addToCart(book)}>🛒</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.bookSection}>
        <h2>Popular in Punjab</h2>
        <div style={styles.bookGrid}>
          {books.slice(4, 8).map((book) => (
            <div key={book.id} style={styles.bookCard}>
              <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
              <h3>{book.title}</h3>
              <p>{book.price}</p>
              <div style={styles.cartIcon} onClick={() => addToCart(book)}>🛒</div>
            </div>
          ))}
        </div>
      </div>

      {cart.length > 0 && (
        <div style={styles.cartPage}>
          <h2>Your Cart</h2>
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img src={item.imageUrl} alt={item.title} style={styles.cartItemImage} />
              <div>{item.title}</div>
              <div>{item.price}</div>
            </div>
          ))}
          <div>
            <strong>Total: ₹{calculateTotal()}</strong>
          </div>
          <button style={styles.checkoutButton}>Proceed to Checkout</button>
        </div>
      )}

      <div style={styles.footer}>
        <div style={styles.footerSection}>
          <h4>About Us</h4>
          <p>We provide the best Punjabi books online.</p>
        </div>
        <div style={styles.footerSection}>
          <h4>Contact</h4>
          <p>Phone: 1800-123-456</p>
        </div>
      </div>
    </div>
  );
}
*/
/*import React, { useState, useEffect } from "react";
import { Truck, Clock, RefreshCw, MapPin } from "lucide-react";

export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cart, setCart] = useState([]);

  const books = [
    { id: 1, title: "ਪੰਜਾਬੀ ਸਾਹਿਤ", imageUrl: require("../assets/books/one.jpg"), price: "₹450" },
    { id: 2, title: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ", imageUrl: require("../assets/books/ten.jpg"), price: "₹350" },
    { id: 3, title: "ਪੰਜਾਬੀ ਵਿਰਸਾ", imageUrl: require("../assets/books/two.jpg"), price: "₹550" },
    { id: 4, title: "ਪੰਜਾਬੀ ਕਵਿਤਾ", imageUrl: require("../assets/books/three.jpg"), price: "₹400" },
    { id: 5, title: "ਸੂਫ਼ੀ ਕਾਵਿ", imageUrl: require("../assets/books/four.jpg"), price: "₹500" },
    { id: 6, title: "ਪੰਜਾਬੀ ਲੋਕ ਗੀਤ", imageUrl: require("../assets/books/five.jpg"), price: "₹300" },
    { id: 7, title: "ਪੰਜਾਬੀ ਨਾਵਲ", imageUrl: require("../assets/books/six.jpg"), price: "₹600" },
    { id: 8, title: "ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ", imageUrl: require("../assets/books/seven.jpg"), price: "₹450" },
  ];

  const carouselImages = [
    { src: require("../assets/books/one.jpg"), text: "Best Sellers" },
    { src: require("../assets/books/ten.jpg"), text: "Punjabi Literature" },
    { src: require("../assets/books/two.jpg"), text: "New Arrivals" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (book) => {
    setCartCount((prevCount) => prevCount + 1);
    setCart((prevCart) => [...prevCart, book]);
  };

  const styles = {
    navbar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "#FFFFFF",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    navLink: {
      color: "#00008B",
      textDecoration: "none",
      margin: "0 10px",
      fontWeight: "bold",
    },
    infoStrip: {
      backgroundColor: "#B22222",
      color: "white",
      padding: "5px",
      textAlign: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    carousel: {
      position: "relative",
      height: "400px",
      marginTop: "20px", // Spacing between carousel and navbar
    },
    carouselImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    carouselText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      fontSize: "2em",
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    },
    iconRow: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "40px 0",
      backgroundColor: "#F0F0F0",
      gap: "20px",
      marginTop: "20px",
    },
    icon: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#00008B",
      fontSize: "1.2em",
      textAlign: "center",
    },
    bookSection: {
      padding: "20px",
    },
    bookGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
    },
    bookCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
      position: "relative",
    },
    bookImage: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
    },
    cartIcon: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "#FFD700",
      borderRadius: "50%",
      padding: "5px",
      cursor: "pointer",
    },
    footer: {
      backgroundColor: "#00008B",
      color: "white",
      textAlign: "center",
      padding: "10px",
      marginTop: "20px",
    },
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div style={styles.infoStrip}>
        <marquee>All Punjabi books available here | 10% Discount | Enhance your reading!</marquee>
      </div>

      <nav style={styles.navbar}>
        <div>
          <a href="#" style={styles.navLink}>
            Home
          </a>
          <a href="#" style={styles.navLink}>
            Books
          </a>
          <a href="#" style={styles.navLink}>
            About Us
          </a>
          <a href="#" style={styles.navLink}>
            Contact
          </a>
        </div>
        <div>🛒 {cartCount}</div>
      </nav>

      <div style={styles.carousel}>
        <img src={carouselImages[carouselIndex].src} alt="Carousel" style={styles.carouselImage} />
        <div style={styles.carouselText}>{carouselImages[carouselIndex].text}</div>
      </div>

      <div style={styles.iconRow}>
        <div style={styles.icon}>
          <Truck size={40} />
          <p>Free Delivery</p>
        </div>
        <div style={styles.icon}>
          <MapPin size={40} />
          <p>Available in Punjab</p>
        </div>
        <div style={styles.icon}>
          <Clock size={40} />
          <p>24-Hour Support</p>
        </div>
        <div style={styles.icon}>
          <RefreshCw size={40} />
          <p>Easy Returns</p>
        </div>
      </div>

      <div style={styles.bookSection}>
        <h2>Books Collection</h2>
        <div style={styles.bookGrid}>
          {books.map((book) => (
            <div key={book.id} style={styles.bookCard}>
              <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
              <h3>{book.title}</h3>
              <p>{book.price}</p>
              <button style={styles.cartIcon} onClick={() => addToCart(book)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer style={styles.footer}>
        <p>© 2024 Punjabi Bookstore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
*/

/*import React, { useState, useEffect } from "react";
import { Truck, Clock, RefreshCw, MapPin, ShoppingCart } from "lucide-react";

export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cart, setCart] = useState([]);

  const books = [
    { id: 1, title: "ਪੰਜਾਬੀ ਸਾਹਿਤ", imageUrl: require("../assets/books/one.jpg"), price: "₹450" },
    { id: 2, title: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ", imageUrl: require("../assets/books/ten.jpg"), price: "₹350" },
    { id: 3, title: "ਪੰਜਾਬੀ ਵਿਰਸਾ", imageUrl: require("../assets/books/two.jpg"), price: "₹550" },
    { id: 4, title: "ਪੰਜਾਬੀ ਕਵਿਤਾ", imageUrl: require("../assets/books/three.jpg"), price: "₹400" },
    { id: 5, title: "ਸੂਫ਼ੀ ਕਾਵਿ", imageUrl: require("../assets/books/four.jpg"), price: "₹500" },
    { id: 6, title: "ਪੰਜਾਬੀ ਲੋਕ ਗੀਤ", imageUrl: require("../assets/books/five.jpg"), price: "₹300" },
    { id: 7, title: "ਪੰਜਾਬੀ ਨਾਵਲ", imageUrl: require("../assets/books/six.jpg"), price: "₹600" },
    { id: 8, title: "ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ", imageUrl: require("../assets/books/seven.jpg"), price: "₹450" },
  ];

  const carouselImages = [
    { src: require("../assets/books/one.jpg"), text: "Best Sellers" },
    { src: require("../assets/books/ten.jpg"), text: "Punjabi Literature" },
    { src: require("../assets/books/two.jpg"), text: "New Arrivals" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (book) => {
    setCartCount((prevCount) => prevCount + 1);
    setCart((prevCart) => [...prevCart, book]);
  };

  const styles = {
    navbar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "#FFFFFF",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    navLink: {
      color: "#00008B",
      textDecoration: "none",
      margin: "0 10px",
      fontWeight: "bold",
    },
    infoStrip: {
      backgroundColor: "#B22222",
      color: "white",
      padding: "5px",
      textAlign: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    carousel: {
      position: "relative",
      height: "400px",
      margin: "0 auto", // Ensures no space on sides
      width: "100%",
      maxWidth: "1200px",
      overflow: "hidden",
    },
    carouselImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    carouselText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      fontSize: "2em",
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    },
    iconRow: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "40px 0",
      backgroundColor: "#F0F0F0",
      gap: "20px",
    },
    iconContainer: {
      backgroundColor: "#D3D3D3",
      borderRadius: "50%",
      padding: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      color: "#00008B",
      fontSize: "1.2em",
      textAlign: "center",
    },
    bookSection: {
      padding: "20px",
    },
    bookGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
    },
    bookCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
      position: "relative",
    },
    bookImage: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
    },
    cartIcon: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "#FFD700",
      borderRadius: "50%",
      padding: "5px",
      cursor: "pointer",
    },
    footer: {
      backgroundColor: "#00008B",
      color: "white",
      textAlign: "center",
      padding: "10px",
      marginTop: "20px",
    },
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div style={styles.infoStrip}>
        <marquee>All Punjabi books available here | 10% Discount | Enhance your reading!</marquee>
      </div>

      <nav style={styles.navbar}>
        <div>
          <a href="#" style={styles.navLink}>
            Home
          </a>
          <a href="#" style={styles.navLink}>
            Books
          </a>
          <a href="#" style={styles.navLink}>
            About Us
          </a>
          <a href="#" style={styles.navLink}>
            Contact
          </a>
        </div>
        <div>🛒 {cartCount}</div>
      </nav>

      <div style={styles.carousel}>
        <img src={carouselImages[carouselIndex].src} alt="Carousel" style={styles.carouselImage} />
        <div style={styles.carouselText}>{carouselImages[carouselIndex].text}</div>
      </div>

      <div style={styles.iconRow}>
        {[
          { icon: <Truck size={40} />, text: "Free Delivery" },
          { icon: <MapPin size={40} />, text: "Available in Punjab" },
          { icon: <Clock size={40} />, text: "24-Hour Support" },
          { icon: <RefreshCw size={40} />, text: "Easy Returns" },
        ].map((item, index) => (
          <div key={index} style={styles.iconContainer}>
            <div style={styles.icon}>
              {item.icon}
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.bookSection}>
        <h2>Books Collection</h2>
        <div style={styles.bookGrid}>
          {books.map((book) => (
            <div key={book.id} style={styles.bookCard}>
              <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
              <ShoppingCart
                size={20}
                style={styles.cartIcon}
                onClick={() => addToCart(book)}
              />
              <h3>{book.title}</h3>
              <p>{book.price}</p>
            </div>
          ))}
        </div>
      </div>

      <footer style={styles.footer}>
        <p>© 2024 Punjabi Bookstore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}*/



/*import React, { useState, useEffect } from "react";
import { Truck, Clock, RefreshCw, MapPin, ShoppingCart } from "lucide-react";

export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cart, setCart] = useState([]);

  const books = [
    { id: 1, title: "ਪੰਜਾਬੀ ਸਾਹਿਤ", imageUrl: require("../assets/books/one.jpg"), price: "₹450" },
    { id: 2, title: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ", imageUrl: require("../assets/books/ten.jpg"), price: "₹350" },
    { id: 3, title: "ਪੰਜਾਬੀ ਵਿਰਸਾ", imageUrl: require("../assets/books/two.jpg"), price: "₹550" },
    { id: 4, title: "ਪੰਜਾਬੀ ਕਵਿਤਾ", imageUrl: require("../assets/books/three.jpg"), price: "₹400" },
    { id: 5, title: "ਸੂਫ਼ੀ ਕਾਵਿ", imageUrl: require("../assets/books/four.jpg"), price: "₹500" },
    { id: 6, title: "ਪੰਜਾਬੀ ਲੋਕ ਗੀਤ", imageUrl: require("../assets/books/five.jpg"), price: "₹300" },
    { id: 7, title: "ਪੰਜਾਬੀ ਨਾਵਲ", imageUrl: require("../assets/books/six.jpg"), price: "₹600" },
    { id: 8, title: "ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ", imageUrl: require("../assets/books/seven.jpg"), price: "₹450" },
  ];

  const carouselImages = [
    { src: require("../assets/books/one.jpg"), text: "Best Sellers" },
    { src: require("../assets/books/ten.jpg"), text: "Punjabi Literature" },
    { src: require("../assets/books/two.jpg"), text: "New Arrivals" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (book) => {
    setCartCount((prevCount) => prevCount + 1);
    setCart((prevCart) => [...prevCart, book]);
  };

  const styles = {
    navbar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "#FFFFFF",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    navLink: {
      color: "#00008B",
      textDecoration: "none",
      margin: "0 10px",
      fontWeight: "bold",
    },
    infoStrip: {
      backgroundColor: "#B22222",
      color: "white",
      padding: "5px",
      textAlign: "center",
    },
    carousel: {
      position: "relative",
      width: "100%",
      height: "400px",
      overflow: "hidden",
    },
    carouselImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    carouselText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      fontSize: "2em",
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    },
    iconRow: {
      display: "flex",
      justifyContent: "space-around",
      padding: "20px 0",
    },
    iconContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    },
    icon: {
      color: "#00008B",
      fontSize: "1.5em",
    },
    bookSection: {
      padding: "20px",
    },
    bookGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "20px",
    },
    bookCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
      position: "relative",
      backgroundColor: "#F9F9F9",
    },
    bookImage: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
    },
    cartIcon: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "#FFD700",
      borderRadius: "50%",
      padding: "5px",
      cursor: "pointer",
    },
    footer: {
      backgroundColor: "#00008B",
      color: "white",
      textAlign: "center",
      padding: "10px",
      marginTop: "20px",
    },
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div style={styles.infoStrip}>
        <marquee>All Punjabi books available here | 10% Discount | Enhance your reading!</marquee>
      </div>

      <nav style={styles.navbar}>
        <div>
          <a href="#" style={styles.navLink}>
            Home
          </a>
          <a href="#" style={styles.navLink}>
            Books
          </a>
          <a href="#" style={styles.navLink}>
            About Us
          </a>
          <a href="#" style={styles.navLink}>
            Contact
          </a>
        </div>
        <div>🛒 {cartCount}</div>
      </nav>

      <div style={styles.carousel}>
        <img src={carouselImages[carouselIndex].src} alt="Carousel" style={styles.carouselImage} />
        <div style={styles.carouselText}>{carouselImages[carouselIndex].text}</div>
      </div>

      <div style={styles.iconRow}>
        {[
          { icon: <Truck size={30} />, text: "Free Delivery" },
          { icon: <MapPin size={30} />, text: "Available in Punjab" },
          { icon: <Clock size={30} />, text: "24-Hour Support" },
          { icon: <RefreshCw size={30} />, text: "Easy Returns" },
        ].map((item, index) => (
          <div key={index} style={styles.iconContainer}>
            <div>{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div style={styles.bookSection}>
        <h2>Books Collection</h2>
        <div style={styles.bookGrid}>
          {books.map((book) => (
            <div key={book.id} style={styles.bookCard}>
              <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
              <ShoppingCart
                size={20}
                style={styles.cartIcon}
                onClick={() => addToCart(book)}
              />
              <h3>{book.title}</h3>
              <p>{book.price}</p>
            </div>
          ))}
        </div>
      </div>

      <footer style={styles.footer}>
        <p>© 2024 Punjabi Bookstore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
*/


'use client'
/*import React, { useState, useEffect } from 'react'
import { Truck, Clock, RefreshCw, MapPin, ShoppingCart, Menu, X } from 'lucide-react'
export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const books = [
    { id: 1, title: "ਪੰਜਾਬੀ ਸਾਹਿਤ", imageUrl: require("../assets/books/one.jpg"), price: "₹450", author: "ਅਮਰਜੀਤ ਸਿੰਘ" },
    { id: 2, title: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ", cover: "/placeholder.svg?height=400&width=300", price: "₹350", author: "ਹਰਪ੍ਰੀਤ ਕੌਰ" },
    { id: 3, title: "ਪੰਜਾਬੀ ਵਿਰਸਾ", cover: "/placeholder.svg?height=400&width=300", price: "₹550", author: "ਸੁਰਿੰਦਰ ਸਿੰਘ" },
    { id: 4, title: "ਪੰਜਾਬੀ ਕਵਿਤਾ", cover: "/placeholder.svg?height=400&width=300", price: "₹400", author: "ਰਵਿੰਦਰ ਕੌਰ" },
    { id: 5, title: "ਸੂਫ਼ੀ ਕਾਵਿ", cover: "/placeholder.svg?height=400&width=300", price: "₹500", author: "ਜਸਵਿੰਦਰ ਸਿੰਘ" },
    { id: 6, title: "ਪੰਜਾਬੀ ਲੋਕ ਗੀਤ", cover: "/placeholder.svg?height=400&width=300", price: "₹300", author: "ਮਨਪ੍ਰੀਤ ਕੌਰ" },
    { id: 7, title: "ਪੰਜਾਬੀ ਨਾਵਲ", cover: "/placeholder.svg?height=400&width=300", price: "₹600", author: "ਗੁਰਮੀਤ ਸਿੰਘ" },
    { id: 8, title: "ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ", cover: "/placeholder.svg?height=400&width=300", price: "₹450", author: "ਨਵਜੋਤ ਕੌਰ" },
  ];

  const carouselImages = [
    { src: require("../assets/books/one.jpg"), text: "Best Sellers" },
    { src: "/placeholder.svg?height=600&width=1200", text: "Punjabi Literature" },
    { src: "/placeholder.svg?height=600&width=1200", text: "New Arrivals" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#FF9933',
    },
    menuButton: {
      display: 'block',
      padding: '8px',
      cursor: 'pointer',
      '@media (min-width: 768px)': {
        display: 'none',
      },
    },
    navLinks: {
      display: 'flex',
      gap: '32px',
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
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
      width: '100vw',
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

      <div style={styles.booksSection}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#2D3748' }}>
          Featured Books
        </h2>
        <div style={styles.booksGrid}>
          {books.map((book) => (
            <div key={book.id} style={styles.bookCard}>
              <img src={book.cover} alt={book.title} style={styles.bookImage} />
              <div style={styles.bookInfo}>
                <h3 style={styles.bookTitle}>{book.title}</h3>
                <p style={styles.bookAuthor}>{book.author}</p>
                <p style={styles.bookPrice}>{book.price}</p>
                <button
                  style={styles.addToCartButton}
                  onClick={() => setCartCount(prev => prev + 1)}
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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

/*import React, { useState, useEffect } from 'react'
import { Truck, Clock, RefreshCw, MapPin, ShoppingCart, Menu, X } from 'lucide-react'

export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const books = [
    { id: 1, title: "i", imageUrl: require('../assets/books/one.jpg'), price: "60" },
    { id: 2, title: "The Art of War", imageUrl: require('../assets/books/ten.jpg'), price: "60" },
    { id: 3, title: "jackets", imageUrl: require('../assets/books/two.jpg'), price: "60" },
    { id: 4, title: "jackets", imageUrl: require('../assets/books/three.jpg'), price: "60" },
    { id: 5, title: "jackets", imageUrl: require('../assets/books/four.jpg'), price: "60" },
    { id: 6, title: "jackets", imageUrl: require('../assets/books/five.jpg'), price: "60" },
    { id: 7, title: "jackets", imageUrl: require('../assets/books/six.jpg'), price: "60" },
  ];

  const carouselImages = [
    { src: require("../assets/books/one.jpg"), text: "Best Sellers" },
    { src: "/placeholder.svg?height=600&width=1200", text: "Punjabi Literature" },
    { src: "/placeholder.svg?height=600&width=1200", text: "New Arrivals" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#FF9933',
    },
    menuButton: {
      display: 'block',
      padding: '8px',
      cursor: 'pointer',
      '@media (min-width: 768px)': {
        display: 'none',
      },
    },
    navLinks: {
      display: 'flex',
      gap: '32px',
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
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
      width: '100vw',
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

      <div style={styles.booksSection}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#2D3748' }}>
          Featured Books
        </h2>
        <div style={styles.booksGrid}>
          {books.map((book) => (
            <div key={book.id} style={styles.bookCard}>
              <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
              <div style={styles.bookInfo}>
                <h3 style={styles.bookTitle}>{book.title}</h3>
                <p style={styles.bookPrice}>{book.price}</p>
                <button
                  style={styles.addToCartButton}
                  onClick={() => setCartCount(prev => prev + 1)}
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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

"use client"






import React, { useState, useEffect } from 'react'
import { Truck, Clock, RefreshCw, MapPin, ShoppingCart, Menu, X } from 'lucide-react'

export default function PunjabiBookstore() {
  const [cartCount, setCartCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const books = [
   { id: 1, title: "i", author: "Default Author", imageUrl: require('../assets/books/one.jpg'), price: "60" },
    { id: 2, title: "The Art of War", author: "Default Author", imageUrl: require('../assets/books/ten.jpg'), price: "60" },
    { id: 3, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/two.jpg'), price: "60" },
    { id: 4, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/three.jpg'), price: "60" },
    { id: 5, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/four.jpg'), price: "60" },
    { id: 6, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/five.jpg'), price: "60" },
    { id: 7, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/six.jpg'), price: "60" },
    { id: 8, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/seven.jpg'), price: "60" },
    { id: 9, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/eight.jpg'), price: "60" },
    { id: 10, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/nine.jpg'), price: "60" },
    { id: 11, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/seventeen.jpg'), price: "60" },
    { id: 12, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/elewan.jpg'), price: "60" },
    { id: 13, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/tw.jpg'), price: "60" },
    { id: 14, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/thirteen.jpg'), price: "60" },
    { id: 15, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/fourteen.jpg'), price: "60" },
    { id: 16, title: "jackets", author: "Default Author", imageUrl: require('../assets/books/fifteen.jpg'), price: "60" },
    { id: 17, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/sixteen.jpg'), price: "60" },
    { id: 18, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/eihgteen.jpg'), price: "60" },
    { id: 19, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/ninteen.jpg'), price: "60" },
    { id: 20, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/twenty.jpg'), price: "60" },
    { id: 21, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/twenty one.jpg'), price: "60" },
    { id: 22, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/twenty two.jpg'), price: "60" },
    { id: 23, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/twenty three.jpg'), price: "60" },
    { id: 24, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/twenty four.jpg'), price: "60" },
    { id: 25, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/twenty five.jpg'), price: "60" },
    { id: 26, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/twenty six.jpg'), price: "60" },
    { id: 27, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/Tewenty seven.jpg'), price: "60" },
    { id: 28, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/twenty eight.jpg'), price: "60" },
    { id: 29, title: "jackets", author: "Default Author", imageUrl: require('../assets/book/twnty nine.jpg'), price: "60" },
    { id: 30, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/thirty one.jpg'), price: "60" },
    { id: 32, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/thirty three .jpg'), price: "60" },
    { id: 33, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/thirty four.jpg'), price: "60" },
    { id: 34, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/thirty five.jpg'), price: "60" },
    { id: 35, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/thirty six.jpg'), price: "60" },
    { id: 36, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/thirty seven.jpg'), price: "60" },
    { id: 37, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/thirty eight.jpg'), price: "60" },
    { id: 38, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/fourty.jpg'), price: "60" },
    { id: 39, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/fourty one.jpg'), price: "60" },
    { id: 40, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/fourty three.jpg'), price: "60" },
    { id: 41, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/fourty two.jpg'), price: "60" },
    { id: 42, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/fourty four.jpg'), price: "60" },
    { id: 43, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/fourty five.jpg'), price: "60" },
    { id: 44, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/forty six.jpg'), price: "60" },
    { id: 45, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/fourty seven.jpg'), price: "60" },
    { id: 46, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/fourty eight.jpg'), price: "60" },
    { id: 47, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/fourty nine.jpg'), price: "60" },
    { id: 48, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookn/fivety.jpg'), price: "60" },
    { id: 49, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookv/five one.jpg'), price: "60" },
    { id: 50, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookv/five two.jpg'), price: "60" },
    { id: 51, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookv/five three.jpg'), price: "60" },
    { id: 52, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookv/five four.jpg'), price: "60" },
    { id: 53, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookv/five five.jpg'), price: "60" },
    { id: 54, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookv/five six.jpg'), price: "60" },
    { id: 55, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookv/five seven.jpg'), price: "60" },
    { id: 56, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookv/five eight.jpg'), price: "60" },
    { id: 57, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookv/five nine.jpg'), price: "60" },
    { id: 58, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookv/sixty.jpg'), price: "60" },
    { id: 59, title: "jackets", author: "Default Author", imageUrl: require('../assets/bookv/six one.jpg'), price: "60" },
  ];

  const bookSections = [
    { title: "Popular in Punjab", books: books.slice(0, 10) },
    { title: "Punjabi Literature", books: books.slice(10, 20) },
    { title: "New Arrivals", books: books.slice(20, 30) },
    { title: "Best Sellers", books: books.slice(30, 40) },
    { title: "Classic Punjabi", books: books.slice(40, 50) },
    { title: "Contemporary Punjabi", books: books.slice(50, 59) },
  ];

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
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#FF9933',
    },
    menuButton: {
      display: 'block',
      padding: '8px',
      cursor: 'pointer',
      '@media (min-width: 768px)': {
        display: 'none',
      },
    },
    navLinks: {
      display: 'flex',
      gap: '32px',
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
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
      width: '100vw',
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

      {bookSections.map((section, index) => (
        <div key={index} style={styles.booksSection}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#2D3748' }}>
            {section.title}
          </h2>
          <div style={styles.booksGrid}>
            {section.books.map((book) => (
              <div key={book.id} style={styles.bookCard}>
                <img src={book.imageUrl} alt={book.title} style={styles.bookImage} />
                <div style={styles.bookInfo}>
                  <h3 style={styles.bookTitle}>{book.title}</h3>
                  <p style={styles.bookAuthor}>{book.author}</p>
                  <p style={styles.bookPrice}>{book.price}</p>
                  <button
                    style={styles.addToCartButton}
                    onClick={() => setCartCount(prev => prev + 1)}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

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
  




