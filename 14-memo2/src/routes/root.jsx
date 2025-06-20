import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>contacts/1</Link>
            </li>
            <li>
              <Link to={`home`}>Home</Link>
            </li>
            <li>
              <Link to={`memo-1`}>useMemo example 1</Link>
            </li>
            <li>
              <Link to={`memo-2`}>useMemo example 2</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
