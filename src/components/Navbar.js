import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link to="/" className="link">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/about" className="link">About Us</Link>
        </li>
        <li className="navItem">
          <Link to="/contact" className="link">Contact</Link>
        </li>
        <li className="navItem">
          <Link to="/dashboard" className="link">COVID-Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
