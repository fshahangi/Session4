import React from "react";

const Card = ({ data, dispatch }) => {
  return (
    <div style={{ border: "1px solid" }}>
      <p
        style={{ color: data.isVisible === false ? "red" : "green" }}
      >{`${data.name}    ${data.price}`}</p>
      <button
        onClick={() =>
          dispatch({ type: "setVisible", payload: { id: data.id } })
        }
      >
        change visibility
      </button>
      <button onClick={() =>
        dispatch({ type: 'RemoveItem', payload: { id: data.id } })
      }>delete</button>
    </div>
  );
};

export default Card;
