import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../assets/images/logo.png'
import {Link} from "react-router-dom";

const Header = ({isPerson} = false) => {

  const btnClasses = [];

  if(isPerson){
    btnClasses.push('bg_yellow');
  }
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo"/>
      <Link to={`/catalog`} className={styles.catalogLink}>
        <button className={styles[btnClasses[0]]}>
          <span>Каталог</span>
        </button>
      </Link>
    </div>
  );
};

export default Header;