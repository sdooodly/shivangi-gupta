// Import necessary React modules
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="underlay">
      <div className="container">
        {/* <div className="overlay"> */}
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;









