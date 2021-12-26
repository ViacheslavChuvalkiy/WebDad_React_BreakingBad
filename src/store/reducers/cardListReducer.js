const initialState = {
  cardList: [],
  tempCardList: [],
  pageView: 'grid',
  currentPage: 1,
  cardPerPage: 10,
  isLoadingData: false,
  isError: null
};
function cardListReducer(state = initialState, action) {
  switch (action.type) {
    case 'CARD_LIST_LOADED':
      return {
        ...state,
        cardList: action.cardList
      };
    case 'IS_LOADING_DATA':
      return {
        ...state,
        isLoadingData: action.isLoadingData
      };
    case 'IS_ERROR':
      return {
        ...state,
        isError: action
      };
    case 'PAGE_VIEW_CHANGED':
      return {
        ...state,
        pageView: action.gridView
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      };
    case 'SET_TEMP_CARD_LIST':
      return {
        ...state,
        tempCardList: state.cardList.slice(state.currentPage === 1 ? 0 : state.currentPage * state.cardPerPage - state.cardPerPage, state.currentPage * state.cardPerPage)
      };
    default:
      return state
  }
}
export default cardListReducer;
