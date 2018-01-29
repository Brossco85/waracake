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
        <img width={100} height={100} src={cake.imageUrl} alt="10x10" className="rounded float-left"/>
        <h3>Cake Name: {cake.name}</h3>
        <h6>Yum Factor: {cake.yumFactor}</h6>
        <p>Cake Comment: {cake.comment}</p>
        <Link to="/" className = 'btn btn-primary' >Back to All Cakes</Link>
      </div>
   );
  }
}

function mapStateToProps({ cakes }, ownProps) {
  return { cake: cakes[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchCake })(CakesShow);