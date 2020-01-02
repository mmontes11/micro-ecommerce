import { render } from "server/helpers/ssr";
import logger from "shared/log";

const handler = (req, res) => {
  logger.info("Request URL:");
  logger.info(req.url);
  logger.info("Request params:");
  logger.info(JSON.stringify(req.params));
  const html = render(req);
  return res.send(html);
};

export default handler;
