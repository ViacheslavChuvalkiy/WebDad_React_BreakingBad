const initialState = {
  cardList: [],
  tempCardList: [],
  pageView: 'grid',
  currentPage: 1,
  cardPerPage: 10,
  isLoadingData: false,
  isError: null,
  optionsCardPerPage : [5,10,15,20],
  currentFilter: ''
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
        currentPage: +action.currentPage
      };
    case 'SET_CARD_PER_PAGE':
      return {
        ...state,
        cardPerPage: +action.cardPerPage
      };
    case 'SET_CURRENT_FILTER' :
      return {
        ...state,
        currentFilter: action.currentFilter
      };
    case 'SET_TEMP_CARD_LIST':
      return {
        ...state,
        tempCardList:  state.cardList.filter((item) => state.currentFilter === '' || item.name.toUpperCase().includes(state.currentFilter.toUpperCase())).slice(
          state.currentPage === 1 ?
            0 : state.currentPage * state.cardPerPage - state.cardPerPage,
          state.currentPage * state.cardPerPage)
      };
    default:
      return state
  }
}
export default cardListReducer;
