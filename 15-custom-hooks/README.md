# Custom Hooks

### Question

- We show user data such as name, email, username. The user data is hidden when the component renders for the first time.
- Create a custom hook as separate component that is used to hide and show the user data.
  - If the user data is visible, make the data invisible by clicking on "Click to see account info".
  - If the user data is hidden, make the data visible by clicking on "Click to see account info".

```js
function App() {
  const user = {
    name: "John",
    email: "john@domain.com",
    username: "johnthedestroyer",
  };

  return (
    <div className="account">
      <p>Click to see account information</p>
    </div>
  );
}
```

### Answer

1. Hook names always start with `use`
2. React component names must start with a capital letter, like `StatusBar` and `SaveButton`.

```js
// Custom Hook -> useToggle.js
export const useToggle = (initial = false) => {
  const [visible, setVisible] = useState(initial);

  function toggle() {
    setVisible((prev) => !prev);
  }

  return [visible, toggle];
};

//App.js
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
```

## Reference

https://react.dev/learn/reusing-logic-with-custom-hooks

- Reusing Logic with Custom Hooks
- Custom Hooks: Sharing logic between components
