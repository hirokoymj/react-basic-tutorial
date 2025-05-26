import { useState } from "react";

//  we are creating a hook and in React, the naming convention for hook starts with the "use" keyword, so we called it useToggle
export const useToggle = (initial = false) => {
  const [visible, setVisible] = useState(initial);

  function toggle() {
    setVisible((prev) => !prev);
  }

  return [visible, toggle];
};
