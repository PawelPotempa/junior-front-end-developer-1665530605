import styles from "./TasksList.module.css";
import React from "react";
import TaskItem from "../TaskItem";

const TasksList = ({ data }) => {
  return (
    <aside className={styles.tasks__container}>
      <h1 className={styles.tasks__header}>YOUR TASKS</h1>
      <hr className={styles.divider} />
      <ul className={styles.tasks__list}>
        {data.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </aside>
  );
};

export default TasksList;
