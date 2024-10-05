import Event from "../components/event";
import Navbar from "../components/navbar";
import Button from "../components/button";
import { useState } from "react";

import "./contact.css";
import Footer from "../components/footer";

export default function Events() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");

  // Handle input changes
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // Check if all fields are filled
  const isFormValid = firstName && lastName && location;

  const ScheduledEvents = [
    {
      id: "sandflkadns",
      name: "Wilmington Charter School",
      location: "100 N Dupont Rd, Wilmington, DE 19807",
      sponsor: "JP Morgan",
      dateTime: "10/24/2024 5:00PM",
      volunteersCount: 4,
      ekg: 4,
    },
    {
      id: "asdf",
      name: "Tower Hill High School",
      location: "2813 W 17th St, Wilmington, DE 19806",
      sponsor: "Chase",
      dateTime: "11/14/2024 5:00PM",
      volunteersCount: 5,
      ekg: 5,
    },
    {
      id: "gadsgas",
      name: "Dover Middle School",
      location: "1 Dover High Dr, Dover, DE 19904",
      sponsor: "Sponsor 3",
      dateTime: "12/2/2024 5:00PM",
      volunteersCount: 3,
      ekg: 6,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className=" max-w-screen-md mx-auto px-4">
          <div className="text-3xl font-semibold pb-4 pt-8 text-center">
            Scheduled Events
          </div>
          <div className="flex flex-col flex-wrap justify-center">
            {ScheduledEvents.map((event, idx) => {
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
        <Footer></Footer>
      </div>
    </>
  );
}
