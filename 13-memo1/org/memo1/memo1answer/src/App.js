import React, { useState, useCallback } from "react";
import Child from "./child";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("purple");

  /*
                WHAT HAPPENS IF WE DON'T use useCallback()?
  1)First the App component renders and the bigCalculation function is created.
  2)The Child component is rendered with the initial bigCalculation function
  3)If the button to change the text color is clicked, the color state changes and the App component re-renders.
  4)At this point bigCalculation is created again and the reference to the bigCalculation function passed to the Child component also changes.
  5) When a prop of a child component changes (in this case, the reference to the bigCalculation function), React will trigger a re-render of that child component.As a result even though only the color state variable changes when the button in this component is pressed, the Child component will also re-render because the bigCalculation function will be recreated after this component is re-rendered.

  THE Solution:
  So to prevent this we use the useCallback hook,this ensures that the bigCalculation function is not recreated after rerendering this component when the color state variable changes, this means that the reference of the bigCalculation function will not change thanks to useCallback
  */
  const bigCalculation = useCallback(() => {
    for (var i = 0; i < 1000000; i++) {}
    setCounter(counter + i);
  }, [counter]);

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

