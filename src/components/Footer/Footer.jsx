import styles from "./Footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.nav__list}>
          <li>
            <a href="/">Terms of service</a>
          </li>
          &#183;
          <li>
            <a href="/">Privacy policy</a>
          </li>
          &#183;
          <li>
            <a href="/">Copyright</a>
          </li>
        </ul>
      </nav>
      <div className={styles.footer__info}>
        <span>nerds.family Version 1.2</span>
        &#183;
        <span>Last update 10/09/2022</span>
      </div>
    </footer>
  );
};

export default Footer;
