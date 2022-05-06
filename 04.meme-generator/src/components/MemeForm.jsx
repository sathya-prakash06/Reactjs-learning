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

      <div>
        <img src={memes.randomeImage} alt="memes_img" className="meme-img"/>
      </div>
    </main>
  );
};

export default MemeForm;
