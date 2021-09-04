import React from 'react';
import classes from './styles.module.scss';
import andreyPanasuk from '../../../images/andreyPanasuk.png';

function mainPage(props) {
  return (
    <div className={classes.card}>
      <div className={classes.card_img}>
        <img src={andreyPanasuk} alt="card of hero"/>
      </div>
      <div className={classes.card_info}>
        <span className={classes.card_status}>{props.status}</span>
        <span className={classes.card_name}>{props.name}</span>
        <span className={classes.card_date}>{props.date}</span>
      </div>
    </div>
  );
}
export default mainPage;