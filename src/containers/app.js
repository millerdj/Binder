import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Header from './header';
import Card from './card';
import BeersLiked from './liked-beers';
import ViewSearch from './view-search';
import { viewLiked, viewSearched } from '../actions';


const App = ({ viewLike, viewSearch }) => {
  if (viewLike === false && viewSearch === false) {
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
  if (viewLike === true && viewSearch === false) {
    return (
      <div>
        <Header />
        <BeersLiked />
      </div>
    );
  }
  if (viewLike === false && viewSearch === true) {
    return (
      <div>
        <Header />
        <ViewSearch />
      </div>
    );
  }
  if (viewLike === true && viewSearch === true) {
      store.dispatch(viewLiked)
      store.dispatch(viewSearched)
  }
}

function mapStateToProps({ viewLiked, viewSearched }) {
  return {
    viewLike: viewLiked,
    viewSearch: viewSearched
  }
}

export default connect(mapStateToProps)(App);
