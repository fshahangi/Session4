import React from "react";
import Card from "./Card";

const Cards = ({ data, dispatch }) => {
  console.log(data);

  return (
    <div>
      {data.map((item) => {
        return <Card data={item} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default Cards;
