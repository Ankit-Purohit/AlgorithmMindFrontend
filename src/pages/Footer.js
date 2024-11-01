// Footer.js
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>AlgorithmMind</h3>
          <p>Your platform for mastering tech, DSA, and computer science.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@algorithmmind.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AlgorithmMind. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
