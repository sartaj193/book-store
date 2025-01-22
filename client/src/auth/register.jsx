
/*import React, { useState } from 'react';*/

/*import React, { useState } from 'react';
import './register.style.css'
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [name,setName] =useState('');
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
 const [phone,setPhone] =useState('')
 const [address,setAddress] =useState('')
  const navigate = useNavigate();
//submit 
  const handleSubmit = async (e)=>{
e.preventDefault();
try{
const res = await axios.post("http://localhost:3001/api/auth/register",{
  name,email,password,phone,address,
});

///api/auth/register

if(res.data.success){
  toast.success(res.data.message);
  navigate('/login');
}else{
  toast.error(res.data.message)
}

}catch(error){
console.log(error);
toast.error("something went wrong")
}
  }

  return (
    <div className='register'>
      <h1>Sign UP</h1>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
   <div>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control m-3" id="exampleInputName1" aria-describedby="emailHelp" placeholder='enter your Name' required />
   

    <input type="text"value={email} onChange={(e) => setEmail(e.target.value)}className="form-control m-3" id="exampleInputEmail1" placeholder='enter your Email' required />
    </div>
    <div className="mb-3">
   
    <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}className="form-control m-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your Password' required />
  </div>
   <div className="mb-3">
    
    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}className="form-control m-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your Phone' required />
  </div>
   <div className="mb-3">
   
    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control m-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your Address' required />
  </div>
  
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>
  
    </div>
  )
}

export default Register  */




// src/components/Register.js
/*import React, { useState } from 'react';
import './register.style.css';
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });

      console.log('Response:', res.data); // Log the response for debugging

      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error('Registration error:', error); // Log the error for debugging
      toast.error("Something went wrong");
    }
  };

  return (
    <div className='register'>
      <h1>Sign UP</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control m-3"
            placeholder='Enter your Name'
            required
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control m-3"
            placeholder='Enter your Email'
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control m-3"
            placeholder='Enter your Password'
            required
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control m-3"
            placeholder='Enter your Phone'
            required
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control m-3"
            placeholder='Enter your Address'
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;*/






import React, { useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password length validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/api/auth/register", {
        email,
        password,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-4">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=2000')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-gray-600 mt-2">
              Join us and start your journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <svg className="absolute left-3 top-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 12.713L1.8 6.412V18h20.4V6.412L12 12.713zM12 10L2 4h20l-10 6z" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 py-2 bg-white/50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <svg className="absolute left-3 top-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2a5 5 0 00-5 5v3H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V7a5 5 0 00-5-5zm3 8h-6V7a3 3 0 016 0v3z" />
                </svg>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 py-2 bg-white/50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Create password"
                  required
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 border-gray-300 text-purple-600 focus:ring-purple-500"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the Terms and Privacy Policy
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                Sign in
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
