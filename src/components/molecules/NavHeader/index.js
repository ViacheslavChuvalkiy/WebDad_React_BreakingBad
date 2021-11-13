import React from 'react';
import styles from './styles.module.scss';
import {Link} from "react-router-dom";
import lens from '../../../assets/images/lens.png';

const NavHeader = ({isCatalogPage}) => {
  return (
    <div className={styles.navHeader}>
      <label className={isCatalogPage ? styles.searchBlock : styles.hide}>
        <input type="text" name="search" placeholder={'Поиск'}/>
        <div className={styles.searchBtn}>
          <img src={lens} alt="линза"/>
          <span>Найти</span>
        </div>
      </label>
      <Link to={'/catalog'} className={isCatalogPage ? styles.hide : styles.linkBlock}>
        <span> Назад в Каталог </span>
      </Link>
    </div>
  );
}
export default NavHeader;



