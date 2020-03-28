import "@babel/polyfill";
import "common/config";
import { Server } from "http";
import app from "./app";
import storage from "./app/storage";
import logger from "./helpers/log";

const serverPort = process.env.BACK_CATALOG_PORT;
const dbDialect = process.env.BACK_CATALOG_DB_DIALECT;
const dbPort = process.env.BACK_CATALOG_DB_PORT;
const server = new Server(app);
const { sequelize, migrate } = storage;

server.listen(serverPort, (err) => {
  if (!err) {
    logger.info(`Server listening on port ${serverPort}`);
  }
});
server.on("error", (err) => {
  logger.error("Error in server:");
  logger.error(err);
});
server.on("close", () => {
  logger.info("Stopped server");
});

sequelize
  .authenticate()
  .then(() => {
    logger.info(`Connected to ${dbDialect} database ${dbDialect === "sqlite" ? "" : `on port ${dbPort}`}`);
    migrate();
  })
  .catch((err) => {
    logger.error("Error in database");
    logger.error(err);
  });

process.on("SIGINT", () => {
  server.close();
  sequelize.close();
});
