
const initialState = {
  cardList: [],
  isLoadingData: false,
  error: null
};


function cardListReducer(state = initialState,action) {

  switch (action.type) {
    case 'CARD_LIST_LOADED':
      return {
        cardList : action.cardList};
    case 'IS_LOADING_DATA':
      return {
        ...state,
        isLoadingData: true
      };
    case 'IS_ERROR':
      return {
        error: action
      };
    default:
      return state
  }
}

export default cardListReducer;
