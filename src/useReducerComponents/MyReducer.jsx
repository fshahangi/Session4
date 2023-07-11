import React, { useReducer } from "react";
import { useState } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return { number: state.number + 1 };
    case "decrement":
      return { number: state.number - 1 };
  }
};

const MyReducer = () => {
  const [state, dispatch] = useReducer(reducerFunction, { number: 0 });

  //const [counter, setCounter] = useState(0);

  const minusHandler = () => {
    //setCounter(counter - 1);
    dispatch({ type: "decrement" });
  };
  const plusHandler = () => {
    //setCounter(counter + 1);
    dispatch({ type: "increment" });
  };
  return (
    <div>
      <button onClick={minusHandler}>-</button>
      <label>{state.number}</label>
      <button onClick={plusHandler}>+</button>
    </div>
  );
};

export default MyReducer;
