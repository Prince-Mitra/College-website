import React, { useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar-right">
      <div className={`hamburger ${open ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-menu ${open ? "active" : ""}`}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/faculty">Faculty</NavLink></li>
        <li><NavLink to="/department">Department</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
