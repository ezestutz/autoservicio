import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCart } from "../actions/postActions";
import { Button, Container, Table } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import "../assets/css/Categories.css";
import { getCategories, getCategory } from "../services/fakeCategoryService";
import NavButtons from "./NavButtons";
import { Link } from "react-router-dom";

class Details extends Component {
  removeProduct = (p) => {
    let newCart = this.props.cart;
    newCart.splice(newCart.indexOf(p), 1);

    this.props.updateCart(
      newCart,
      this.props.count - 1,
      this.props.totalPrice - p.price
    );
  };

  removeAll = () => {
    this.props.updateCart([], 0, 0);
  };

  componentDidMount() {
    this.setState({
      options: getCategories(),
    });
  }

  render() {
    return (
      <div className="categories">
        <div className="banner">
          <img className="bannerLogo" src={logo} alt="Logo" />
        </div>
        <Container>
          {this.props.count > 0 ? (
            <div>
              <h2 className="text-center font-weight-bold mt-5">
                Detalles de la Compra
              </h2>
              <Table striped bordered hover className="mt-5 text-center shadow">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.map((product) => (
                    <tr>
                      <td className="align-middle">
                        <Link
                          to={
                            "/productos/" +
                            product.category +
                            "/" +
                            product.name
                          }
                        >
                          {product.label}
                        </Link>
                      </td>
                      <td className="align-middle">
                        {getCategory(product.category).label}
                      </td>
                      <td className="align-middle">${product.price}</td>
                      <td className="align-middle">
                        <Button
                          variant="danger"
                          onClick={() => {
                            this.removeProduct(product);
                          }}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Table bordered className="text-center shadow">
                <thead>
                  <tr className="text-uppercase">
                    <th className="align-middle">
                      Carrito: {this.props.count}
                    </th>
                    <th className="align-middle">
                      Total: ${this.props.totalPrice}
                    </th>
                    <th>
                      <Button
                        variant="danger"
                        onClick={() => {
                          this.removeAll();
                        }}
                      >
                        Vaciar Carrito
                      </Button>
                    </th>
                  </tr>
                </thead>
              </Table>
            </div>
          ) : (
            <h2 className="text-center my-5">Sin productos en el carrito.</h2>
          )}
          <NavButtons backLink="/productos" />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.posts.cart,
  count: state.posts.count,
  totalPrice: state.posts.totalPrice,
});

export default connect(mapStateToProps, { updateCart })(Details);
