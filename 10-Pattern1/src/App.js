import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import { BoxOne, BoxTwo, BoxThree } from "./pages/BoxDemo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/one" element={<BoxOne />} />
            <Route path="/two" element={<BoxTwo />} />
            <Route path="/three" element={<BoxThree />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/one">one</Link>
          </li>
          <li>
            <Link to="/two">Two</Link>
          </li>
          <li>
            <Link to="/three">Three</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
      <footer>Udemy: 10. Composition Pattern</footer>
    </main>
  );
}

export default App;
