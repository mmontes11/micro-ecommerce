import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "app/components/error/NotFound";
import ServerError from "app/components/error/ServerError"
import Navbar from "app/components/ui/Navbar";

const Router = () => (
  <Switch>
    <Route path="/not-found" component={NotFound} />
    <Route path="/error" component={ServerError} />
    <Route component={Navbar} />
  </Switch>
);

export default Router;
