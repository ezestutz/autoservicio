import React, { Component } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import "../assets/css/Categories.css";
import CardRow from "./common/cardRow";
import { getCategories } from "../services/fakeCategoryService";
import NavButtons from "./NavButtons";
import TotalCarrito from "./TotalCarrito";

class Categories extends Component {
  state = { options: [] };

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
          <div className="d-flex align-items-center justify-content-between px-5 my-5">
            <h2 className="text-uppercase">Elige una opción:</h2>
            <TotalCarrito />
          </div>
          <CardRow options={this.state.options} />
          <NavButtons backLink="/" />
        </Container>
      </div>
    );
  }
}

export default Categories;
