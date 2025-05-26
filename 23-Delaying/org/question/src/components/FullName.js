import { useMemo, useState } from "react";
import users from "./users.json";

const FullName = () => {
  const userlist = users.slice(0, 20000);
  const [input, setInput] = useState("");

  // useMemo hook runs the given code whenever there is only change in the dependency array so the result of useMemo would be an array with 20k items and we are rendering out those elements, This is huge task, don't add userlist to the dependency array, we want to use only 20000 user names
  const list = useMemo(() => {
    let l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(<div key={i}>{userlist[i].name + " " + input}</div>);
    }
    return l;
  }, [input]);

  return (
    <>
      <label htmlFor="surname">
        <b> Enter surname</b>
      </label>
      <input
        type="text"
        id="surname"
        onChange={(e) => setInput(e.target.value)}
      />
      <div>{list}</div>
    </>
  );
};

export default FullName;
