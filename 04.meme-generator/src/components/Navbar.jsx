import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-cont">
      <div className="nav-left-cont">
        <img
          src="https://img.icons8.com/officel/2x/scared-face-meme.png"
          alt="Meme_Image"
          className="nav-img"
        />
        <h2>Meme Generator</h2>
      </div>
      <div>React Course Project-3</div>
    </nav>
  );
};

export default Navbar;
