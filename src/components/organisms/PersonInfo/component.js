import React from 'react';
import styles from './styles.module.scss';
import Error from "../../atoms/Error";
import Loader from "../../atoms/Loader";
import NavHeader from "../../molecules/NavHeader";

const Person = ({person, isLoader, isError,isCatalogPage}) => {
  let {img, name, status, birthday, nickname} = person;
  return (isError ? <Error/> : isLoader ? <Loader/> :
      <div className={styles.person}>
        <NavHeader isCatalogPage={isCatalogPage}/>
        <div className={styles.personImg}>
          <img src={img} alt="img of person"/>
        </div>
        <div className={styles.personInfo}>
          <span className={styles.personStatus}>{status}</span>
          <span className={styles.personName}>{name}</span>
          <p className={styles.personDate}>
            Дата рождения:
            <span>
              {birthday}
            </span>
          </p>
          <p>
            Ник-нейм:
            <span>
              {nickname}
            </span>
          </p>
          <p>
            Цитата:
            <span>
              Lorem djks jsk njk nsjk skj sj kjcnsjks kjkj jk sjk sjkcnjk  sjks jks c sd kbjhsbdbhjsdh hjshdbj sbjds
            </span>
          </p>
        </div>
      </div>
  );
};
export default Person;
