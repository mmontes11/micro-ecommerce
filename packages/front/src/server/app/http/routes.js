import { matchPath } from "react-router-dom";

const routes = [
  {
    path: "/catalog/woman",
    exact: true,
    name: "Woman",
    url: `${process.env.FRONT_CATALOG_URL}/woman`,
  },
  {
    path: "/catalog/man",
    exact: true,
    name: "Man",
    url: `${process.env.FRONT_CATALOG_URL}/man`,
  },
  {
    path: "/catalog/kids",
    exact: true,
    name: "Kids",
    url: `${process.env.FRONT_CATALOG_URL}/kids`,
  },
];

const defaultRoute = {
  redirect: routes[0].path,
};

export const matchRoute = pathname => {
  const matchedRoute = routes.find(r => matchPath(pathname, r));
  return matchedRoute || defaultRoute;
};
export default routes;
