
/*import { useForm } from "react-hook-form";*//*import React, { useState } from 'react';

import { useAuth } from '../context/auth'; // Ensure you are importing from the correct path
import toast from 'react-hot-toast';
import './login.style.css'; // Import your CSS styles

const Login = () => {
  const { handleLogin, loading } = useAuth(); // Correctly using handleLogin from the context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password); // Call handleLogin from AuthContext
    } catch (error) {
      console.error('Error during login:', error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control m-3"
            placeholder="Enter your Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control m-3"
            placeholder="Enter your Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}; 

export default Login;*/
// src/auth/login.jsx
/*import React, { useState } from 'react';
import { useAuth } from '../context/auth'; // Ensure you are importing from the correct path
import toast from 'react-hot-toast';
import './login.style.css'; // Import your CSS styles

const Login = () => {
  const { handleLogin, loading } = useAuth(); // Correctly using handleLogin from the context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password); // Call handleLogin from AuthContext
    } catch (error) {
      console.error('Error during login:', error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control m-3"
            placeholder="Enter your Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control m-3"
            placeholder="Enter your Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;*/



// src/auth/login.jsx

/*import React, { useState } from 'react';
 

import { useAuth } from '../context/authcontext';// Correct import for named export
import toast from 'react-hot-toast';
import './login.style.css'; // Import your CSS styles

const Login = () => {
  const { handleLogin, loading } = useAuth(); // Use the context hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password); // Call handleLogin from context
    } catch (error) {
      console.error('Error during login:', error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control m-3"
            placeholder="Enter your Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control m-3"
            placeholder="Enter your Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;*/


/*import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";

 // Ensure this path is correct
import { utilityFunctions } from "../utils/module";

import { Server_URL } from "../utils/config"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";
import { toast} from 'react-hot-toast'; // Import toast and ToastContainer
//import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function AdminLogin() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');

  async function onSubmit(data) {
    try {
      const url = `${Server_URL}api/auth/login`; // Construct the full URL
      const res = await axios.post(url, data);
      const { error, message, token } = res.data;

      if (error) {
        setServerError(message);
        toast.error(message); // Show error toast
      } else {
        reset();
        utilityFunctions.setCookie('adminAuthToken', token, 24); // Save the token in a cookie
        toast.success("Login successful! Redirecting..."); // Show success toast
        navigate('/shop'); // Redirect on success
      }
    } catch (error) {
      setServerError(error.message); // Handle server error
      toast.error("An error occurred during login."); // Show error toast
    }
  }

  useEffect(() => {
    setFocus('email'); // Focus on the email field when the component mounts
  }, [setFocus]);

  return (
    <div className="container py-5">
    
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white py-2">
              Admin Sign-In
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {serverError && <p className="text-danger">{serverError}</p>}
                <div className="mb-1">
                  <label>Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="form-control"
                    type="email"
                    placeholder="Enter your Email"
                  />
                  {errors.email && (
                    <p className="text-danger">This field is required</p>
                  )}
                </div>
                <div className="mb-2">
                  <label>Password</label>
                  <input
                    {...register("password", { required: true })}
                    className="form-control"
                    type="password"
                    placeholder="Enter your Password"
                  />
                  {errors.password && (
                    <p className="text-danger">This field is required</p>
                  )}
                </div>
                <button className="btn btn-success mt-2">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;*/

/*import { useForm } from "react-hook-form";
>>>>>>> e6a9c0b (first commit)
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context/authcontext"; // Import useAuth from the Auth context
//import { Server_URL } from "../utils/config"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

import { baseUrl } from "../utils/config";
function Login() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();
  
  const { login } = useAuth(); // Get login function from the auth context
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');

  async function onSubmit(data) {
    try {
      const url = `${baseUrl}api/auth/login`; // Construct the full URL
      const res = await axios.post(url, data);
      const { error, message, token } = res.data;

      if (error) {
        setServerError(message);
        toast.error(message); // Show error toast
      } else {
        reset();
        login(token); // Call login function from Auth context
        toast.success("Login successful! Redirecting...");
        navigate('/shop'); // Redirect to shop page on success
      }
    } catch (error) {
      setServerError(error.message); // Handle server error
      toast.error("An error occurred during login."); // Show error toast
    }
  }

  useEffect(() => {
    setFocus('email'); // Focus on the email field when the component mounts
  }, [setFocus]);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white py-2">
              Admin Sign-In
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {serverError && <p className="text-danger">{serverError}</p>}
                <div className="mb-1">
                  <label>Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="form-control"
                    type="email"
                    placeholder="Enter your Email"
                  />
                  {errors.email && (
                    <p className="text-danger">This field is required</p>
                  )}
                </div>
                <div className="mb-2">
                  <label>Password</label>
                  <input
                    {...register("password", { required: true })}
                    className="form-control"
                    type="password"
                    placeholder="Enter your Password"
                  />
                  {errors.password && (
                    <p className="text-danger">This field is required</p>
                  )}
                </div>
                <button className="btn btn-success mt-2">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
*/


//working
/*import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { utilityFunctions } from "../utils/module";
import { Server_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserLogin() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  async function onSubmit(data) {
    try {
      const url = `${Server_URL}api/auth/login`;
      const res = await axios.post(url, data);
      const { error, message, token } = res.data;

      if (error) {
        setServerError(message);
        toast.error(message);
      } else {
        reset();
        utilityFunctions.setCookie("userToken", token, 24);
        toast.success("Login successful!");
        navigate("/", { state: { userToken: token } }); // Pass token and any data to Checkout
      }
    } catch (error) {
      setServerError(error.message);
      toast.error("An error occurred during login.");
    }
  }

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <div className="container py-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white py-2">User Sign-In</div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {serverError && <p className="text-danger">{serverError}</p>}
                <div className="mb-1">
                  <label>Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="form-control"
                    type="email"
                    placeholder="Enter your Email"
                  />
                  {errors.email && <p className="text-danger">This field is required</p>}
                </div>
                <div className="mb-2">
                  <label>Password</label>
                  <input
                    {...register("password", { required: true })}
                    className="form-control"
                    type="password"
                    placeholder="Enter your Password"
                  />
                  {errors.password && <p className="text-danger">This field is required</p>}
                </div>
                <button className="btn btn-success mt-2">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;*/

import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { utilityFunctions } from "../utils/module";
import { Server_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Lock } from "lucide-react";

function UserLogin() {
  // ... keep existing code (form hooks and state)

    const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  async function onSubmit(data) {
    try {
      const url = `${Server_URL}api/auth/login`;
      const res = await axios.post(url, data);
      const { error, message, token } = res.data;

      if (error) {
        setServerError(message);
        toast.error(message);
      } else {
        reset();
        utilityFunctions.setCookie("userToken", token, 24);
        toast.success("Login successful!");
        navigate("/", { state: { userToken: token } }); // Pass token and any data to Checkout
      }
    } catch (error) {
      setServerError(error.message);
      toast.error("An error occurred during login.");
    }
  }

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <ToastContainer />
      <div style={{
        width: "100%",
        maxWidth: "400px",
        padding: "2rem",
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        borderRadius: "1rem",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        animation: "fadeIn 0.5s ease-out",
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "2rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "2rem",
          fontWeight: "bold",
        }}>
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          {serverError && (
            <p style={{ color: "#ef4444", marginBottom: "1rem", textAlign: "center" }}>
              {serverError}
            </p>
          )}

          <div style={{ marginBottom: "1.5rem", position: "relative" }}>
            <div style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#6b7280",
            }}>
              <Mail size={20} />
            </div>
            <input
              {...register("email", { required: true })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 3rem",
                borderRadius: "0.5rem",
                border: "1px solid #e5e7eb",
                transition: "all 0.3s ease",
                outline: "none",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
              type="email"
              placeholder="Enter your Email"
            />
            {errors.email && (
              <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.5rem" }}>
                This field is required
              </p>
            )}
          </div>

          <div style={{ marginBottom: "1.5rem", position: "relative" }}>
            <div style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#6b7280",
            }}>
              <Lock size={20} />
            </div>
            <input
              {...register("password", { required: true })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 3rem",
                borderRadius: "0.5rem",
                border: "1px solid #e5e7eb",
                transition: "all 0.3s ease",
                outline: "none",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
              type="password"
              placeholder="Enter your Password"
            />
            {errors.password && (
              <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.5rem" }}>
                This field is required
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              fontWeight: "500",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              marginTop: "1rem",
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            Sign In
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default UserLogin;

// mdk
/*import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { utilityFunctions } from "../utils/module";
import { Server_URL } from "../utils/config";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserLogin() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const [serverError, setServerError] = useState("");

  async function onSubmit(data) {
    try {
      const url = `${Server_URL}api/auth/login`;
      const res = await axios.post(url, data);
      const { error, message, token } = res.data;

      if (error) {
        setServerError(message);
        toast.error(message);
      } else {
        reset();
        utilityFunctions.setCookie("userToken", token, 24);
        toast.success("Login successful!");
        navigate("/", { state: { userToken: token } });
      }
    } catch (error) {
      setServerError(error.message);
      toast.error("An error occurred during login.");
    }
  }

  useEffect(() => {
    setFocus("email");

    // Check for Google auth token in URL
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      utilityFunctions.setCookie("userToken", token, 24);
      toast.success("Google login successful!");
      navigate("/", { state: { userToken: token } });
    }
  }, [setFocus, location, navigate]);

  const handleGoogleLogin = () => {
    window.location.href = `${Server_URL}api/auth/google`;
  };

  return (
    <div className="container py-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white py-2">User Sign-In</div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {serverError && <p className="text-danger">{serverError}</p>}
                <div className="mb-1">
                  <label>Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="form-control"
                    type="email"
                    placeholder="Enter your Email"
                  />
                  {errors.email && <p className="text-danger">This field is required</p>}
                </div>
                <div className="mb-2">
                  <label>Password</label>
                  <input
                    {...register("password", { required: true })}
                    className="form-control"
                    type="password"
                    placeholder="Enter your Password"
                  />
                  {errors.password && <p className="text-danger">This field is required</p>}
                </div>
                <button className="btn btn-success mt-2 w-100">Login</button>
              </form>
              <div className="mt-3">
                <div className="text-center mb-2">Or</div>
                <button 
                  onClick={handleGoogleLogin} 
                  className="btn btn-outline-dark w-100"
                >
                  <img 
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                    alt="Google logo" 
                    className="me-2"
                    style={{ width: "18px", height: "18px" }}
                  />
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;*/
/*import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Server_URL = "http://localhost:3001";

function UserLogin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    try {
      const res = await axios.post(`${Server_URL}/api/auth/login`, data);
      const { error, message, token } = res.data;

      if (error) {
        toast.error(message);
      } else {
        reset();
        document.cookie = `userToken=${token}; max-age=${24 * 60 * 60}`;
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (err) {
      toast.error("An error occurred during login.");
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      document.cookie = `userToken=${token}; max-age=${24 * 60 * 60}`;
      toast.success("Google login successful!");
      navigate("/");
    } else if (location.pathname === "/auth/google/error") {
      toast.error("Google login failed. Please try again.");
    }
  }, [location, navigate]);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    window.location.href = `${Server_URL}/auth/google`;
  };

  return (
    <div className="container py-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white py-2">User Sign-In</div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1">
                  <label>Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="form-control"
                    type="email"
                    placeholder="Enter your Email"
                  />
                  {errors.email && <p className="text-danger">This field is required</p>}
                </div>
                <div className="mb-2">
                  <label>Password</label>
                  <input
                    {...register("password", { required: true })}
                    className="form-control"
                    type="password"
                    placeholder="Enter your Password"
                  />
                  {errors.password && <p className="text-danger">This field is required</p>}
                </div>
                <button className="btn btn-success mt-2 w-100">Login</button>
              </form>
              <div className="mt-3 text-center">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-outline-dark w-100"
                  disabled={isLoading}
                >
                  {isLoading ? "Redirecting..." : "Sign in with Google"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;*/
// google one
/*import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { utilityFunctions } from "../utils/module";
import { Server_URL } from "../utils/config";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin } from '@react-oauth/google';

function UserLogin() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const [serverError, setServerError] = useState("");

  async function onSubmit(data) {
    try {
      const url = `${Server_URL}api/auth/login`;
      const res = await axios.post(url, data);
      const { error, message, token } = res.data;

      if (error) {
        setServerError(message);
        toast.error(message);
      } else {
        reset();
        utilityFunctions.setCookie("userToken", token, 24);
        toast.success("Login successful!");
        navigate("/", { state: { userToken: token } });
      }
    } catch (error) {
      setServerError(error.message);
      toast.error("An error occurred during login.");
    }
  }

  useEffect(() => {
    setFocus("email");

    // Check for Google auth token in URL
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      utilityFunctions.setCookie("userToken", token, 24);
      toast.success("Google login successful!");
      navigate("/", { state: { userToken: token } });
    }
  }, [setFocus, location, navigate]);

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(`${Server_URL}auth/google`, {
        token: credentialResponse.credential,
      });
      const { token } = res.data;
      utilityFunctions.setCookie("userToken", token, 24);
      toast.success("Google login successful!");
      navigate("/", { state: { userToken: token } });
    } catch (error) {
      toast.error("Google login failed. Please try again.");
    }
  };

  const handleGoogleLoginError = () => {
    toast.error("Google login failed. Please try again.");
  };

  return (
    <div className="container py-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white py-2">User Sign-In</div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {serverError && <p className="text-danger">{serverError}</p>}
                <div className="mb-1">
                  <label>Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="form-control"
                    type="email"
                    placeholder="Enter your Email"
                  />
                  {errors.email && <p className="text-danger">This field is required</p>}
                </div>
                <div className="mb-2">
                  <label>Password</label>
                  <input
                    {...register("password", { required: true })}
                    className="form-control"
                    type="password"
                    placeholder="Enter your Password"
                  />
                  {errors.password && <p className="text-danger">This field is required</p>}
                </div>
                <button className="btn btn-success mt-2 w-100">Login</button>
              </form>
              <div className="mt-3 text-center">
                <p>Or sign in with:</p>
                <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  onError={handleGoogleLoginError}
                  useOneTap
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;*/





/*import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Server_URL = "http://localhost:3001";

function UserLogin() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    try {
      const res = await axios.post(`${Server_URL}/api/auth/login`, data);
      const { error, message, token } = res.data;

      if (error) {
        toast.error(message);
      } else {
        reset();
        document.cookie = `userToken=${token}; max-age=${24 * 60 * 60}`;
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (err) {
      toast.error("An error occurred during login.");
    }
  }

  useEffect(() => {
    // Handle token from Google login callback
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      document.cookie = `userToken=${token}; max-age=${24 * 60 * 60}`;
      toast.success("Google login successful!");
      navigate("/");
    }
  }, [location, navigate]);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    window.location.href = `${Server_URL}/auth/google`;
  };

  return (
    <div className="container py-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white py-2">User Sign-In</div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1">
                  <label>Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="form-control"
                    type="email"
                    placeholder="Enter your Email"
                  />
                  {errors.email && <p className="text-danger">This field is required</p>}
                </div>
                <div className="mb-2">
                  <label>Password</label>
                  <input
                    {...register("password", { required: true })}
                    className="form-control"
                    type="password"
                    placeholder="Enter your Password"
                  />
                  {errors.password && <p className="text-danger">This field is required</p>}
                </div>
                <button className="btn btn-success mt-2 w-100">Login</button>
              </form>
              <div className="mt-3 text-center">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-outline-dark w-100"
                  disabled={isLoading}
                >
                  {isLoading ? "Redirecting..." : "Sign in with Google"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;*/






/*import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { utilityFunctions } from "../utils/module";
import { Server_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserLogin({ onLoginSuccess }) {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      const url = `${Server_URL}api/auth/login`;
      const res = await axios.post(url, data);
      const { error, message, token } = res.data;

      if (error) {
        toast.error(message);
      } else {
        reset();
        utilityFunctions.setCookie("userToken", token, 24);
        toast.success("Login successful!");
        onLoginSuccess(token);
      }
    } catch (error) {
      toast.error("An error occurred during login.");
    }
  }

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <div className="container py-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white py-2">User Sign-In</div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                  />
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    {...register("password", { required: "Password is required" })}
                    className="form-control"
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                  />
                  {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
*/

