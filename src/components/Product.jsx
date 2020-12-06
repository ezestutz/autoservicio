import React, { Component } from "react";
import CategoryHeader from "./CategoryHeader";
import "../assets/css/Category.css";
import { getProduct } from "../services/fakeProductService";
import NavButtons from "./NavButtons";
import ProductDetails from "./ProductDetails";

class Product extends Component {
  state = { product: {} };

  componentDidMount() {
    this.setState({ product: getProduct(this.props.match.params.product) });
  }

  render() {
    return (
      <div className="category">
        <CategoryHeader categoryName={this.props.match.params.category} />
        <ProductDetails product={this.state.product} />
        <NavButtons
          backLink={"/productos/" + this.props.match.params.category}
        />
      </div>
    );
  }
}

export default Product;
