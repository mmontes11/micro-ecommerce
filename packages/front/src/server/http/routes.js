import { matchPath } from "react-router-dom";
import config from "common/config";

const routes = [
  {
    path: "/",
    exact: true,
    redirect: "/woman",
  },
  {
    path: "/woman",
    url: `${config.FRONT_CATALOG_URL}/woman`,
  },
  {
    path: "/man",
    url: `${config.FRONT_CATALOG_URL}/man`,
  },
  {
    path: "/kids",
    url: `${config.FRONT_CATALOG_URL}/kids`,
  },
];

export const matchRoute = pathname => routes.find(r => matchPath(pathname, r));
