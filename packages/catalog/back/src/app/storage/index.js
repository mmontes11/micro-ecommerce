import Sequelize from "sequelize";
import sequelize from "./sequelize";
import umzug from "./umzug";
import createCatalog from "./models/catalog";

const Catalog = createCatalog(sequelize, Sequelize);

const models = { Catalog };

const migrate = () => umzug.up();
const reset = () => umzug.down({ to: 0 });

export { models, migrate, reset };

export default sequelize;
