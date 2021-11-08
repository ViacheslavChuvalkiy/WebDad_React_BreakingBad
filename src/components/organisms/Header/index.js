import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../assets/images/logo.png'
import {Link, useLocation} from "react-router-dom";
import NavHeader from '../../molecules/NavHeader'

const Header = () => {
  const isCatalogPage = useLocation().pathname === "/catalog";
  const isMainPage = useLocation().pathname === "/";
  const btnClasses = [];
  if (isCatalogPage) {
    btnClasses.push('bg_yellow');
  }
  return (
    <>
      <header style={styles}>
        <Link to={'/'}>
          <img src={logo} alt="logo"/>
        </Link>
        <Link to={!isCatalogPage ? '/catalog' : '#'} className={styles.catalogLink}>
          <button className={styles[btnClasses[0]]} disabled={!isMainPage}>
            <span>Каталог</span>
          </button>
        </Link>
      </header>
      {!isMainPage &&
      <NavHeader
        isCatalogPage={isCatalogPage}
      />
      }
    </>
  );
};
export default Header;