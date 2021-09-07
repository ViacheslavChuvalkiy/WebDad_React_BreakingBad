import React from 'react';
import styles from './styles.module.scss';
import andreyPanasuk from '../../../images/andreyPanasuk.png';

const Card = ({id, status, name, birthday}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={andreyPanasuk} alt="card of hero"/>
      </div>
      <div className={styles.cardInfo}>
        <span className={styles.cardStatus}>{status}</span>
        <span className={styles.cardName}>{name}</span>
        <span className={styles.cardDate}>{birthday}</span>
      </div>
    </div>
  );
}
export default Card;