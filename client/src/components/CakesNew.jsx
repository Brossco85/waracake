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

export default reduxForm({
  form: 'CakesNewForm'
})(CakesNew);