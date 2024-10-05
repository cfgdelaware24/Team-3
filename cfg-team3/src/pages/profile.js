import React, { useState, useEffect } from "react";
import Event from "../components/event";
import Navbar from "../components/navbar";
import { firestore } from "../firebase"; // Import Firestore instance
import { collection, getDocs } from "@firebase/firestore";
import MyIcon from "../images/usericon.svg";

export default function EventDetail() {
  const userId = "SjnfUeRrj3MAMfkOIYPX";
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(firestore, "ApprovedEvents");
        const eventSnapshot = await getDocs(eventsCollection);
        const eventsList = eventSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRegisteredEvents(eventsList);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className="max-w-screen-md mx-auto pb-[200px] flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={MyIcon}
                alt="Profile"
                className="rounded-full w-32 h-32 mx-auto"
              />
              <div className="text-center mt-4">
                <div className="text-xl font-semibold">John Doe</div>
                <div className="text-gray-600">
                  Registered Events: {registeredEvents.length}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 p-4">
            <div className="text-3xl font-semibold py-4">
              Hi John Doe! Here are your events:
            </div>
            <div className="flex flex-col flex-wrap justify-center">
              {registeredEvents.map((event, idx) => {
                if (event.users.includes(userId) && idx < 2) {
                  return <Event key={idx} event={event} status="registered" />;
                } else {
                  return <Event key={idx} event={event} status="finished" />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
