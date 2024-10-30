import React from 'react';
import './footer.css';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaPinterest,
    FaYoutube,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaDesktop,
    FaCode,
    FaSketch,
    FaBullhorn,
    FaCloud,
    FaInfoCircle,
    FaBriefcase,
    FaEdit,
    FaLock,
    FaFileAlt,
    FaArrowUp
} from 'react-icons/fa';
import StickyIcons from '../Sticky/sticky';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-card">
                    <h2>Contact Us</h2>
                    <p><FaPhone /> <a href="tel:+918438558527">+91-8438558527</a></p>
                    <p><FaEnvelope /> <a href="mailto:business@vetriit.com">business@vetriit.com</a></p>
                    <p><FaMapMarkerAlt /> <span>Santhi complex - surandai</span></p>
                    <p><a href="https://wa.me/+918438558527" target="_blank" rel="noopener noreferrer"><FaPhone /> WhatsApp</a></p>
                </div>

                <div className="footer-card">
                    <h2>Services</h2>
                    <p><FaDesktop /> <a href="/">Web Development</a></p>
                    <p><FaCode /> <a href="/">Software Development</a></p>
                    <p><FaSketch /> <a href="/">UI/UX Design</a></p>
                    <p><FaBullhorn /> <a href="/">Digital Marketing</a></p>
                    <p><FaCloud /> <a href="/">Cloud Solutions</a></p>
                </div>

                <div className="footer-card">
                    <h2>Company</h2>
                    <p><FaInfoCircle /> <a href="/about-us">About Us</a></p>
                    <p><FaBriefcase /> <a href="/">Careers</a></p>
                    <p><FaEdit /> <a href="/">Blog</a></p>
                    <p><FaLock /> <a href="/">Privacy Policy</a></p>
                    <p><FaFileAlt /> <a href="/">Terms & Conditions</a></p>
                </div>

                <div className="footer-card">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
                        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaPinterest /></a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaYoutube /></a>
                    </div>
                </div>

                <div className="footer-card">
                    <h2>Newsletter</h2>
                    <p>Subscribe for the latest updates</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className="footer-card map-card">
                    <h2>Find Us</h2>
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.12116620416433!2d77.42066021668487!3d8.97833804929816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b069d57c30ef193%3A0xc3b0b2047ab1c486!2sVetri%20Computer%20Centre%2C%20Surandai!5e1!3m2!1sen!2sin!4v1730286793083!5m2!1sen!2sin"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
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
