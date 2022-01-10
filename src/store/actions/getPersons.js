import Repository from "../../repository";

export function isLoadingData(value) {
  return {type: "IS_LOADING_DATA", isLoadingData: value}
}
export function isError(value) {
  return {type: "IS_ERROR", value}
}
export function personQuoteLoaded(value) {
  return {type: "PERSON_QUOTE_LOADED", quote: value}
}
export const getPersonQuote = (name) => async (dispatch) => {
  dispatch(isLoadingData(true));
  let {value, error} = await Repository.APIPersons.getQuote(name);
  if (!error) {
    dispatch(isLoadingData(false));
    dispatch(personQuoteLoaded(value));
  } else {
    dispatch(isLoadingData(false));
    dispatch(isError(true));
  }
};


