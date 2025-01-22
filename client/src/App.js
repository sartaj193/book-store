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

          <Route path="shop" element={<Shop />} />

          <Route path="house" element={<House />} />
          <Route path="about" element={<About />} />
          <Route path="popular" element={<Popular />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

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
// eri
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./auth/register";
import Login from "./auth/login";
import AdminLogin from "./auth/adminLogin";
//import Dashboard from "./routes/dashboard/dashboard";
import { Toaster } from "react-hot-toast";
//import BookstoreInterface from "./design/Bookscomponenmt.jsx";
import BookstoreInterface from "./design/Bookscomponenmt.jsx";
import SideBar from "./pages/sidebar.jsx";
import ListItems from "./pages/listitems.jsx";
import AddItems from "./pages/Additems.jsx";
//import Order from "./pages/orders.jsx";
//import CheckoutPage from "./pages/checkout.jsx";
import LogoutButton from "./pages/logout.jsx";
//import ProductList from "./design/show.jsx";
//import PunjabiBookstoreii from "./pages/proug.jsx";
import AddProductDetail from "./cart/prodeuctDetail.jsx";
//import CheckoutPageO from "./cart/checkout.jsx";
//import AuthenticatedCheckout from "./cart/AuthanitcatedCheckout.jsx";
import ProductList from "./design/show.jsx";
//import PunjabiBookstoreii from "./pages/proug.jsx";
import CheckoutPageO from "./cart/checkout.jsx";
import { v4 as uuidv4 } from "uuid";
import DisplayOrder from "./cart/displayOrder.jsx";
import CheckoutO from "./cart/checkout.jsx";
//import PrivateRoute from "./cart/privateRoute.jsx";
import Orders from "./cart/displayOrder.jsx";
import ThankYouPage from "./pages/thanku.jsx";
import HomePage from "./finalApperence/Home.jsx";
import OrdersList from "./cart/allorder.jsx";
import CartD from "./cart/cart.jsx";
import AddCategory from "./finalApperence/makeCAtegort.jsx";
import Categories from "./finalApperence/Category.jsx";
import CreateSection from "./finalApperence/createsection.jsx";
import SectionsView from "./finalApperence/SeeSections.jsx";
import AddBookForm from "./finalApperence/selectedCategory.jsx";
import BooksList from "./finalApperence/Show.jsx";
import Layout from "./finalApperence/Layout.jsx";
import BookSections from "./finalApperence/Show.jsx";
import AddAuthor from "./author/addAuthor.jsx";
import AuthorsId from "./author/getAuthor.jsx";
import CreateAuthorSection from "./author/authorSection.jsx";
import Authors from "./finalApperence/Author.jsx";
import AuthorDetails from "./author/detailUthor.jsx";
import { CartProvider } from "./finalApperence/Cartlogic.jsx";
import AddAuthorBookForm from "./author/authorbooks.jsx";
import AboutUs from "./footer/about.jsx";
import ContactUs from "./footer/conatc.jsx";
//import Blog from "./footer/blog.jsx";
import FAQ from "./footer/fandq.jsx";
import PrivacyPolicy from "./footer/privacy.jsx";
import TermsAndConditions from "./footer/TermsCondition.jsx";
import ReturnAndRefund from "./footer/Returnrefund.jsx";
import ShippingInfo from "./footer/Shipping.jsx";
//import Careers from "./footer/careers.jsx";
import LogoutPage from "./footer/logut.jsx";
//import AuthorBookSections from "./author/showbooks.jsx";
import AuthorBookSections from "./author/auhtorsre.jsx";
import BooksOnDemandPage from "./footer/Bookondemand.jsx";
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
    <>
      <>
        <Toaster />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="bookssection" element={<BookSections />} />
          <Route path="/ciu" element={<CheckoutO />} />
          <Route path="/displayorder" element={<DisplayOrder />} />
          <Route path="/bookstore" element={<BookstoreInterface />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/ciu" element={<CheckoutPageO />} />
          <Route path="register" element={<Register />} />
          <Route path="logut" element={<LogoutPage />} />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={<Orders />} />
          <Route path="bookondemand" element={<BooksOnDemandPage />} />
          <Route path="thanks" element={<ThankYouPage />} />
          <Route path="cart" element={<CartD />} />
          <Route path="/category/:id" element={<SectionsView />} />
          <Route path="/authors" element={<Authors />} />{" "}
          <Route path="Authorbookssection" element={<AuthorBookSections />} />
          <Route path="/authors/:authorId" element={<AuthorDetails />} />{" "}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/return" element={<ReturnAndRefund />} />
          <Route path="/shipping" element={<ShippingInfo />} />
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
            <Route path="add-product" element={<AddProductDetail />} />
            <Route path="items" element={<AddItems />} />
            <Route path="list-items" element={<ListItems />} />
            <Route path="orderios" element={<OrdersList />} />
            <Route path="add" element={<AddCategory />} />
            <Route path="view" element={<Categories />} />
            <Route path="createsection" element={<CreateSection />} />
            <Route path="addBookform" element={<AddBookForm />} />
            <Route path="booklist" element={<BooksList />} />
            <Route path="addAuthor" element={<AddAuthor />} />{" "}
            <Route path="Authorid" element={<AuthorsId />} />
            <Route path="authorbook" element={<AddAuthorBookForm />} />
            <Route
              path="CreateAuthorSection"
              element={<CreateAuthorSection />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {token && <LogoutButton />}
      </>
    </>
  );
};

export default App;

/*import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

import { CartProvider } from "./finalApperence/Cartlogic.jsx";
// Auth Components
import Register from "./auth/register";
import Login from "./auth/login";
import AdminLogin from "./auth/adminLogin";

// Admin Components
import SideBar from "./pages/sidebar.jsx";
import ListItems from "./pages/listitems.jsx";
import AddItems from "./pages/Additems.jsx";
import LogoutButton from "./pages/logout.jsx";
import AddProductDetail from "./cart/prodeuctDetail.jsx";
import OrdersList from "./cart/allorder.jsx";
import AddCategory from "./finalApperence/makeCAtegort.jsx";
import Categories from "./finalApperence/Category.jsx";
import CreateSection from "./finalApperence/createsection.jsx";
import AddBookForm from "./finalApperence/selectedCategory.jsx";
import BooksList from "./finalApperence/Show.jsx";
import AddAuthor from "./author/addAuthor.jsx";
import AuthorsId from "./author/getAuthor.jsx";
import CreateAuthorSection from "./author/authorSection.jsx";
import AddAuthorBookForm from "./author/authorbooks.jsx";

// User Components
import HomePage from "./finalApperence/Home.jsx";
import BookSections from "./finalApperence/Show.jsx";
import CheckoutO from "./cart/checkout.jsx";
import DisplayOrder from "./cart/displayOrder.jsx";
import Orders from "./cart/displayOrder.jsx";
import ThankYouPage from "./pages/thanku.jsx";
import CartD from "./cart/cart.jsx";
import SectionsView from "./finalApperence/SeeSections.jsx";
import Authors from "./finalApperence/Author.jsx";
import AuthorDetails from "./author/detailUthor.jsx";
import AuthorBookSections from "./author/auhtorsre.jsx";

import Navbar from "./finalApperence/Navigation.jsx";

const App = () => {
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [guestId, setGuestId] = useState(null);

  useEffect(() => {
    let storedGuestId = localStorage.getItem("guestId");
    if (!storedGuestId) {
      storedGuestId = uuidv4();
      localStorage.setItem("guestId", storedGuestId);
    }
    setGuestId(storedGuestId);
  }, []);

  return (
    <CartProvider>
      <Toaster />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="bookssection" element={<BookSections />} />
          <Route path="/ciu" element={<CheckoutO />} />
          <Route path="/displayorder" element={<DisplayOrder />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={<Orders />} />
          <Route path="thanks" element={<ThankYouPage />} />
          <Route path="/cart" element={<CartD />} />
          <Route path="/category/:id" element={<SectionsView />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="Authorbookssection" element={<AuthorBookSections />} />
          <Route path="/authors/:authorId" element={<AuthorDetails />} />
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
            <Route path="add-product" element={<AddProductDetail />} />
            <Route path="items" element={<AddItems />} />
            <Route path="list-items" element={<ListItems />} />
            <Route path="orderios" element={<OrdersList />} />
            <Route path="add" element={<AddCategory />} />
            <Route path="view" element={<Categories />} />
            <Route path="createsection" element={<CreateSection />} />
            <Route path="addBookform" element={<AddBookForm />} />
            <Route path="booklist" element={<BooksList />} />
            <Route path="addAuthor" element={<AddAuthor />} />
            <Route path="Authorid" element={<AuthorsId />} />
            <Route path="authorbook" element={<AddAuthorBookForm />} />
            <Route
              path="CreateAuthorSection"
              element={<CreateAuthorSection />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      {token && <LogoutButton />}
    </CartProvider>
  );
};

export default App;
*/
