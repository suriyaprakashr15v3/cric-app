import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [ball, setBall] = React.useState(0);
  const [run, setRun] = React.useState(0);

  function randomNumber(min, max) {
    const sum = Math.random();
    const difference = max - min;
    const random = Math.round(difference * sum);
    const randomWithinRange = random + min;
    return randomWithinRange;
  }

  const addBall = () => {
    {
      setBall((ball) => ball + 1);
      setRun(() => run + randomNumber(0, 6));
    }
  };

  function resetButton() {
    setBall(0);
    setRun(0);
  }

  return (
    <div className="App">
      <div className="navbar">
        <h1>Cricket Score Board</h1>
        <p>Balls:{ball} </p>
        <p> Runs:{run}</p>
      </div>
      <div>
        <p>
          You get total of 6 balls(1 over). The button gets disabled after that.
        </p>
        {ball <= 5 ? (
          <button onClick={addBall}>Click to hit the ball</button>
        ) : (
          <button type="button" disabled>
            Click to hit the ball
          </button>
        )}
        <button onClick={resetButton}>Reset</button>
      </div>
    </div>
  );
}
