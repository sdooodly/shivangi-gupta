import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; 2024{' '}
        <a href="https://github.com/sdooodly" target="_blank" rel="noopener noreferrer">
          sdooodly
        </a>{' '}
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;