import httpStatus from "http-status";
import { defaultRoute, notFoundRoute, matchRoute, isNotFoundRoute } from "server/app/http/routes";
import { getHtmlContent } from "server/helpers/request";
import { render } from "server/helpers/ssr";
import logger from "shared/log";

const handle = async (req, res) => {
  const matchedRoute = matchRoute(req.url);
  if (!matchedRoute) {
    return res.redirect(defaultRoute.path);
  }
  if (isNotFoundRoute(matchedRoute)) {
    const htmlNotFound = render(req);
    return res.send(htmlNotFound);
  }
  const { redirect, contentUrl } = matchedRoute;
  if (redirect) {
    return res.redirect(redirect);
  }
  try {
    const content = await getHtmlContent(contentUrl);
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
