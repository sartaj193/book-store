//import { Button } from "./ui/button";

/*const Hero = () => {
  return (
    <div className="bg-cream py-16">
      <div className="container mx-auto flex items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-5xl font-serif font-bold text-charcoal mb-6">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore our vast collection of books across all genres. From bestsellers to rare finds,
            we have something for every reader.
          </p>
          
        </div>
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books Collection"
            className="rounded-lg shadow-2xl w-[500px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;*/


/*import React from 'react';
const HeroImage = () => {
  return (
    <div style={{
      width: '100%',
      height: '500px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <img
   
           src={require('.././assets/bookn/bookimage1.jpg')}
        alt="Library interior"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
           display: 'block',
        }}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem'
        }}>Discover Your Next Favorite Book</h1>
        <p style={{
          fontSize: '1.25rem',
          maxWidth: '600px'
        }}>Explore our vast collection of books across all genres</p>
      </div>
    </div>
  );
};
export default HeroImage;*/


import React from 'react';

const HeroImage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        position: 'relative',
        overflow: 'hidden', // Prevents overflow beyond the container
      }}
    >
      <img
        src={require('.././assets/bookn/bookimage2.jpg')}
        alt="Library interior"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the image fills the container
          display: 'block',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)', // Adds a semi-transparent overlay
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          padding: '0 1rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
          }}
        >
          Discover Your Next Favorite Book
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            maxWidth: '600px',
          }}
        >
          Explore our vast collection of books across all genres
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
