import {React, useEffect,useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import CardList from "./component";
import {getCardListData, setCardTempListData, setCurrentFilter} from '../../../store/actions/getCardList'

const CardsContainer = () => {
  const dispatch = useDispatch();
  const tempCardList = useSelector((state) => state.cardListReducer.tempCardList);
  const isLoader = useSelector((state) => state.cardListReducer.isLoadingData);
  const isError = useSelector((state) => state.cardListReducer.isError);
  const pageView = useSelector((state) => state.cardListReducer.pageView);

  useEffect(() => {
    dispatch(getCardListData());
  }, [dispatch]);

  const inputEl = useRef(null);

  const searchHandler = () => {
    dispatch(setCurrentFilter(inputEl.current.value));
    dispatch(setCardTempListData());
  };

  return <CardList
    cardList={tempCardList}
    isLoader={isLoader}
    isError={isError}
    isCatalogPage={true}
    pageView={pageView}
    inputEl={inputEl}
    searchHandler={searchHandler}
  />;
};
export const container = CardsContainer;