import React, { Component } from "react";
import logo from "../assets/img/logo.png";
import "../assets/css/Category.css";
import { getCategory } from "../services/fakeCategoryService";
import TotalCarrito from "./TotalCarrito";
import { Container } from "react-bootstrap";

class CategoryHeader extends Component {
  state = { category: {} };

  componentDidMount() {
    this.setState({ category: getCategory(this.props.categoryName) });
  }

  render() {
    const { category } = this.state;
    return (
      <div className="header">
        <div className="banner">
          <img className="bannerLogo" src={logo} alt="Logo" />
        </div>
        <div className="selectedCategoryContainer">
          <img
            className="selectedCategory"
            src={category.selectedImg}
            alt={category.label}
          />
        </div>
        <Container className="d-flex align-items-center justify-content-around my-5">
          <h2 className="text-uppercase">{category.label}</h2>
          <TotalCarrito />
        </Container>
      </div>
    );
  }
}

export default CategoryHeader;
