import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

export const UsersViewTest = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  ///FORM
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) return new Error({ message: "faild to get users" });
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) return new Error({ message: "message" });
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers((users) => users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => {
        if (!response.ok) new Error({ message: "faile to add user" });
        return response.json();
      })
      .then((data) => {
        setUsers([...users, data]);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUpdate = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: "dummy", email: "dummy@example.com" }),
    })
      .then((response) => {
        if (!response.ok) new Error({ message: "failed to update" });
        return response.json();
      })
      .then((data) => {
        setUsers((users) =>
          users.map((user) => (user.id === id ? data : user))
        );
      })
      .catch((error) => setError(error.message))
      .finally(() => {
        setLoading(false);
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
      <h1>CRUD TEST</h1>
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
                <button onClick={() => handleUpdate(user.id)}>Update</button>
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
