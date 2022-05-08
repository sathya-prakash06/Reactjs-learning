import React, { useState, useEffect } from "react";
import Die from "./Die";
import "./styles.css";
import { nanoid } from "nanoid";

// array of 10 random numbers between 0 and 9

function arryOfTenRandomNumbers() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push({
      id: nanoid(),
      isHeld: false,
      value: Math.floor(Math.random() * 10),
    });
  }
  return array;
}
console.log(arryOfTenRandomNumbers());

const Tenzies = () => {
  const [dice, setDice] = useState(arryOfTenRandomNumbers());
  const [tezies, setTezies] = useState(false);

  const rollDice = () => {
    // setDice(arryOfTenRandomNumbers());

    const rollDie = dice.map((die) => {
      return die.isHeld
        ? die
        : { ...die, value: Math.floor(Math.random() * 10) };
    });
    setDice(rollDie);

    tezies === false && setDice(rollDie);
  };

  const holdDice = (id) => {
    const updated = dice.map((die) => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
    });
    setDice(updated);
  };
  const newGame = () => {
    setDice(arryOfTenRandomNumbers());
  };

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allValSame = dice.every((die) => die.value === dice[0].value);
    allHeld && allValSame ? setTezies(true) : setTezies(false);
  }, [dice]);
  return (
    <main>
      <h2>Tenzies</h2>
      <p className="dec-text">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-cont">
        {dice.map((dice) => {
          return (
            <Die
              key={dice.id}
              value={dice.value}
              isHeld={dice.isHeld}
              holdDice={() => holdDice(dice.id)}
            />
          );
        })}
      </div>
      {tezies ? <h1>You Won</h1> : ""}
      <button className="roll-btn" onClick={tezies ? newGame : rollDice}>
        {tezies ? "Play Again" : "Roll"}
      </button>
    </main>
  );
};

export default Tenzies;
