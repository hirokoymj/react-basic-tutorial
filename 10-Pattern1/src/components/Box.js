const Box = ({ children }) => {
  return (
    <div
      style={{
        border: "10px solid black",
        width: "25vw",
        margin: "20px",
      }}>
      {children}
    </div>
  );
};
export default Box;

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
