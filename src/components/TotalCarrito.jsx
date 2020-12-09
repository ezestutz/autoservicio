import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class TotalCarrito extends Component {
  render() {
    return (
      <Link to="/detalles">
        <Button
          variant={this.props.count === 0 ? "secondary" : "success"}
          disabled={this.props.count < 1}
          className="px-2"
        >
          <h4>Carrito: {this.props.count}</h4>
        </Button>
      </Link>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.posts.count,
});

//actions que utilizo en este componente
export default connect(mapStateToProps, {})(TotalCarrito);
