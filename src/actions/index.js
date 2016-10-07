import store from '../store';
export const BEERS_LOADED = 'BEERS_LOADED';
export const BEERS_FETCHED = 'BEERS_FETCHED';
export const BEERS_FETCHED_ERROR = 'BEERS_FETCHED_ERROR';
export const CURRENT_BEER = 'CURRENT_BEER';
export const NEXT_BEER = 'NEXT_BEER';
export const BEER_LIKED = 'BEER_LIKED';
export const VIEW_LIKED = 'VIEW_LIKED';

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

export const nextBeer = {
  type: NEXT_BEER
}

export const beerLiked = (currentBeer) => ({
  type: BEER_LIKED, payload: currentBeer
})

export const viewLiked = {
  type: VIEW_LIKED
}
