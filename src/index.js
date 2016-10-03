import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';

const BEERS_LOADED = 'BEERS_LOADED'

const beers = (_beers = [], {type, payload}) => {
  switch (type) {
    case BEERS_LOADED: return payload
    default: return _beers
  }
}

const rootReducer = combineReducers({
  beers: beers
})

const store = createStore(rootReducer);

fetch('/api/beers')
  .then(function(response) {
    return response.json()
  })
  .then((json) => {
    return json.data
  })
  .then((beers) => {
    store.dispatch({ type: BEERS_LOADED, payload: beers } )
  })
  .catch(function(error) {
    console.log(error);
  });

function renderApp() {
  render (
    <div>
      { store.getState().beers.map((beer) => {
        return <p key={beer.id}>{ beer.name }</p>
        })
      }
    </div>
    ,
    document.getElementById('card')
  )
}

store.subscribe(renderApp);
