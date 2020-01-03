import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "app/components/NotFound";
import Navbar from "app/components/Navbar";

const Router = () => (
  <Switch>
    <Route path="/not-found" component={NotFound} />
    <Route component={Navbar} />
  </Switch>
);

export default Router;
