import "./App.css";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Events from "./pages/events.js";
import EventRegistration from "./pages/event-registration.js";
import Contact from "./pages/contact.js";
import Profile from "./pages/profile.js";
import Courses from "./pages/education.js";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event-registration" element={<EventRegistration />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Courses />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
