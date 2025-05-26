import React, { useState, useCallback } from "react";
import Child from "./child";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("purple");

  function bigCalculation() {
    for (var i = 0; i < 1000000; i++) {}
    setCounter(counter + i);
  }

  return (
    <div style={{ border: "10px solid black" }}>
      <p style={{ color: `${color}`, fontSize: "2rem" }}>Parent component</p>
      <button onClick={() => setColor("red")}>Change color from Parent</button>
      <br />
      {counter}

      <Child bigCalculation={bigCalculation} />
    </div>
  );
}
export default App;
