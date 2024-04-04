import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipePage from "./RecipePage";
import App from "./App";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Carousel from './Carousel';
import Types from './Types'
export default function App1() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search/:query" element={<App />} />
            <Route path="/recipepage/:serializedData/:image" element={<RecipePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
