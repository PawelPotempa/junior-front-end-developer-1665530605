import styles from "./TaskItem.module.css";
import React, { useState } from "react";
import CompletedIcon from "../../assets/CompletedIcon";
import CurrentIcon from "../../assets/CurrentIcon";
import BlockedIcon from "../../assets/BlockedIcon";
import WithRect from "../../assets/WithRect";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";

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

const TaskItem = ({ task }) => {
  const { taskSlug } = useParams();
  const [active, setActive] = useState("");
  const { status, title, slug } = task;

  useEffect(() => {
    if (taskSlug === slug) {
      setActive("active");
    } else {
      setActive("");
    }
  }, [slug, taskSlug]);

  return (
    <li className={styles[status]}>
      <NavLink
        className={`${styles.task__link} ${styles[status]} ${styles[active]}`}
        to={status !== "blocked" ? `/${slug}` : "#"}
      >
        <WithRect status={status} active={active}>
          {renderIcon(status)}
        </WithRect>
        {title}
      </NavLink>
    </li>
  );
};

export default TaskItem;
