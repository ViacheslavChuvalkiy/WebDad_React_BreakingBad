import React from "react";
import { useDispatch } from "react-redux";
import CardList from "./component";
import {getCardList} from '../../../store/actions/getCardList'

const CardsContainer = () => {

  const dispatch = useDispatch();

  let cardList = dispatch(getCardList);

  const s = cardList.then( (data) => data.cardList);

  console.log('cartsList');

  // console.log(dispatch(getCardList).then((response) => {
  //   return response.cardList;
  // }));

  //
  // const cardList = dispatch(getCardList);
  return <CardList cardList={cardList}/>;
};

export const container = CardsContainer;