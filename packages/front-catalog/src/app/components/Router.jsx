import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "app/components/NotFound";
import { routes }  from "shared/config";

const Router = () => (
  <Switch>
    {routes.map(r => (
      <Route key={r.path} path={r.path} exact component={r.component} />
    ))}
    <Route component={NotFound} />
  </Switch>
);

export default Router;
