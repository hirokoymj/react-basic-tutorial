import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onIncrement}>Increment Count</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means it only gets created once

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
}

export default ParentComponent;
