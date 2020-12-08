import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavButtons extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex justify-content-center my-5">
        <Link to="/pagar">
          <Button
            size="lg"
            variant="success"
            className="px-3 mr-4"
            disabled={this.props.count < 1}
          >
            Pagar
          </Button>
        </Link>
        <Link to={this.props.backLink}>
          <Button size="lg" variant="danger" className="ml-4">
            Volver
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.posts.count,
});

//actions que utilizo en este componente
export default connect(mapStateToProps, {})(NavButtons);
