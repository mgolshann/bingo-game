import React, { useState } from "react";
import { shuffleData } from './util';
import './App.css'


// Tile Component show each of square
function Tile({ children, onClick, isSet }) {
  return (
    <div onClick={onClick} className={`tile ${isSet ? "tile--set" : ""}`}>
      {children}
    </div>
  );
}


function App() {

  const [state, setState] = useState({ checked: {} });

  // Check in 4 way if there is completed row or not
  const isWon = checked => {
    const range = [0, 1, 2, 3, 4];
    return (
      undefined !==
      range.find(row => range.every(column => checked[row * 5 + column])) ||
      undefined !==
      range.find(column => range.every(row => checked[row * 5 + column])) ||
      range.every(index => checked[index * 5 + index]) ||
      range.every(index => checked[index * 5 + 4 - index])
    );
  };

  // change data in state
  const handleClick = id =>
    setState(state => {
      const checked = { ...state.checked, [id]: !state.checked[id] };
      const won = isWon(checked);
      return { ...state, checked, won };
    });

  return (
    <div className="App">
      <h1>Bingo Game</h1>
      <div className="wrapper">
        {/* show array of random words */}
        {Object.keys(shuffleData).map(id => (
          <Tile
            key={id}
            id={id}
            isSet={!!state.checked[id]}
            onClick={() => handleClick(id)}
          >
            {shuffleData[id]}
          </Tile>
        ))}
      </div>
      {state.won ? alert("Bingoooooo") : null}
    </div>
  );
}

export default App