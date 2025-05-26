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

//memo lets you skip re-rendering a component when its props are unchanged
//Child component is wrapped with React.memo, which is used to memoize the component and prevent unnecessary re-renders when its props haven't changed.
//When the Child component is wrapped with React.memo, which is a higher-order component that memoizes the rendering of the component based on its props. This means that if the props passed to the Child component remain the same between renders, it won't re-render. In this case, the props passed to Child from the App component are the "bigCalculation" function.
export default React.memo(Child);
