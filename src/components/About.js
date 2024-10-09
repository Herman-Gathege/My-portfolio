// src/components/About.js
import React from 'react';
import './About.css';
import profilePic from '../assets/profile-pic.jpg'; // replace with your image

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate UX/UI designer and developer with a knack for creating intuitive user experiences and robust web applications.
            My goal is to bridge the gap between elegant design and efficient functionality.
          </p>
          <div className="skills">
            <span>Figma</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Flask</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
