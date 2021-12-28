import React from 'react';
import styles from './styles.module.scss';

const PagBtn = ({text, action, current, id, type, src}) => {
  return type === 'button' ?
      <button className={current ? styles.currentBtn : styles.pagBtn} id={id} onClick={action}>
        {text}
      </button>
    :
    type === 'dots' ?
     <p className={styles.pagDots}>{text}</p>
    :
    <img src= {src} alt='arrow key' className={styles.arrowPag} onClick={action}/>;
};
export default PagBtn;