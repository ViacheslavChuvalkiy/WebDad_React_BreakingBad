import React from 'react';
import styles from './styles.module.scss';
import mainPhoto from "../../../assets/images/main.png";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={mainPhoto} alt="main photo"/>
    </div>
  );
};
export default MainPage;