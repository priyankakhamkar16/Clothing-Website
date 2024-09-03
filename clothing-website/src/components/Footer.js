import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About EverydayElegance</h3>
          <p>
            EverydayElegance is dedicated to providing stylish and trendy clothing for all occasions.
            Our mission is to make fashion accessible, comfortable, and affordable for everyone.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#best-sellers">Best Sellers</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <strong>Email:</strong> support@everydayelegance.com<br />
            <strong>Phone:</strong> +1 (123) 456-7890<br />
            <strong>Address:</strong> 123 Fashion St, Style City, PUNE
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 EverydayElegance. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
