/*import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user data from local storage if available
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in local storage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear user data from local storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};*/

/*import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); // Add user state

  const login = (token, userData) => {
    setToken(token);
    setUser(userData); // Set user data on login
  };

  const logout = () => {
    setToken(null);
    setUser(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);*/

/*import React, { createContext, useContext, useState } from "react";

// Create AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = (token, userData) => {
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);*/

// src/context/AuthContext.js
// src/context/auth.js
// src/context/auth.js

import React, { createContext, useContext, useState, useEffect } from "react";
import { utilityFunctions } from "../utils/module"; // Ensure the path is correct

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = utilityFunctions.getCookieValue("adminAuthToken"); // Check token from cookie/localStorage
    if (token) {
      const userData = utilityFunctions.parseJwt(token); // Parse JWT
      setUser(userData);
    }
    setLoading(false); // Done loading auth state
  }, []);

  const isAuthenticated = !!user; // User is authenticated if we have user data

  const login = (token) => {
    utilityFunctions.setCookie("adminAuthToken", token, 24); // Save token in cookies
    const userData = utilityFunctions.parseJwt(token); // Parse user from token
    setUser(userData);
    localStorage.setItem("adminAuthToken", token); // Save token in localStorage
  };

  const logout = () => {
    utilityFunctions.removeCookie("adminAuthToken"); // Remove token
    setUser(null); // Clear user state
    localStorage.removeItem("adminAuthToken"); // Remove token from localStorage
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, loading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
