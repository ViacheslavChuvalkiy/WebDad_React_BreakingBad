const initialState = {
  quote: '',
  isLoadingData: false,
  isError: null,
  isLoadingQuote: false,
  isErrorQuote: null
};
function personsReducer(state = initialState, action) {
  switch (action.type) {
    case 'PERSON_QUOTE_LOADED':
      return {
        ...state,
        quote: action.quote
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
export default personsReducer;
