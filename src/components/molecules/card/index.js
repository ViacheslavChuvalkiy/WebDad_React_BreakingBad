import React from 'react';
import styles from './styles.module.scss';
import andreyPanasuk from '../../../images/andreyPanasuk.png';

const mainPage = ({status, name, date}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={andreyPanasuk} alt="card of hero"/>
      </div>
      <div className={styles.cardInfo}>
        <span className={styles.cardStatus}>{status}</span>
        <span className={styles.cardName}>{name}</span>
        <span className={styles.cardDate}>{date}</span>
      </div>
    </div>
  );
}
export default mainPage;