import React from "react";
import "./styles.css";
import profilePic from "../assets/profile-pic.png";

const icons = [
  "https://cdn-icons-png.flaticon.com/512/1384/1384049.png",
  "https://cdn-icons.flaticon.com/png/128/3488/premium/3488299.png?token=exp=1651741080~hmac=ca6700e16e6442797c3264accf91f1ad",
  "https://cdn-icons-png.flaticon.com/128/1400/1400829.png",
  "https://cdn-icons.flaticon.com/png/128/3291/premium/3291695.png?token=exp=1651741189~hmac=7f782942bd804682449942f296166e80",
];

const BussinessCard = () => {
  return (
    <div className="cont">
      <div className="profile-cont">
        <img src={profilePic} alt="profile_pic" />
      </div>

      <div className="profile-details">
        <h1>Laura Smith</h1>
        <p>Frontend Developer</p>
        <p>
          <small>laurasmith.website</small>
        </p>
      </div>

      <div className="profile-contact">
        <button className="email-btn">Email</button>
        <button className="linkldn-btn">Linkedin</button>
      </div>

      <div className="desc-cont">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>

      <div className="desc-cont">
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>

      <footer className="footer-cont">
        {icons.map((item, index) => {
          return <img src={item} alt="icon" key={index} width="30px" />;
        })}
      </footer>
    </div>
  );
};

export default BussinessCard;
