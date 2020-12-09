import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class PayHeader extends Component {
  render() {
    return (
      <Card className="my-5 px-5 py-3 shadow">
        <Row className="justify-content-around align-middle">
          <div className="text-center my-auto">
            <h3>Total a pagar:</h3>
            <h2 className="font-weight-bold text-left">
              $ {this.props.totalPrice}
            </h2>
          </div>
          <div className="d-flex justify-content-center my-auto">
            <Link to="/detalles">
              <Button
                size="md"
                variant="success"
                className="px-2 mr-1"
                disabled={this.props.totalPrice < 1}
              >
                Detalles
              </Button>
            </Link>
            <Link to="/productos">
              <Button size="md" variant="danger" className="px-2 ml-1">
                Cancelar
              </Button>
            </Link>
          </div>
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  totalPrice: state.posts.totalPrice,
});

//actions que utilizo en este componente
export default connect(mapStateToProps, {})(PayHeader);
