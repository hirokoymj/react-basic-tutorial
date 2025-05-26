import { useState } from "react";
import "./App.css";

//Celucius
//Fahrenheit
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

export default App;
