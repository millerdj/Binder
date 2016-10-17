import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BEERS_LOADED, CURRENT_BEER, NEXT_BEER, BEER_LIKED, VIEW_LIKED, MORE_BEERS_LOADED, VIEW_SEARCHED, STYLES_LOADED } from '../actions';

const beers = (_beers = [], { type, payload }) => {
  switch (type) {
    case BEERS_LOADED: return payload
    case MORE_BEERS_LOADED: return _beers.concat(payload)
    default: return _beers
  }
}

const styles = (_styles = [], { type, payload }) => {
  switch(type) {
    case STYLES_LOADED: return payload
    default: return _styles
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

const viewLike = (_viewLike = false, { type }) => {
  switch (type) {
    case VIEW_LIKED: return !_viewLike
    default: return _viewLike
  }
}

const viewSearch = (_viewSearch = false, { type }) => {
  switch (type) {
    case VIEW_SEARCHED: return !_viewSearch
    default: return _viewSearch
  }
}


const rootReducer = combineReducers({
  beers: beers,
  styles: styles,
  currentBeer: currentBeer,
  likeBeers: likeBeers,
  viewLiked: viewLike,
  viewSearched: viewSearch
})

export default rootReducer;
