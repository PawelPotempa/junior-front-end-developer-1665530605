import styles from "./Header.module.css";
import React from "react";
import Logo from "../../assets/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.avatar__container}>
        <img
          src="https://avatars.githubusercontent.com/u/80518612?v=4"
          alt="user avatar"
          className={styles.avatar}
        />
      </div>
    </header>
  );
};

export default Header;
