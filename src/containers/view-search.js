import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import store from '../store';

const ViewSearch = ({ styles, currentStyle }) => {
  return (
    <div>
      <h3 className='search-header'>Edit Search Criteria</h3>

      <div>
        <label><h5>Beer Style</h5></label>
        <div className='form-group center'>
        <Field className='form-control' name="beerStyle" component="select">
            <option></option>
            { styles.map((style) => {
              return <option key={ style.id }value={ style.id }>{ style.name }</option>
            })}
          </Field>
        </div>
      </div>

      <div>
        <button type='buttton' className='btn btn-success search-save'>Save</button>
      </div>

    </div>
  );
}

const SearchForm = reduxForm({
  form: 'searchForm',
  fileds: 'beerStyles'
})(ViewSearch);

function mapStateToProps({ styles, form }) {
  return {
    styles: styles,
    currentStyle: form.searchForm
  }
}


export default connect(mapStateToProps)(SearchForm);
