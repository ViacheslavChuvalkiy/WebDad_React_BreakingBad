import Repository from "../../repository";

export function isLoadingData(value) {
  return {type: "IS_LOADING_DATA", isLoadingData: value}
}
export function isError(value) {
  return {type: "IS_ERROR", value}
}
export function сardListLoaded(value) {
  return {type: "CARD_LIST_LOADED", cardList: value}
}
export const getCardListData = () => async (dispatch) => {
  dispatch(isLoadingData(true));
  const {value, error} = await Repository.APICardList.getCardList();
  if (error || !value) {
    dispatch(isError(true));
    dispatch(isLoadingData(false));
  }
  dispatch(сardListLoaded(value));
  dispatch(isLoadingData(false));
};
