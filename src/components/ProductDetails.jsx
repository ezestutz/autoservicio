import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCart } from "../actions/postActions";
import { Button, Card, Container, Image } from "react-bootstrap";

class ProductDetails extends Component {
  addProduct = (p) => {
    let newCart = this.props.cart;
    newCart.push(p);
    this.props.updateCart(
      newCart,
      this.props.count + 1,
      this.props.totalPrice + p.price
    );
  };

  render() {
    const { product } = this.props;
    return (
      <Container>
        <Card className="p-3 shadow">
          <div className="text-center">
            <Image
              src={product.img}
              roundedCircle
              thumbnail
              style={{ width: "10%", minWidth: 200 }}
              className="shadow"
            />
          </div>
          <Container className="my-5">
            <h3 className="text-center font-weight-bold">
              Producto: {product.label}
            </h3>
            <Container
              className="justify-content-center mt-5"
              style={{ maxWidth: 500 }}
            >
              <h4 className="font-weight-bold my-2">
                Precio: ${product.price}
              </h4>
              <h5>{product.details}</h5>
            </Container>
          </Container>
          <div className="text-center mt-3">
            <Button
              size="lg"
              variant="info"
              onClick={() => this.addProduct(product)}
            >
              Añadir al Carrito
            </Button>
          </div>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.posts.count,
  cart: state.posts.cart,
  totalPrice: state.posts.totalPrice,
});

export default connect(mapStateToProps, { updateCart })(ProductDetails);
