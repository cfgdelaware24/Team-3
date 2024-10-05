import "./App.css";
import About from "./pages/about.js";
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
