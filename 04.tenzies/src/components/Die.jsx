import React from "react";

const Die = ({ value, isHeld, holdDice }) => {
  const style = {
    backgroundColor: isHeld ? "#59e391" : "white",
  };
  return (
    <div className="die-face" style={style} onClick={holdDice}>
      <h1>{value}</h1>
    </div>
  );
};

export default Die;
