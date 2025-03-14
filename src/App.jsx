import React from "react";
import Home from "./components/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
