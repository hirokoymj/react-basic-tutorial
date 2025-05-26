# Delaying

- https://react.dev/reference/react/useDeferredValue
- `useDeferredValue` is a React Hook that lets you defer updating a part of the UI.
  ```js
  const deferredValue = useDeferredValue(value);
  ```
- React 18 introduced concurrent rendering, a significant improvement in how React manages rendering and updates.

```text
- jennife ➔ surname jennife should not be rendered.
- jennif➔surname jennif should not be rendered.
- jenni➔surname jenni should not be rendered.
- jenn➔surname jenn should not be rendered.
- jen➔surname jen should not be rendered.
- je➔surname je should not be rendered.
- j➔surname j should not be rendered.
```
- So concurrency is possible from React version 18 and we use useTransition and useDeferredValue hooks to apply concurrency.

- To avoid the rendering of loop on every key press we can use useDefferedValue hook.

```js
import { useDeferredValue, useMemo, useState } from "react";
import users from "./users.json";

const FullName = () => {
  const userlist = users.slice(0, 20000);
  const [input, setInput] = useState("");
  // To avoid the rendering of loop on every key stoke we use useDefferedValue hook
  let deferredInput = useDeferredValue(input, { timeoutMs: 2000 });
```

## Problem

- The user has not finished entering the surname. Why would you render 20,000 times this list every time, even though the user has not finished entering the surname? That's why we caused a delay here.

- User types. And then you will see after some time the entered surname will be displayed. This is very powerful and efficient.

## Solution

- `useDeferredValue` is a React Hook that lets you defer updating a part of the UI.

```js
const FullName = () => {
  const userlist = users.slice(0, 20000);
  const [input, setInput] = useState("");
  // To avoid the rendering of loop on every key stoke we use useDefferedValue hook
  let deferredInput = useDeferredValue(input, { timeoutMs: 2000 });

  // useMemo hook runs the given code whenever there is only change in the dependency array so the result of useMemo would be an array with 20k items and we are rendering out those elements, This is huge task
  const list = useMemo(() => {
    let l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(<div key={i}>{userlist[i].name + " " + deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);
  return (
    <>
      <label htmlFor="surname">
        <b> Enter surname</b>
      </label>
      <input
        type="text"
        id="surname"
        onChange={(e) => setInput(e.target.value)}
      />
      <div>{list}</div>
    </>
  );
};

//App.js
const App = () => {
  return <FullName />;
};
```

## Screenshots
![](./screenshot1.png)
