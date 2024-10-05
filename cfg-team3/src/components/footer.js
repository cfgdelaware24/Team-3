import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
//each of these are the logos for the apps that are connected

//designs the footer like the color and size
const footerStyle = {
  height: '70px',
  backgroundColor: 'rgb(253, 164, 175)',
  color: 'white',
  textAlign: 'center',
  lineHeight: '70px',
  width: '100%',
  marginTop: 'auto', // Allows footer to push to the bottom
};

//designs how the buttons will look and the animation they will have 
const buttonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: 'rgb(225 29 72)',
  cursor: 'pointer',
  fontSize: '2rem',
  padding: '10px',
  transform: 'translateY(5px)', // Moves the icons down 5px by default
  transition: 'transform 0.3s ease', // Smooth transition
};

function Footer() {
  return (
    <div style={footerStyle}>
      <a href="https://www.instagram.com/sg_heartinthegame_/" target="_blank" rel="noopener noreferrer">
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')} // Moves up on hover
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(5px)')} // Moves back down
        >
          <FaInstagram />
        </button>
      </a>

      <a href="https://www.facebook.com/groups/HeartInTheGame" target="_blank" rel="noopener noreferrer">
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')} // Moves up on hover
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(5px)')} // Moves back down
        >
          <FaFacebook />
        </button>
      </a>

      <a href="mailto:greer@heartinthegame.org">
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')} // Moves up on hover
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(5px)')} // Moves back down
        >
          <FaEnvelope />
        </button>
      </a>
    </div>
  );
}

export default Footer;
