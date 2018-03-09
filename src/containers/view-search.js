import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import compose from 'recompose/compose';
import store from '../store';


const SearchForm = reduxForm({
  form: 'searchForm',
  fileds: 'beerStyles'
});

const enhance = compose(
  SearchForm,
  connect(
    ({ styles, form }) => ({
      styles,
      currentStyle: form.searchForm,
    })
  ),
)

const ViewSearch = ({ styles, currentStyle }) => {
  return (
    <div>
      <h3 className='search-header'>Edit Search Criteria</h3>

      <div>
        <label><h5>Beer Style</h5></label>
        <div className='form-group center'>
          <Field className='form-control' name="beerStyles" component="select">
            <option></option>
            { styles.map((style) => {
              return <option key={style.id} value={style.id}>{ style.name }</option>
            })}
          </Field>
        </div>
      </div>

      <div>
        <button type='buttton' className='btn btn-success search-save'>Save</button>
      </div>

    </div>
  )
}

export default compose(
  SearchForm,
  connect(({ styles, form }) => ({
    styles,
    currentStyle: form.searchForm,
  }))
)(ViewSearch);
