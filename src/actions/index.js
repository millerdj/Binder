import store from '../store';
export const BEERS_LOADED = 'BEERS_LOADED';
export const BEERS_FETCHED = 'BEERS_FETCHED';
export const BEERS_FETCHED_ERROR = 'BEERS_FETCHED_ERROR';
export const CURRENT_BEER = 'CURRENT_BEER';
export const NEXT_BEER = 'NEXT_BEER';
export const BEER_LIKED = 'BEER_LIKED';
export const VIEW_LIKED = 'VIEW_LIKED';
export const MORE_BEERS_FETCHED = 'MORE_BEERS_FETCHED';
export const MORE_BEERS_LOADED = 'MORE_BEERS_LOADED';
export const VIEW_SEARCHED = 'VIEW_SEARCHED';
export const STYLES_LOADED = 'STYLES_LOADED';
export const STYLES_FETCHED = 'STYLES_FETCHED';
export const STYLES_FETCHED_ERROR = 'STYLES_FETCHED_ERROR';

export const fetchBeers = () => (dispatch) => {
  dispatch({type: BEERS_FETCHED})
  fetch('/api/beers')
  .then(function(response) {
    return response.json()
  })
  .then((json) => {
    return json.data
  })
  .then((beers) => {
    dispatch({ type: BEERS_LOADED, payload: beers })
  })
  .catch(function(error) {
    dispatch({type: BEERS_FETCHED_ERROR})
    console.log(error);
  });
}

export const fetchStyles = () => (dispatch) => {
  dispatch({ type: STYLES_FETCHED })
  fetch('/api/styles')
  .then(function(response) {
    return response.json()
  })
  .then((json) => {
    return json.data
  })
  .then((styles) => {
    dispatch({ type: STYLES_LOADED, payload: styles })
  })
  .catch(function(error) {
    dispatch({type: STYLES_FETCHED_ERROR})
    console.log(error);
  });
}


export const fetchNewBeers = () => (dispatch) => {
  dispatch({type: MORE_BEERS_FETCHED})
  fetch('/api/beers')
  .then(function(response) {
    return response.json()
  })
  .then((json) => {
    return json.data
  })
  .then((beers) => {
    dispatch({ type: MORE_BEERS_LOADED, payload: beers })
  })
  .catch(function(error) {
    dispatch({type: BEERS_FETCHED_ERROR})
    console.log(error);
  });
}


export const nextBeer = {
  type: NEXT_BEER
}

export const beerLiked = (currentBeer) => ({
  type: BEER_LIKED, payload: currentBeer
})

export const viewLiked = {
  type: VIEW_LIKED
}

export const viewSearched = {
  type: VIEW_SEARCHED
}
