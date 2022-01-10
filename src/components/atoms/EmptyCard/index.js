import React from 'react';
import styles from './styles.module.scss';

const EmptyCard = () => {
  console.log('si')
  return (
    <div className={styles.emptyCard}>
      <p>Не найдено карточек по заданному имени</p>
    </div>
  );
};
export default EmptyCard;