import {React} from "react";
import {useSelector, useDispatch} from "react-redux";
import Pagination from "./component";
import {setCardTempListData, setCurrentPage,setNextPage,setPrevPage} from '../../../store/actions/getCardList'

const PaginationContainer = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.cardListReducer.currentPage);
  const cardPerPage = useSelector((state) => state.cardListReducer.cardPerPage);
  const personsCount = useSelector((state) => state.cardListReducer.cardList.length);
  const changePage = (value) => {
    dispatch(setCurrentPage(value.target.id));
    dispatch(setCardTempListData());
  };
  const prevPage = () => {
    if(currentPage != 1) {
      dispatch(setCurrentPage(+currentPage - 1));
      dispatch(setCardTempListData());
    }
  };
  const nextPage = () => {
    if(currentPage != Math.trunc(personsCount / cardPerPage)) {
      dispatch(setCurrentPage(+currentPage + 1));
      dispatch(setCardTempListData());
    }
  };

  let buttons = [];
  const btnCount = Math.trunc(personsCount / cardPerPage);

  if (btnCount && btnCount > 1) {

    let firstBtn = currentPage <= 3 ?  currentPage == 1 ? 1 : currentPage - 1 : btnCount - 2;

    if (firstBtn >= btnCount - 2) {
      buttons.push({text: 1, id: 1, current: false, action: changePage});
      buttons.push({text: '...', id: '', current: false, action: ''});
    }

    for (let i = firstBtn; i < firstBtn + 3; i++) {
      buttons.push({text: i, id: i, current: currentPage == i, action: changePage});
    }

    if (firstBtn <= 3) {
      buttons.push({text: '...', id: '', current: false, action: ''});
      buttons.push({text: btnCount, id: btnCount, current: false, action: changePage});
    }

    buttons.push({text: '', id: "prev", current: false, action: prevPage});
    buttons.push({text: '', id: "next", current: false, action: nextPage});
  }

  return buttons.length ?
    <Pagination
      buttons={buttons}
    />
    :
    <></>;
};
export const container = PaginationContainer;