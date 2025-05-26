import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { Counter } from "./features/counter/Counter";
import { Todo } from "./features/todo/Todo";
import { NestedDataView } from "./features/nestedData/NestedDataView";
import { FormBasic } from "./features/form/FormBasic";
import { UsersView } from "./features/users/UsersView";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Counter />} />
          <Route path="todo" element={<Todo />} />
          <Route path="nested-data" element={<NestedDataView />} />
          <Route path="form" element={<FormBasic />} />
          <Route path="users" element={<UsersView />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Redux - Counter demo</Link>
          </li>
          <li>
            <Link to="/todo">Redux - Todo demo</Link>
          </li>
          <li>
            <Link to="/nested-data">Render nested data structure</Link>
          </li>
          <li>
            <Link to="/form">Form Basic</Link>
          </li>
          <li>
            <Link to="/users">RESTful API demo - Users</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
