import React from "react";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import { Route, Router, Routes } from "react-router-dom";
import Result from "./Components/Result";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-purple-900 to-purple-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landpage" element={<LandingPage />} />
        <Route path="/results" element={<Result />}/>
      </Routes>
    </div>
  );
}

export default App;
