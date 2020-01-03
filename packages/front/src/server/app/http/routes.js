import { matchPath } from "react-router-dom";

export const defaultRoute = {
  path: "/catalog/woman",
};

export const notFoundRoute = {
  path: "/not-found",
};

const routes = [
  {
    path: "/catalog/*",
    frontUrl: process.env.FRONT_CATALOG_URL,
  },
  notFoundRoute,
];

export const matchRoute = pathname => {
  for (const r of routes) {
    const matchedRoute = matchPath(pathname, r);
    if (matchedRoute) {
      const { frontUrl } = r;
      const { url } = matchedRoute;
      if (frontUrl && url) {
        return {
          ...matchedRoute,
          contentUrl: `${frontUrl}${url}`,
        };
      }
      return matchedRoute;
    }
  }
  return null;
};

export const isNotFoundRoute = route => route.path === notFoundRoute.path;
