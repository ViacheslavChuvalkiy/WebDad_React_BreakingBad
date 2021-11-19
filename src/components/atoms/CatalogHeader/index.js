import React from 'react';
import styles from './styles.module.scss';
import PageView from "../../molecules/PageView";

const CatalogHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.tittle}>Каталог</h1>
      <PageView/>
    </div>
  );
};
export default CatalogHeader;