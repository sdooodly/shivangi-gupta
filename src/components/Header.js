import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1 className="name">Shivangi Gupta</h1>
      <p className="tagline">Marketing Professional | Portfolio</p>
      <button className="consult-button" onClick={() => (window.location.href = '#contact')}>
        Book a Consult
      </button>
    </header>
  );
};

export default Header;