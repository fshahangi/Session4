import React, { useEffect } from "react";

const Child = (props) => {
  useEffect(() => {
    console.log("useEffect executed ...");
  }, [props.count]);
  return (
    <div>
      <h1>child</h1>
      <h2>{props.count}</h2>
    </div>
  );
};

export default Child;
