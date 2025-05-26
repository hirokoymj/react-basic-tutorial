# Pattern 2 - Render props => custom Hook

- https://legacy.reactjs.org/docs/render-props.html
- Render props are used in modern React, but aren’t very common.
  For many cases, they have been replaced by **custom Hooks.**

## Custom Hook

App.js

```js
//Custom hook
const useConvert = (val) => {
  const [celToFah, setCelToFah] = useState(null);
  const [multiply, setMultiplyByTwo] = useState(null);
  const [fahToCel, setFahToCel] = useState(null);

  function execCelToFah(val) {
    setCelToFah(Math.ceil((val * 9) / 5 + 32));
  }
  function execMultiplyByTwo(val) {
    setMultiplyByTwo(val * 2);
  }
  function execFahToCel(val) {
    setFahToCel(Math.ceil(((val - 32) * 5) / 9));
  }
  return [
    celToFah,
    execCelToFah,
    multiply,
    execMultiplyByTwo,
    fahToCel,
    execFahToCel,
  ];
};

function App() {
  const [
    celToFah,
    execCelToFah,
    multiply,
    execMultiplyByTwo,
    fahToCel,
    execFahToCel,
  ] = useConvert();

  return (
    <div className="App">
      Celcius:
      <input
        type="text"
        id="celcius"
        onChange={(e) => {
          execCelToFah(e.target.value);
          execMultiplyByTwo(e.target.value);
        }}
      />
      <h2>{celToFah} F</h2>
      <h2 style={{ color: "pink" }}>{multiply}</h2>
      Fahrenheit:
      <input
        type="text"
        id="fahrenheit"
        onChange={(e) => {
          execFahToCel(e.target.value);
        }}
      />
      <h2>{fahToCel}</h2>
    </div>
  );
}
```
