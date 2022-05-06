import React, { useState, useEffect } from "react";
import "./memeForm.css";
import data from "../jsonData/memes.json";

const MemeForm = () => {
  const [memes, setMemes] = useState({
    topText: "",
    bottomText: "",
    randomeImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemes, setAllMemes] = useState(data);

  const handleClick = () => {
    console.log("clicked");
    let randomIndex = Math.floor(Math.random() * allMemes.data.memes.length);
    let memes = allMemes.data.memes[randomIndex].url;
    setMemes({ ...memes, randomeImage: memes });
  };

  const handleChange = (e) => {
    setMemes({ ...memes, [e.target.name]: e.target.value });
  };
  return (
    <main>
      <form action="">
        <div className="input-cont">
          <input
            type="text"
            placeholder="Top text"
            value={memes.topText}
            name="topText"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={memes.bottomText}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="meme-btn">
        <button onClick={handleClick}>Get a new meme image</button>
      </div>

      <div className="meme-img-cont">
        <img src={memes.randomeImage} alt="memes_img" className="meme-img" />
        <div className="meme-top-text">
          <h1>{memes.topText}</h1>
        </div>
        <div className="meme-bottom-text">
          <h1>{memes.bottomText}</h1>
        </div>
      </div>
    </main>
  );
};

export default MemeForm;
