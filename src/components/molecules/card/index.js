import React from 'react';
import './styles.module.scss';

function mainPage(props) {
  return (
    <div className="card">
      <div className="card_img">
        <img src={props.avatarUrl} alt="card of hero"/>
      </div>
      <div className="card_info">
        <p className="card_status">{props.status}</p>
        <p className="card_name">{props.name}</p>
        <p className="card_date">{props.date}</p>
      </div>
    </div>
  );
}

export default mainPage;