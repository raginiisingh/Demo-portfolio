import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Header">
      <div className="logo">
        <Link to="/about">
          <button> LOGO </button>
        </Link>
      </div>
      <ul className="HeaderList">
        <Link to="/people">
          <li>Home</li>
        </Link>

        <li className="dropdown-item">
          <button className="dropdown-toggle" onClick={handleDropdownToggle}>
            University
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          )}
        </li>
        <li>Services</li>
        <li>Test Prep</li>
        <li>Courses</li>
        <li>More</li>
      </ul>
      <div className="search">
        <input type="search" placeholder="Search" />
      </div>
      <div className="callus">
        <button> Call us </button>
      </div>
      <div className="person">
        <BsPersonCircle className="icons" size={25} />
      </div>
    </div>
  );
}

export default Navbar;
