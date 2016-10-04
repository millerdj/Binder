import React from 'react';
import ReactDOM from 'react-dom';
import Card from './containers/card.js';
import { Provider } from 'react-redux';
import store from './store';
import { fetchBeers } from './actions';

store.dispatch(fetchBeers())

function renderApp() {

  ReactDOM.render (
    <Provider store={ store }>
      <Card />
    </Provider>
    ,
    document.getElementById('card')
  )
}

store.subscribe(renderApp);
