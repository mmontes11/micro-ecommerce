import Sequelize from "sequelize";
import sequelize from "./sequelize";
import umzug from "./umzug";
import createCatalog from "./models/catalog";
import createCategory from "./models/category";
import createProduct from "./models/product";

const Catalog = createCatalog(sequelize, Sequelize);
const Category = createCategory(sequelize, Sequelize);
const Product = createProduct(sequelize, Sequelize);

const models = { Catalog, Category, Product };

Object.keys(models).forEach(key => {
  const model = models[key];
  if (model.associate) {
    model.associate(models);
  }
});

const migrate = () => umzug.up();
const reset = () => umzug.down({ to: 0 });

export { models, migrate, reset };

export default sequelize;
