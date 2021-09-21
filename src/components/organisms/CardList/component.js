import React from 'react';
import Card from '../../molecules/Card/';
import Loader from "../../atoms/Loader/";
import Error from "../../atoms/Error/";
import styles from './styles.module.scss';

const CardList = ({cardList,isLoader,error}) => {
  return ( error ? <Error error={error}/> : isLoader ? <Loader/> :
    <div>
      <div className={styles.cardList}>
        {cardList.map((item) => (
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
