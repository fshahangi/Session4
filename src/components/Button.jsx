import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      type={props.type || "button"}
      className={`${styles.button} , ${styles.reddd}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
