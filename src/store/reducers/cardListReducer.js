const initialState = {
  cardList: [],
  pageView: 'grid',
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
    default:
      return state
  }
}
export default cardListReducer;
