import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import {getCardListData} from '../../../store/actions/index'

const CardsContainer = () => {

  const dispatch = useDispatch();

  dispatch(getCardListData);
  console.log(dispatch(getCardListData));

  //const s = cardList.then( (data) => data.cardList);
  // const s = useSelector((state) => state.cartsListReducer.cartsList);
  // console.log(s);

  // console.log(dispatch(getCardList).then((response) => {
  //   return response.cardList;
  // }));

  //
  // const cardList = dispatch(getCardList);
  return <CardList cardList={useSelector.state}/>;
};

export const container = CardsContainer;