import React from "react";
import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader";
import Error from "../../atoms/Error";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const CardList = ({ cardList, isLoader, isError }) => {
  return isError ? (
    <Error />
  ) : isLoader ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      <div className={styles.cardList}>
        {cardList.map((item) => (
          <Link to={`/person/${item.char_id}`} className={styles.personLink}>
            <Card
              key={item.char_id}
              img={item.img}
              name={item.name}
              status={item.status}
              birthday={item.birthday}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CardList;
