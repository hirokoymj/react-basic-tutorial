import { useId } from "react";

function Email() {
  const id = useId();

  return (
    <>
      <label htmlFor={`${id}_email`}>Email:</label>
      <input type="email" id={`${id}_email`} />
      <br />
      <br />

      <label htmlFor={`${id}_username`}>UserName:</label>
      <input type="email" id={`${id}_username`} />
    </>
  );
}

export default Email;
