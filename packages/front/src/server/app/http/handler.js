import httpStatus from "http-status";
import { matchRoute } from "server/app/http/routes";
import { getHtmlContent } from "server/helpers/request";
import { render } from "server/helpers/ssr";
import logger from "front-common/log";

const handle = async (req, res) => {
  const matchedRoute = matchRoute(req.url);
  if (matchedRoute) {
    const { redirect, url } = matchedRoute;
    if (redirect) {
      return res.redirect(redirect);
    }
    try {
      const content = await getHtmlContent(url);
      const html = render(req, content);
      return res.send(html);
    } catch (err) {
      logger.error(err);
      return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  return res.sendStatus(httpStatus.NOT_FOUND);
};

export default handle;
