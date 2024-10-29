import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCode, faBullhorn, faHandsHelping, faLightbulb, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt, faFileInvoiceDollar, faTaxi, faEnvelope, faTools, faTv } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    return (
        <div data-aos="fade-right" className="about-container">

            {/* <h1 className="about-title">About Us</h1>
            
            <div className="about-content">
                <div className="about-text">
                    <p> <i class="bi bi-send-arrow-up ab"></i>
                        Welcome to <span className="highlight">Vetri IT Systems</span>, your trusted partner in innovative solutions. 
                        We specialize in developing products and services that cater to our clients' needs, ensuring quality and excellence in every project.
                    </p>
                    <p> <i class="bi bi-send-arrow-up ab"></i>
                        Established with a vision to transform the IT landscape, our company is dedicated to providing top-notch software development, web applications, and digital marketing solutions.
                    </p>
                    <p> <i class="bi bi-send-arrow-up ab"></i>
                        Our mission is to empower businesses to thrive in a digital world by delivering customized solutions that drive growth and efficiency.
                    </p>
                    <p> <i class="bi bi-send-arrow-up ab"></i>
                        At Vetri IT Systems, we believe in continuous improvement, creativity, and fostering long-lasting relationships with our clients.
                    </p>
                </div>
                <div className="about-images">
                    <img 
                        src="https://pollysys.com/srcfxonl/uploads/2023/01/IT-Support-Services-Detailed-IT-Services.jpg" 
                        alt="Service 1" 
                        className="about-image" 
                    />
                    <img 
                        src="https://www.techopedia.com/wp-content/uploads/2023/11/IT-Services.jpg" 
                        alt="Service 2" 
                        className="about-image" 
                    />
                    <img 
                        src="https://i.ytimg.com/vi/jm16cb--xJY/maxresdefault.jpg" 
                        alt="Service 3" 
                        className="about-image" 
                    />
                </div>
            </div>

            <div data-aos="fade-left" className="values-section">
                <h2 className="values-title">Our Values</h2>
                <ul className="values-list">
                    <li><FontAwesomeIcon icon={faCheckCircle} className="icons"/><span style={{color:"navy" , paddingRight:"10px" , fontWeight:"700"}}>Integrity: </span>  We uphold the highest standards of integrity in all our actions.</li> 
                    <li><FontAwesomeIcon icon={faLightbulb} className="icons"/><span style={{color:"navy" , paddingRight:"10px" , fontWeight:"700"}}> Innovation: </span> We strive for continuous improvement and innovation in our services.</li>
                    <li><FontAwesomeIcon icon={faHandsHelping} className="icons"/><span style={{color:"navy" , paddingRight:"10px" , fontWeight:"700"}}> Customer Commitment: </span> We are committed to providing exceptional services and building long-term relationships.</li>
                    <li><FontAwesomeIcon icon={faCode} className="icons"/> <span style={{color:"navy" , paddingRight:"10px" , fontWeight:"700"}}>Quality:</span> We deliver quality in every product and service we offer.</li>
                </ul>
            </div> */}

            <div data-aos="fade-left" className="services-section">
    <h2 className="services-title">Our Products</h2>
    <div data-aos="fade-up" className="services-grid">

    <div className="service-item">
    <FontAwesomeIcon icon={faAppleAlt} className="service-icon" />
    <h3 className="service-name">Vetri Fresh</h3>
    <p className="service-description">Organic and fresh product for a healthy lifestyle.</p>
    <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
</div>

<div className="service-item">
    <FontAwesomeIcon icon={faFileInvoiceDollar} className="service-icon" />
    <h3 className="service-name">Vetri Payslip</h3>
    <p className="service-description">A streamlined payroll system for seamless employee management.</p>
    <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
</div>

<div className="service-item">
    <FontAwesomeIcon icon={faTaxi} className="service-icon" />
    <h3 className="service-name">Vetri Cabs</h3>
    <p className="service-description">Reliable and affordable cab services for all your travel needs.</p>
    <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
</div>

<div className="service-item">
    <FontAwesomeIcon icon={faFileInvoiceDollar} className="service-icon" />
    <h3 className="service-name">Vetri Invoice</h3>
    <p className="service-description">Simplify billing with our advanced invoicing solutions.</p>
    <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
</div>

<div className="service-item">
    <FontAwesomeIcon icon={faEnvelope} className="service-icon" />
    <h3 className="service-name">Vetri Messaging</h3>
    <p className="service-description">Seamless communication for businesses of all sizes.</p>
    <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
</div>

<div className="service-item">
    <FontAwesomeIcon icon={faTv} className="service-icon" />
    <h3 className="service-name">Vetri Electronics</h3>
    <p className="service-description">Innovative electronic products to meet your technology needs.</p>
    <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
</div>

        
    </div>
</div>


            <div data-aos="fade-right" className="services-section">
                <h2 className="services-title">Our Services</h2>
                <div data-aos="fade-down" className="services-grid">
                    <div  className="service-item">
                        <FontAwesomeIcon icon={faCode} className="service-icon" />
                        <h3 className="service-name">Software Development</h3>
                        <p className="service-description">Custom software solutions tailored to meet your business needs.</p>
                        <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
                    </div>
                    <div className="service-item">
                        <FontAwesomeIcon icon={faBullhorn} className="service-icon" />
                        <h3 className="service-name">Digital Marketing</h3>
                        <p className="service-description">Comprehensive digital marketing strategies to boost your online presence.</p>
                        <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
                    </div>
                    <div className="service-item">
                        <FontAwesomeIcon icon={faLightbulb} className="service-icon" />
                        <h3 className="service-name">Product Design</h3>
                        <p className="service-description">Innovative product design services that resonate with users.</p>
                        <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
                    </div>
                    <div className="service-item">
                        <FontAwesomeIcon icon={faDatabase} className="service-icon" />
                        <h3 className="service-name">Database Management</h3>
                        <p className="service-description">Efficient management and optimization of your databases.</p>
                        <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
                    </div>
                    <div className="service-item">
                        <FontAwesomeIcon icon={faHandsHelping} className="service-icon" />
                        <h3 className="service-name">Consulting Services</h3>
                        <p className="service-description">Expert consulting services to guide your IT strategy.</p>
                        <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
                    </div>
                    <div className="service-item">
                        <FontAwesomeIcon icon={faBullhorn} className="service-icon" />
                        <h3 className="service-name">E-commerce Solutions</h3>
                        <p className="service-description">Building robust e-commerce platforms for your business.</p>
                        <div className="explore-overlay">
        <button className="explore-button">Explore More</button>
    </div>
                    </div>
                </div>
            </div>

            


            
        </div>
    );
};

export default About;
