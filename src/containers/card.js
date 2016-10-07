import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { nextBeer, beerLiked } from '../actions';

const Card = ({ beer, currentBeer, switchNext, addLike }) => {
  const btnClass = ('button-size material-icons');
  if (beer === undefined) {
    return <div></div>;
  }
  return (
    <div key={ beer.id }>
      <div className='card main-card'>
        <img className='card-img-top main-card-img-top' src={ beer.labels.large }/>
        <div className='row card-block main-card-block'>
          <div className='col-xs-6'>
            <h5>{ beer.name }</h5>
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
        <button onClick={ addLike(currentBeer) } className='button-style'>
          <i className={ btnClass } id='like'>stars</i>
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ beers, currentBeer }) {
  return {
    beer: beers[currentBeer],
    currentBeer: currentBeer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchNext: () => dispatch(nextBeer),
    addLike: (beer) => () => {
      dispatch(beerLiked(beer));
      dispatch(nextBeer);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
