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

import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context/authcontext"; // Import useAuth from the Auth context
import { Server_URL } from "../utils/config"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

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
      const url = `${Server_URL}api/auth/login`; // Construct the full URL
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
