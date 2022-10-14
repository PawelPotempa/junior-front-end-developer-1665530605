import styles from "./TaskItem.module.css";
import React from "react";
import CompletedIcon from "../../assets/CompletedIcon";
import CurrentIcon from "../../assets/CurrentIcon";
import BlockedIcon from "../../assets/BlockedIcon";
import WithRect from "../../assets/WithRect";
import { NavLink } from "react-router-dom";

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
      <NavLink
        className={`${styles.task__link} ${styles[task.status]} `}
        to={task.status !== "blocked" ? `/${task.slug}` : "#"}
      >
        <WithRect status={task.status}>{renderIcon(task.status)}</WithRect>
        {task.title}
      </NavLink>
    </li>
  );
};

export default TaskItem;
