import styles from "./NavBar.module.css";
import React, { useState, useEffect } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo} />

        <div className={styles.menu} onClick={handleMenuClick}>
          <FaBars className={styles.bars} />
        </div>
        <ul
          className={`${styles.navlist} ${
            showMenu ? styles["navlist--show"] : styles["navlist--hide"]
          } ${
            window.innerWidth > 700 ? styles["navlist--desktop"] : ""
          }`}
        >
          <li className={styles.link}>
            <Link to="/" />
            Pizzas
          </li>
          <li className={styles.link}>
            <Link to="/" />
            Massas
          </li>
          <li className={styles.link}>
            <Link to="/" />
            Bebidas
          </li>
          <li className={styles.link}>
            <Link to="/" />
            <FaUserCircle style={{ marginBottom: "-2px", size: "25X25" }} />
            Login
          </li>
        </ul>
      </nav>
    </div>
  );
}
