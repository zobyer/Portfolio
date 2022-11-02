import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import AboutMe from "./pages/about";
import Home from "./pages/index";
import Work from "./pages/work";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
