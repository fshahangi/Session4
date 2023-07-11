import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>parent</h1>
      <button onClick={() => setcount(count + 1)}>+</button>
      <Child count={count} />
    </div>
  );
};

export default Parent;
