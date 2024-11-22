import { useState } from 'react';
//import './login.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ setToken, setIsAdmin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/admin", {
        email,
        password,
      });

      if (res.data.success) {
        setToken(res.data.token); // Save token
        setIsAdmin(true); // Set admin state
        toast.success(res.data.message);
        navigate('/admin/items'); // Redirect to admin items page
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className='register'>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control m-3"
            id="exampleInputEmail1"
            placeholder='Enter your Email'
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control m-3"
            id="exampleInputPassword1"
            placeholder='Enter your Password'
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
