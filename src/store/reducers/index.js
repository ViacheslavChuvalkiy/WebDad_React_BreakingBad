import { combineReducers } from 'redux'
import cartsListReducer from './cartsList/cardListReducer'

const reducers = combineReducers({
  cartsListReducer,
});

export default reducers