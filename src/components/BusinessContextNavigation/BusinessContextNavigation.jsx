import styles from "./BusinessContextNavigation.module.css";
import React from "react";
import Compass from "../../assets/Compass";

const BusinessContextNavigation = () => {
  return (
    <nav>
      <ul className={styles.bcontext__navList}>
        <li className={styles.bcontext__navListItem}>
          <a className={styles.bcontext__navLink} href="/">
            <Compass />
            BUSINESS CONTEXT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BusinessContextNavigation;
