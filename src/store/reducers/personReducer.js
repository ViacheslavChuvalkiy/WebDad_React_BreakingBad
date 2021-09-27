const initialState = {
  person: [],
  quote : '',
  isLoadingData: false,
  isError: null
};
function personReducer(state = initialState, action) {
  switch (action.type) {
    case 'PERSON_LOADED':
      return {
        ...state,
        person: action.person
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
export default personReducer;
