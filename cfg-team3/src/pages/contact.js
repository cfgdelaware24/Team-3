import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './contact.css';
import Button from '../components/button';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(''); // State to show form submission status

  // Handle input changes
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // Check if all fields are filled
  const isFormValid = firstName && lastName && email && message;

  // Handle form submission with Web3Forms API
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from submitting the default way
    setResult("Sending...");

    const formData = new FormData();
    formData.append("access_key", "41161567-b3e0-4a2d-bdef-b761df036523"); // Use your Web3Forms API key
    formData.append("name", `${firstName} ${lastName}`);
    formData.append("email", email);
    formData.append("message", message);

    // Make the API request
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); // Reset form fields after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } else {
      setResult(`Error: ${data.message}`);
    }
  };

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
        <form onSubmit={handleSubmit} className="mt-8"> {/* Submit handled by Web3Forms */}
          <input
            placeholder="First Name"
            className="name-input mb-4 w-full rounded-2xl p-3 border border-gray-300"
            value={firstName}
            onChange={handleInputChange(setFirstName)}
            required
          />
          <input
            placeholder="Last Name"
            className="name-input mb-4 w-full rounded-2xl p-3 border border-gray-300"
            value={lastName}
            onChange={handleInputChange(setLastName)}
            required
          />
          <input
            placeholder="Email"
            className="email-input mb-4 w-full rounded-2xl p-3 border border-gray-300"
            value={email}
            onChange={handleInputChange(setEmail)}
            required
          />
          <textarea
            placeholder="Message"
            className="message-input mb-4 w-full rounded-2xl p-3 border border-gray-300"
            value={message}
            onChange={handleInputChange(setMessage)}
            rows="5"
            required
          />
          <Button
            text="Submit"
            size="xs"
            color="red"
            disabled={!isFormValid} // Disable if form is not valid
          />
        </form>
        {/* Show result message after submission */}
        <p className="text-lg mt-4">{result}</p>
      </div>
    </div>
  );
}

export default Contact;
