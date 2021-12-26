import React from 'react';
import CardList from '../../components/organisms/CardList'
import styles from './styles.module.scss'
import Pagination from "../../components/molecules/Pagination";

const Catalog = () => {
  return (
    <div className={styles.container}>
      <CardList/>
      <Pagination/>
    </div>
  );
};
export default Catalog;