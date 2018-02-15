import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Header from './header';
import { Route, Link } from 'react-router-dom';
import Card from './card';
import BeersLiked from './liked-beers';
import ViewSearch from './view-search';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites </Link> 
    </header>

    <main>
      <Route exact path="/" component={Card} />
      <Route exact path="/favorites" component={BeersLiked} />
      <Route exact path="/search" component={ViewSearch} />
    </main>

  </div>
)

export default App
