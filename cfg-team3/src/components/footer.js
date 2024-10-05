import React from 'react';
import { FaInstagram, FaFacebook,FaEnvelope} from 'react-icons/fa';

const footerStyle = {
    height: '70px',
    backgroundColor: 'rgb(253, 164, 175)',
    color: 'white',
    textAlign: 'center',
    lineHeight: '70px',
    width: '100%',
    marginTop: 'auto', // Allows footer to push to the bottom
  };
  

const buttonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: 'rgb(225 29 72)',
  cursor: 'pointer',
  fontSize: '2rem',
  padding: '10px',
};

function Footer() {
  return (
    <div style={footerStyle}>
      <a href="https://www.instagram.com/sg_heartinthegame_/" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
        <button style={buttonStyle}>
          <FaInstagram />
        </button>
      </a>

      <a href="https://www.facebook.com/groups/HeartInTheGame" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
        <button style={buttonStyle}>
          <FaFacebook />
        </button>
      </a>

      <a href="mailto:greer@heartinthegame.org" style={buttonStyle}> {/* Email Link */}
        <button style={buttonStyle}>
          <FaEnvelope /> {/* Email Icon */}
        </button>
      </a>


    </div>

    
  );
}

export default Footer;
