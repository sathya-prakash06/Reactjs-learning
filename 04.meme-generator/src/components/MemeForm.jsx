import React, { useState, useEffect } from "react";
import "./memeForm.css";
import data from "../jsonData/memes.json";

const MemeForm = () => {
  const [memes, setMemes] = useState("");

  const handleClick = () => {
    console.log("clicked");
    let randomIndex = Math.floor(Math.random() * data.data.memes.length);
    let memes = data.data.memes[randomIndex].url;
    setMemes(memes);
  };
  return (
    <main>
      <form action="">
        <div className="input-cont">
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </div>
      </form>
      <div className="meme-btn">
        <button onClick={handleClick}>Get a new meme image</button>
      </div>

      <div>{memes && <img src={memes} alt="memes_img" />}</div>
    </main>
  );
};

export default MemeForm;
