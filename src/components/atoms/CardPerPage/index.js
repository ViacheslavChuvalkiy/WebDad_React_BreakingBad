import React from 'react';
import styles from './styles.module.scss';

const PagBtn = ({text, id, changeCardPerPage,currentOptionPerGage}) => {
  return (
      <button className={ currentOptionPerGage === text ? styles.currentOptionPerPage : styles.cardPerPageBtn} id={id} onClick={changeCardPerPage} disabled={currentOptionPerGage === text}>
        {text}
      </button>
  )
};
export default PagBtn;