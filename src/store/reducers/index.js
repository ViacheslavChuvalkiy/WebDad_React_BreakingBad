import { combineReducers } from 'redux'
import cardListReducer from './cartsList/cardListReducer'

const reducers = combineReducers({
  cardListReducer,
});

export default reducers