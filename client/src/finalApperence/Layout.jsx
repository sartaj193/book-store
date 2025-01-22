import React from 'react';
import Navbar from "./Navigation";
import MarqueeStrip from "./BookStrip";
import HeroImage from "./HeroSection";
import Footer from "./Foooter";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <MarqueeStrip />
      <Navbar />
      <HeroImage />
   
      {children}
         <Footer />
    </div>
  );
};

export default Layout;

