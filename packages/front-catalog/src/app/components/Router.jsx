import React from "react";
import { Switch, Route } from "react-router-dom";
import Catalog from "components/Catalog";
import Category from "components/Category";
import Product from "components/Product";
import NotFound from "components/NotFound";

const Router = () => (
  <Switch>
    <Route path="/catalog/:catalogKey" exact component={Catalog} />
    <Route path="/catalog/:catalogKey/category/:categorykey" exact component={Category} />
    <Route path="/catalog/:catalogKey/category/:categoryKey/product/:productKey" exact component={Product} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
