const winston = require("winston");
const path = require("path");

const { createLogger: createWinstonLogger, format, transports } = winston;

const createLogger = (filename) => createWinstonLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(info => `${info.timestamp} - ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.resolve(__dirname, `../../${filename}`)
    }),
  ],
});

module.exports = createLogger;