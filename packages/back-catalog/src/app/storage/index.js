import Sequelize from "sequelize";
import logger from "helpers/log";

const sequelize = new Sequelize(
  process.env.BACK_CATALOG_DB_NAME,
  process.env.BACK_CATALOG_DB_USER,
  process.env.BACK_CATALOG_DB_PASSWORD,
  {
    host: process.env.BACK_CATALOG_DB_HOST,
    port: process.env.BACK_CATALOG_DB_PORT,
    dialect: "mariadb",
    logging: msg => logger.info(msg),
  },
);

export default sequelize;
