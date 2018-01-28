import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


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
    console.log(values);
  }


  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Name" type="text" name="name" component={this.renderField}/>
        <Field label="Comment" type="text" name="comment" component={this.renderField}/>
        <Field label="Image URL" type="text" name="imageurl" component={this.renderField}/>
        <Field label="Yum Factor" type="number" name="yumfactor" component={this.renderField}/>
        <button type="submit" className="btn btn-primary">Submit</button>
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

  if(!values.imageurl) {
    errors.imageurl = "Please include an image of your cake";
  }

  if(_.isNil(values.yumfactor)) {
    errors.yumfactor = "Please give the cake a Yum Factor!";
  }

  if(values.yumfactor < 0 || values.yumfactor > 5) {
    errors.yumfactor = "Please enter a Yum Factor Between 1 and 5";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'CakesNewForm'
})(CakesNew);