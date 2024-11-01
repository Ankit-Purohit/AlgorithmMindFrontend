import React from 'react'
import '../css/HeroSection.css'
import backgroundImage from '../images/back.jpg';
const HeroSection = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        filter: 'blur(3px)', // Adjust blur strength as needed
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '1',
      };

  return (
    <div className="container">
    
     <div style={backgroundStyle}>
    </div> 
     <div className="content">
      <h1 className="mid-logo">Welcome to AlgorithmMind</h1>
      <p>CSE_FOUNDATIONS COURSES | DATA STRUCTURE & ALGORITHMS</p>
      <button>Get Access</button>
     </div>

    </div>
  )
}

export default HeroSection
