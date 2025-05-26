# Non-Blocking UI

## Problem

When we enter an input, it taks too long to disply the generated list of names and preventing us from entering more values into the input field until the lis of names are generated.

How can we change the app so that we can enter values into the input field without waiting for the list of names to be generated?

```js
function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const temp_items = [];
      for (let i = 0; i < 25000; i++) {
        temp_items.push(e.target.value);
      }
      setItems(temp_items);
    });

  return (
    <div>
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
  }
```

## Solution

- https://react.dev/reference/react/useTransition
- `useTransition` is a React Hook that lets you render a part of the UI in the background
- `const [isPending, startTransition] = useTransition()`

```js
import { useTransition } from "react";

function TabContainer() {
  const [isPending, startTransition] = useTransition();
}
```

```js
import { useState, useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const temp_items = [];
      for (let i = 0; i < 25000; i++) {
        temp_items.push(e.target.value);
      }
      setItems(temp_items);
    });
  }

  ///....
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter new item"
      />

      <ul>
        {isPending
          ? "Loading"
          : items.map((item, index) => {
              const name = generateName();
              return <li key={index}>{name + item}</li>;
            })}
      </ul>
    </div>
  );
}
```
