// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I am a UX/UI Designer & Full-Stack Developer.</p>
        <button className="hero-btn" onClick={() => window.location.href = '#projects'}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
