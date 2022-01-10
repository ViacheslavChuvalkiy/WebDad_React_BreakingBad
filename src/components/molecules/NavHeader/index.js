import React from 'react';
import styles from './styles.module.scss';
import {Link} from "react-router-dom";
import lens from '../../../assets/images/lens.png';

const NavHeader = ({isCatalogPage, searchHandler, inputEl}) => {
  return (
    <div className={styles.navHeader}>
      <label className={isCatalogPage ? styles.searchBlock : styles.hide}>
        <input type="text" name="search" placeholder={'Поиск'} id='searchInput' ref={inputEl} onChange={searchHandler} autoComplete="off"/>
        <div className={styles.searchBtn}>
          <img src={lens} alt="линза"/>
          <span onClick={searchHandler}>Найти</span>
        </div>
      </label>
      <Link to={'/catalog'} className={isCatalogPage ? styles.hide : styles.linkBlock}>
        <span> Назад в Каталог </span>
      </Link>
    </div>
  );
};
export default NavHeader;



