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
      <div className='MainText flex flex-col md:flex-row px-4 md:px-10 lg:px-20 py-6'>

        <div className='Text max-w-2xl mx-auto'>
          <h1 className='text-4xl md:text-6xl mb-5 font-bold'>We're Here to Help</h1>
          <p className='text-lg md:text-2xl mb-5'>
            Let us know how we can assist you and provide support in your efforts to eliminate preventable sudden cardiac arrest in the young. Don't hesitate to reach out to us for any questions or concerns.
          </p>
          <p className='text-lg md:text-xl font-bold'>greer@heartinthegame.org</p>
          <p className='text-lg md:text-xl font-bold'>302.494.3133</p>
        </div>

        {/* Input Fields */}
        <div className="mt-[150px]">
          <input 
            placeholder="First Name" 
            className="name-input mb-4 w-full rounded-2xl p-3 border border-gray-300" 
            value={firstName} 
            onChange={handleInputChange(setFirstName)} 
          />
          <input 
            placeholder="Last Name" 
            className="Lname-input mb-4 w-full rounded-2xl p-3 border border-gray-300" 
            value={lastName} 
            onChange={handleInputChange(setLastName)} 
          />
          <input 
            placeholder="Email" 
            className="email-input mb-4 w-full rounded-2xl p-3 border border-gray-300" 
            value={email} 
            onChange={handleInputChange(setEmail)} 
          />
          <input 
            placeholder="Message" 
            className="message-input mb-4 w-full rounded-2xl p-3 border border-gray-300" 
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
