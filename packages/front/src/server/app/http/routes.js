import { matchPath } from "react-router-dom";

export const notFoundRoute = {
  path: "/not-found",
  exact: true,
};

const routes = [
  {
    path: "/",
    exact: true,
    redirect: "/catalog/woman",
  },
  {
    path: "/catalog/*",
    frontUrl: process.env.FRONT_CATALOG_URL,
  },
  notFoundRoute,
];

export const matchRoute = pathname => {
  for (const r of routes) {
    const matchedRoute = matchPath(pathname, r);
    if (!matchedRoute) {
      continue;
    }
    const { redirect, frontUrl } = r;
    const { url } = matchedRoute;
    let resultRoute = { ...matchedRoute };
    if (redirect) {
      resultRoute = {
        ...matchRoute,
        redirect,
      };
    }
    if (frontUrl && url) {
      resultRoute = {
        ...matchedRoute,
        contentUrl: `${frontUrl}${url}`,
      };
    }
    return resultRoute;
  }
  return null;
};

export const isNotFoundRoute = route => route.path === notFoundRoute.path;
