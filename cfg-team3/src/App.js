import "./App.css";
import About from "./pages/about.js";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
