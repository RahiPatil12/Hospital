// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaSearch, FaPhoneAlt, FaMapMarkerAlt, FaSignInAlt } from 'react-icons/fa';
// import OxycareLogo from './images/OxycareLogo.png';
// import './Navbar.css';

// const Navbar = () => { // Ensure the casing matches the import statement
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo-container">
//           <img src={OxycareLogo} alt="OxycareLogo" className="logo" />
//         </div>
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/">Speciality's</Link></li>
//           <li><Link to="/">Our Network</Link></li>
//           <li><Link to="/">Patient Reviews</Link></li>
//           <li><Link to="/">Contact Us</Link></li>
//         </ul>
//         <Link to="/book-appointment">
//           <button className="appointment-button">Book Appointment</button>
//         </Link>
//       </div>

//       <div className="info-strip">
//         <div className="search-bar">
//           <FaSearch className="icon-s" />
//           <input type="text" placeholder="Search..." />
//           <button>Search</button>
//         </div>
//         <div className="info-details">
//           <p><FaPhoneAlt className="icon" /> +91 12345 67890</p>
//           <p><FaMapMarkerAlt className="icon" /> Mumbai</p>
//           <Link to="/login" className="login-button"><FaSignInAlt className="icon" /> Login</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;

/*New*/

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
        <a href="/speciality" className="nav-link">Speciality's</a>
        <a href="/patient-reviews" className="nav-link">Patient Reviews</a>
        <a href="/contact-us" className="nav-link">Contact Us</a>
      </div>
      <div>
      <Link to="/login">
        <button className="login-button">
          <FaSignInAlt className="login-icon" />
          Login
        </button>
        </Link>
      </div>
      <Link to="/book-appointment">
        <div className="navbar-right">
          <button className="appointment-btn">Book Appointment</button>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;



