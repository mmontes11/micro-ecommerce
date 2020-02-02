const dotenv = require("dotenv");
const path = require("path");
const { isDefined, mapObjectValues } = require("./data");

let config = {};
const dotenvConfig = dotenv.config({ path: path.resolve(__dirname, "../../.env") });

if (isDefined(dotenvConfig) && isDefined(dotenvConfig.parsed)) {
  const shouldMap = value => typeof value !== "object";
  const mapFn = value => JSON.stringify(value);
  const stringifiedConfig = mapObjectValues(dotenvConfig.parsed, shouldMap, mapFn);
  config = stringifiedConfig;
}

module.exports = config;
