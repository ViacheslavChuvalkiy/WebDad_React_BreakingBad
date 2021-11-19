import React from 'react';
import styles from './styles.module.scss';

const CatalogTittle = () => {
  return (
    <div className={styles.header}>
      <span></span>
      <span>Статус</span>
      <span>Имя</span>
      <span>Дата рождения</span>
    </div>
  );
};
export default CatalogTittle;