import React from "react";
import Navbar from "./Navbar";
import heroimg from "./assets/hero section.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="heroImg">
        <img src={heroimg} />
      </div>
    </div>
  );
}

export default Home;
