import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { NEXT_BEER, nextBeer } from '../actions';

const Card = ({ beer, switchNext, dispatch }) => {
  const btnClass = ('button-size material-icons');
  if (beer === undefined) {
    return <div></div>;
  }
  return (
    <div key={ beer.id }>
      <div className='card'>
        <img className='card-img-top' src={ beer.labels.large }/>
        <div className='row card-block'>
          <div className='col-xs-6'>
            <h4>{ beer.name }</h4>
            <h6>{ beer.breweries[0].name }</h6>
          </div>
          <div className='col-xs-6 beer-info'>
            <h6>{ beer.style.abvMin }% ABV</h6>
            <h6>{ beer.style.shortName }</h6>
          </div>
        </div>
      </div>
      <div className="card-buttons">
        <button onClick={ switchNext } className='button-style'>
          <i className={ btnClass } id='dislike'>cancel</i>
        </button>
        <button onClick={ switchNext } className='button-style'>
          <i className={ btnClass } id='like'>favorite</i>
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ beers, currentBeer }) {
  return {
    beer: beers[currentBeer]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchNext: () => dispatch(nextBeer)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
