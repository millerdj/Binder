import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app.js';
import store from './store';
import { fetchBeers, fetchStyles } from './actions';

render(
  <Provider store={ store }>
    <div>
      <App />
    </div>
  </Provider>
  ,
  document.getElementById('card')
);
