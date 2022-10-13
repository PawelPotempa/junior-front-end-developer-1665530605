import styles from "./BusinessContextItem.module.css";
import React, { useState } from "react";

const BusinessContextItem = ({ item, clickHandler, active }) => {
  const { author, title, createdAt, content, seen } = item;

  const dateToMMDD = (d) => {
    const date = new Date(d);
    const month = date.toLocaleString("en-GB", { month: "short" });
    const day = date.toLocaleString("default", { day: "numeric" });
    return `${month} ${day}`;
  };

  return (
    <li
      className={`${styles.bcontext__item} ${active && styles["active"]}`}
      onClick={clickHandler}
    >
      <div className={styles.bcontext__itemInfo}>
        {!seen && <span className={styles.bcontext__itemTag}>NEW</span>}
        <span>{author}</span>
        &#183;
        <span>{dateToMMDD(createdAt)}</span>
      </div>
      <h2 className={`${styles.bcontext__itemTitle} ${!seen && styles["new"]}`}>
        {title}
      </h2>
      <p className={styles.bcontext__itemContent}>{content}</p>
    </li>
  );
};

export default BusinessContextItem;
