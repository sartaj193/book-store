// src/AuthComponent.js
import React from "react";
import { useAuth } from "./context/authcontext";

const AuthComponent = () => {
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    // Replace with your login logic
    const userData = { email: "user@example.com" }; // Example user data
    login(userData);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default AuthComponent;
