import { useState } from "react";

export default function Input(props) {
  const [fahrenheitToCelcius, setfahrenheitToCelcius] = useState(null);
  const [celciusToFahrenheit, setcelciusToFahrenheit] = useState(null);
  const [multiplyByTwo, setmultiplyByTwo] = useState(null);

  function FahrenheitToCelcius(val) {
    setfahrenheitToCelcius((((val - 32) * 5) / 9).toFixed(3));
  }
  function CelciusToFahrenheit(val) {
    setcelciusToFahrenheit((val * 9) / 5 + 32);
  }

  function MultiplyByTwo(val) {
    setmultiplyByTwo(val * 2);
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          FahrenheitToCelcius(e.target.value);
          CelciusToFahrenheit(e.target.value);
          MultiplyByTwo(e.target.value);
        }}
      />

      {props.renderProps({
        faToCel: fahrenheitToCelcius,
        celToFah: celciusToFahrenheit,
        multByTwo: multiplyByTwo,
      })}
    </>
  );
}
