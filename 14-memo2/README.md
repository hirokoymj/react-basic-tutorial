# useMemo

- https://react.dev/reference/react/useMemo
- useMemo returns a memorized value.

```js
const cachedValue = useMemo(calculateValue, dependencies);
```

## Example 1

- [App.js](./src/App.js)

```js
function App() {
// function bigCalculation() {
//   console.log("From bigCalculation");
//   var result = 0;
//   for (var i = 0; i < 1000000; i++) {
//     result += 1;
//   }
//   return counter + result;
// }

const bigCalculationResult = useMemo(() => {
  console.log("From bigCalculation");
  var result = 0;
  for (var i = 0; i < 1000000; i++) {
    result += 1;
  }
  return counter + result;
}, [counter]);

render(
  <>
    {/* {bigCalculation()} */}
    {bigCalculationResult}
  </>
)
```

## Example 2

- https://react.dev/reference/react/useMemo#examples-recalculation

```js
import { useMemo } from "react";

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

## Description

**Problem**

- If this button is clicked, we see that the text is changing from purple to red color, and we see from big calculation on line eight, which means that this calculation function runs after we change the color of this text by clicking on the button.

**Solution**

- When you use the useMemo hook, it helps recreation of the memoized value. This will save memory resources.

## Demo of the example 1

```
npm run start
```
