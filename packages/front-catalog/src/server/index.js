import "common/config";
import { Server } from "http";
import app from "server/app";
import logger from "front-catalog-common/log";

const PORT = process.env.FRONT_CATALOG_PORT;
const server = new Server(app);

server.listen(PORT, err => {
  if (!err) {
    logger.info(`Server listening on port ${PORT}`);
  }
});
server.on("error", err => {
  logger.error("Error in server:");
  logger.error(err);
});
server.on("close", () => {
  logger.info("Stopped server");
});

process.on("SIGINT", () => {
  server.close();
});
