import "common/config";
import { Server } from "http";
import app from "./app";
import sequelize, { migrate } from "./app/storage";
import logger from "./helpers/log";

const SERVER_PORT = process.env.BACK_CATALOG_PORT;
const DB_PORT = process.env.BACK_CATALOG_DB_PORT;
const server = new Server(app);

server.listen(SERVER_PORT, err => {
  if (!err) {
    logger.info(`Server listening on port ${SERVER_PORT}`);
  }
});
server.on("error", err => {
  logger.error("Error in server:");
  logger.error(err);
});
server.on("close", () => {
  logger.info("Stopped server");
});

sequelize
  .authenticate()
  .then(() => {
    logger.info(`Connected to database on port ${DB_PORT}`);
    migrate();
  })
  .catch(err => {
    logger.error("Error in database");
    logger.error(err);
  });

process.on("SIGINT", () => {
  server.close();
  sequelize.close();
});
