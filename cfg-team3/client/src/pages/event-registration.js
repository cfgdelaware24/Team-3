import { useState } from "react"; 
import axios from "axios";  


export default function EventRegistration() {

    const [eventId, setEventId] = useState('');
    const [name, setName] = useState('');
    const [sponsor, setSponsor] = useState('');
    const [location, setLocation] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [volunteersCount, setVolunteersCount] = useState('');
    const [ekg, setEkg] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();    
        const formData = {
          eventId,
          name,
          sponsor,
          location,
          dateTime,
          volunteersCount: parseInt(volunteersCount),
          ekg: parseFloat(ekg)
        };


        try {
            console.log(formData); 
            console.log("firstside");
          const response = await axios.post('http://localhost:4000/api/app_submit', formData);
          setMessage(response.data.message);
        } catch (error) {
          console.log("There was an error submitting the form!");
          setMessage("Error submitting data."); 
        }
      };



  return (
    <form className="max-w-screen-md mx-auto" onSubmit={handleSubmit}>
      <div className="font-medium text-3xl mb-4">Event Registration</div>

      <div>
        <label htmlFor="eventId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Event ID
        </label>
        <input
          type="text"
          id="eventId"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="sponsor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Sponsor
        </label>
        <input
          type="text"
          id="sponsor"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={sponsor}
          onChange={(e) => setSponsor(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Location
        </label>
        <input
          type="text"
          id="location"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="dateTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Date & Time
        </label>
        <input
          type="datetime-local"
          id="dateTime"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="volunteersCount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Volunteers Count
        </label>
        <input
          type="number"
          id="volunteersCount"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={volunteersCount}
          onChange={(e) => setVolunteersCount(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="ekg" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          EKG
        </label>
        <input
          type="number"
          id="ekg"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={ekg}
          onChange={(e) => setEkg(e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          value="Submit"
        />
      </div>

      {/* Display success/error message */}
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </form>
  );
}
