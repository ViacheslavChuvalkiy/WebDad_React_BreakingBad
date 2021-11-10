import React from "react";
import styles from "./styles.module.scss";
import logo from "../../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const isCatalogPage = useLocation().pathname === "/catalog";
  const isMainPage = useLocation().pathname === "/";
  const btnClasses = [];
  if (isCatalogPage) {
    btnClasses.push("bg_yellow");
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <Link
          to={!isCatalogPage ? "/catalog" : "#"}
          className={styles.catalogLink}
        >
          <button className={styles[btnClasses[0]]} disabled={!isMainPage}>
            <span>Каталог</span>
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
