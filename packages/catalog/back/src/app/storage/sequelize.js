import Sequelize from "sequelize";
import logger from "../../helpers/log";

let opts = {
  dialect: process.env.BACK_CATALOG_DB_DIALECT,
  logging: (msg) => logger.info(msg),
  define: {
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    charset: "utf8",
  },
};

switch (opts.dialect) {
  case "mariadb": {
    opts = {
      ...opts,
      host: process.env.BACK_CATALOG_DB_HOST,
      port: process.env.BACK_CATALOG_DB_PORT,
    };
    break;
  }
  case "sqlite": {
    opts = {
      ...opts,
      storage: process.env.BACK_CATALOG_DB_STORAGE,
    };
    break;
  }
  default: {
    throw new Error(`Invalid database dialect: '${opts.dialect}'`);
  }
}

const sequelize = new Sequelize(
  process.env.BACK_CATALOG_DB_NAME,
  process.env.BACK_CATALOG_DB_USER,
  process.env.BACK_CATALOG_DB_PASSWORD,
  opts,
);

export default sequelize;
