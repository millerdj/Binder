import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app.js';
import store, { history } from './store';
import { fetchBeers, fetchStyles } from './actions';
import { ConnectedRouter } from 'react-router-redux';

render(
  <Provider store={ store }>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('card')
);
