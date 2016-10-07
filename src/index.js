import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app.js';
import store from './store';
import { fetchBeers } from './actions';

store.dispatch(fetchBeers());

function renderApp() {

  ReactDOM.render (
    <Provider store={ store }>
      <div>
        <App />
      </div>
    </Provider>
    ,
    document.getElementById('card')
  )
}

store.subscribe(renderApp);
