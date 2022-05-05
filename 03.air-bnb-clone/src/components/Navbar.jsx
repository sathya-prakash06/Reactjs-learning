import React from "react";
import airBnbIcon from "../assets/air-bnb-icon.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={airBnbIcon} alt="Air_bnb_icon" width={130} />
    </nav>
  );
};

export default Navbar;
