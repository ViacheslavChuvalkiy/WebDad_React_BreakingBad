import Repository from "../../repository";

export function isLoadingData(value) {
  return {type: "IS_LOADING_DATA", isLoadingData: value}
}
export function isError(value) {
  return {type: "IS_ERROR", value}
}
export function personsLoaded(value) {
  return {type: "PERSONS_LOADED", persons: value}
}
export function isLoadingQuote(value) {
  return {type: "IS_LOADING_QUOTE", isLoadingQuote: value}
}
export function isErrorQuote(value) {
  return {type: "IS_ERROR_QUOTE", value}
}
export function personQuoteLoaded(value) {
  return {type: "PERSON_QUOTE_LOADED", quote: value}
}
export const getPersonsData = () => async (dispatch) => {
  dispatch(isLoadingData(true));
  let {value, error} = await Repository.APIPersons.getPersons();
  if (error || !value) {
    dispatch(isError(true));
    dispatch(isLoadingData(false));
  }
  dispatch(personsLoaded(value));
  dispatch(isLoadingData(false));
};
export const getPersonQuote = (name) => async (dispatch) => {
  dispatch(isLoadingQuote(true));
  let {value, error} = await Repository.APIPersons.getQuote(name);
  if (error || !value) {
    dispatch(isErrorQuote(true));
    dispatch(isLoadingQuote(false));
  }
  dispatch(personQuoteLoaded(value));
  dispatch(isLoadingQuote(false));
};


