import React, { Component } from "react";
import "../assets/css/Category.css";
import CardRow from "./common/cardRow";
import CategoryHeader from "./CategoryHeader";
import { getProducts } from "../services/fakeProductService";
import NavButtons from "./NavButtons";
import { Container } from "react-bootstrap";

class Category extends Component {
  state = { options: [] };

  componentDidMount() {
    //Si tuviese más productos cargados en fakeProductService, mostraría algo en las demás categorías con lo siguiente:
    /*this.setState({
      options: getProducts(this.props.match.params.category),
    });*/
    this.setState({
      options: getProducts("cucurucho"),
    });
  }

  render() {
    const { options } = this.state;

    return (
      <div className="category">
        <CategoryHeader categoryName={this.props.match.params.category} />
        <Container>
          <CardRow options={options} />
          <NavButtons backLink="/productos" />
        </Container>
      </div>
    );
  }
}

export default Category;
