import styles from "./TaskItem.module.css";
import React, { useState } from "react";
import CompletedIcon from "../../assets/CompletedIcon";
import CurrentIcon from "../../assets/CurrentIcon";
import BlockedIcon from "../../assets/BlockedIcon";
import WithRect from "../../assets/WithRect";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";

const TaskItem = ({ task }) => {
  const { taskSlug } = useParams();
  const [active, setActive] = useState("");
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

  useEffect(() => {
    if (taskSlug === task.slug) {
      setActive("active");
    } else {
      setActive("");
    }
  }, [task.slug, taskSlug]);

  return (
    <li className={styles[task.status]}>
      <NavLink
        className={`${styles.task__link} ${styles[task.status]} ${
          styles[active]
        }`}
        to={task.status !== "blocked" ? `/${task.slug}` : "#"}
      >
        <WithRect status={task.status} active={active}>
          {renderIcon(task.status)}
        </WithRect>
        {task.title}
      </NavLink>
    </li>
  );
};

export default TaskItem;
