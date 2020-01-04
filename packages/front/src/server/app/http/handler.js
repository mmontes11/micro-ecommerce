import httpStatus from "http-status";
import { notFoundRoute, serverErrorRoute, matchRoute, isErrorRoute } from "server/app/http/routes";
import { getHtmlContent } from "server/helpers/request";
import { render } from "server/helpers/ssr";
import logger from "shared/log";

const getContent = async route => {
  if (isErrorRoute(route)) {
    return null;
  }
  const { contentUrl } = route;
  if (!contentUrl) {
    return null;
  }
  return getHtmlContent(contentUrl);
};

const handleError = (res, err) => {
  if (err.status === httpStatus.NOT_FOUND) {
    return res.redirect(notFoundRoute.path);
  }
  return res.redirect(serverErrorRoute.path);
};

const handle = async (req, res) => {
  const matchedRoute = matchRoute(req.url);
  if (!matchedRoute) {
    return res.redirect(notFoundRoute.path);
  }
  const { redirect } = matchedRoute;
  if (redirect) {
    return res.redirect(redirect);
  }
  try {
    const content = await getContent(matchedRoute);
    const html = render(req, content);
    return res.send(html);
  } catch (err) {
    logger.error(err);
    return handleError(res, err);
  }
};

export default handle;
