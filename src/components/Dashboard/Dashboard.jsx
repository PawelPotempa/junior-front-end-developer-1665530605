import styles from "./Dashboard.module.css";
import React from "react";
import TasksList from "../TasksList";
import tasksData from "../../data/tasks.json";

const Dashboard = () => {
  return (
    <main className={styles.dashboard__wrapper}>
      <TasksList data={tasksData} />
    </main>
  );
};

export default Dashboard;