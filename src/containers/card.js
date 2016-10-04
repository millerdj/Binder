import React from 'react';
import { connect } from 'react-redux';

const Card = ({ beers }) => {
  return (
    <div>
    { beers.map((beer) => {
      return (
        <div key={ beer.id }>
          <img src={ beer.labels.large }/>
          <h1>{ beer.name }</h1>
          <div>
            <i className='material-icons'>favorite_border</i>
            <i className='material-icons'>cancel</i>
          </div>
        </div>
      );
      })
    }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps)(Card);
