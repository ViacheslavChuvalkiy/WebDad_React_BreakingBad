const initialState = {
  cardList: [],
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
    default:
      return state
  }
}
export default cardListReducer;
