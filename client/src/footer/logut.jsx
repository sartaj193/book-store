import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { utilityFunctions } from '../utils/module';

const LogoutPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const confirmLogout = () => {
    utilityFunctions.removeCookie('userToken');
    navigate('/');
  };

  const cancelLogout = () => {
    setShowConfirmation(false);
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f4f8',
    fontFamily: "'Poppins', sans-serif",
  };

  const cardStyle = {
    background: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  };

  const titleStyle = {
    color: '#2d3748',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: '600',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#4299e1',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e53e3e',
    marginRight: '10px',
  };

  const confirmButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#48bb78',
  };

  const modalStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const modalContentStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '300px',
    width: '100%',
    textAlign: 'center',
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Logout</h1>
        <p style={{ marginBottom: '20px' }}>Are you sure you want to log out?</p>
        <button style={buttonStyle} onClick={handleLogout}>Logout</button>
      </div>

      {showConfirmation && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <p style={{ marginBottom: '20px' }}>Are you sure you want to logout?</p>
            <button style={cancelButtonStyle} onClick={cancelLogout}>Cancel</button>
            <button style={confirmButtonStyle} onClick={confirmLogout}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutPage;

