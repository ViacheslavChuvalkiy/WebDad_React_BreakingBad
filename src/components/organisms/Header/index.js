import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../assets/images/logo.png'
import {Link, useLocation} from "react-router-dom";
import NavHeader from '../../molecules/NavHeader'

const Header = () => {
  const isCatalogPage = useLocation().pathname === "/catalog";
  const isMainPage = useLocation().pathname === "/";
  const isPersonPage = !isCatalogPage && !isMainPage;
  const btnClasses = [];
  if (isPersonPage) {
    btnClasses.push('bg_yellow');
  }
  return (
    <div>
      <div className={styles.header}>
        <Link to={'/'}>
          <img src={logo} alt="logo"/>
        </Link>
        <Link to={!isPersonPage ? '/catalog' : '#'} className={styles.catalogLink}>
          <button className={styles[btnClasses[0]]} disabled={!isMainPage}>
            <span>Каталог</span>
          </button>
        </Link>
      </div>
      {!isMainPage &&
      <NavHeader
        isCatalogPage={isCatalogPage}
      />
      }
    </div>
  );
};
export default Header;