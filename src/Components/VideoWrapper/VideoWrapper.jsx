import React, { useState, useEffect } from 'react';
import './VideoWrapper.css';
import video from '../../assets/real-estate-video.mp4';

const preheadlinePhrases = [
  'WELCOME TO',
  '',
  '',
];

const headlinePhrases = [
  <>
    ACRE NEW JERSEY <br /> REAL ESTATE
  </>,
  'EMMA JU ESTATES',
  'BERGEN COUNTY EXPERTS',
];

const subheadingPhrases = [
  'Your Luxury Home Professional',
  'Real estate group in Bergen County',
  'Personalized Real Estate Experience',
];

const VideoWrapper = () => {
  const [hovered, setHovered] = useState(false);
  const [preheadlineIndex, setpreHeadlineIndex] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [subheadingIndex, setSubheadingIndex] = useState(0);

  useEffect(() => {
    const headlineInterval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlinePhrases.length);
    }, 4000);

    const subheadingInterval = setInterval(() => {
      setSubheadingIndex((prev) => (prev + 1) % subheadingPhrases.length);
    }, 4000);

    const preheadlineInterval = setInterval(() => {
      setpreHeadlineIndex((prev) => (prev + 1) % preheadlinePhrases.length);
    }, 4000);

    return () => {
      clearInterval(headlineInterval);
      clearInterval(subheadingInterval);
      clearInterval(preheadlineInterval);
    };
  }, []);

  return (
    <div className="video-wrapper">
      <video
        className="background-video"
        muted
        autoPlay
        playsInline
        loop
        poster="https://res.cloudinary.com/luxuryp/videos/f_auto,q_auto/so_0,eo_0/qc2ltgqfyfkdelknxwl8/jade-mills-estates-coldwell-banker-beverly-hills-1.jpg"
      >
        <source src={video} type="video/mp4" />
        {/* Uncomment and add a webm video source if available */}
        {/* <source src={videoWebm} type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />

      <div className="hero-text">
        <p className="subtitle">{preheadlinePhrases[preheadlineIndex]}</p>
        <p className="fade-text">{headlinePhrases[headlineIndex]}</p>
        <p className="description fade-text">{subheadingPhrases[subheadingIndex]}</p>
        <button
          className="btn5"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          OUR PROPERTIES {hovered && <span>&nbsp;&#8640;</span>}
        </button>
      </div>
    </div>
  );
};

export default VideoWrapper;
