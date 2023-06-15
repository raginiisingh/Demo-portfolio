import React from "react";
import studentimg from "./assets/guy and girl students.png";
import Fillimg from "./assets/Fill.png";
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="About">
      <div className="Fill">
        <img src={Fillimg} />
      </div>
      <div className="container">
        <div className="box">
          <div className="box-row">
            <div className="left">
              <h4>ABOUT US </h4>
              <h1> Who are we? </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.{" "}
              </p>
              <Link to="/">
                <button> Know more </button>
              </Link>
            </div>
            <div className="right">
              <img src={studentimg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
