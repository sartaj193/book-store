import React from 'react';
import Layout from '../component/layout'; // Import your Layout component

const House = () => {
  return (
    <Layout>
      {/* Other home content will go here */}
      <div className="container">
        <h1>Welcome to the Home Page!</h1>
        <p>This is the main content below the carousel.</p>
      </div>
    </Layout>
  );
};

export default House;
