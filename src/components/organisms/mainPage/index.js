import React from 'react';
import Card from '../../molecules/card/index'
import classes from './styles.module.scss'

function mainPage() {
  return (
    <div>
      <h2>Каталог</h2>
      <div className={classes.card_block}>
        <Card
          avatarUrl='andreyPanasuk'
          name='Андрей Панасюк'
          status='Живой'
          date='23.11.1985'
        />
        <Card
          avatarUrl='andreyPanasuk'
          name='Андрей Панасюк'
          status='Живой'
          date='23.11.1985'
        />
        <Card
          avatarUrl='andreyPanasuk'
          name='Андрей Панасюк'
          status='Живой'
          date='23.11.1985'
        />
        <Card
          avatarUrl='andreyPanasuk'
          name='Андрей Панасюк'
          status='Живой'
          date='23.11.1985'
        />
      </div>
    </div>
  );
}
export default mainPage;
