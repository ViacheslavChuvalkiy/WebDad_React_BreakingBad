import Repository from "../../repository";

export function isLoadingData(value) {
  return {type: "IS_LOADING_DATA", isLoadingData: value}
}
export function isError(value) {
  return {type: "IS_ERROR", value}
}
export function personLoaded(value) {
  return {type: "PERSON_LOADED", person: value}
}
export const getPersonData = (id) => async (dispatch) =>
  {
    dispatch(isLoadingData(true));
    let {value, error} = await Repository.APIPerson.getPerson(id);
    if (error || !value) {
      dispatch(isError(true));
      dispatch(isLoadingData(false));
    }
    const response = await Repository.APIPerson.getPersonQuote(id);

    if (response.error || !response.value) {
      dispatch(isError(true));
      dispatch(isLoadingData(false));
    }

    value = {...value[0], ...response.value[0]};
    dispatch(personLoaded(value));
    dispatch(isLoadingData(false));
  };


