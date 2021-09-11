import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk"
import Repository from '../repository/index'

function getCardList() {

  return async (dispatch) => {
    dispatch(getCardList(true));
    const { value, error } = await Repository.ApiCore.getCardList();
    if(error || !value) {
      dispatch(getCardList(true));
    }

    dispatch(getCardList(value));
    dispatch(getCardList(false));
  };
}

const store = createStore(reducers, applyMiddleware(thunk));
export default store;