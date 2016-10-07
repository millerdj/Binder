import React from 'react';
import { connect } from 'react-redux';

const BeersLiked = ({ likedBeers }) => {
  return (
    <div className='card liked-card'>
      <h3 className='card-header liked-header'>Saved Beers</h3>
    { likedBeers.map((beer) => {
      return (
        <div className='card-block liked-beer' key={ beer.id }>
        <h4 className='card-title'>{ beer.name }</h4>
        <h6 className='card-subtitle text-muted'>{ beer.breweries[0].name }</h6>
        <p className='card-text'>{ beer.style.abvMin } % ABV</p>
        <p className='card-text'>{ beer.style.shortName }</p>
        </div>
      );
    })}
    </div>
  );
}

function mapStateToProps({ beers, likeBeers }) {
  return {
    likedBeers: likeBeers.map((like) => {
      return beers[like]
    })
  }
}

export default connect(mapStateToProps)(BeersLiked);
