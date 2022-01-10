import React from "react";
import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader";
import Error from "../../atoms/Error";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import NavHeader from "../../molecules/NavHeader";
import CatalogHeader from "../../atoms/CatalogHeader";
import CatalogTittle from "../../atoms/CatalogTittle";

const CardList = ({ cardList, isLoader, isError,isCatalogPage,pageView,searchHandler,inputEl}) => {
  return isError ? (
    <Error />
  ) : isLoader ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      <NavHeader isCatalogPage={isCatalogPage} searchHandler = {searchHandler} inputEl = {inputEl}/>
      {isCatalogPage ?
        <CatalogHeader/>: ''
      }
      {isCatalogPage && pageView === 'list' ?
        <CatalogTittle/> : ''
      }
      <div className={ pageView === 'grid' ? styles.cardGrid : styles.cardList}>
        {cardList.map((item, i) => (
          <Link to={`/person/${item.char_id}`} className={styles.personLink} key = {i}>
            <Card
              key={item.char_id}
              img={item.img}
              name={item.name}
              status={item.status}
              birthday={item.birthday}
              pageView = {pageView}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CardList;
