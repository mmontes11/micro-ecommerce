import Umzug from "umzug";
import path from "path";
import sequelize from "./sequelize";
import logger from "../../helpers/log";

const umzug = new Umzug({
  storage: "sequelize",
  storageOptions: {
    sequelize,
  },
  migrations: {
    params: [sequelize.getQueryInterface(), sequelize.constructor],
    path: path.resolve(__dirname, "migrations"),
    pattern: /^\d+[\w-]+\.js$/,
  },
  logging: msg => logger.info(msg),
});

const logUmzugEvent = eventName => name => logger.info(`${name} ${eventName}`);

const events = ["migrating", "migrated", "reverting", "reverted"];
events.forEach(e => umzug.on(e, logUmzugEvent(e)));

export default umzug;
