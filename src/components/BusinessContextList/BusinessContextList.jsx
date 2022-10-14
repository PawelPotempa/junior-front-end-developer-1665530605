import styles from "./BusinessContextList.module.css";
import React from "react";
import BusinessContextItem from "../BusinessContextItem/BusinessContextItem";

const BusinessContextList = ({ currentTask, clickHandler, active }) => {
  return (
    <aside className={styles.bcontext__list}>
      {currentTask?.businessContexts.map((item, i) => (
        <BusinessContextItem
          key={item.id}
          item={item}
          clickHandler={() => clickHandler(i)}
          active={active === i}
        />
      ))}
    </aside>
  );
};

export default BusinessContextList;
