import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import "./contact.css";

export default function EventRegistration() {
  const location = useLocation();
  const event = location.state;

  console.log(event);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto">
        <div className="font-medium text-3xl">{event.name}</div>
        <form className="flex flex-row flex-wrap gap-4" action="event" method="post">
          <div>
            <input
              type="text"
              id="name"
              className="name-input"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="name"
              className="name-input ml-6"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="email"
              className="email-input"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="phone"
              className="name-input"
              placeholder="Phone"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="age"
              className="name-input ml-6"
              placeholder="Age"
              required
            />
          </div>
          <input type="hidden" id="idx" value={event.id || ""} />
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
