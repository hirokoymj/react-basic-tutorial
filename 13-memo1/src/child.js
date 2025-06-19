import React from "react";

const Child = React.memo(({ bigCalculation }) => {
  console.log("Child component");
  return (
    <div style={{ border: "6px solid green", margin: "20px" }}>
      <h2>Child Component</h2>
      <button onClick={bigCalculation}>Increment from Child</button>
    </div>
  );
});
export default Child;

// const ChildComponent = React.memo(({ onIncrement }) => {
//   console.log("ChildComponent rendered");
//   return <button onClick={onIncrement}>Increment Count</button>;
// });
