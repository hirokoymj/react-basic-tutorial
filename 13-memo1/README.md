# useCallback

- Skipping unnecessary re-render.
- useCallback returns a memorized function.
- https://react.dev/reference/react/useCallback

```js
const cachedFn = useCallback(fn, dependencies);
const Child = React.memo(({ fn }) => {});
```

## Example 1

- [App.js](./src/App.js)
- [Child.js](./src/child.js)

```js
function App() {
  const [counter, setCounter] = useState(0);

  const bigCalculation = useCallback(() => {
    for (var i = 0; i < 1000000; i++) {}
    setCounter(counter + i);
  }, [counter]);

  return <Child bigCalculation={bigCalculation} />;
}
const Child = React.memo(({ bigCalculation }) => {
  return <button onClick={bigCalculation}>Increment from Child</button>;
});
```

## Example 2

- [App.js](./src/example2/App.js)
- [ProductPage.js](./src/example2/ProductPage.js)
- [ShippingForm.js (Child component)](./src/example2/ShippingForm.js)

```js
function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

return (
  <ShippingForm onSubmit={handleSubmit} />
)
const ShippingForm = React.memo(function ShippingForm({ onSubmit }) {}
```

## Example 3:

- [ParentComponent.js](./src/example3/ParentComponent.js)

```js
import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ onIncrement }) => {
  return <button onClick={onIncrement}>Increment Count</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means it only gets created once

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
}

export default ParentComponent;
```

## Description

**Problem:**

- How to prevent the child components from being re rendered when the button in the app component is clicked?

- In React, when you create a function inside a functional component, it's recreated every time the component renders. For example:

- In React when the state of a parent component changes, it triggers a re- render of the parent component and its children. This is because React follows a unidirectional data flow, where changes in the state or props of a parent component can affect the rendering of its child components.

## Solution

- Use `usecallback` AND the `memo hook`.
- `useCallback` hook and memo. useCallback hook means that do not recreate me(the function) unless my dependencies change.
- **memo** is a HOC to prevent a component from re-rendering unless its props have changed. memo will cause React to skip rendering a component if its props have not changed

## Reference

- https://react.dev/reference/react/useCallback
- https://react.dev/reference/react/memo

## Screenshots

![](./screen1.png)

<hr />

![](./screen2.png)

<hr />

![](./screen3.png)

<hr />

## useCallback vs useMemo

```js
const cachedFn = useCallback(fn, dependencies);
const cachedValue = useMemo(calculateValue, dependencies);
```

- Performance optimization.
- preventing unnecessary re-renders.
- `useCallback` memoizes a function.
- `useMemo` memoizes a value.
