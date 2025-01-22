/*import "normalize.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CartProvider } from "./context/cartcontext";
import { AuthProvider } from "./context/authcontext";
// Ensure AuthProvider is imported

import App from "./App";

import "./index.css";
//import { CartProvider } from "./finalApperence/Cartlogic";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    
          <App />
     
    </BrowserRouter>
  </React.StrictMode>
);
*/
import "normalize.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./finalApperence/Cartlogic";
// Ensure AuthProvider is imported
import { AuthProvider } from "./context/authcontext";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider

import App from "./App";

import "./index.css";
//import { CartProvider } from "./finalApperence/Cartlogic";
const clientId =
  "722235795972-96n3ocmsc5gfpt921h8npr983aniaeo2.apps.googleusercontent.com";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
        {" "}
        {/* Wrap with GoogleOAuthProvider */}
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
