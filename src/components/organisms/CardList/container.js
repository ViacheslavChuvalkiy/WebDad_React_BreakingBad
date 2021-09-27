import {React, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import CardList from "./component";
import {getCardListData} from '../../../store/actions/getCardList'

const CardsContainer = () => {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.cardListReducer.cardList);
  const isLoader = useSelector((state) => state.cardListReducer.isLoadingData);
  const isError = useSelector((state) => state.cardListReducer.isError);
  useEffect(() => {
    dispatch(getCardListData());
  }, [dispatch]);
  return <CardList
    cardList={cardList}
    isLoader={isLoader}
    isError={isError}
  />;
};
export const container = CardsContainer;