import "./App.css";
import About from "./pages/about.js";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import Event from "./pages/events.js";
import Contact from "./pages/contact.js";
import Profile from "./pages/profile.js";
import Courses from "./pages/education.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Courses />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
