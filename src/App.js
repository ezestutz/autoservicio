import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Categories from "./components/Categories";
import Category from "./components/Category";
import Details from "./components/Details";
import Home from "./components/Home";
import NotFound from "./components/notFound";
import Pay from "./components/Pay";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/productos/:category/:product" component={Product} />
        <Route path="/productos/:category" component={Category} />
        <Route path="/productos" component={Categories} />
        <Route path="/pagar" component={Pay} />
        <Route path="/detalles" component={Details} />
        <Route path="/not-found" component={NotFound} />
        <Route exact path="/" component={Home} />
        <Redirect to="not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
