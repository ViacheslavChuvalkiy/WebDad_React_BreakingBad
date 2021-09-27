import { combineReducers } from 'redux'
import cardListReducer from './cardListReducer'
import personReducer from './personReducer'

const reducers = combineReducers({
  cardListReducer,
  personReducer
});

export default reducers