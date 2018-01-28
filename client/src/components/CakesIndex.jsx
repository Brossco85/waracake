import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCakes } from '../actions';

class CakesIndex extends Component {

  componentDidMount() {
    this.props.fetchCakes();
  }

  render() {
    return  (
      <div>
      Cakes Index
      </div>
      );
  }
}

export default connect(null, { fetchCakes })(CakesIndex);