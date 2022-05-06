import React, {useState, useEffect} from "react";
import "./memeForm.css";

const MemeForm = () => {
  return (
    <main>
      <form action="">
        <div className="input-cont">
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </div>
        <div className="meme-btn">
          <button type="submit">Get a new meme image</button>
        </div>
      </form>
    </main>
  );
};

export default MemeForm;
