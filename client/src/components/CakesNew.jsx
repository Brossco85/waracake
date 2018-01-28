import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCake } from '../actions';


class CakesNew extends Component {

  renderField(field) {

    const { meta: {touched, error} } = field;
    const className= `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
      <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
        <div className="text-help">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createCake(values);
  }


  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Name" type="text" name="name" component={this.renderField}/>
        <Field label="Comment" type="text" name="comment" component={this.renderField}/>
        <Field label="Image URL" type="text" name="imageUrl" component={this.renderField}/>
        <Field label="Yum Factor" type="number" name="yumFactor" component={this.renderField}/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className = 'btn btn-danger'>Cancel</Link>
      </form>
      );
  }
}

function validate(values) {
  const errors = {};

  if(!values.name) {
    errors.name = "Please enter a valid name";
  }

  if(!values.comment) {
    errors.comment = "Please enter a Comment to go with your cake";
  }

  if(!values.imageUrl) {
    errors.imageurl = "Please include an image of your cake";
  }

  if(_.isNil(values.yumFactor)) {
    errors.yumfactor = "Please give the cake a Yum Factor!";
  }

  if(values.yumFactor < 0 || values.yumFactor > 5) {
    errors.yumFactor = "Please enter a Yum Factor Between 1 and 5";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'CakesNewForm'
})(
connect(null, { createCake })(CakesNew)
);