import React from 'react';
import Navbar from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
    
      <Navbar />
      
   
      {children}
    
    </div>
  );
};

export default Layout;

