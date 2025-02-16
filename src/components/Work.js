import React from 'react';
import './Work.css'; // Import the CSS file for this component

const Work = () => {
  return (
    <section id="work" className="work-section">
      <h2 className="work-title">My Work</h2>
      <div className="work-gallery">
        <div className="work-item">
          <div className="work-item-content">
            <h3>Reuters</h3>
            <p>Global news organization</p>
          </div>
        </div>
        <div className="work-item">
          <div className="work-item-content">
            <h3>Nielsen</h3>
            <p>Global measurement and data analytics</p>
          </div>
        </div>
        <div className="work-item">
          <div className="work-item-content">
            <h3>Google</h3>
            <p>Technology and innovation leader</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;