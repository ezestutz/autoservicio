import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Container, Table } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import "../assets/css/Categories.css";
import { getCategories, getCategory } from "../services/fakeCategoryService";
import NavButtons from "./NavButtons";
import { Link } from "react-router-dom";

class Details extends Component {
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
              <div className="d-flex justify-content-around mt-5">
                <Badge variant="success">
                  <h2>Productos en carrito: {this.props.count}.</h2>
                </Badge>
                <Badge variant="success">
                  <h2>Precio Total: ${this.props.totalPrice}.</h2>
                </Badge>
              </div>
              <Table striped bordered hover className="mt-5 text-center shadow">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Categoría</th>
                    <th>Precio</th>
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
                    </tr>
                  ))}
                </tbody>
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

export default connect(mapStateToProps, {})(Details);
