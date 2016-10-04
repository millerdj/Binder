export const BEERS_LOADED = 'BEERS_LOADED';
export const BEERS_FETCHED = 'BEERS_FETCHED';
export const BEERS_FETCHED_ERROR = 'BEERS_FETCHED_ERROR';

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
    dispatch({ type: BEERS_LOADED, payload: beers } )
  })
  .catch(function(error) {
    dispatch({type: BEERS_FETCHED_ERROR})
    console.log(error);
  });
}
