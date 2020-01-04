import httpStatus from "http-status";
import { notFoundRoute, matchRoute, isNotFoundRoute } from "server/app/http/routes";
import { getHtmlContent } from "server/helpers/request";
import { render } from "server/helpers/ssr";
import logger from "shared/log";

const getContent = async route => {
  if (isNotFoundRoute(route)) {
    return null;
  }
  const { contentUrl } = route;
  if (!contentUrl) {
    return null;
  }
  return getHtmlContent(contentUrl);
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
    if (err.status === httpStatus.NOT_FOUND) {
      return res.redirect(notFoundRoute.path);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

export default handle;
