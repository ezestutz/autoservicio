import React, { Component } from "react";
import logo from "../assets/img/logo.png";
import "../assets/css/Category.css";
import { getCategory } from "../services/fakeCategoryService";

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
        <h2 className="ml-5 my-5 text-uppercase">{category.label}</h2>
      </div>
    );
  }
}

export default CategoryHeader;
