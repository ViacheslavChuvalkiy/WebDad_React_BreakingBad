import React from 'react';
import styles from './styles.module.scss';

const Card = ({status, name, birthday, img, pageView}) => {
  return (
    <div className={pageView === 'grid' ? styles.card : styles.cardList}>
      <div className={styles.cardImg}>
        <img src={img} alt="card of hero"/>
      </div>
      {pageView === 'grid' ?
        <div className={styles.cardInfo}>
          <span className={styles.cardStatus}>{status}</span>
          <span className={styles.cardName}>{name}</span>
          <span className={styles.cardDate}>{birthday}</span>
        </div> :
        <>
          <span className={styles.cardStatus}>{status}</span>
          <span className={styles.cardName}>{name}</span>
          <span className={styles.cardDate}>{birthday}</span>
        </>
      }
    </div>
  );
}
export default Card;