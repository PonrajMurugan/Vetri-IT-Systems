import React from 'react';
import './footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import StickyIcons from '../Sticky/sticky';

const XTwitterIcon = () => (
  <svg
    className="twi" 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="33"
    height="30" 
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p><FaPhone className="iconss" size={16} /> <a href="tel: +918438558527"> +91-8438558527</a></p>
                    <p><FaEnvelope className="iconss" size={16} /> <a href="mailto:business@vetriit.com">business@vetriit.com</a></p>
                </div>

                <div className="footer-section">
                    <h2>Services</h2>
                    <ul>
                        <li><a href="/">Web-Development</a></li>
                        <li><a href="/">Software-Development</a></li>
                        <li><a href="/">UI-UX Design</a></li>
                        <li><a href="/">Software-Testing</a></li>
                        <li><a href="/">Digital-Marketing</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Support</h2>
                    <p><a href="/">Contact</a></p>
                    <p><a href="/">Privacy & Policy</a></p>
                    <p><a href="/">Terms & Conditions</a></p>
                </div>

                <div className="footer-section social-section">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className='fb' /></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><XTwitterIcon /></a> 
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='lin' /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className='ins' /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Vetri IT Systems. All rights reserved.</p>
            </div>
            <StickyIcons /> 
        </footer>
    );
};

export default Footer;
