import React from 'react';
import Card  from '../../molecules/card/index'

function mainPage() {
  return (
    <div>
      <h2>Breaking Bad</h2>
      <Card
        avatarUrl = './images/andreyPanasuk.png'
        name = 'Андрей Панасюк'
        status = 'Живой'
        date = '23.11.1985'
      />
    </div>
  );
}

export default mainPage;
