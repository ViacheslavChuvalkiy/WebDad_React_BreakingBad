import React from 'react';
import styles from './styles.module.scss';
import mainPhoto from "../../../assets/images/main.webp";
import {LazyLoadImage} from 'react-lazy-load-image-component';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <LazyLoadImage
        src={mainPhoto}
        alt="breaking bad"
      />
    </div>
  );
};
export default MainPage;