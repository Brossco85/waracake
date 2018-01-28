import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class CakesNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
      <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
      </div>
    );
  }


  render() {
    return (
      <form>
        <Field label="Name" type="text" name="name" component={this.renderField}/>
        <Field label="Comment" type="text" name="comment" component={this.renderField}/>
        <Field label="Image URL" type="text" name="imageurl" component={this.renderField}/>
        <Field label="Yum Factor" type="number" name="yumfactor" component={this.renderField}/>
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

  if(!values.yumfactor < 0 || !values.yumfactor > 5) {
    errors.yumfactor = "Please enter a Yum Factor Between 1 and 5";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'CakesNewForm'
})(CakesNew);