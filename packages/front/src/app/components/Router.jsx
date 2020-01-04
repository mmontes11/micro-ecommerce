import React from "react";
import { Switch, Route } from "react-router-dom";
import { statusRoutes } from "shared/config";
import Navbar from "app/components/ui/Navbar";

const Router = () => (
  <Switch>
    {statusRoutes.map(sr => (
      <Route key={sr.path} path={sr.path} component={sr.component} />
    ))}
    <Route component={Navbar} />
  </Switch>
);

export default Router;
