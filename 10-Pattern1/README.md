# Composition Pattern

- Instead of passing data down as props, you use components as children or props to achieve flexibility.
- https://medium.com/@ignatovich.dm/composition-vs-props-in-react-a-detailed-guide-f9034394cc7a

## Example 1

```js
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h1>Title</h1>
      <p>Content goes here.</p>
    </Card>
  );
}
```

## Example 2

- Reuse the same component having the same design.

```js
export default function Box(props) {
  return (
    <div
      style={{
        border: "10px solid black",
        width: "25vw",
        margin: "20px",
      }}>
      {props.children}
    </div>
  );
}
Box.GreenOutline = function BoxGreenOutline({ children }) {
  return (
    <div style={{ border: "2px solid green", margin: "30px" }}>{children}</div>
  );
};

Box.BrownOutline = function BoxBrownOutline({ children }) {
  return (
    <div style={{ border: "15px solid brown", margin: "10px" }}>{children}</div>
  );
};
```

```js
export default function One() {
  return (
    <Box>
      <Box.GreenOutline>Some content</Box.GreenOutline>
    </Box>
  );
}

function Two() {
  return (
    <Box>
      <Box.BrownOutline>
        <input placeholder="Enter Email" />
      </Box.BrownOutline>
    </Box>
  );
}

export default function Three() {
  return <Box>From Three</Box>;
}
```

## Demo

```js
npm run start
```
