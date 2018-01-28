import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCake } from '../actions';

class CakesShow extends Component {
  
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCake(id);
  }

  render() {

    const { cake } = this.props;

    if (!cake) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>{cake.name}</h3>
        <h6>{cake.imageUrl}</h6>
        <h6>{cake.yumFactor}</h6>
        <p>{cake.comment}</p>
        <Link to="/" className = 'btn btn-primary' >Back to All Cakes</Link>
      </div>
   );
  }
}

function mapStateToProps({ cakes }, ownProps) {
  return { cake: cakes[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchCake })(CakesShow);