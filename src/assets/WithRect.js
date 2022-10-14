import styles from "./Assets.module.css";
import React from "react";

const WithRect = (props) => {
  return (
    <div
      className={`${styles.svg__wrapper} ${styles[props.status]} ${
        styles[props.active]
      }`}
    >
      {props.children}
    </div>
  );
};

export default WithRect;
