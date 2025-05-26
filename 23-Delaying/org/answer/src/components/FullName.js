import { useDeferredValue, useMemo, useState } from "react";
import users from "./users.json";

const FullName = () => {
  const userlist = users.slice(0, 20000);
  const [input, setInput] = useState("");
  // To avoid the rendering of loop on every key stoke we use useDefferedValue hook
  let deferredInput = useDeferredValue(input, { timeoutMs: 2000 });

  // useMemo hook runs the given code whenever there is only change in the dependency array so the result of useMemo would be an array with 20k items and we are rendering out those elements, This is huge task
  const list = useMemo(() => {
    let l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(<div key={i}>{userlist[i].name + " " + deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);
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
