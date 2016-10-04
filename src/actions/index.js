export const BEERS_LOADED = 'BEERS_LOADED';
export const BEERS_FETCHED = 'BEERS_FETCHED';
export const BEERS_FETCHED_ERROR = 'BEERS_FETCHED_ERROR';
export const CURRENT_BEER = 'CURRENT_BEER';

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
    const currentBeer = beers[0].id
    dispatch({ type: CURRENT_BEER, payload: currentBeer } )
  })
  .catch(function(error) {
    dispatch({type: BEERS_FETCHED_ERROR})
    console.log(error);
  });
}
