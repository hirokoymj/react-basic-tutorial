import logo from "./logo.svg";
import "./App.css";
import Email from "./components/Email";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <title>Hosting</title>
      </header>
      <h1>Revolutionizing Website Performance</h1>

      <p>
        <span style={{ color: "red" }}>
          Enter Email to get more information:
        </span>
      </p>
      <Email />

      <span style={{ fontWeight: "bold" }}>
        Why Choose Fiber Hosting from hosting9019012.com?
      </span>
      <ul>
        <li>
          Reliability: Our Fiber Hosting infrastructure ensures rock-solid
          reliability, backed by top-notch support and minimal downtime.
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: "bold" }}>
          Join the Fiber Revolution Today!
        </span>
        <br />
        Embark on a journey towards unparalleled website performance with Fiber
        Hosting from hosting9019012.com. Experience the power of React Fiber
        technology and elevate your online presence to new heights. Don't let
        slow hosting hold your website back. Embrace Fiber Hosting - where
        speed, reactivity, and performance converge to redefine the digital
        experience. Contact us today to explore our Fiber Hosting plans and
        revolutionize the way your website performs!
      </p>
      <p>
        <span style={{ color: "red" }}>
          Do you want to subscribe and get the latest news?
        </span>
      </p>
      {/* If we click on the label for this email the first email input is focused because they both have the same id */}
      <Email />
      <br />
      <br />
    </div>
  );
}

export default App;
