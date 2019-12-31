import { render } from "helpers/ssr";
import logger from "helpers/log";

const handle = (req, res) => {
  logger.info("Request URL:");
  logger.info(req.url);
  logger.info("Request params:");
  logger.info(JSON.stringify(req.params));
  const html = render(req);
  return res.send(html);
};

export default handle;
