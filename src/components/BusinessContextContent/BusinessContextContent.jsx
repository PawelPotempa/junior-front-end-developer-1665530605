import styles from "./BusinessContextContent.module.css";
import React from "react";
import Avatar from "../Avatar";
import senderAvatar from "../../assets/senderAvatar.svg";
import {
  getDateWithOrdinal,
  getDateDifference,
  getTime,
} from "../../utils/date";

const BusinessContextContent = ({ data }) => {
  const { author, title, createdAt, content } = data[3].businessContexts[0];

  return (
    <section className={styles.bcontext__contentWrapper}>
      <h2>{title}</h2>
      <div className={styles.bcontext__content}>
        <Avatar src={senderAvatar} />
        <div className={styles.bcontext__itemDetails}>
          <div className={styles.bcontext__itemInfo}>
            <span className={styles.bcontext__itemAuthor}>{author}</span>
            &#183;
            <span>
              {getDateDifference(createdAt)}, {getDateWithOrdinal(createdAt)}
            </span>
            &#183;
            <span>{getTime(createdAt)}</span>
          </div>
          <div className={styles.bcontext__itemDescription}>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessContextContent;
