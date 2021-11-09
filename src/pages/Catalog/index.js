import React from 'react';
import CardList from '../../components/organisms/CardList'
import styles from './styles.module.scss'

const Catalog = () => {
  return (
    <div className={styles.container}>
      <CardList/>
    </div>
  );
};
export default Catalog;