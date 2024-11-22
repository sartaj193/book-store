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
        toast.error(res.data.message); // Handle messages returned from the server
      }
    } catch (error) {
      if (error.response && error.response.data) {
        // If the server responds with a specific error message
        toast.error(error.response.data.message || "Something went wrong");
      } else {
        console.error('Registration error:', error); // Log the error for debugging
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className='register'>
      <h1>Sign Up</h1>
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
            type="email"
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
        <button type="submit" className="btn btn-primary"></button>
      </form>
    </div>
  );
};

export default Register;




