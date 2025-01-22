/*import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f4f8',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '40px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%',
        animation: 'fadeIn 0.5s ease-out'
      }}>
        <h1 style={{
          color: '#2c3e50',
          fontSize: '2.5rem',
          marginBottom: '20px'
        }}>Thank You for Your Order!</h1>
        
        <div style={{
          fontSize: '80px',
          color: '#27ae60',
          margin: '30px 0'
        }}>
          ✅
        </div>
        
        <p style={{
          color: '#34495e',
          fontSize: '1.2rem',
          marginBottom: '20px',
          lineHeight: '1.6'
        }}>
          Your order has been successfully placed. We're excited for you to receive your books!
        </p>
        
        <div style={{
          backgroundColor: '#ecf0f1',
          borderRadius: '4px',
          padding: '15px',
          marginBottom: '20px'
        }}>
          <h2 style={{
            color: '#2c3e50',
            fontSize: '1.3rem',
            marginBottom: '10px'
          }}>Order Details</h2>
          <p style={{ color: '#7f8c8d', marginBottom: '5px' }}>Order Number: #123456</p>
          <p style={{ color: '#7f8c8d' }}>Estimated Delivery: 3-5 business days</p>
        </div>
        
        <p style={{
          color: '#34495e',
          fontSize: '1.1rem',
          marginBottom: '30px'
        }}>
          We'll send you a confirmation email with your order details and tracking information once your package ships.
        </p>
        
        <Link to="/orders" style={{
          display: 'inline-block',
          backgroundColor: '#3498db',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontSize: '1.1rem',
          transition: 'background-color 0.3s ease'
        }}>
          View Your Order
        </Link>
      </div>
      
      <div style={{
        marginTop: '30px',
        color: '#7f8c8d',
        fontSize: '0.9rem'
      }}>
        <p>Need help? <a href="/contact" style={{ color: '#3498db', textDecoration: 'none' }}>Contact our support team</a></p>
      </div>
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ThankYouPage;
*/

import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%',
        animation: 'fadeIn 0.8s ease-out, float 3s ease-in-out infinite'
      }}>
        <div style={{
          fontSize: '100px',
          marginBottom: '20px'
        }}>
          🎉
        </div>
        
        <h1 style={{
          color: '#2c3e50',
          fontSize: '2.8rem',
          marginBottom: '20px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>Thank You for Your Order!</h1>
        
        <p style={{
          color: '#34495e',
          fontSize: '1.3rem',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Your literary adventure begins now! We're thrilled to have you as our valued customer.
        </p>
        
        <div style={{
          background: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
          borderRadius: '15px',
          padding: '20px',
          marginBottom: '30px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            color: '#2c3e50',
            fontSize: '1.5rem',
            marginBottom: '15px',
            fontWeight: 'bold'
          }}>Order Details</h2>
          <p style={{ color: '#4a4a4a', marginBottom: '8px', fontSize: '1.1rem' }}>Order Number: #123456</p>
          <p style={{ color: '#4a4a4a', fontSize: '1.1rem' }}>Estimated Delivery: 3-5 business days</p>
        </div>
        
        <p style={{
          color: '#34495e',
          fontSize: '1.2rem',
          marginBottom: '30px',
          fontStyle: 'italic'
        }}>
          "A room without books is like a body without a soul." - Cicero
        </p>
        
        <Link to="/orders" style={{
          display: 'inline-block',
          background: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
        }}>
          View Your Order
        </Link>
      </div>
      
      <div style={{
        marginTop: '40px',
        color: '#ffffff',
        fontSize: '1rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        <p>Need help? <a href="/contact" style={{ color: '#ffffff', textDecoration: 'underline' }}>Contact our support team</a></p>
      </div>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        fontSize: '40px',
        animation: 'float 6s ease-in-out infinite'
      }}>
        📚
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        fontSize: '40px',
        animation: 'float 5s ease-in-out infinite'
      }}>
        📖
      </div>
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default ThankYouPage;

