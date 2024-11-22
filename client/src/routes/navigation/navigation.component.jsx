// src/routes/navigation/navigation.component.jsx
/*import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../../context/cartcontext';
import { useAuth } from '../../context/authcontext'; // Import the useAuth hook
import "./navigation.styles.scss"

const Navigation = () => {
  const { cartItems = [] } = useCart();
  const { currentUser, logout } = useAuth(); // Get currentUser and logout from context

  return (
    <Fragment>
      <div className="navigation">
        <Link to='/home'>
          <div>Logo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop"> Shop</Link>
          <Link className="nav-link" to="/about"> About</Link>
          <Link className="nav-link" to="/popular"> Popular</Link>
          <Link className="nav-link" to="/register"> Register</Link>

          /*{currentUser ? (
            <>
              <span className="nav-link">Welcome, {currentUser.email}</span>
              <button className="nav-link" onClick={logout}>Logout</button>
            </>
          ) : (
            <Link className="nav-link" to="/login"> Login</Link>
          )}
          
          <Link className="nav-link" to="/cart"> Cart {cartItems.length} </Link>
        </div>
      </div>
    
      <Outlet />
    </Fragment>
  );
};

export default Navigation;*/
// src/routes/navigation/navigation.component.jsx
/*import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/home">
          <div className="logo">Logo</div> 
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">Shop</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/popular">Popular</Link>
          <Link className="nav-link" to="/register">Register</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/cart">Cart</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
// src/routes/navigation/navigation.component.jsx
// src/routes/navigation/navigation.component.jsx*/




/*import React, { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <div className="navigation">

        <button className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

 
        <div className="logo-container">
          <Link to="/home">
            <div className="logo">Logo</div>
          </Link>
        </div>

   
        <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
          <Link className="nav-link" to="/shop" onClick={toggleMenu}>Shop</Link>
          <Link className="nav-link" to="/about" onClick={toggleMenu}>About</Link>
          <Link className="nav-link" to="/popular" onClick={toggleMenu}>Popular</Link>
          <Link className="nav-link" to="/register" onClick={toggleMenu}>Register</Link>
          <Link className="nav-link" to="/login" onClick={toggleMenu}>Login</Link>
          <Link className="nav-link" to="/cart" onClick={toggleMenu}>Cart</Link>
        </div>
      </div>
      
      <Outlet />
    </Fragment>
  );
};

export default Navigation;*/
import React, { Fragment, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/authcontext'; // Import both default and named export
import './navigation.styles.scss';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleLogout, token } = useAuth(); // Access handleLogout and token from AuthContext
  const navigate = useNavigate(); // To programmatically navigate

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    handleLogout(); // Call the logout function from AuthContext
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <Fragment>
      <div className="navigation">
        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Logo */}
        <div className="logo-container">
          <Link to="/home">
            <div className="logo">Logo</div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
          <Link className="nav-link" to="/shop" onClick={toggleMenu}>Shop</Link>
          <Link className="nav-link" to="/about" onClick={toggleMenu}>About</Link>
          <Link className="nav-link" to="/popular" onClick={toggleMenu}>Popular</Link>
          <Link className="nav-link" to="/register" onClick={toggleMenu}>Register</Link>
          <Link className="nav-link" to="/login" onClick={toggleMenu}>Login</Link>
          <Link className="nav-link" to="/cart" onClick={toggleMenu}>Cart</Link>
          
          {/* Logout Button */}
          {token && (
            <button className="nav-link logout-button" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
