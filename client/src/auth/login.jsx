import { useForm } from "react-hook-form";
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
