import React from "react";

function App() {
  function handleClick(event) {
    event.stopPropagation();
    alert("Clicked " + event.target.id);
  }

  return (
    <div id="parentElement" onClick={handleClick}>
      This is the parent element
      <div id="childElement" onClick={handleClick}>
        This is the child element
      </div>
    </div>
  );
}

export default App;
