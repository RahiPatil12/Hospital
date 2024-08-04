// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-buttons">
          <button className="footer-button">Find a Provider</button>
          <button className="footer-button">Find a Location</button>
          <button className="footer-button">Bill Pay</button>
          <button className="footer-button">Careers</button>
          <button className="footer-button">Patient Portal</button>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>About Our Hospital</li>
            <li>Our Ecosystem</li>
            <li>Community Impact</li>
            <li>Stories & Newsroom</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Patient Tools</h3>
          <ul>
            <li>Patient Portal</li>
            <li>Billing & Financial Services</li>
            <li>Medical Records</li>
            <li>All Patient Tools</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Careers & Education</h3>
          <ul>
            <li>Explore Jobs & Careers</li>
            <li>Residencies & Training Programs</li>
          </ul>
        </div>
        <div className="footer-section footer-logo">
          <h3>Our Hospital</h3>
          <address>
            Oxycare hospital, Mahakali <br />Caves Road, Andheri (E),<br /> Mumbai-400093
          </address>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Our Hospital</p>
        <p>
          <span>ADA Compliance</span> | <span>Non Discrimination Statement</span> | <span>Disclaimer</span> | <span>Translation Disclaimer</span> | <span>Website Privacy & Security Policy</span>
        </p>
        <p>
          Language Assistance Services: If you speak a language other than English, assistance services, free of charge, are available to you.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
