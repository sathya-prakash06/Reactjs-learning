import React from "react";
import "./card.css";

const Card = ({ img, rating, reviews, country, price, title, openSpot }) => {
  return (
    <div className="card">
      <img src={img} alt="" width="100%" className="card-img" />
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
          alt=""
          width="15px"
        />
        <span> {rating}</span>
        <span className="gray"> ({reviews})</span>
        <span className="gray"> {country}</span>
      </div>
      <p>{title}</p>
      <div>
        <strong>From {price}</strong>/Person
      </div>

      <div className="card-spot">
        {openSpot == 0 ? <bold>SOLD OUT</bold> : <bold>ONLINE</bold>}
      </div>
    </div>
  );
};

export default Card;
