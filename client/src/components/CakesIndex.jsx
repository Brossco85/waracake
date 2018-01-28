import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCakes } from '../actions';

class CakesIndex extends Component {

  componentDidMount() {
    this.props.fetchCakes();
  }

  renderCakes() {
    return _.map(this.props.cakes, cake => {
      return (
        <li className="list-group-item" key={cake._id}>
          <Link to={`/cakes/${cake._id}`}>
          {cake.name}
          </Link>
        </li>
        );
    });
  }

  render() {
    return  (
      <div>
        <div className ="text-xs-right">
          <Link className = 'btn btn-primary' to="/cakes/new">
            Add A Cake
          </Link>
        </div>
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