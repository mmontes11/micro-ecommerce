import { notFoundRoute, serverErrorRoute } from "server/app/http/routes";
import NotFound from "app/components/status/NotFound";
import ServerError from "app/components/status/ServerError";

export const statusRoutes = [
  {
    path: notFoundRoute.path,
    component: NotFound,
  },
  {
    path: serverErrorRoute.path,
    component: ServerError,
  },
];
