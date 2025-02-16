import React from 'react';
import Services from './Services';
import './About.css'; // Import the CSS file for this component

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="text-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hi! I am a marketing professional with a knack for creating impactful campaigns and strategies. Welcome to my portfolio.
          </p>
        </div>
      </div>
      <Services />
    </section>
  );
};

export default About;