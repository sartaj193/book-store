/*import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav style={{ 
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px'
        }}>
          <div>
            <h1 style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2A2A2A'
            }}>BookStore</h1>
          </div>
          <div style={{
            display: 'none',
            gap: '2rem',
            '@media (min-width: 768px)': {
              display: 'flex'
            }
          }}>
            <a href="#" style={{ color: '#2A2A2A' }}>Home</a>
            <a href="#" style={{ color: '#2A2A2A' }}>Categories</a>
            <a href="#" style={{ color: '#2A2A2A' }}>Authors</a>
            <a href="#" style={{ color: '#2A2A2A' }}>Contact</a>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <button style={{ padding: '0.5rem' }}>
              <Search size={20} />
            </button>
            <button style={{ padding: '0.5rem' }}>
              <ShoppingCart size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ 
                display: 'block',
                '@media (min-width: 768px)': {
                  display: 'none'
                }
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div style={{
            padding: '1rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            '@media (min-width: 768px)': {
              display: 'none'
            }
          }}>
            <a href="#" style={{ color: '#2A2A2A' }}>Home</a>
            <a href="#" style={{ color: '#2A2A2A' }}>Categories</a>
            <a href="#" style={{ color: '#2A2A2A' }}>Authors</a>
            <a href="#" style={{ color: '#2A2A2A' }}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;*/

/*import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">
              <Link to="/">BookStore</Link>
            </h1>
          </div>

         
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Categories
            </Link>
            <Link
              to="/authors"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Authors
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Contact
            </Link>
          </div>

      
          <div className="flex items-center space-x-4">
        
            <button
              onClick={onCartClick}
              className="relative focus:outline-none"
              aria-label="Cart"
            >
              <ShoppingCart size={24} className="text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

           
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-800" />
              ) : (
                <Menu size={24} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

   
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-4 pb-2 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Categories
            </Link>
            <Link
              to="/authors"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Authors
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-orange-500 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;*/


// working
/*import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useCart } from './Cartlogic';
import CartD from '../cart/cart';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, updateQuantity, guestId } = useCart();

  return (
    <nav style={{ 
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px'
        }}>
          <div>
            <h1 style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2A2A2A'
            }}>ਪੰਜਾਬੀ ਬੁੱਕਸ</h1>
          </div>
          <div style={{
            display: 'none',
            gap: '2rem',
            '@media (min-width: 768px)': {
              display: 'flex'
            }
          }}>
            <Link to="/" style={{ color: '#2A2A2A' }}>Home</Link>
            <Link to="/books" style={{ color: '#2A2A2A' }}>Books</Link>
            <Link to="/orders" style={{ color: '#2A2A2A' }}>see order</Link>
            <Link to="/contact" style={{ color: '#2A2A2A' }}>Contact</Link>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <button style={{ padding: '0.5rem' }}>
              <Search size={20} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              style={{ 
                padding: '0.5rem',
                position: 'relative'
              }}
            >
              <ShoppingCart size={20} />
              {cartItems.length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  backgroundColor: '#f97316',
                  color: 'white',
                  fontSize: '0.75rem',
                  borderRadius: '50%',
                  width: '1.25rem',
                  height: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ 
                display: 'block',
                '@media (min-width: 768px)': {
                  display: 'none'
                }
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div style={{
            padding: '1rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            '@media (min-width: 768px)': {
              display: 'none'
            }
          }}>
            <Link to="/" style={{ color: '#2A2A2A' }}>Home</Link>
            <Link to="/books" style={{ color: '#2A2A2A' }}>Books</Link>
            <Link to="/orders" style={{ color: '#2A2A2A' }}>see order</Link>
            <Link to="/contact" style={{ color: '#2A2A2A' }}>Contact</Link>
          </div>
        )}
      </div>
      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'white',
          boxShadow: '-2px 0 4px rgba(0,0,0,0.1)',
          zIndex: 1000,
          overflowY: 'auto'
        }}>
          <div style={{ padding: '1rem' }}>
            <button 
              onClick={() => setIsCartOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Your Cart</h2>
            <CartD 
              guestId={guestId} 
              cart={{ items: cartItems, totalAmount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0) }}
              updateQuantity={updateQuantity}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;*/
// very workign
/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

import { useCart } from './Cartlogic';
import CartD from '../cart/cart';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-gray-800">ਪੰਜਾਬੀ ਬੁੱਕਸ</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/books" className="text-gray-700 hover:text-gray-900">Books</Link>
              <Link to="/orders" className="text-gray-700 hover:text-gray-900">Orders</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Search size={20} />
            </button>
            <button 
              className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={20} />
              {cart.items.length > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
            <button
              className="ml-4 md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/books" className="block text-gray-700 hover:text-gray-900">Books</Link>
            <Link to="/orders" className="block text-gray-700 hover:text-gray-900">Orders</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      )}
      {isCartOpen && <CartD onClose={() => setIsCartOpen(false)} />}
    </nav>
  );
};

export default Navbar;*/
//ol
/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from './Cartlogic';
import CartD from '../cart/cart';

import BookSearch from './Booksearch';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-gray-800">ਪੰਜਾਬੀ ਬੁੱਕਸ</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/books" className="text-gray-700 hover:text-gray-900">Books</Link>
              <Link to="/orders" className="text-gray-700 hover:text-gray-900">Orders</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="p-2 rounded-md text-gray-400 hover:text-gray-500"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>
            <button
              className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={20} />
              {cart.items.length > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
            <button
              className="ml-4 md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/books" className="block text-gray-700 hover:text-gray-900">Books</Link>
            <Link to="/orders" className="block text-gray-700 hover:text-gray-900">Orders</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      )}
      {isCartOpen && <CartD onClose={() => setIsCartOpen(false)} />}
      {isSearchOpen && <BookSearch onClose={() => setIsSearchOpen(false)} />}
    </nav>
  );
};

export default Navbar;
*/

/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from './Cartlogic';
import CartD from '../cart/cart';
import BookSearch from './Booksearch';
import { Navigate } from 'react-router-dom';
import { use } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate =useNavigate();
  const { cart } = useCart();

  const user = {
    email: 'user@example.com', // Replace with actual user email from context or state
  };

  

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
     
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-gray-800">
           BooksHeaven
            </Link>
          </div>

         
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link to="/books" className="text-gray-700 hover:text-gray-900">
                Books
              </Link>
              <Link to="/orders" className="text-gray-700 hover:text-gray-900">
                Orders
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>

      
          <div className="flex items-center">
            
            <div className="relative">
              <button
                className="p-2 rounded-md text-gray-400 hover:text-gray-500"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User size={20} />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 text-gray-800 text-sm">
                    <p className="font-bold">{user.email}</p>
                  </div>
                  <div className="border-t border-gray-200">
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                    >
                      View Orders
                    </Link>
                    <Link
                      to="/bookondemand"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                    >
                      Book on Demand
                    </Link>
                    <button
                      
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                    onClick={() => {
                 
                      navigate('/logut');
                    }}>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            
            <button
              className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>

          
            <button
              className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={20} />
              {cart.items.length > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>

            
            <button
              className="ml-4 md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

  
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/books" className="block text-gray-700 hover:text-gray-900">
              Books
            </Link>
            <Link to="/orders" className="block text-gray-700 hover:text-gray-900">
              Orders
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      )}

     
      {isCartOpen && <CartD onClose={() => setIsCartOpen(false)} />}
      {isSearchOpen && <BookSearch onClose={() => setIsSearchOpen(false)} />}
    </nav>
  );
};

export default Navbar;*/


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from './Cartlogic';
import CartD from '../cart/cart';
import BookSearch from './Booksearch';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();

  const user = {
    email: 'user@example.com', // Replace with actual user email from context or state
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-gray-800">
              BooksHeaven
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link to="/bookondemand" className="text-gray-700 hover:text-gray-900">
                BooksOnDemand
              </Link>
              <Link to="/orders" className="text-gray-700 hover:text-gray-900">
                Orders
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>

          {/* Icons Section */}
          <div className="flex items-center">
            {/* Profile Icon */}
            <div className="relative">
              <button
                className="p-2 rounded-md text-gray-400 hover:text-gray-500"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User size={20} />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 text-gray-800 text-sm">
                    <p className="font-bold">{user.email}</p>
                  </div>
                  <div className="border-t border-gray-200">
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                    >
                      View Orders
                    </Link>
                    <Link
                      to="/bookondemand"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                    >
                      Books on Demand
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                      onClick={() => {
                        navigate('/logut');
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <button
              className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={20} />
              {cart.items.length > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="ml-4 md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/bookondemand" className="block text-gray-700 hover:text-gray-900">
              BooksOnDemand
            </Link>
            <Link to="/orders" className="block text-gray-700 hover:text-gray-900">
              Orders
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Modals */}
      {isCartOpen && <CartD onClose={() => setIsCartOpen(false)} />}
    </nav>
  );
};

export default Navbar;



//ssddd
/*import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

import { useCart } from './Cartlogic';
const Navbar = () => {
  const { cart, loading } = useCart();

  const cartItemCount = cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl text-gray-800">BookStore</Link>
          <div className="flex items-center">
            <Link to="/ciu" className="mr-4 text-gray-600 hover:text-gray-800">
              Checkout
            </Link>
            <div className="relative">
              <Link to="/cart" className="text-gray-600 hover:text-gray-800">
                <ShoppingCart size={24} />
                {!loading && cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/






/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from 'lucide-react';

import { useCart } from "./Cartlogic";
const Navbar = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">ਪੰਜਾਬੀ ਬੁੱਕਸ</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/books" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Books</Link>
            <Link to="/authors" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Authors</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          </div>
          <div className="flex items-center">
            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View cart</span>
              <ShoppingCart className="h-6 w-6" aria-hidden="true" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{totalItems}</span>
              )}
            </button>
            <div className="ml-3 relative md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/books" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Books</Link>
            <Link to="/authors" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Authors</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;*/



/*import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "./Cartlogic";
import CartD from "../cart/cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { getCartId } = useCart(); // Access getCartId from the hook
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fetch userId or guestId
  const token = localStorage.getItem("userToken");
  const userId = token ? JSON.parse(atob(token.split(".")[1])).userId : null;
  const guestId = userId ? null : getCartId();

  return (
    <nav style={{ backgroundColor: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        }}>
      
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2A2A2A" }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>ਪੰਜਾਬੀ ਬੁੱਕਸ</Link>
            </h1>
          </div>

       
          <div style={{
            display: isMenuOpen ? "block" : "none",
            position: "absolute",
            top: "64px",
            left: 0,
            width: "100%",
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            zIndex: 999,
            textAlign: "center",
          }}>
            <Link to="/" style={linkStyle} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/books" style={linkStyle} onClick={() => setIsMenuOpen(false)}>Books</Link>
            <Link to="/orders" style={linkStyle} onClick={() => setIsMenuOpen(false)}>Orders</Link>
            <Link to="/contact" style={linkStyle} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
          <div style={{
            display: "none",
            gap: "2rem",
            "@media (min-width: 768px)": {
              display: "flex",
            },
          }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/books" style={linkStyle}>Books</Link>
            <Link to="/orders" style={linkStyle}>Orders</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>

          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          
            <button onClick={() => setIsCartOpen(true)} style={{ padding: "0.5rem", position: "relative" }}>
              <ShoppingCart size={20} />
            </button>
           
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              style={{
                padding: "0.5rem",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>


      {isCartOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          boxShadow: "-2px 0 4px rgba(0,0,0,0.1)",
          zIndex: 1000,
          overflowY: "auto",
        }}>
          <div style={{ padding: "1rem" }}>
            <button
              onClick={() => setIsCartOpen(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <X size={24} />
            </button>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Your Cart</h2>
            <CartD guestId={guestId} userId={userId} />
          </div>
        </div>
      )}
    </nav>
  );
};

// Link Style
const linkStyle = {
  display: "block",
  padding: "1rem",
  textDecoration: "none",
  color: "#2A2A2A",
  fontWeight: "bold",
};

export default Navbar;*/


/*import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "./Cartlogic";
import CartD from "../cart/cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { getCartId } = useCart(); // Access getCartId from useCart
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fetch userId or guestId
  const token = localStorage.getItem("userToken");
  const userId = token ? JSON.parse(atob(token.split(".")[1])).userId : null;
  const guestId = userId ? null : getCartId(); // Use getCartId to retrieve guestId

  return (
    <nav style={{ backgroundColor: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        }}>
         
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2A2A2A" }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>ਪੰਜਾਬੀ ਬੁੱਕਸ</Link>
            </h1>
          </div>


          <div style={{
            display: isMenuOpen ? "block" : "none",
            position: "absolute",
            top: "64px",
            left: 0,
            width: "100%",
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            zIndex: 999,
            textAlign: "center",
          }}>
            <Link to="/" style={linkStyle} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/books" style={linkStyle} onClick={() => setIsMenuOpen(false)}>Books</Link>
            <Link to="/orders" style={linkStyle} onClick={() => setIsMenuOpen(false)}>Orders</Link>
            <Link to="/contact" style={linkStyle} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
          <div style={{
            display: "none",
            gap: "2rem",
            "@media (min-width: 768px)": {
              display: "flex",
            },
          }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/books" style={linkStyle}>Books</Link>
            <Link to="/orders" style={linkStyle}>Orders</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>

  
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
           
            <button onClick={() => setIsCartOpen(true)} style={{ padding: "0.5rem", position: "relative" }}>
              <ShoppingCart size={20} />
            </button>
        
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              style={{
                padding: "0.5rem",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

  
      {isCartOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          boxShadow: "-2px 0 4px rgba(0,0,0,0.1)",
          zIndex: 1000,
          overflowY: "auto",
        }}>
          <div style={{ padding: "1rem" }}>
            <button
              onClick={() => setIsCartOpen(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <X size={24} />
            </button>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Your Cart</h2>
            <CartD guestId={guestId} userId={userId} />
          </div>
        </div>
      )}
    </nav>
  );
};

// Link Style
const linkStyle = {
  display: "block",
  padding: "1rem",
  textDecoration: "none",
  color: "#2A2A2A",
  fontWeight: "bold",
};

export default Navbar;*/



