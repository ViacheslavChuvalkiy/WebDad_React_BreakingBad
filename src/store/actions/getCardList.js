import Repository from "../../repository";

export function isLoadingData(value) {
  return {type: "IS_LOADING_DATA", isLoadingData: value}
}
export function isError(value) {
  return {type: "IS_ERROR", value}
}
export function cardListLoaded(value) {
  return {type: "CARD_LIST_LOADED", cardList: value}
}
export function pageViewChanged(value) {
  return {type: "PAGE_VIEW_CHANGED", gridView: value}
}
export function setCurrentPage(value) {
  return {type: "SET_CURRENT_PAGE", currentPage: value}
}
export function setCardTempListData() {
  return {type: "SET_TEMP_CARD_LIST"}
}
export function setCardPerPage(value) {
  return {type: "SET_CARD_PER_PAGE", cardPerPage: value }
}
export const getCardListData = () => async (dispatch) => {
  dispatch(isLoadingData(true));
  const {value, error} = await Repository.APICardList.getCardList();
  if (error || !value) {
    dispatch(isError(true));
    dispatch(isLoadingData(false));
  }
  dispatch(cardListLoaded(value));
  dispatch(setCardTempListData());
  dispatch(isLoadingData(false));
};
