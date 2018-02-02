import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCakes } from '../actions';
import { Image, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

class CakesIndex extends Component {

  componentDidMount() {
    this.props.fetchCakes();
  }

  renderCakes() {
    return _.map(this.props.cakes, cake => {
      return (
        <ListGroupItem key={cake._id}>
          <Image width={120} height={120} src={cake.imageUrl} alt="100x100" className="rounded"/>
          <Badge>{cake.yumFactor}</Badge>
          <Link to={`/cakes/${cake._id}`}>
          <h1>{cake.name}</h1>
          </Link>
        </ListGroupItem>
        );
    });
  }

  render() {
    return  (
      <div>
      <h3>Waracakes List</h3>
      <ListGroup>
        {this.renderCakes()}
      </ListGroup>
      <div className ="text-xs-left">
        <Link className = 'btn btn-primary' to="/cakes/new">Add A Cake</Link>
      </div>
    </div>
   );
  }
}

function mapStateToProps(state) {
  return { cakes: state.cakes };
}

export default connect(mapStateToProps, { fetchCakes })(CakesIndex);