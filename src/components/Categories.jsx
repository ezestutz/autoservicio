import React, { Component } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import "../assets/css/Categories.css";
import CardRow from "./common/cardRow";
import { getCategories } from "../services/fakeCategoryService";
import NavButtons from "./NavButtons";

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
          <h2 className="ml-5 my-5 text-uppercase">Elige una opción:</h2>
          <CardRow options={this.state.options} />
          <NavButtons backLink="/" />
        </Container>
      </div>
    );
  }
}

export default Categories;
