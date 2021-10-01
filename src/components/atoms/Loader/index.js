import React from 'react';
import styles from './styles.module.scss';
import loader from "../../../assets/images/loading.gif";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={loader} alt="loader"/>
    </div>
  );
};
export default Loader;