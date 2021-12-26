import React from "react";
import styles from "./styles.module.scss";
import PagButton from "../../atoms/PagButton";

const Pagination = ({buttons}) => {
  return (
    <div className={styles.container}>
        {buttons.map(item => (
          <PagButton
          text={item.text}
          action={item.action}
          current={item.current}
          id={item.id}
          key={item.id}
          />
        ))}
    </div>
  );
};
export default Pagination;
