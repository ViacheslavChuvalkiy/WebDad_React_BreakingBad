import React from 'react';
import Card from '../../molecules/card/index'
import styles from './styles.module.scss'

const mainPage = () => {
  return (
    <div>
      <h2>Каталог</h2>
      <div className={styles.cardList}>
        <Card
          avatarUrl='andreyPanasuk'
          name='Андрей Панасюк'
          status='Живой'
          date='23.11.1985'
        />
      </div>
    </div>
  );
};
export default mainPage;
