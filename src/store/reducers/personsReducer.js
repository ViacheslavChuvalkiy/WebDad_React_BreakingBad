const initialState = {
  persons: [],
  isLoadingData: false,
  isError: null
};
function personsReducer(state = initialState, action) {
  switch (action.type) {
    case 'PERSONS_LOADED':
      return {
        ...state,
        persons: action.persons
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
