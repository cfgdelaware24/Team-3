import "./App.css";
import About from "./pages/about.js";
import EventRegistration from "./pages/event-registration.jsx";
import Events from "./pages/events.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import Event from "./pages/events.js";
import Contact from "./pages/contact.js";
import Profile from "./pages/profile.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Events />} />
        <Route path="/event-registration/" element={<EventRegistration />} />
        <Route path="/events" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
