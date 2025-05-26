import React, { useState, useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("purple");

  /*
  1)When the App component runs for the first time the useMemo hook is run and the loop is performed and a value returned which will be equal to  calculationResult. So calculationResult will be a memoized value not a function.
  2)If the first button is clicked to change the text color, the useMemo hook will not run again because it has a dependency that is "counter" and changing the text color does not change the counter state variable so useMemo will not run after the component re-renders to change the text color.This is good so we do not perform the big loop when we don't need to.
  3)If the second button is clicked to increase the counter, the useMemo hook runs.

  As a result, when using useMemo,unnecessary instances of functions or values are not created after each re-render.
  */

  //the second parameter in useMemo hook is the dependency, the calculationResult value will only change if its dependencies change
  const calculationResult = useMemo(() => {
    console.log("From bigCalculation");
    var result = 0;
    for (var i = 0; i < 1000000; i++) {
      result += 1;
    }
    return counter + result;
  }, [counter]);

  //running increase will change the counter so useMemo hook will run
  function increase() {
    setCounter((counterValue) => counterValue + 1);
  }

  return (
    <div style={{ border: "10px solid black" }}>
      <p style={{ color: `${color}`, fontSize: "2rem" }}>
        This is App component
      </p>
      <button onClick={() => setColor("red")}>Change color</button>
      <br />
      Counter: {counter}
      <br />
      {calculationResult}
      <br />
      <button onClick={increase}>Increment</button>
    </div>
  );
}
export default App;
