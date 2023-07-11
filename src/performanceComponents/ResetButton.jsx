import React, { memo } from "react";

const ResetButton = (props) => {
  console.log("reset button rendering ...");
  return (
    <div>
      <button onClick={props.reset}>reset address</button>
    </div>
  );
};

export default memo(ResetButton);
