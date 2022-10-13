import styles from "./Header.module.css";
import React from "react";
import Logo from "../../assets/Logo";
import Avatar from "../Avatar";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Avatar src="https://avatars.githubusercontent.com/u/80518612?v=4" />
    </header>
  );
};

export default Header;
