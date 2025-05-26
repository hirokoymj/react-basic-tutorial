import logo from "./logo.svg";
import "./App.css";
import Input from "./component/Input";

function App() {
  return (
    <div className="App">
      <Input
        renderProps={({ faToCel, celToFah, multByTwo }) => (
          <>
            <h2> Fahrenheit To Celcius: {faToCel}</h2>
            <h2> Celcius To Fahrenheit: {celToFah}</h2>
            <h1 style={{ color: "pink" }}>{multByTwo}</h1>
          </>
        )}
      />
    </div>
  );
}

export default App;
