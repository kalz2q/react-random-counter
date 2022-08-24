import React, { useState, useEffect, useRef } from "react";

import "./App.css";

const getRandomInt = (max: number) =>
  1 + Math.floor(Math.random() * Math.floor(max));

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  console.log(count);

  useEffect(() => {
    ref.current = getRandomInt(10);
  });

  return (
    <div className="App">
      <p>Random countup: {count}</p>
      <button onClick={() => setCount(prevCount + 1)}>
        {/* <button onClick={() => setCount(count + ref.current)}> */}
        random countup
      </button>
    </div>
  );
}

export default App;
