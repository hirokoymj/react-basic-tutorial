import React from "react";

function Child({ bigCalculation }) {
  console.log("Child component");
  return (
    <div style={{ border: "6px solid green", margin: "20px" }}>
      <h2>Child Component</h2>
      <button onClick={bigCalculation}>Increment from Child</button>
    </div>
  );
}

export default React.memo(Child);
