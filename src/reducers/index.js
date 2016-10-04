import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BEERS_LOADED } from '../actions';


const beers = (_beers = [], { type, payload }) => {
  switch (type) {
    case BEERS_LOADED: return payload
    default: return _beers
  }
}

const rootReducer = combineReducers({
  beers: beers
})

export default rootReducer;
