import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Categories from "./components/Categories";
import Category from "./components/Category";
import Home from "./components/Home";
import NotFound from "./components/notFound";
import Pay from "./components/Pay";
import Product from "./components/Product";

function App() {
  return (
    <Switch>
      <Route path="/productos/:category/:product" component={Product} />
      <Route path="/productos/:category" component={Category} />
      <Route path="/productos" component={Categories} />
      <Route path="/pagar" component={Pay} />
      <Route path="/not-found" component={NotFound} />
      <Route exact path="/" component={Home} />
      <Redirect to="not-found" />
    </Switch>
  );
}

export default App;
