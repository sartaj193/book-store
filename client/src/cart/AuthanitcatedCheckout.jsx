import React, { useState, useEffect } from "react";
import { utilityFunctions } from "../utils/module";

import UserLogin from "../auth/login";
import Checkout from "./checkout";
const AuthenticatedCheckout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = utilityFunctions.getCookieValue("userToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLoginSuccess = (token) => {
    setIsAuthenticated(true);
  };

  return isAuthenticated ? <Checkout /> : <UserLogin onLoginSuccess={handleLoginSuccess} />;
};

export default AuthenticatedCheckout;

