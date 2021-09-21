import React from 'react';
import styles from './styles.module.scss';
import errorImg from "../../../assets/images/error.gif";

const Error = ({error}) => {
  console.log(error);
  return (
    <div className={styles.error}>
      <img src={errorImg} alt="error"/>
    </div>
  );
};
export default Error;