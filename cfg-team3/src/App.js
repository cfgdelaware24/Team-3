import "./App.css";
import About from "./pages/about.js";
import EventRegistration from "./pages/event-registration.jsx";
import Events from "./pages/events.jsx";
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/event-registration/" element={<EventRegistration />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
