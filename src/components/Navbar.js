import React from 'react';
import './Navbar.css';
import Oxycare from './images/Oxycare (2).png';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Oxycare} alt="Medicare Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <a href="/" className="nav-link">Home</a>
        <a href="/our-doctors" className="nav-link">Our Doctors</a>
        <a href="/about" className="nav-link">About Us</a>
        <a href="/contact-us" className="nav-link">Contact Us</a>
      </div>
      <div>
      <Link to="/add">
        <button className="login-button">
          <FaSignInAlt className="login-icon" />
          Login
        </button>
        </Link>
      </div>
      <Link to="/user">
        <div className="navbar-right">
          <button className="appointment-btn">Patients</button>
        </div>
      </Link>
    </nav>
    
  );
};

export default Navbar;



