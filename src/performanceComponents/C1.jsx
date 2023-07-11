import React, { useCallback, useMemo, useState } from "react";
import C2 from "./C2";
import ResetButton from "./ResetButton";

const C1 = () => {
  console.log("rendering");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const f = useMemo(() => heavyFunction(), [password]);

  const reset = useCallback(() => {
    setPassword("");
  }, []);

  return (
    <div>
      <h1>{f}</h1>
      <input onChange={addressChangeHandler} value={address} />
      <input
        type="password"
        onChange={passwordChangeHandler}
        value={password}
      />

      <C2 addr={address} />
      <ResetButton reset={reset} />
    </div>
  );
};

export default C1;

const heavyFunction = () => {
  console.log("heavyFunction executed!!!");
  for (let i = 0; i < 2000000; i++) {
    new Date();
  }
  return 10000;
};
