import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import { useState } from "react";
import Button from "../components/button";
import Event from "../components/event";

export default function EventRegistration() {
  const location = useLocation();
  const event = location.state;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  // Handle input changes
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // Check if all fields are filled
  const isFormValid = firstName && lastName && email && phone && age;

  // console.log(event);

  return (
    <>
      <Navbar />
      <div className="bg-slate-100 bg-slate-100">
        <div className="max-w-screen-md mx-auto px-4 pt-4 pb-[200px]">
          <Event event={event} status="in-progress" />
          <form
            className="flex flex-col gap-4 mt-8"
            action="event"
            method="post"
          >
            <div className="flex gap-4 sm:flex-row flex-col">
              <input
                className="p-3 w-full border border-gray-300 rounded"
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                value={firstName}
                onChange={handleInputChange(setFirstName)}
              />
              <input
                className="p-3 w-full border border-gray-300 rounded"
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                value={lastName}
                onChange={handleInputChange(setLastName)}
              />
            </div>
            <input
              className="p-3 w-full border border-gray-300 rounded"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange(setEmail)}
            />
            <input
              className="p-3 w-full border border-gray-300 rounded"
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={handleInputChange(setPhone)}
            />
            <input
              className="p-3 w-full border border-gray-300 rounded"
              type="text"
              id="age"
              name="age"
              placeholder="Patient Age"
              value={age}
              onChange={handleInputChange(setAge)}
            />
            <input type="hidden" id="idx" value={event.id || ""} />
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
      </div>
    </>
  );
}
