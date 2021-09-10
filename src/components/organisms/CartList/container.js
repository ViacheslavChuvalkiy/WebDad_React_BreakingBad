import React from "react";
import { useSelector } from "react-redux";
import CardList from "./component";

const CardsContainer = () => {
  const cartsList = useSelector((state) => state.cartsListReducer.cartsList);
  return <CardList cartsList={cartsList}/>;
};

export const container = CardsContainer;