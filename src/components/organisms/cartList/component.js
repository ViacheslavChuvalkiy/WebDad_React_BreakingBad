import React from 'react';
import Card from '../../molecules/Card/index'
import styles from './styles.module.scss'

const CardList = ({cardList}) => {
  return (
    <div>
      <div className={styles.cardList}>
        {cardList.length &&
        cardList.map((item) => (
          <Card
            key={item.char_id}
            img={item.img}
            name={item.name}
            status={item.status}
            birthday={item.birthday}
          />
        ))}
      </div>
    </div>
  );
};
export default CardList;
