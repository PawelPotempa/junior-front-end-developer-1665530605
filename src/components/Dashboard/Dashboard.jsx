import styles from "./Dashboard.module.css";
import React from "react";
import TasksList from "../TasksList";
import BusinessContext from "../BusinessContext/BusinessContext";

const Dashboard = () => {
  return (
    <main className={styles.dashboard__wrapper}>
      <TasksList />
      <BusinessContext />
    </main>
  );
};

export default Dashboard;
