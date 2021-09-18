import React from 'react';
import styles from './styles.module.scss';

const Error = ({error}) => {

  return (
    <div className={styles.error}>
        <h2>{error}</h2>
      </div>
  );
}
export default Error;