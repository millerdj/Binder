import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

const Card = ({ beers, currentBeer }) => {
  const btnClass = ('button-size material-icons');
  const thisBeer = beers.filter((beer) => {
    if (beer.id === currentBeer) {
      return beer;
    }
  });

  return (
    <div>
    { thisBeer.map((beer) => {
      return (
        <div key={ beer.id }>
          <div className='card'>
            <img className='card-img-top' src={ beer.labels.large }/>
            <div className='row card-block'>
              <div className='col-xs-6'>
                <h4>{ beer.name }</h4>
              </div>
              <div className='col-xs-6 beer-info'>
                <p>{ beer.style.abvMin }% ABV</p>
                <p>{ beer.style.shortName }</p>
              </div>
            </div>
          </div>
          <div className="card-buttons">
            <i className={ btnClass } id='dislike'>cancel</i>
            <i className={ btnClass } id='like'>favorite</i>
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
    beers: state.beers,
    currentBeer: state.currentBeer
  }
}

export default connect(mapStateToProps)(Card);
