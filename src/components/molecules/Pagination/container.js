import {React} from "react";
import {useSelector, useDispatch} from "react-redux";
import Pagination from "./component";
import {setCardTempListData, setCurrentPage, setCardPerPage} from '../../../store/actions/getCardList'
import leftArrow from "../../../assets/images/left.png";
import rightArrow from "../../../assets/images/right.png";

const PaginationContainer = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.cardListReducer.currentPage);
  const cardPerPage = useSelector((state) => state.cardListReducer.cardPerPage);
  const currentFilter = useSelector((state) => state.cardListReducer.currentFilter);
  const cardList = useSelector((state) => state.cardListReducer.cardList);
  const optionsCardPerPage = useSelector((state) => state.cardListReducer.optionsCardPerPage);

  const personsCount = currentFilter === '' ? cardList.length: cardList.filter(item => item.name.toUpperCase().includes(currentFilter.toUpperCase())).length;
  const btnCount = Math.trunc(personsCount / cardPerPage);

  const changeCardPerPage = (value) => {
    dispatch(setCardPerPage(value.target.id));
    dispatch(setCardTempListData());
  };
  const changePage = (value) => {
    dispatch(setCurrentPage(value.target.id));
    dispatch(setCardTempListData());
  };
  const prevPage = () => {
    if(currentPage !== 1) {
      dispatch(setCurrentPage(currentPage - 1));
      dispatch(setCardTempListData());
    }
  };
  const nextPage = () => {
    if(currentPage !== btnCount) {
      dispatch(setCurrentPage(currentPage + 1));
      dispatch(setCardTempListData());
    }
  };
  let buttons = [];
  if (btnCount && btnCount > 1) {

    let firstBtn = currentPage <= 3 ?  currentPage === 1 ? 1 : currentPage - 1 : btnCount - 2;

    if (firstBtn >= btnCount - 2 && btnCount > 3) {
      buttons.push({text: 1, id: 1, current: false, action: changePage, type: 'button', src: ""});
      buttons.push({text: '...', id: '', current: false, action: '', type: 'dots', src: ""});
    }

    for (let i = firstBtn; i < firstBtn + 3; i++) {
      buttons.push({text: i, id: i, current: currentPage === i, action: changePage, type: 'button', src: ""});
    }

    if (firstBtn <= 3 && btnCount > 3) {
      buttons.push({text: '...', id: '', current: false, action: '', src: "", type: 'dots'});
      buttons.push({text: btnCount, id: btnCount, current: false, action: changePage, type: 'button', src: ""});
    }

    buttons.push({text: '', id: "prev", current: false, action: prevPage, src: leftArrow});
    buttons.push({text: '', id: "next", current: false, action: nextPage, src: rightArrow});
  }

  return buttons.length ?
    <Pagination
      buttons={buttons}
      optionsCardPerPage = {optionsCardPerPage}
      changeCardPerPage = {changeCardPerPage}
      currentOptionPerGage = {cardPerPage}
    />
    :
    <></>;
};
export const container = PaginationContainer;