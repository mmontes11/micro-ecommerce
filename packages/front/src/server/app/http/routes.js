import { matchPath } from "react-router-dom";

export const notFoundRoute = {
  path: "/not-found",
  exact: true,
};

export const serverErrorRoute = {
  path: "/error",
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
  serverErrorRoute,
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
        ...resultRoute,
        redirect,
      };
    }
    if (frontUrl && url) {
      resultRoute = {
        ...resultRoute,
        contentUrl: `${frontUrl}${url}`,
      };
    }
    return resultRoute;
  }
  return null;
};

export const isErrorRoute = route => {
  const errorRoutes = [notFoundRoute, serverErrorRoute];
  return errorRoutes.some(er => er.path === route.path);
};
