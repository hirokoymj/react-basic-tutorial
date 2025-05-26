import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    // We want to run this setInput first so we can change the input value quicker
    setInput(e.target.value);
    const temp_items = [];
    // this loop takes time
    for (let i = 0; i < 25000; i++) {
      temp_items.push(e.target.value);
    }
    setItems(temp_items);
  }

  function generateName() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const getRandomLetter = () => {
      return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    };

    let newName = "";
    for (let i = 0; i < 5; i++) {
      newName += getRandomLetter();
    }

    return newName;
  }

  return (
    <div>
      <h1>
        Welcome to weird name generator,enter anything to create a weird name
      </h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter new item"
      />

      <ul>
        {items.map((item, index) => {
          const name = generateName();
          return <li key={index}>{name + item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
