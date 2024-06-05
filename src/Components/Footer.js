import React, { useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = "https://static.elfsight.com/platform/platform.js";
    scriptElement.defer = true;
    scriptElement.dataset.useServiceCore = true;
    document.body.appendChild(scriptElement);

    // Set up the carousel functionality after elements are mounted
    const initializeCarousel = () => {
      const carouselElement = document.querySelector('.carousel');
      const reviewElements = document.querySelectorAll('.review');
      const prevButton = document.getElementById('prevBtn');
      const nextButton = document.getElementById('nextBtn');

      if (!carouselElement || !prevButton || !nextButton || reviewElements.length === 0) {
        console.error('Carousel elements not found');
        return;
      }

      let currentIndex = 0;

      const showReview = (index) => {
        carouselElement.style.transform = `translateX(${-index * 100}%)`;
      };

      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : reviewElements.length - 1;
        showReview(currentIndex);
      });

      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < reviewElements.length - 1) ? currentIndex + 1 : 0;
        showReview(currentIndex);
      });

      // Auto-slide functionality (optional)
      const slideInterval = setInterval(() => {
        currentIndex = (currentIndex < reviewElements.length - 1) ? currentIndex + 1 : 0;
        showReview(currentIndex);
      }, 5000); // Change slide every 5 seconds

      // Clean up function to clear the interval
      return () => clearInterval(slideInterval);
    };

    // Wait for the script to be loaded before initializing the carousel
    scriptElement.onload = initializeCarousel;
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
