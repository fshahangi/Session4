import React, { memo } from "react";

const C2 = (props) => {
  const result = heavyFunction();

  return (
    <div>
      i'm C2
      <h1>{props.addr}</h1>
    </div>
  );
};

export default memo(C2);

const heavyFunction = () => {
  console.log("heavyFunction executed in c2 !!!");
  for (let i = 0; i < 2000000; i++) {
    new Date();
  }
};
