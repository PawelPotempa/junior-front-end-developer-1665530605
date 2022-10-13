import styles from "./Avatar.module.css";
import React from "react";

const Avatar = ({ src }) => {
  return (
    <div className={styles.avatar__container}>
      <img src={src} alt="avatar" className={styles.avatar} />
    </div>
  );
};

export default Avatar;
