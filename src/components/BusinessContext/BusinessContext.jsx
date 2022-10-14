import styles from "./BusinessContext.module.css";
import React, { useContext, useEffect, useState } from "react";
import BusinessContextList from "../BusinessContextList";
import BusinessContextContent from "../BusinessContextContent";
import BusinessContextNavigation from "../BusinessContextNavigation";
import { useParams } from "react-router-dom";
import TasksContext from "../../contexts/TasksContext";

const BusinessContext = () => {
  const { data, setData } = useContext(TasksContext);
  const { taskSlug } = useParams();
  const [active, setActive] = useState(0);

  const currentTask = data.find((obj) => obj.slug === taskSlug);

  useEffect(() => {
    setActive(0);
  }, [currentTask]);

  const clickHandler = (i) => {
    setActive(i);
    setData((prevState) => {
      const newData = [...prevState];
      const taskIndex = newData.findIndex(
        (element) => element.slug === currentTask.slug
      );
      if (taskIndex !== -1) {
        newData[taskIndex].businessContexts[i].seen = true;
      }
      return newData;
    });
  };

  return (
    <section className={styles.bcontext__wrapper}>
      <BusinessContextNavigation />
      <hr className={styles.divider} />
      <div className={styles.bcontext__details}>
        <BusinessContextList
          currentTask={currentTask}
          clickHandler={clickHandler}
          active={active}
        />
        <BusinessContextContent currentTask={currentTask} active={active} />
      </div>
    </section>
  );
};

export default BusinessContext;
