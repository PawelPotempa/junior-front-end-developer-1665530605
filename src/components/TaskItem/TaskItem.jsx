import styles from "./TaskItem.module.css";
import React from "react";
import CompletedIcon from "../../assets/CompletedIcon";
import CurrentIcon from "../../assets/CurrentIcon";
import BlockedIcon from "../../assets/BlockedIcon";
import WithRect from "../../assets/WithRect";

const TaskItem = ({ task }) => {
  const renderIcon = (status) => {
    // eslint-disable-next-line default-case
    switch (status) {
      case "completed":
        return <CompletedIcon />;
      case "current":
        return <CurrentIcon />;
      case "blocked":
        return <BlockedIcon />;
    }
  };

  return (
    <li className={styles[task.status]}>
      <a className={styles.task__link} href={`/${task.slug}`}>
        <WithRect status={task.status}>{renderIcon(task.status)}</WithRect>
        <span>{task.title}</span>
      </a>
    </li>
  );
};

export default TaskItem;
