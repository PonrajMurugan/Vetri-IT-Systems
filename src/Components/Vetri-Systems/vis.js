import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './vis.css';


const Vis = () => {
    return (
        <div  data-aos="fade-up" className="vis-container">
            <div className="title-container">
                <h1 className="title-text cssanimation leBeat sequence">VETRI IT SYSTEMS</h1>
                <div className="underline"></div>
            </div>

            <div className="logo-container">
            <div className="logo-item">
                <img
                    src='https://www.interviewbit.com/blog/wp-content/uploads/2021/07/ProductbasedCO-1.jpg'
                    alt="Logo 1"
                    className="company-logo"
                />
                <div className="overlay">
                    <div className="text">Product-Based Solutions</div>
                </div>
            </div>

            <div className="logo-item">
                <img
                    src='https://www.interviewbit.com/blog/wp-content/uploads/2021/07/ServicebasedCO-1.jpg'
                    alt="Logo 2"
                    className="company-logo"
                />
                <div className="overlay">
                    <div className="text">Service-Based Solutions</div>
                </div>
            </div>
        </div>

            <div  data-aos="fade-up" className="content-container">
                <p className="content-text">   <i className="bi bi-arrow-right-circle arrow-icon"></i>
               <span style={{color:"orange" , fontWeight:"700"}}> VETRI IT SYSTEMS  </span> specializes a <span style={{color:"navy" , fontWeight:"700"}}>Product based company</span>  is a company engaged in developing products that cater to the audience's needs on a larger or global scale. These products can be tangible or intangible. They are mostly a part of Information Technology (or IT), electronics, and software development
                </p> 
                <p className="content-text">  <i className="bi bi-arrow-right-circle arrow-icon"></i>
                <span style={{color:"orange" , fontWeight:"700"}}> VETRI IT SYSTEMS  </span> specializes in innovative tech solutions, <span style={{color:"navy" , fontWeight:"700"}}>Offering Services</span> in software development, web applications, and digital marketing. 
                    Our expertise helps businesses thrive in a digitally connected world.
                </p>
            </div>
        </div>
    );
};

export default Vis;
