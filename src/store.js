import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

const middleware = [
  thunk,
  routerMiddleware(history)
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
)

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  composedEnhancers,
);

export default store;
