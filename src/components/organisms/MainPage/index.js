import React from 'react';
import styles from './styles.module.scss';
import mainPhoto from "../../../assets/images/main.webp";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <LazyLoadImage
        src={mainPhoto}
        alt={"breaking bad"}
       />
    </div>
  );
};
export default MainPage;