import styles from "./BusinessContextItem.module.css";
import React, { useContext } from "react";
import { getDate } from "../../utils/date";
import { useParams } from "react-router-dom";
import TasksContext from "../../contexts/TasksContext";
import { useEffect } from "react";

const BusinessContextItem = ({ item, clickHandler, active }) => {
  const { author, title, createdAt, content, seen } = item;

  return (
    <li
      className={`${styles.bcontext__item} ${active && styles["active"]} ${
        !seen && styles["new"]
      }`}
      onClick={clickHandler}
    >
      <div className={styles.bcontext__itemInfo}>
        {!seen && <span className={styles.bcontext__itemTag}>NEW</span>}
        <span>{author}</span>
        &#183;
        <span>{getDate(createdAt)}</span>
      </div>
      <h3 className={`${styles.bcontext__itemTitle} ${!seen && styles["new"]}`}>
        {title}
      </h3>
      <p className={styles.bcontext__itemContent}>{content}</p>
    </li>
  );
};

export default BusinessContextItem;
