import React from 'react';
import './styles.module.scss'
import CartList from '../CartList/index'

const MainPage = () => {
  return (
    <div>
      <h2>Каталог</h2>
        <CartList
        />
    </div>
  );
};
export default MainPage;
