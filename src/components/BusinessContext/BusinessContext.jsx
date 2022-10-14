import styles from "./BusinessContext.module.css";
import React from "react";
import BusinessContextList from "../BusinessContextList";
import BusinessContextContent from "../BusinessContextContent";
import BusinessContextNavigation from "../BusinessContextNavigation";
import { useParams } from "react-router-dom";

const BusinessContext = ({ data }) => {
  const { taskSlug } = useParams();
  const currentTask = data.find((obj) => obj.slug === taskSlug);
  return (
    <section className={styles.bcontext__wrapper}>
      <BusinessContextNavigation />
      <hr className={styles.divider} />
      <div className={styles.bcontext__details}>
        <BusinessContextList data={currentTask} />
        <BusinessContextContent data={currentTask} />
      </div>
    </section>
  );
};

export default BusinessContext;
