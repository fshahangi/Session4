import React, { useReducer, useState } from "react";
import Cards from "./Cards";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: new Date(),
          name: action.payload.name,
          price: action.payload.price,
          isVisible: false,
        },
      ];

    case "setVisible":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isVisible: !item.isVisible };
        }
        return item;
      });

      case "RemoveItem":
        return state.filter(item=>item.id!==action.payload.id).map((item)=>{
          return {...item}
        })

       
  }
};

const Products = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const productNameChangeHandler = (e) => {
    setProductName(e.target.value);
  };
  const productPriceChangeHandler = (e) => {
    setProductPrice(e.target.value);
  };
  const addProductHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: { price: productPrice, name: productName },
    });
  };

  return (
    <div>
      <form onSubmit={addProductHandler}>
        <label>name:</label>
        <input
          type="text"
          value={productName}
          onChange={productNameChangeHandler}
        />
        <label>price:</label>
        <input
          type="number"
          value={productPrice}
          onChange={productPriceChangeHandler}
        />
        <button type="submit">add</button>
      </form>

      <Cards data={state} dispatch={dispatch} />
    </div>
  );
};

export default Products;
