import { matchPath } from "react-router-dom";

const routes = [
  {
    path: "/catalog/*",
    frontUrl: process.env.FRONT_CATALOG_URL,
  },
];

export const defaultRoute = {
  redirect: "/catalog/woman",
};

export const matchRoute = pathname => {
  for (const r of routes) {
    const matchedRoute = matchPath(pathname, r);
    if (matchedRoute) {
      return {
        ...matchedRoute,
        url: `${r.frontUrl}${matchedRoute.url}`,
      };
    }
  }
  return defaultRoute;
};

export default routes;
