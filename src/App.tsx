import React, { useState } from "react";
import "./App.css";

const getRandomInt = (max: number) => 1 + Math.floor(Math.random() * max);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Random countup: {count}</p>
      <button
        onClick={() => setCount((prevCount) => prevCount + getRandomInt(10))}
      >
        random countup
      </button>
    </div>
  );
}

export default App;
