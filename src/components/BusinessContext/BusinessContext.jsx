import styles from "./BusinessContext.module.css";
import React from "react";
import BusinessContextList from "../BusinessContextList";
import BusinessContextContent from "../BusinessContextContent";
import BusinessContextNavigation from "../BusinessContextNavigation";

const BusinessContext = ({ data }) => {
  return (
    <section className={styles.bcontext__wrapper}>
      <BusinessContextNavigation />
      <hr className={styles.divider} />
      <div className={styles.bcontext__details}>
        <BusinessContextList data={data} />
        <BusinessContextContent />
      </div>
    </section>
  );
};

export default BusinessContext;
