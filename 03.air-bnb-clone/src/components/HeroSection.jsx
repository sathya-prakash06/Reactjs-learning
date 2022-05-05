import React from "react";
import "./herostyles.css";
import gridImg from "../assets/grid-image.png";

const HeroSection = () => {
  return (
    <section>
      <img src={gridImg} alt="" width="100% " className="hero-img"/>
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default HeroSection;
