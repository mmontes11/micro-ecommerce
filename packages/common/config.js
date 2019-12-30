const dotenv = require("dotenv");
const path = require("path");

let config;

if (process.env.NODE_ENV === "development") {
  config = dotenv.config({ path: path.resolve(__dirname, "../../.env.dev") });
}
if (process.env.NODE_ENV === "production") {
  config = dotenv.config({ path: path.resolve(__dirname, "../../.env") });
}

if (!config) {
  throw new Error(`Error reading configuration. NODE_ENV = ${process.env.NODE_ENV}`);
}

const { error, parsed } = config;

if (error) {
  throw error;
}

const stringifiedConfig = Object.keys(parsed).reduce(
  (acc, key) => ({ ...acc, [key]: JSON.stringify(parsed[key]) }),
  {},
);

module.exports = stringifiedConfig;
