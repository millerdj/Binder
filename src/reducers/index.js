import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BEERS_LOADED, CURRENT_BEER, NEXT_BEER, BEER_LIKED } from '../actions';

const beers = (_beers = [], { type, payload }) => {
  switch (type) {
    case BEERS_LOADED: return payload
    default: return _beers
  }
}

const currentBeer = (_currentBeer = 0, { type }) => {
  switch (type) {
    case NEXT_BEER: return _currentBeer + 1
    default: return _currentBeer
  }
}

const likeBeers = (_likeBeer = [], { type , payload }) => {
  switch (type) {
    case BEER_LIKED: return _likeBeer.concat([payload])
    default: return _likeBeer
  }
}


const rootReducer = combineReducers({
  beers: beers,
  currentBeer: currentBeer,
  likeBeers: likeBeers
})

export default rootReducer;
