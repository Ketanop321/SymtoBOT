import React from 'react';
import './About.css';
 
const About = () => {
    return (
        <>

     <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to symtoBOT, where our mission is to deliver innovative solutions to enhance the lives of our customers.
          With years of experience and a dedicated team, we pride ourselves on providing exceptional services tailored to your needs.
        </p>

        <div className="about-section">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              We aim to empower individuals and businesses through cutting-edge technology and outstanding customer service.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To become a leading global provider of innovative solutions, creating a positive impact for communities and industries.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Values</h3>
            <p>
              We believe in integrity, dedication, and a customer-first approach. Our team is driven by passion and excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default About;
