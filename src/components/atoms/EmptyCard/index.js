import React from 'react';
import styles from './styles.module.scss';

const EmptyCard = () => {
  return (
    <div className={styles.emptyCard}>
      <p>Не найдено карточек по заданному имени</p>
    </div>
  );
};
export default EmptyCard;