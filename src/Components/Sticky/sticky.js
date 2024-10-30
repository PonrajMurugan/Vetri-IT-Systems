import React, { useState, useEffect } from 'react';
import './sticky.css';

const StickyIcons = () => {
    const [showUpArrow, setShowUpArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowUpArrow(window.scrollY > 100); 
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="sticky-icons">
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="icon whatsapp-icon"
            >
                <i className="fab fa-whatsapp"></i> 
            </a>
            <a
                href="tel:+91 8681857753"
                className="icon contact-icon"
            >
                <i className="fas fa-phone-alt"></i> 
            </a>
            <button
                className={`icon up-arrow-icon ${showUpArrow ? 'visible' : ''}`}
                onClick={scrollToTop}
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
};

export default StickyIcons;
