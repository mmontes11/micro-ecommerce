import Sequelize from "sequelize";
import fs from "fs";
import sequelize from "./sequelize";
import umzug from "./umzug";

let importedModels = {};

fs.readdirSync(`${__dirname}/models`)
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    const [modelName] = file.split(".");
    const createModel = require(`./models/${modelName}`);
    const model = createModel(sequelize, Sequelize);
    importedModels = {
      ...importedModels,
      [modelName]: model,
    };
  });

const models = importedModels;

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
