import React from 'react';
import { connect } from 'react-redux';
import Card from './card';
import BeersLiked from './liked-beers';
import { viewLiked } from '../actions'

const Header = ({ viewList }) => {
  return (
    <div>
      <nav className='navbar navbar-fixed-top navbar-light my-navbar'>
        <a className='navbar-brand' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
          <i className='material-icons' id='settings'>settings</i>
        </a>
        <a className='navbar-brand binder'>Binder
        </a>
        <a className='navbar-brand' id='favorites' role='button'>
          <i className='material-icons star' onClick={ viewList }>star_rate</i>
        </a>
      </nav>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    viewList: () => dispatch(viewLiked),
  }
}


export default connect(null, mapDispatchToProps)(Header);
