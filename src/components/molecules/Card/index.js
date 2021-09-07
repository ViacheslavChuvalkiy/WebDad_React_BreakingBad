import React from 'react';
import styles from './styles.module.scss';

const Card = ({id, status, name, birthday, img}) => {
  return (
    <div className={styles.card} id={id}>
      <div className={styles.cardImg}>
        <img src={img} alt="card of hero"/>
      </div>
      <div className={styles.cardInfo}>
        <span className={styles.cardStatus}>{status}</span>
        <span>{name}</span>
        <span className={styles.cardDate}>{birthday}</span>
      </div>
    </div>
  );
}
export default Card;