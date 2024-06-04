import React, { useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.dataset.useServiceCore = true;
    document.body.appendChild(script);

    // Set up the carousel functionality after elements are mounted
    const initCarousel = () => {
      const carousel = document.querySelector('.carousel');
      const reviews = document.querySelectorAll('.review');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      let index = 0;

      function showReview(index) {
        carousel.style.transform = `translateX(${-index * 100}%)`;
      }

      prevBtn.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : reviews.length - 1;
        showReview(index);
      });

      nextBtn.addEventListener('click', () => {
        index = (index < reviews.length - 1) ? index + 1 : 0;
        showReview(index);
      });

      // Auto-slide functionality (optional)
      const interval = setInterval(() => {
        index = (index < reviews.length - 1) ? index + 1 : 0;
        showReview(index);
      }, 5000); // Change slide every 5 seconds

      // Clean up function to clear the interval
      return () => clearInterval(interval);
    };

    // Wait for the script to be loaded before initializing the carousel
    script.onload = initCarousel;
  }, []);

  return (
    <footer className="footer">
      <div className="elfsight-app-7447ffce-3a48-4f74-ac4f-3ca37123f370" data-elfsight-app-lazy></div>
      
      <div className="footer-content">
        <div className="footer-section">
          <h2>SmartCart</h2>
          <div className="social-icons">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>
        <div className="footer-section">
          <ul>
            <li>More</li>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
