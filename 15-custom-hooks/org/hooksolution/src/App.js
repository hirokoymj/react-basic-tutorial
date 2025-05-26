import "./App.css";
import { useToggle } from "./useToggle";

function App() {
  const [visible, toggle] = useToggle(false);
  const user = {
    name: "John",
    email: "john@domain.com",
    username: "johnthedestroyer",
  };

  return (
    <div className="account">
      <p onClick={toggle}>Click to see account information</p>
      {visible ? (
        <div>
          {Object.keys(user).map((key, index) => (
            <p key={key} style={{ marginLeft: "20px" }}>
              {key}: {user[key]}
            </p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
