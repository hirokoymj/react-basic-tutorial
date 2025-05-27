import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";

const url = "https://jsonplaceholder.typicode.com/users";

export const UsersView2 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [message, setMessage] = useState("");

  ///FORM
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) return new Error("");
        const data = response.json();
        return data;
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("");
        return response.json();
      })
      .then((data) => {
        setMessage("Item deleted successfully:");
        setUsers((values) => {
          return values.filter((item) => item.id !== id);
        });
        console.log(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]);
        setName("");
        setEmail("");
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="App">
      <h1>User list</h1>
      <p style={{ color: "red" }}>{message}</p>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DELETE</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => console.log("update")}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div>
        <span>Name:</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>email:</span>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <hr />
    </div>
  );
};
