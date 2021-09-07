import React from 'react';
import Card from '../../molecules/Card/index'
import styles from './styles.module.scss'
import CartsData from './cartsData'

const CartList = () => {
  return (
    <div>
      <div className={styles.cardList}>
        {CartsData.map((item) => (
          <Card
            id = {item.id}
            avatarUrl= {item.img}
            name= {item.name}
            status= {item.status}
            birthday= {item.birthday}
          />
        ))}
      </div>
    </div>
  );
};
export default CartList;
