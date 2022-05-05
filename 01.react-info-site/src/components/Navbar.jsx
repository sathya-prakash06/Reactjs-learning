import React from "react";
import './style.css';

const Navbar = () => {
  return (
    <nav className="nav-cont">
      <img
        src="https://img.icons8.com/office/2x/react.png"
        alt="react_icon"
        height={50}
      />
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
