import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './contact.css';
import Button from '../components/button';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // Check if all fields are filled
  const isFormValid = firstName && lastName && email && message;

  return (
    <div>
      <Navbar />
      <div className='MainText'>
        <div className='Text ml-10 max-w-2xl'>
          <h1 className='text-6xl mb-5 '>We're Here to Help</h1>
          <p className='text-2xl mb-5'>
            Let us know how we can assist you and provide support in your efforts to eliminate preventable sudden cardiac arrest in the young. Don't hesitate to reach out to us for any questions or concerns.
          </p>
          <p className='text-xl font-bold'>greer@heartinthegame.org</p>
          <p className='text-xl font-bold'>302.494.3133</p>
        </div>
        {/* Input Fields */}
        <div className="ml-10">
          <input 
            placeholder="First Name" 
            className="name-input mb-4" 
            value={firstName} 
            onChange={handleInputChange(setFirstName)} 
          />
          <input 
            placeholder="Last Name" 
            className="name-input mb-4 ml-10" 
            value={lastName} 
            onChange={handleInputChange(setLastName)} 
          />
          <input 
            placeholder="Email" 
            className="email-input mb-4" 
            value={email} 
            onChange={handleInputChange(setEmail)} 
          />
          <input 
            placeholder="Message" 
            className="message-input mb-4" 
            value={message} 
            onChange={handleInputChange(setMessage)} 
          />
          <Button 
            text="Submit" 
            size="xs" 
            color="red" 
            disabled={!isFormValid} // Disable if form is not valid
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
