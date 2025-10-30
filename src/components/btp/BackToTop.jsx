import React, { useState, useEffect } from 'react';
import './BackToTop.scss';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default BackToTop;
