import React from 'react';
import styles from './styles.module.scss';
import gridView from "../../../assets/images/grid.png";
import listView from "../../../assets/images/list.png";
import gridViewActive from "../../../assets/images/grid-active.png";
import listViewActive from "../../../assets/images/list-active.png";

import {useDispatch, useSelector} from "react-redux";
import {pageViewChanged} from "../../../store/actions/getCardList";

const PageView = () => {
  const dispatch = useDispatch();
  const pageView = useSelector((state) => state.cardListReducer.pageView);
  const clickHandler = (e) =>{
    dispatch(pageViewChanged(e.target.name));
  };

  if(pageView === 'grid'){
    return (
    <div className={styles.pageView}>
      <img src={gridViewActive} alt="gridView" name="grid" onClick={clickHandler}/>
      <img src={listView} alt="listView" name="list" onClick={clickHandler}/>
    </div>
    )
  }
  else {
    return (
      <div className={styles.pageView}>
        <img src={gridView} alt="gridView" name="grid" onClick={clickHandler}/>
        <img src={listViewActive} alt="listView" name="list" onClick={clickHandler}/>
      </div>
    )
  }
};
export default PageView;