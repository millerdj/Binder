import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withHandlers from 'recompose/withHandlers';
import classNames from 'classnames';
import { nextBeer, beerLiked, fetchNewBeers, fetchBeers, fetchStyles } from '../actions';

const handleLike = ({ beerLiked, switchNext }) => (currentBeer) => {
  beerLiked(currentBeer);
  switchNext();
}

const enhance = compose(
  connect(
    ({ beers, currentBeer }) => ({
      beer: beers[currentBeer],
      currentBeer,
    }),
    dispatch => bindActionCreators({
      fetchBeers: () => fetchBeers(),
      fetchStyles: () => fetchStyles(),
      fetchNewBeers: () => fetchNewBeers(),
      switchNext: () => nextBeer,
      beerLiked: currentBeer => beerLiked(currentBeer),
    }, dispatch)
  ),
  withHandlers({ handleLike }),
  lifecycle({
    componentDidMount() {
      this.props.fetchBeers()
      this.props.fetchStyles()
    }
  })
)

const Card = enhance(
  ({ beer, currentBeer, switchNext, handleLike, fetchNewBeers }) => {
    const btnClass = ('button-size material-icons');
    if (beer === undefined) {
      return <div></div>;
    }

    if (currentBeer % 10 === 9) {
      console.log('Fetch New Beers!!!!')
     fetchNewBeers();
    }
    
    if (!beer) {
      return (
        <div>
          No Beer Available
        </div>
      )
    }

    return (
      <div key={ beer.id }>
        <div className='card main-card'>
          <img className='card-img-top main-card-img-top' src={ beer.labels.large }/>
          <div className='card-block main-card-block'>
            <div className='col-xs-7'>
              <h5>{ beer.name }</h5>
              <h6>{ beer.breweries[0].name }</h6>
            </div>
            <div className='col-xs-5 beer-info'>
              <h6>{ beer.style.abvMin }% ABV</h6>
              <h6>{ beer.style.shortName }</h6>
            </div>
          </div>
        </div>
        <div className="card-buttons">
          <button onClick={ switchNext } className='button-style'>
            <i className={ btnClass } id='dislike'>cancel</i>
          </button>
          <button onClick={ () => handleLike(currentBeer) } className='button-style'>
            <i className={ btnClass } id='like'>stars</i>
          </button>
        </div>
      </div>
    );
  }
);

export default Card;
