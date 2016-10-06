import React from 'react';
import { connect } from 'react-redux';

const Header = () => {
  return (
    <nav className='navbar navbar-fixed-top navbar-light my-navbar'>
      <a className='navbar-brand' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
        <i className='material-icons' id='settings'>settings</i>
      </a>
      <a className='navbar-brand binder'>Binder
      </a>
      <a className='navbar-brand' id='favorites' role='button'>
        <i className='material-icons star'>star_rate</i>
      </a>
    </nav>
  );
}

export default Header;
