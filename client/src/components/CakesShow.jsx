import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCake } from '../actions';

class CakesShow extends Component {
  
  componentDidMount() {
    const { id } = this.props.match.params.id;
    this.props.fetchCake(id);
  }

  render() {
    return (
      <div>Cake Show!</div>
   );
  }
}

function mapStateToProps({ cakes }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchCake })(CakesShow);