import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BEERS_LOADED, CURRENT_BEER } from '../actions';

const beers = (_beers = [], { type, payload }) => {
  switch (type) {
    case BEERS_LOADED: return payload
    default: return _beers
  }
}

const currentBeer = (_currentBeer = [], { type, payload }) => {
  switch (type) {
    case CURRENT_BEER: return payload
    default: return _currentBeer
  }
}



const rootReducer = combineReducers({
  beers: beers,
  currentBeer: currentBeer
})

export default rootReducer;
