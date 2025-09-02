import React from 'react';
import './NavBar.css';
import Nav from './Nav';
import './Nav.css';

function Navbar() {
  return (
    <header className="navbar" id="Home">
      <div className="navbar-left">
        <img src="./Image/logo.jpg" alt="Model College Rajmahal" className="logo" />
        <div className="college-name">
          <h1 className="title">MODEL COLLEGE RAJMAHAL</h1>
          <h3 className="subtitle">SAHIGANJ JHARKHAND</h3>
        </div>
      </div>
      <Nav />
    </header>
  );
}

export default Navbar;
