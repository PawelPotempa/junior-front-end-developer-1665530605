import styles from "./BusinessContext.module.css";
import React from "react";
import BusinessContextList from "../BusinessContextList";
import BusinessContextContent from "../BusinessContextContent";
import BusinessContextNavigation from "../BusinessContextNavigation";

const BusinessContext = () => {
  return (
    <section className={styles.bcontext__wrapper}>
      <BusinessContextNavigation />
      <hr className={styles.divider} />
      <div className={styles.bcontext__details}>
        <BusinessContextList />
        <BusinessContextContent />
      </div>
    </section>
  );
};

export default BusinessContext;
