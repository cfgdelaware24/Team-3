import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import { useState } from "react";
import Button from "../components/button";
import Event from "../components/event";
import { firestore } from "../firebase"; // Import Firestore instance
import {
  doc,
  addDoc,
  updateDoc,
  increment,
  arrayUnion,
  collection,
} from "@firebase/firestore";

export default function EventRegistration() {
  const location = useLocation();
  const event = location.state; // Assuming event object is passed from previous page

  const [registrationType, setRegistrationType] = useState("Patient");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const eventRef = doc(firestore, "ApprovedEvents", event.id);
      const userRef = await addDoc(collection(firestore, "users"), {
        firstName,
        lastName,
        email,
        phone,
        age,
        registrationType,
      });

      await updateDoc(eventRef, {
        participants: increment(registrationType === "Participant" ? 1 : 0),
        users: arrayUnion(email),
        volunteers: increment(registrationType === "Volunteer" ? 1 : 0),
      });

      console.log(
        `User ${email} successfully registered for event ${event.name}!`
      );

      setSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAge("");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  // Handle input changes
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // Check if all fields are filled
  const isFormValid =
    firstName && lastName && email && phone && age && registrationType;

  return (
    <>
      <Navbar />
      <div className="bg-slate-100">
        <div className="max-w-screen-md mx-auto px-4 pt-4 pb-[200px]">
          <Event event={event} status="in-progress" />
          <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
            <select
              id="registration-type"
              name="registration-type"
              className="p-3 w-full border border-gray-300 rounded"
              onChange={handleInputChange(setRegistrationType)}
              required
            >
              <option>Patient</option>
              <option>Volunteer</option>
            </select>
            <div className="flex gap-4 sm:flex-row flex-col">
              <input
                className="p-3 w-full border border-gray-300 rounded"
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                value={firstName}
                onChange={handleInputChange(setFirstName)}
                required
              />
              <input
                className="p-3 w-full border border-gray-300 rounded"
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                value={lastName}
                onChange={handleInputChange(setLastName)}
                required
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
              required
            />
            <input
              className="p-3 w-full border border-gray-300 rounded"
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={handleInputChange(setPhone)}
              required
            />
            <input
              className="p-3 w-full border border-gray-300 rounded"
              type="text"
              id="age"
              name="age"
              placeholder="Age"
              value={age}
              onChange={handleInputChange(setAge)}
              required
            />
            <input type="hidden" id="idx" value={event.id || ""} />
            <div className="text-white">
              {submitted && (
                <p className="text-green-500">Form submitted successfully!</p>
              )}
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
