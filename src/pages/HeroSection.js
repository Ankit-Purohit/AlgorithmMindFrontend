import React from 'react';
import '../css/HeroSection.css';
import videoSource from '../videos/vid.mp4';
  // Make sure to add your video file here
  import CourseBuyCard from './CourseBuyCard';

const HeroSection = () => {
    const videoStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'blur(2px)',  // Adjust blur strength as needed
        zIndex: '1',
    };
  
      

    return (

      <div className='hero_con'>
        <div className="container">
            {/* Video Background */}
            <video style={videoStyle} src={videoSource} autoPlay loop muted />
            {/* Content overlay */}
            <div className="content">
                <h1 className="mid-logo">Welcome to AlgorithmMind</h1>
                <p>CSE_FOUNDATIONS COURSES | DATA STRUCTURE & ALGORITHMS</p>
                <button className='btn'>Get Access</button>
            </div>
        </div>
        </div>
    );
};

export default HeroSection;
