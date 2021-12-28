import React from "react";
import styles from "./styles.module.scss";
import PagButton from "../../atoms/PagButton";
import CardPerPage from "../../atoms/CardPerPage";
import CardPerPageTittle from "../../atoms/CardPerPageTittle";

const Pagination = ({buttons, optionsCardPerPage, changeCardPerPage, currentOptionPerGage}) => {
  return (
    <div className={styles.container}>
      <div className={styles.paginationOptions}>
        {buttons.map(item => (
          <PagButton
          text={item.text}
          action={item.action}
          current={item.current}
          id={item.id}
          key={item.id}
          type={item.type}
          src={item.src}
          />
        ))}
      </div>
        <div className={styles.cardPerPageOptions}>
          <CardPerPageTittle/>
          {optionsCardPerPage.map(item => (
            <CardPerPage
              text={item}
              id={item}
              key={item}
              changeCardPerPage={changeCardPerPage}
              currentOptionPerGage={currentOptionPerGage}
            />
          ))}
        </div>
    </div>
  );
};
export default Pagination;
