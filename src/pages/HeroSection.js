import React from 'react'
import '../css/HeroSection.css'
import backgroundImage from '../images/back.jpg';
const HeroSection = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      };


  return (
    <div>
     <div style={backgroundStyle}>
        <div>
        <h1 className='mid-logo' >Welcome to AlgorithmMind</h1>
        </div>
    </div> 
    </div>
  )
}

export default HeroSection
