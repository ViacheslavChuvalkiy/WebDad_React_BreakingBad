import {React, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import CardList from "./component";
import Error from "../../atoms/Error"
import Loader from "react-loader-spinner";
import {getCardListData} from '../../../store/actions/getCardList'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.cardListReducer.cardList);
  const isLoader = useSelector((state) => state.cardListReducer.isLoadingData);
  const isError = useSelector((state) => state.cardListReducer.error);

  useEffect(() => {
    dispatch(getCardListData());
  }, [dispatch]);
  if (isLoader) {
    return <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
    />
  }

  if (isError) {
    return <Error error={isError}/>
  }

  return <CardList
    cardList={cardList}
  />;
};
export const container = CardsContainer;