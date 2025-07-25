// src/Components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // Use "smooth" if you want a scroll animation
  }, [pathname]);

  return null;
};

export default ScrollToTop;
