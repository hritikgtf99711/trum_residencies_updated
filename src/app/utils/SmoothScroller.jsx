'use client'; 
import { useEffect } from 'react';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Aligns the top of the target with the top of the viewport
        });
      }
    };

    // Select all anchor tags with href starting with '#'
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener('click', handleSmoothScroll));

    // Cleanup event listeners on component unmount
    return () => {
      links.forEach((link) => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return <>{children}</>;
};

export default SmoothScroll;