import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './vis.css';

const Vis = () => {
    return (
        <div data-aos="fade-up" className="vis-section">
            <div className="vis-title">
                <h1 className="vis-heading">VETRI IT SYSTEMS</h1>
                <div className="vis-underline"></div>
            </div>

            <div className="vis-content">
                <div className="vis-item">
                    <div className="vis-logo">
                        <img
                            src='https://www.interviewbit.com/blog/wp-content/uploads/2021/07/ProductbasedCO-1.jpg'
                            alt="Product-Based Solutions"
                            className="vis-image"
                        />
                        <div className="vis-overlay">
                            <div className="vis-overlay-text">Product-Based Solutions</div>
                        </div>
                    </div>
                    <p className="vis-description">
                        <i className="bi bi-arrow-right-circle vis-icon"></i>
                        <span className="vis-highlight"> VETRI IT SYSTEMS </span>
                        specializes in a <span className="vis-highlight-alt">Product-based company</span>
                        that develops products catering to audience needs on a larger or global scale. 
                        These products can be tangible or intangible, mainly in Information Technology (or IT), electronics,
                        and software development.
                    </p>
                </div>

                <div className="vis-item">
                    <p className="vis-description">
                        <i className="bi bi-arrow-right-circle vis-icon"></i>
                        <span className="vis-highlight"> VETRI IT SYSTEMS </span>
                        specializes in innovative tech solutions, <span className="vis-highlight-alt">Offering Services</span>
                        in software development, web applications, and digital marketing. Our expertise helps businesses thrive in a digitally connected world.
                    </p>
                    <div className="vis-logo">
                        <img
                            src='https://www.interviewbit.com/blog/wp-content/uploads/2021/07/ServicebasedCO-1.jpg'
                            alt="Service-Based Solutions"
                            className="vis-image"
                        />
                        <div className="vis-overlay">
                            <div className="vis-overlay-text">Service-Based Solutions</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vis;
