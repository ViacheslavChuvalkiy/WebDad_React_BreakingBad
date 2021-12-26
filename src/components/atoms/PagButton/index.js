import React from 'react';
import styles from './styles.module.scss';

const PagBtn = ({text, action, current, id}) => {
  return (
      <button className={current ? styles.currentBtn : text === "" ? styles.arrowPag : styles.pagBtn} id={id} onClick={action} disabled={action === ''}>
        {text}
      </button>
  );
};
export default PagBtn;