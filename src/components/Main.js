// components/Main.js
import React from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';

const Main = () => {
  return (
    <main className="main">
      <About />
      <Work />
      <Contact />
    </main>
  );
};

export default Main;
