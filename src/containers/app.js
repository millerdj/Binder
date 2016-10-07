import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Card from './card';
import BeersLiked from './liked-beers';


const App = ({ viewLiked }) => {
  if (viewLiked === false) {
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
  else {
    return(
      <div>
        <Header />
        <BeersLiked />
      </div>
    );
  }
}

function mapStateToProps({ viewLiked }) {
  return {
    viewLiked: viewLiked
  }
}

export default connect(mapStateToProps)(App);
