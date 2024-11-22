/*import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/Home/home.component";
import Shop from "./routes/shop/shop.component";
import About from "./routes/about/about.component";
import Popular from "./routes/popular/popular.component";
import Register from "./auth/register";
import Login from "./auth/login"; // User login component
import AdminLogin from "./auth/adminLogin"; // Admin login component
import Dashboard from "./routes/dashboard/dashboard";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/cart.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// Admin Components
import SideBar from "./pages/sidebar.jsx";
import ListItems from "./pages/listitems.jsx";
import AddItems from "./pages/Additems.jsx";
import Order from "./pages/orders.jsx";

const App = () => {
  const [token, setToken] = useState(""); // State for token
  const [isAdmin, setIsAdmin] = useState(false); // State for admin check logic

  return (
    <>
      <Toaster />
      <Routes>
     
        {!isAdmin && (
          <Route path="/" element={<Navigation />}>
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="popular" element={<Popular />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} /> 
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        )}

     
        <Route
          path="admin/login"
          element={<AdminLogin setToken={setToken} setIsAdmin={setIsAdmin} />}
        />

      
        <Route
          path="admin/*" // Changed to wildcard to allow nested routes
          element={
            token && isAdmin ? <SideBar /> : <Navigate to="/admin/login" />
          }
        >
          <Route path="items" element={<AddItems />} />
          <Route path="list-items" element={<ListItems />} />
          <Route path="orders" element={<Order />} />
          <Route index element={<AddItems />} />{" "}
      
        </Route>
      </Routes>
    </>
  );
};

export default App;*/

/*import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/authcontext"; // Ensure the path is correct
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/Home/home.component";
import Shop from "./routes/shop/shop.component";
import About from "./routes/about/about.component";
import Popular from "./routes/popular/popular.component";
import Register from "./auth/register";
import Login from "./auth/login"; // User login component
import AdminLogin from "./auth/adminLogin"; // Admin login component
import Dashboard from "./routes/dashboard/dashboard";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/cart.jsx";

// Admin Components
import SideBar from "./pages/sidebar.jsx";
import ListItems from "./pages/listitems.jsx";
import AddItems from "./pages/Additems.jsx";
import Order from "./pages/orders.jsx";

import CheckoutPage from "./pages/checkout.jsx";

const App = () => {
  const [token, setToken] = useState(""); // State for token
  const [isAdmin, setIsAdmin] = useState(false); // State for admin check logic

  return (
    <AuthProvider>
      {" "}
     
      <>
        <Toaster />
        <Routes>
   
          {!isAdmin && (
            <Route path="/" element={<Navigation />}>
              <Route path="home" element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
              <Route path="about" element={<About />} />
              <Route path="popular" element={<Popular />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="checkout" element={<CheckoutPage />} />{" "}
          
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          )}

    
          <Route
            path="admin/login"
            element={<AdminLogin setToken={setToken} setIsAdmin={setIsAdmin} />}
          />

         
          <Route
            path="admin/*" // Changed to wildcard to allow nested routes
            element={
              token && isAdmin ? <SideBar /> : <Navigate to="/admin/login" />
            }
          >
            <Route path="items" element={<AddItems />} />
            <Route path="list-items" element={<ListItems />} />
            <Route path="orders" element={<Order />} />
            <Route index element={<AddItems />} />{" "}
       
          </Route>
        </Routes>
      </>
    </AuthProvider>
  );
};

export default App;*/
/*import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/authcontext"; // Ensure the path is correct
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/Home/home.component";
import Shop from "./routes/shop/shop.component";
import About from "./routes/about/about.component";
import Popular from "./routes/popular/popular.component";
import Register from "./auth/register";
import Login from "./auth/login"; // User login component
import AdminLogin from "./auth/adminLogin"; // Admin login component
import Dashboard from "./routes/dashboard/dashboard";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/cart.jsx";
import BookstoreInterface from "./design/Bookscomponenmt.jsx";
import House from "./pages/house.jsx";
// Admin Components
import SideBar from "./pages/sidebar.jsx";
import ListItems from "./pages/listitems.jsx";
import AddItems from "./pages/Additems.jsx";
import Order from "./pages/orders.jsx";

import CheckoutPage from "./pages/checkout.jsx";

import LogoutButton from "./pages/logout.jsx"; // Import LogoutButton
import CartPage from "./pages/cart.jsx";

const App = () => {
  const [token, setToken] = useState(""); // State for token
  const [isAdmin, setIsAdmin] = useState(false); // State for admin check logic

  return (
    <AuthProvider>
     
      <>
        <Toaster />
        <Routes>
          
          {!isAdmin && (
            <Route path="/" element={<Navigation />}>
              <Route path="/bookstore" element={<BookstoreInterface />} />
              <Route path="home" element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="house" element={<House />} />
              <Route path="cart" element={<Cart />} />
              <Route path="about" element={<About />} />
              <Route path="popular" element={<Popular />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="checkout" element={<CheckoutPage />} />
              
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          )}

        
          <Route
            path="admin/login"
            element={<AdminLogin setToken={setToken} setIsAdmin={setIsAdmin} />}
          />

      
          <Route
            path="admin/*" // Changed to wildcard to allow nested routes
            element={
              token && isAdmin ? <SideBar /> : <Navigate to="/admin/login" />
            }
          >
            <Route path="items" element={<AddItems />} />
            <Route path="list-items" element={<ListItems />} />
            <Route path="orders" element={<Order />} />
            <Route index element={<AddItems />} />
          
          </Route>
        </Routes>
  
        {token && <LogoutButton />}{" "}
      
      </>
    </AuthProvider>
  );
};

export default App;*/
/*import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/authcontext";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/Home/home.component";
import Shop from "./routes/shop/shop.component";
import About from "./routes/about/about.component";
import Popular from "./routes/popular/popular.component";
import Register from "./auth/register";
import Login from "./auth/login";
import AdminLogin from "./auth/adminLogin";
import Dashboard from "./routes/dashboard/dashboard";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/cart.jsx";
import BookstoreInterface from "./design/Bookscomponenmt.jsx";
import House from "./pages/house.jsx";
import SideBar from "./pages/sidebar.jsx";
import ListItems from "./pages/listitems.jsx";
import AddItems from "./pages/Additems.jsx";
import Order from "./pages/orders.jsx";
import CheckoutPage from "./pages/checkout.jsx";
import LogoutButton from "./pages/logout.jsx";
import PunjabiBookstore from "./design/Final.jsx";
import ProductList from "./design/show.jsx";
import UserProductDisplay from "./pages/userDisplayproducts.jsx";

import PunjabiBookstoreii from "./pages/proug.jsx";

const App = () => {
  const [token, setToken] = useState(""); // State for token
  const [isAdmin, setIsAdmin] = useState(false); // State for admin check logic

  return (
    <AuthProvider>
      <Toaster />
      <Routes>
       
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/bookstore" element={<BookstoreInterface />} />
          <Route path="/punjabi" element={<PunjabiBookstore />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/useerproduct" element={<UserProductDisplay />} />
          <Route path="/c" element={<PunjabiBookstoreii />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="house" element={<House />} />
          <Route path="about" element={<About />} />
          <Route path="popular" element={<Popular />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

      
        <Route
          path="admin/login"
          element={<AdminLogin setToken={setToken} setIsAdmin={setIsAdmin} />}
        />

        
        <Route
          path="admin/*"
          element={
            token && isAdmin ? <SideBar /> : <Navigate to="/admin/login" />
          }
        >
          <Route index element={<AddItems />} />
          <Route path="items" element={<AddItems />} />
          <Route path="list-items" element={<ListItems />} />
          <Route path="orders" element={<Order />} />
        </Route>

        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      
      {token && <LogoutButton />}
    </AuthProvider>
  );
};

export default App;*/

/*import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/authcontext";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/Home/home.component";
import Shop from "./routes/shop/shop.component";
import About from "./routes/about/about.component";
import Popular from "./routes/popular/popular.component";
import Register from "./auth/register";
import Login from "./auth/login";
import AdminLogin from "./auth/adminLogin";
import Dashboard from "./routes/dashboard/dashboard";
import { Toaster } from "react-hot-toast";
//import Cart from "./pages/cart.jsx";
import BookstoreInterface from "./design/Bookscomponenmt.jsx";
import House from "./pages/house.jsx";
import SideBar from "./pages/sidebar.jsx";
import ListItems from "./pages/listitems.jsx";
import AddItems from "./pages/Additems.jsx";
import Order from "./pages/orders.jsx";
import CheckoutPage from "./pages/checkout.jsx";
import LogoutButton from "./pages/logout.jsx";
import PunjabiBookstore from "./design/Final.jsx";
import ProductList from "./design/show.jsx";
import UserProductDisplay from "./pages/userDisplayproducts.jsx";
import PunjabiBookstoreii from "./pages/proug.jsx";
import CheckoutPageO from "./cart/checkout.jsx";
//import CartD from "./cart/cart.jsx";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [token, setToken] = useState(""); // State for token
  const [isAdmin, setIsAdmin] = useState(false); // State for admin check logic
  const [guestId, setGuestId] = useState(null); // State for guest ID

  // Initialize guest ID for cart functionality
  useEffect(() => {
    let storedGuestId = localStorage.getItem("guestId");
    if (!storedGuestId) {
      storedGuestId = uuidv4();
      localStorage.setItem("guestId", storedGuestId);
    }
    setGuestId(storedGuestId);
  }, []);

  return (
    <AuthProvider>
      <Toaster />
      <Routes>
        
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/bookstore" element={<BookstoreInterface />} />
          <Route path="/punjabi" element={<PunjabiBookstore />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/useerproduct" element={<UserProductDisplay />} />
          <Route path="/c" element={<PunjabiBookstoreii />} />
          <Route path="/ciu" element={<CheckoutPageO />} />
          <Route path="shop" element={<Shop />} />

          <Route path="house" element={<House />} />
          <Route path="about" element={<About />} />
          <Route path="popular" element={<Popular />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<CheckoutPage guestId={guestId} />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        
        <Route
          path="admin/login"
          element={<AdminLogin setToken={setToken} setIsAdmin={setIsAdmin} />}
        />


        <Route
          path="admin/*"
          element={
            token && isAdmin ? <SideBar /> : <Navigate to="/admin/login" />
          }
        >
          <Route index element={<AddItems />} />
          <Route path="items" element={<AddItems />} />
          <Route path="list-items" element={<ListItems />} />
          <Route path="orders" element={<Order />} />
        </Route>

       
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      
      {token && <LogoutButton />}
    </AuthProvider>
  );
};

export default App;*/
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/authcontext";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import About from "./routes/about/about.component";
import Popular from "./routes/popular/popular.component";
import Register from "./auth/register";
import Login from "./auth/login";
import AdminLogin from "./auth/adminLogin";
import Dashboard from "./routes/dashboard/dashboard";
import { Toaster } from "react-hot-toast";
import BookstoreInterface from "./design/Bookscomponenmt.jsx";
import House from "./pages/house.jsx";
import SideBar from "./pages/sidebar.jsx";
import ListItems from "./pages/listitems.jsx";
import AddItems from "./pages/Additems.jsx";
import Order from "./pages/orders.jsx";
import CheckoutPage from "./pages/checkout.jsx";
import LogoutButton from "./pages/logout.jsx";
import PunjabiBookstore from "./design/Final.jsx";
import ProductList from "./design/show.jsx";
import UserProductDisplay from "./pages/userDisplayproducts.jsx";
import PunjabiBookstoreii from "./pages/proug.jsx";
import CheckoutPageO from "./cart/checkout.jsx";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [token, setToken] = useState(""); // State for token
  const [isAdmin, setIsAdmin] = useState(false); // State for admin check logic
  const [guestId, setGuestId] = useState(null); // State for guest ID

  // Initialize guest ID for cart functionality
  useEffect(() => {
    let storedGuestId = localStorage.getItem("guestId");
    if (!storedGuestId) {
      storedGuestId = uuidv4();
      localStorage.setItem("guestId", storedGuestId);
    }
    setGuestId(storedGuestId);
  }, []);

  return (
    <AuthProvider>
      <Toaster />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PunjabiBookstoreii />} />{" "}
        {/* Now renders PunjabiBookstoreii at '/' */}
        <Route path="/bookstore" element={<BookstoreInterface />} />
        <Route path="/punjabi" element={<PunjabiBookstore />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/useerproduct" element={<UserProductDisplay />} />
        <Route path="/ciu" element={<CheckoutPageO />} />
        <Route path="shop" element={<Shop />} />
        <Route path="house" element={<House />} />
        <Route path="about" element={<About />} />
        <Route path="popular" element={<Popular />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="checkout" element={<CheckoutPage guestId={guestId} />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* Admin Routes */}
        <Route
          path="admin/login"
          element={<AdminLogin setToken={setToken} setIsAdmin={setIsAdmin} />}
        />
        <Route
          path="admin/*"
          element={
            token && isAdmin ? <SideBar /> : <Navigate to="/admin/login" />
          }
        >
          <Route index element={<AddItems />} />
          <Route path="items" element={<AddItems />} />
          <Route path="list-items" element={<ListItems />} />
          <Route path="orders" element={<Order />} />
        </Route>
        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Show LogoutButton for authenticated users */}
      {token && <LogoutButton />}
    </AuthProvider>
  );
};

export default App;
