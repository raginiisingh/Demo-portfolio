import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import About from "./About";
import People from "./people";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
