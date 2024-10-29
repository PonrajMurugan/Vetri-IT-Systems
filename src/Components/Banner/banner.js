import React from 'react';
import './banner.css';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';

import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';


const Banner = () => {
    return (
    //     <div  data-aos="fade-down" className="banner-container container">
    //         <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    //             <div className="carousel-inner">
    //                 <div className="carousel-item active">
    //                     <img 
    //                         src="https://media.licdn.com/dms/image/D4D12AQGtkJRfqa2rJw/article-cover_image-shrink_720_1280/0/1688560239803?e=2147483647&v=beta&t=MBh_-Z7_wqSmdgUI1q_PhicRPYWvEvKYRhTODDNXQxk" 
    //                         className="banner-image d-block w-100" 
    //                         alt="Banner"
    //                     />
    //                       <div className="overlay">
    //                              <h1 className="overlay-text">Welcome to Vetri IT Systems</h1> &nbsp;  &nbsp;  &nbsp;
    //                        <Button color="success" variant="contained" endIcon={<SendIcon />}>
    //                               Explore us
    //                          </Button>
    //    <div>
        
    //    </div>
    // </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    <div className="banner">
    <div className="banner-background">
      <img
        src="https://www.homecareinsight.co.uk/2020/07/connected-technology.jpg" 
        alt="Startup Banner"
        className="banner-image"
      />
    </div>
    <div className="banner-content">
      <h1 className="banner-title cssanimation sequence leFadeInLeft">Transform Your Business with Verti IT Systems</h1>
      <p className="banner-description cssanimation sequence leFadeInRight">
        Cutting-edge  technology tailored to your needs.
      </p>
      
      <button className="banner-button"> 
    Explore Our Products & Services 
    <SwipeRightAltIcon className='iconsss' style={{ fontSize: "38px" }} />
</button>

    </div>
    <div className="banner-overlay" />
  </div>
    );
};

export default Banner;
