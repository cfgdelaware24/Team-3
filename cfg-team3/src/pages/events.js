import React, { useState, useEffect } from "react";
import Event from "../components/event";
import Navbar from "../components/navbar";
import Button from "../components/button";
import { firestore } from "../firebase"; // Import Firestore instance
import { doc, setDoc, collection, getDocs } from "@firebase/firestore"; // Import the needed functions

import "./contact.css";
import Footer from "../components/footer";

export default function Events() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [scheduledEvents, setScheduledEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(firestore, "ApprovedEvents");
        const eventSnapshot = await getDocs(eventsCollection);
        const eventsList = eventSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setScheduledEvents(eventsList);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  // Handle input changes
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Create a document in Firestore
      await setDoc(doc(firestore, "EventRequests", location), {
        firstName,
        lastName,
        location,
      });
      console.log("Event request successfully submitted!");
    } catch (error) {
      console.error("Error submitting event request: ", error);
    }
  };

  // Check if all fields are filled
  const isFormValid = firstName && lastName && location;

  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className="max-w-screen-md mx-auto px-4">
          <div className="text-3xl font-semibold pb-4 pt-8 text-center">
            Scheduled Events
          </div>
          <div className="flex flex-col flex-wrap justify-center">
            {scheduledEvents.map((event, idx) => {
              return <Event key={idx} event={event} status="not-registered" />;
            })}
          </div>
          <div className="text-3xl font-semibold py-4 text-center">
            Want an Event in Your Area?
          </div>
          <form
            className="mx-auto pb-[200px] flex flex-col gap-4"
            action="event"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-4 sm:flex-row flex-col">
              <input
                className="p-3 w-full border border-gray-300 rounded"
                type="text"
                id="name"
                name="name"
                placeholder="First Name"
                value={firstName}
                onChange={handleInputChange(setFirstName)}
              />
              <input
                className="p-3 w-full border border-gray-300 rounded"
                type="text"
                id="name"
                name="name"
                placeholder="Last Name"
                value={lastName}
                onChange={handleInputChange(setLastName)}
              />
            </div>
            <input
              className="p-3 w-full border border-gray-300 rounded"
              type="text"
              id="location"
              name="location"
              placeholder="Location Name"
              value={location}
              onChange={handleInputChange(setLocation)}
            />
            <div className="text-white">
              <Button
                text="Submit"
                size="xs"
                color="red"
                disabled={!isFormValid} // Disable if form is not valid
              />
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
