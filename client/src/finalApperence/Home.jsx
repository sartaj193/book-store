
/*import Navbar from "./Navigation";
import MarqueeStrip from "./BookStrip";
//import Hero from "./HeroSection";
import HeroImage from "./HeroSection";
import Categories from "./Category";

import IconGrid from "./icons";


import BookSections from "./card";
import Authors from "./Author";

import Footer from "./Foooter";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <MarqueeStrip />
      <Navbar />
      <HeroImage />
        <IconGrid />
         <Categories />
      
   
     
      <Authors />
      <BookSections />
      <Footer />
    </div>
  );
};

export default HomePage;
*/



import React from 'react';
import Layout from "./Layout";
import IconGrid from "./icons";
import Categories from "./Category";
import Authors from "./Author";
import BookSections from "./card";
//import Footer from "./Foooter";

const HomePage = () => {
  return (
    <Layout>
      <IconGrid />
      <Categories />
      <Authors />
      <BookSections />

    </Layout>
  );
};

export default HomePage;




// HomePage.js
/*import Layout from "./Layout";
import MarqueeStrip from "./BookStrip";
import IconGrid from "./icons";
import Categories from "./Category";
import Authors from "./Author";
import BookSections from "./card";
import Footer from "./Foooter";

const HomePage = () => {
  return (
    <Layout>
      <MarqueeStrip />
      <IconGrid />
      <Categories />
      <Authors />
      <BookSections />
      <Footer />
    </Layout>
  );
};

export default HomePage;*/
