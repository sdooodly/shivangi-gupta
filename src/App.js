import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Work />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;