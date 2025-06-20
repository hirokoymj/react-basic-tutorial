# useMemo

- In React, to update `state` means you have to trigger a rerender to the entire component.
- useMemo returns a memorized value.
- https://react.dev/reference/react/useMemo

```js
const cachedValue = useMemo(calculateValue, dependencies);
```

## Example 1

- **Problem:** If the first button is clicked, we see that the text is changing from purple to red color, and we see from bigCalculation, which means that this calculation function runs after we change the color of this text by clicking on the button.
- **Solution:** The `useMemo` hook is to prevent rerendering when the color state changes. useMemo is called when dependencies `[counter]` changes.
- [App.js](./src/App.js)
- http://localhost:3000/memo-1

```js
function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("purple");

  // function bigCalculation() {
  //   console.log("From bigCalculation");
  //   var result = 0;
  //   for (var i = 0; i < 1000000; i++) {
  //     result += 1;
  //   }
  //   return counter + result;
  // }

  const bigCalculationResult = useMemo(() => {
    var result = 0;
    for (var i = 0; i < 1000000; i++) {
      result += 1;
    }
    return counter + result;
  }, [counter]);

  render(
    <>
      <button onClick={() => setColor("red")}>Change color</button>
      {bigCalculationResult}
    </>
)
```

## Example 2

- https://www.youtube.com/watch?v=vpE9I_eqHdM
- http://localhost:3000/memo-2

```js
export default function Demo2() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count, items]
  );

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Run Demo

```js
npm run start
```
