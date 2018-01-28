import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCakes } from '../actions';

class CakesIndex extends Component {

  componentDidMount() {
    this.props.fetchCakes();
  }

  renderCakes() {
    return _.map(this.props.cakes, cake => {
      return (
        <li key={cake._id}>
        {cake.name}
        </li>
        );
    });
  }

  render() {
    return  (
      <div>
      <h3>Waracakes List</h3>
      <ul>
      {this.renderCakes()}
      </ul>
      </div>
      );
  }
}

function mapStateToProps(state) {
  return { cakes: state.cakes };
}

export default connect(mapStateToProps, { fetchCakes })(CakesIndex);