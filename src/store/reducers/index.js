import { combineReducers } from 'redux'
import cardListReducer from './cardListReducer'
import personsReducer from './personsReducer'

const reducers = combineReducers({
  cardListReducer,
  personsReducer
});

export default reducers