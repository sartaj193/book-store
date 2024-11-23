import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./auth/register";
import Login from "./auth/login";
import AdminLogin from "./auth/adminLogin";
import Dashboard from "./routes/dashboard/dashboard";
import { Toaster } from "react-hot-toast";
import BookstoreInterface from "./design/Bookscomponenmt.jsx";
import SideBar from "./pages/sidebar.jsx";
import ListItems from "./pages/listitems.jsx";
import AddItems from "./pages/Additems.jsx";
import Order from "./pages/orders.jsx";
import CheckoutPage from "./pages/checkout.jsx";
import LogoutButton from "./pages/logout.jsx";
import ProductList from "./design/show.jsx";
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
    <>
      <Toaster />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PunjabiBookstoreii />} />{" "}
        {/* Now renders PunjabiBookstoreii at '/' */}
        <Route path="/bookstore" element={<BookstoreInterface />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/ciu" element={<CheckoutPageO />} />
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
    </>
  );
};

export default App;
