import { useId } from "react";

const Email = () => {
  const id = useId();
  return (
    <>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />
    </>
  );
};

export default Email;

// return (
//   <>
//     <label htmlFor="email">Email:</label>
//     <input type="email" id="email" />
//   </>
// );
