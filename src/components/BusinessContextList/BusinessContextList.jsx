import styles from "./BusinessContextList.module.css";
import React, { useState } from "react";
import BusinessContextItem from "../BusinessContextItem/BusinessContextItem";

const BusinessContextList = ({ data }) => {
  const [active, setActive] = useState(0);

  const clickHandler = (i) => {
    setActive(i);
  };

  return (
    <aside className={styles.bcontext__list}>
      {data[3].businessContexts.map((item, i) => (
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
