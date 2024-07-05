import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPhoneAlt, FaMapMarkerAlt, FaSignInAlt } from 'react-icons/fa';
import OxycareLogo from './images/OxycareLogo.png';
import './Navbar.css';

const Navbar = () => { // Ensure the casing matches the import statement
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={OxycareLogo} alt="OxycareLogo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Speciality's</Link></li>
          <li><Link to="/">Our Network</Link></li>
          <li><Link to="/">Patient Reviews</Link></li>
          <li><Link to="/">Contact Us</Link></li>
        </ul>
        <Link to="/book-appointment">
          <button className="appointment-button">Book Appointment</button>
        </Link>
      </div>

      <div className="info-strip">
        <div className="search-bar">
          <FaSearch className="icon-s" />
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="info-details">
          <p><FaPhoneAlt className="icon" /> +91 12345 67890</p>
          <p><FaMapMarkerAlt className="icon" /> Mumbai</p>
          <Link to="/login" className="login-button"><FaSignInAlt className="icon" /> Login</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;


