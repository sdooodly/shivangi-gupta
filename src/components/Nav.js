import React from 'react';
import './Nav.css'; // Import the CSS file for this component

const Nav = () => {
  return (
    <nav className="nav">
      <a href="#about" className="nav-link">About</a>
      <a href="#work" className="nav-link">Work</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  );
};

export default Nav;