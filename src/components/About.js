// components/About.js
import React from 'react';
import Services from './Services';
import ArchitectureImage from './ArchitectureImage';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="text-content">
          <h2>About Me</h2>
          <p>Hi! I am a marketing professional with a knack for creating impactful campaigns and strategies. Welcome to my portfolio.</p>
          <Services />
        </div>
        <div className="image-content">
          <ArchitectureImage />
        </div>
      </div>
    </section>
  );
};

export default About;
