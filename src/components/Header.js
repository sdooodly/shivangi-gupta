// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="name">Shivangi Gupta</h1>
      <p>Marketing Professional | Portfolio</p>
      <img src="/bg-cai-fang-unsplash" alt="Architectural Representation" />

      <button className="consult-button" onClick={() => window.location.href = '#contact'}>Book a consult!!!</button>
    </header>
  );
};

export default Header;
